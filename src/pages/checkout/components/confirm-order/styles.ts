import styled from 'styled-components';
import { CheckoutContainerBaseStyle } from '../../styles';

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h3 {
    font-family: 'BalooBold';
    font-size: ${({ theme }) => theme.font.titleXs};
  }
`;

export const DetailsContainer = styled(CheckoutContainerBaseStyle)`
  display: flex;
  flex-direction: column;
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
`;
