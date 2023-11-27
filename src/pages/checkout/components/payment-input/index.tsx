import * as S from './styles';
import { CreditCard } from 'phosphor-react';

export function PaymentInput() {
  return (
    <S.PaymentInputContainer>
      <CreditCard size={16} />
      Credit Card
    </S.PaymentInputContainer>
  );
}
