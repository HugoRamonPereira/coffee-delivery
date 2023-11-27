import styled from 'styled-components';
import { CheckoutContainerBaseStyle } from '../../styles';

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 640px;

  h3 {
    font-family: 'BalooBold';
    font-size: ${(props) => props.theme.font.titleXs};
    line-height: 2cap;
    color: ${(props) => props.theme.colors.base.baseTitle};
  }
`;

export const FormOrderContainer = styled(CheckoutContainerBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
