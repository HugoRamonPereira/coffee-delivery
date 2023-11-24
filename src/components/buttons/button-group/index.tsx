import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

export function ButtonGroup() {
  return (
    <S.ButtonGroupContainer>
      <S.MainButton>
        <Minus size={14} weight='fill' />
      </S.MainButton>
      <input type='number' readOnly value={1} />
      <S.MainButton>
        <Plus size={14} weight='fill' />
      </S.MainButton>
    </S.ButtonGroupContainer>
  );
}
