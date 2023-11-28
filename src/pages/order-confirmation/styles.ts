import styled from 'styled-components';

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > div {
    h3 {
      font-family: 'BalooBold';
      font-size: ${({ theme }) => theme.font.titleL};
      color: ${({ theme }) => theme.colors.product.yellowDark};
    }

    p {
      font-family: 'RobotoRegular';
      font-size: ${({ theme }) => theme.font.textRegularL};
      color: ${({ theme }) => theme.colors.base.baseSubtitle};
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderInfoContainer = styled.div`
  padding: 2.5rem;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 32rem;
  border: 1px solid ${({ theme }) => theme.colors.product.yellowDark};
`;
