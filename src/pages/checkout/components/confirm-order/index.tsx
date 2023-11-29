import { useCart } from '../../../../hooks/useCart';
import { SelectedCoffee } from '../selected-coffees';
import { TotalSection } from '../total-section';
import * as S from './styles';

export function ConfirmOrder() {
  const { cartItems } = useCart();

  return (
    <S.ConfirmContainer>
      <h3>Cafés selecionados</h3>

      <S.DetailsContainer>
        {cartItems.map((cartItem) => (
          <SelectedCoffee key={cartItem.id} coffee={cartItem} />
        ))}

        <TotalSection />
      </S.DetailsContainer>
    </S.ConfirmContainer>
  );
}
