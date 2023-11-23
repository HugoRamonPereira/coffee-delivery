import * as S from './styles';
import { PropsWithChildren } from 'react';

interface CartButtonProps extends PropsWithChildren {}

export function CartButton({ children }: CartButtonProps) {
  return <S.CartButton>{children}</S.CartButton>;
}
