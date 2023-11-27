import { SelectedCoffee } from '../selected-coffees';
import { TotalSection } from '../total-section';
import * as S from './styles';

export function ConfirmOrder() {
  return (
    <S.ConfirmContainer>
      <h3>Cafés selecionados</h3>

      <S.DetailsContainer>
        <SelectedCoffee />
        <SelectedCoffee />
        <SelectedCoffee />

        <TotalSection />
      </S.DetailsContainer>
    </S.ConfirmContainer>
  );
}
