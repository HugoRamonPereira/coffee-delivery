import { Bank, CreditCard, Money, WarningCircle } from 'phosphor-react';
import { PaymentInput } from '../payment-input';
import * as S from './styles';
import { useFormContext } from 'react-hook-form';

export const paymentOptions = {
  credit: {
    title: 'Cartão de crédito',
    icon: <CreditCard size={16} />
  },
  debit: {
    title: 'Cartão de débito',
    icon: <Bank size={16} />
  },
  cash: {
    title: 'Dinheiro',
    icon: <Money size={16} />
  }
};

export function PaymentOptions() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const paymentMethodError = errors.paymentMethod?.message as string;

  return (
    <S.PaymentOptionsContainer>
      {Object.entries(paymentOptions).map(([key, { title, icon }]) => (
        <PaymentInput
          key={title}
          id={key}
          icon={icon}
          title={title}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && (
        <small>
          <WarningCircle size={12} /> {paymentMethodError}
        </small>
      )}
    </S.PaymentOptionsContainer>
  );
}
