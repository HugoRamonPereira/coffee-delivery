import { PaymentInput } from '../payment-input';
import * as S from './styles';

export function PaymentOptions() {
  return (
    <S.PaymentOptionsContainer>
      <PaymentInput />
      <PaymentInput />
      <PaymentInput />
    </S.PaymentOptionsContainer>
  );
}
