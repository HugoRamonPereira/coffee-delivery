import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Coffee } from '../components/coffee-card';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartAmmount: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeSelectedCoffeesQuantity: (
    cartItemId: number,
    action: 'add' | 'subtract'
  ) => void;
  deleteCoffeeFromCart: (coffeeId: number) => void;
  emptyCart: () => void;
}

interface CartContextProviderProps extends PropsWithChildren {}

const COFFEE_ORDER_LOCALSTORAGE_KEY = 'coffeeOrderItems';

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  // To be able to load the products from storage when the page first loads
  // We passed in the cartItems which is the state that holds the items a callback fn
  // as the parameter instead of an empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCoffeeItems = localStorage.getItem(
      COFFEE_ORDER_LOCALSTORAGE_KEY
    );
    if (storedCoffeeItems) {
      return JSON.parse(storedCoffeeItems);
    }
    return [];
  });
  const cartAmmount = cartItems.length;
  const cartItemsTotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const existingCoffeeInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, draft => {
      if (existingCoffeeInCart < 0) {
        draft.push(coffee);
      } else {
        draft[existingCoffeeInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeSelectedCoffeesQuantity(
    cartItemId: number,
    action: 'add' | 'subtract'
  ) {
    const newCart = produce(cartItems, draft => {
      const existingCoffeeInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      if (existingCoffeeInCart >= 0) {
        const coffeeItem = draft[existingCoffeeInCart];
        draft[existingCoffeeInCart].quantity =
          action === 'add' ? coffeeItem.quantity + 1 : coffeeItem.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function deleteCoffeeFromCart(coffeeId: number) {
    // cartItems.filter((cartItem) => cartItem.id !== coffeeId);
    const newCart = produce(cartItems, draft => {
      const existingCoffeeInCart = cartItems.findIndex(
        cartItem => cartItem.id === coffeeId
      );

      if (existingCoffeeInCart >= 0) {
        draft.splice(existingCoffeeInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function emptyCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(
      COFFEE_ORDER_LOCALSTORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartAmmount,
        cartItemsTotal,
        addCoffeeToCart,
        changeSelectedCoffeesQuantity,
        deleteCoffeeFromCart,
        emptyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
