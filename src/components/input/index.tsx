import { InputHTMLAttributes, forwardRef } from 'react';
import { WarningCircle } from 'phosphor-react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  endText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, endText, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.InputStyleContainer hasError={!!error}>
          <S.InputStyled {...props} ref={ref} />
          {endText && <S.EndText>{endText}</S.EndText>}
        </S.InputStyleContainer>
        {error && (
          <small>
            <WarningCircle size={12} /> {error}
          </small>
        )}
      </S.InputWrapper>
    );
  }
);
