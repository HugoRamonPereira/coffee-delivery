import * as S from './styles';
import CoffeeExample from '../../../../../public/coffee-list/americano.png';
import { ButtonGroup } from '../../../../components/buttons/button-group';
import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function SelectedCoffee() {
  const { colors } = useTheme();

  return (
    <S.CoffeeContainer>
      <div>
        <img src={CoffeeExample} alt='coffee' />
        <S.ActionsContainer>
          <p>Expresso Tradicional</p>
          <S.BtnContainer>
            <div>
              <ButtonGroup />
            </div>
            <S.RemoveBtn>
              <Trash size={16} color={colors.product.purple} />
              Remover
            </S.RemoveBtn>
          </S.BtnContainer>
        </S.ActionsContainer>
      </div>
      <p>R$ 9.90</p>
    </S.CoffeeContainer>
  );
}
