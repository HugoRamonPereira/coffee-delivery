import * as S from './styles';
import Cart from '../../assets/icons/cart.svg';
import { ButtonGroup } from '../buttons/button-group';
import ExpressoTradicional from '../../assets/images/coffee-list/expresso-tradicional.svg';
import { CartButton } from '../buttons/cart-button';

export function CoffeeCard() {
  return (
    <S.Container>
      <S.CoffeeImageContainer>
        <img src={ExpressoTradicional} alt='' />
      </S.CoffeeImageContainer>
      <S.BadgeContainer>
        <S.CoffeeBadge>Tradicional</S.CoffeeBadge>
      </S.BadgeContainer>

      <S.CoffeeInfoCard>
        <h3>Café com Leite</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </S.CoffeeInfoCard>

      <S.CoffeeActionsContainer>
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <ButtonGroup />
          <CartButton>
            <img src={Cart} alt='cart icon' />
          </CartButton>
        </div>
      </S.CoffeeActionsContainer>
    </S.Container>
  );
}
