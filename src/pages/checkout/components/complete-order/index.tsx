import { useTheme } from 'styled-components';
import { CheckoutTitle } from '../checkout-title';
import * as S from './styles';
import { MapPinLine, CurrencyDollar } from 'phosphor-react';
import { AddressOrder } from '../address-order';
import { PaymentOptions } from '../payment-options';

export function CompleteOrder() {
  const { colors } = useTheme();

  return (
    <S.CompleteOrderContainer>
      <h3>Complete seu pedido</h3>

      <S.FormOrderContainer>
        <CheckoutTitle
          icon={<MapPinLine size={22} color={colors.product.yellowDark} />}
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
        />
        <AddressOrder />
      </S.FormOrderContainer>
      <S.FormOrderContainer>
        <CheckoutTitle
          icon={<CurrencyDollar size={22} color={colors.product.purple} />}
          title='Pagamento'
          subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        />
        <PaymentOptions />
      </S.FormOrderContainer>
    </S.CompleteOrderContainer>
  );
}
