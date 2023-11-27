import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.product.yellow};
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors.base.white};
  font-family: 'RobotoRegular';
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.buttonL};
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  line-height: 1.3rem;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.product.yellowDark};
  }
`;
