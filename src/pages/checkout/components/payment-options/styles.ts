import styled from 'styled-components';

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

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
