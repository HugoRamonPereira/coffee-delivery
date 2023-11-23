import styled from 'styled-components';

export const CartButton = styled.button`
  padding: 10px 8px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.product.yellowLight};
  color: ${(props) => props.theme.colors.product.yellowDark};
`;
