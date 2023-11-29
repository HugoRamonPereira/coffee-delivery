import { Button } from '../../../../components/buttons/button';
import { useCart } from '../../../../hooks/useCart';
import { formatCurrency } from '../../../../utils/formatCurrency';
import * as S from './styles';

export function TotalSection() {
  const { cartItemsTotal, cartAmmount } = useCart();
  const deliveryFee = 3.5;
  const cartItemsTotalSum = cartItemsTotal + deliveryFee;

  const formattedTotalItemsSum = formatCurrency(cartItemsTotal);
  const formattedDeliveryFee = formatCurrency(deliveryFee);
  const formattedTotalCartSum = formatCurrency(cartItemsTotalSum);

  return (
    <S.TotalSectionContainer>
      <S.TotalItem>
        <small>Total de items</small>
        <p>{formattedTotalItemsSum}</p>
      </S.TotalItem>
      <S.TotalItem>
        <small>Entrega</small>
        <p>R$ {formattedDeliveryFee}</p>
      </S.TotalItem>
      <S.TotalSum>
        <p>Total</p>
        <p>R$ {formattedTotalCartSum}</p>
      </S.TotalSum>
      <Button disabled={cartAmmount <= 0} type='submit' />
    </S.TotalSectionContainer>
  );
}
