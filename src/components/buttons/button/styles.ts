import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  background: ${(props) => props.theme.colors.product.purple};
  color: ${(props) => props.theme.colors.product.yellowLight};
`;
