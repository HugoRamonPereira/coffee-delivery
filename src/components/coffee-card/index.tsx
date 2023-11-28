import * as S from './styles';
import { ButtonGroup } from '../buttons/button-group';
import { AddToCartContainer } from '../buttons/button-group/styles';
import { ShoppingCart } from 'phosphor-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';

interface CoffeeProps {
  coffee: Coffee;
}

export interface Coffee {
  id: number;
  title: string;
  description: string;
  type: string[];
  price: number;
  image: string;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrementCoffee() {
    setQuantity((oldState) => oldState + 1);
  }

  function handleDecrementCoffee() {
    setQuantity((oldState) => oldState - 1);
  }

  const { addCoffeeToCart } = useCart();

  const formattedValue = formatCurrency(coffee.price);

  function handleAddToCart() {
    const coffeeToBeAdded = {
      ...coffee,
      quantity
    };
    addCoffeeToCart(coffeeToBeAdded);
  }

  return (
    <S.Container>
      <S.CoffeeImageContainer>
        <img src={`/coffee-list/${coffee.image}`} alt='' />
      </S.CoffeeImageContainer>
      <S.BadgeContainer>
        {coffee.type.map((badge) => (
          <S.CoffeeBadge key={`${coffee.id}${badge}`}>{badge}</S.CoffeeBadge>
        ))}
      </S.BadgeContainer>

      <S.CoffeeInfoCard>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </S.CoffeeInfoCard>

      <S.CoffeeActionsContainer>
        <div>
          <p>
            R$ <span>{formattedValue}</span>
          </p>
        </div>

        <AddToCartContainer>
          <ButtonGroup
            onIncrement={handleIncrementCoffee}
            onDecrement={handleDecrementCoffee}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddToCartContainer>
      </S.CoffeeActionsContainer>
    </S.Container>
  );
}
