import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme.colors.base.baseCard};
  border-top-left-radius: 5px;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 2.5rem;
`;

export const CoffeeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-15%);
`;

export const BadgeContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  gap: 6px;
`;

export const CoffeeBadge = styled.span`
  font-family: 'RobotoBold';
  font-size: ${(props) => props.theme.font.tag};
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.product.yellowLight};
  color: ${(props) => props.theme.colors.product.yellowDark};
  margin-inline: auto;
  transform: translateY(-5px);
`;

export const CoffeeInfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  width: 90%;
  margin-inline: auto;

  h3 {
    font-family: 'BalooBold';
    color: ${(props) => props.theme.colors.base.baseSubtitle};
  }

  p {
    font-family: 'RobotoRegular';
    text-align: center;
    color: ${(props) => props.theme.colors.base.baseLabel};
    font-size: ${(props) => props.theme.font.textRegularS};
  }
`;

export const CoffeeActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  p {
    font-family: 'RobotoRegular';
    font-size: ${(props) => props.theme.font.textRegularS};
    color: ${(props) => props.theme.colors.base.baseText};

    span {
      font-family: 'BalooBold';
      font-size: ${(props) => props.theme.font.textRegularL};
    }
  }
`;
