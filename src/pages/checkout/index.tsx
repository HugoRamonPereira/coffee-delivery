import { CompleteOrder } from './components/complete-order';
import { ConfirmOrder } from './components/confirm-order';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './styles';
import { FormProvider, useForm } from 'react-hook-form';

enum PaymentOptions {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const checkoutFormSchema = z.object({
  cep: z.string().min(1, 'CEP inválido'),
  street: z.string().min(1, 'Rua inválida'),
  number: z.string().min(1, 'Número inválido'),
  complement: z.string().min(1, 'Complemento inválido'),
  neighborhood: z.string().min(1, 'Bairro inválido'),
  city: z.string().min(1, 'Cidade inválida'),
  uf: z.string().min(1, 'UF inválida'),
  paymentMethod: z.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: 'Pagamento inválido' };
    }
  })
});

export type CheckoutData = z.infer<typeof checkoutFormSchema>;

type CheckoutDataProps = CheckoutData;

export function Checkout() {
  const checkoutForm = useForm<CheckoutDataProps>({
    resolver: zodResolver(checkoutFormSchema)
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmCheckout(data: CheckoutDataProps) {
    console.log(data);
  }

  return (
    <FormProvider {...checkoutForm}>
      <S.CheckoutContainer
        className='contentContainer'
        onSubmit={handleSubmit(handleConfirmCheckout)}
      >
        <CompleteOrder />
        <ConfirmOrder />
      </S.CheckoutContainer>
    </FormProvider>
  );
}
