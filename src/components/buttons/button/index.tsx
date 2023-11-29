import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...props }: ButtonProps) {
  return <S.ButtonContainer {...props}>Confirmar Pedido</S.ButtonContainer>;
}
