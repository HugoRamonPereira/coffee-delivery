import { CompleteOrder } from './components/complete-order';
import { ConfirmOrder } from './components/confirm-order';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

enum PaymentOptions {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash'
}

const checkoutFormSchema = z.object({
  cep: z.string().refine(cep => /^\d{5}-\d{3}$/.test(cep), {
    message: 'CEP inválido, por favor use o formato XXXXX-XXX.'
  }),
  street: z.string().min(1, 'Rua inválida'),
  number: z.string().min(1, 'Número inválido'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Bairro inválido'),
  city: z.string().min(1, 'Cidade inválida'),
  uf: z.string().min(2, 'UF inválida'),
  paymentMethod: z.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: 'Pagamento inválido' };
    }
  })
});

export type CheckoutData = z.infer<typeof checkoutFormSchema>;

type CheckoutDataProps = CheckoutData;

export function Checkout() {
  const navigate = useNavigate();
  const { emptyCart } = useCart();
  const checkoutForm = useForm<CheckoutDataProps>({
    resolver: zodResolver(checkoutFormSchema)
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmCheckout(data: CheckoutDataProps) {
    // We are navigating and sending the data via state in an object as the 2nd argument of navigate
    // We need to have the data, the order data to show in the Order confirmation page
    navigate('/confirmedOrder', {
      state: data
    });
    // Empty the cart after navigating to the confirm order page
    emptyCart();
  }
  // To get the data in the route we passed and show it we destructure the state we passed from the useLocation() hook

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
