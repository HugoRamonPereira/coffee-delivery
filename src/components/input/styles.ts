import styled from 'styled-components';

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  color: ${({ theme }) => theme.colors.base.baseText};
  font-family: 'RobotoRegular';
  font-size: 12px;
  padding-inline: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.base.baseButton};
  background: ${({ theme }) => theme.colors.base.baseInput};
  transition: 0.4s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.baseLabel};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.product.yellowDark};
  }
`;
