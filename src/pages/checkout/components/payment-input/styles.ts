import styled from 'styled-components';

export const PaymentInputContainer = styled.div`
  padding-inline: 1rem;
  background: ${({ theme }) => theme.colors.base.baseButton};
  color: ${({ theme }) => theme.colors.base.baseText};
  font-family: 'RobotoRegular';
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.base.baseButton};
  transition: 0.3s;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors.base.baseHover};
  }

  svg {
    color: ${({ theme }) => theme.colors.product.purple};
  }
`;
