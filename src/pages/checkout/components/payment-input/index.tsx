import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import * as S from './styles';

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  icon: ReactNode;
};

// This component when is registered in React-Hook-Form will trigger an error
// Saying that components cannot be given refs, to be used forwardRef

// export function PaymentInput({ id, title, icon, ...props }: PaymentInputProps) {
//   return (
//     <S.PaymentInputContainer>
//       <input id={id} type='radio' name='paymentInput' {...props} />
//       <label htmlFor={id}>
//         <S.PaymentInputContent>
//           {icon}
//           {title}
//         </S.PaymentInputContent>
//       </label>
//     </S.PaymentInputContainer>
//   );
// }

// First it needs to be an arrow function, it cannot be using the function keyword
// We use generics with forwardRef to pass 1st what kind of element this component is
// Then the types (interface or type)
// As arguments we pass props and ref and return the JSX from the component above
export const PaymentInput = forwardRef<HTMLInputElement, PaymentInputProps>(
  ({ id, title, icon, ...props }, ref) => {
    return (
      <S.PaymentInputContainer>
        <input id={id} type='radio' name='paymentMethod' {...props} ref={ref} />
        <label htmlFor={id}>
          <S.PaymentInputContent>
            {icon}
            {title}
          </S.PaymentInputContent>
        </label>
      </S.PaymentInputContainer>
    );
  }
);
