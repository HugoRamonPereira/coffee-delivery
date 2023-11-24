import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
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
  margin-top: 2rem;

  /* width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3rem; */
`;
