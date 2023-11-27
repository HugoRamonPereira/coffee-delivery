import { CompleteOrder } from './components/complete-order';
import { ConfirmOrder } from './components/confirm-order';

import * as S from './styles';

export function Checkout() {
  return (
    <S.CheckoutContainer className='contentContainer'>
      <CompleteOrder />
      <ConfirmOrder />
    </S.CheckoutContainer>
  );
}
