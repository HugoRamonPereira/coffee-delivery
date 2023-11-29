import * as S from './styles';
import { ButtonGroup } from '../../../../components/buttons/button-group';
import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CartItem } from '../../../../context/CartContext';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { useCart } from '../../../../hooks/useCart';

interface SelectedCoffeeProps {
  coffee: CartItem;
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { colors } = useTheme();
  const { changeSelectedCoffeesQuantity, deleteCoffeeFromCart } = useCart();
  const totalCoffeePrice = coffee.price * coffee.quantity;
  const formattedCoffeePrice = formatCurrency(totalCoffeePrice);

  function handleAdd() {
    changeSelectedCoffeesQuantity(coffee.id, 'add');
  }

  function handleSubtract() {
    changeSelectedCoffeesQuantity(coffee.id, 'subtract');
  }

  function handleDelete() {
    deleteCoffeeFromCart(coffee.id);
  }

  return (
    <S.CoffeeContainer>
      <div>
        <img src={`/coffee-list/${coffee.image}`} alt='coffee' />
        <S.ActionsContainer>
          <p>{coffee.title}</p>
          <S.BtnContainer>
            <div>
              <ButtonGroup
                quantity={coffee.quantity}
                onIncrement={handleAdd}
                onDecrement={handleSubtract}
              />
            </div>
            <S.RemoveBtn onClick={handleDelete}>
              <Trash size={16} color={colors.product.purple} />
              Remover
            </S.RemoveBtn>
          </S.BtnContainer>
        </S.ActionsContainer>
      </div>
      <p>R$ {formattedCoffeePrice}</p>
    </S.CoffeeContainer>
  );
}
