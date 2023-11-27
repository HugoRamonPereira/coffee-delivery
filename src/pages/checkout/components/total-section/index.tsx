import { Button } from '../../../../components/buttons/button';
import * as S from './styles';

export function TotalSection() {
  return (
    <S.TotalSectionContainer>
      <S.TotalItem>
        <small>Total de items</small>
        <p>R$ 9.90</p>
      </S.TotalItem>
      <S.TotalItem>
        <small>Entrega</small>
        <p>R$ 9.90</p>
      </S.TotalItem>
      <S.TotalSum>
        <p>Total</p>
        <p>R$ 33.50</p>
      </S.TotalSum>
      <Button />
    </S.TotalSectionContainer>
  );
}
