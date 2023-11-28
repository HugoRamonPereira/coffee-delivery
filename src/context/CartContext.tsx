import { PropsWithChildren, createContext, useState } from 'react';
import { Coffee } from '../components/coffee-card';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartQuantityBadge: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps extends PropsWithChildren {}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantityBadge = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const existingCoffeeInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (existingCoffeeInCart < 0) {
        draft.push(coffee);
      } else {
        draft[existingCoffeeInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, cartQuantityBadge, addCoffeeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
