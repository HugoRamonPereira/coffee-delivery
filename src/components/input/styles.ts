import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  > small {
    display: flex;
    align-items: center;
    gap: 3px;
    font-family: 'RobotoRegular';
    font-size: ${({ theme }) => theme.font.tag};
    color: ${({ theme }) => theme.colors.base.error};
    letter-spacing: 0.05cap;
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.base.baseButton};
  background: ${({ theme }) => theme.colors.base.baseInput};
  transition: 0.4s;

  ${({ hasError }) =>
    !hasError &&
    css`
      &:focus-within {
        border-color: ${({ theme }) => theme.colors.product.yellowDark};
      }
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.base.error};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.base.baseText};
  font-size: 12px;
  padding-inline: 12px;
  font-family: 'RobotoRegular';
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.baseLabel};
  }
`;

export const EndText = styled.p`
  font-size: ${({ theme }) => theme.font.tag};
  font-style: italic;
  margin-right: 0.75rem;
  color: ${({ theme }) => theme.colors.base.baseLabel};
  font-family: 'RobotoRegular';
`;
