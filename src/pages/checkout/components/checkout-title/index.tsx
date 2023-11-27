import { ReactNode } from 'react';
import * as S from './styles';

interface CheckoutTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function CheckoutTitle({ title, subtitle, icon }: CheckoutTitleProps) {
  return (
    <S.CheckoutTitleContainer>
      {icon}
      <div>
        <p>{title}</p>
        <small>{subtitle}</small>
      </div>
    </S.CheckoutTitleContainer>
  );
}
