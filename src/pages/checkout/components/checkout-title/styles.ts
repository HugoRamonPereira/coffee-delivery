import styled from 'styled-components';

export const CheckoutTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-family: 'RobotoRegular';

  p {
    color: red;
    font-size: ${(props) => props.theme.font.textRegularM};
    color: ${(props) => props.theme.colors.base.baseSubtitle};
  }

  small {
    color: blue;
    font-size: ${(props) => props.theme.font.textRegularS};
    color: ${(props) => props.theme.colors.base.baseText};
  }
`;
