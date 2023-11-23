import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-right: 1rem;
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'BalooBold';
    font-size: ${(props) => props.theme.font.sizes.xxlarge};
    line-height: 2cap;
    color: ${(props) => props.theme.colors.base.baseTitle};
  }

  p {
    font-family: 'RobotoRegular';
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.base.baseSubtitle};
    width: 90%;
  }
`;

export const CoffeeInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CoffeeInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-family: 'RobotoRegular';
    color: ${(props) => props.theme.colors.base.baseText};
  }
`;

export const CoffeeItemsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CoffeeItemsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
