import styled from 'styled-components';

export const MainButton = styled.button``;

export const MinusButton = styled.button`
  background: ${(props) => props.theme.colors.base.baseButton};
  border: none;
  padding: 10px 8px;
`;

export const ButtonValue = styled.span`
  background: ${(props) => props.theme.colors.base.baseButton};
  padding: 8px;
`;

export const PlusButton = styled.button`
  background: ${(props) => props.theme.colors.base.baseButton};
  border: none;
  padding: 10px 8px;
`;
