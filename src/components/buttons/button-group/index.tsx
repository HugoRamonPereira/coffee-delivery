import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

interface ButtonGroupProps {
  onIncrement: () => void;
  onDecrement: () => void;
  quantity: number;
}

export function ButtonGroup({
  onIncrement,
  onDecrement,
  quantity
}: ButtonGroupProps) {
  return (
    <S.ButtonGroupContainer>
      <S.MainButton onClick={onDecrement} disabled={quantity <= 1}>
        <Minus size={14} weight='fill' />
      </S.MainButton>
      <input type='number' readOnly value={quantity} />
      <S.MainButton onClick={onIncrement}>
        <Plus size={14} weight='fill' />
      </S.MainButton>
    </S.ButtonGroupContainer>
  );
}
