import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <S.InputStyleContainer {...props} />;
}
