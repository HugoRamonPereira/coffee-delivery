import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.div`
  h1 {
    font-family: 'BalooExtraBold';
    color: ${(props) => props.theme.colors.base.baseSubtitle};
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;
