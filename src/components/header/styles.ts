import styled from 'styled-components';

export const AppHeader = styled.header`
  width: 100%;
  max-width: 1120px;
  height: 80px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationButton = styled.button`
  padding: 10px 8px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 8px;
  background: ${(props) => props.theme.colors.product.purpleLight};
  font-family: 'RobotoRegular';
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.product.purpleDark};
`;
