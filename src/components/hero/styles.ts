import styled from 'styled-components';
import heroGradientBackground from '../../assets/images/hero-background.png';

export const Container = styled.section`
  width: 100%;
  height: 544px;
  background: ${() => `url(${heroGradientBackground}) no-repeat center`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'BalooBold';
    font-size: ${(props) => props.theme.font.titleXl};
    line-height: 2cap;
    color: ${(props) => props.theme.colors.base.baseTitle};
  }

  p {
    font-family: 'RobotoRegular';
    font-size: ${(props) => props.theme.font.textRegularM};
    color: ${(props) => props.theme.colors.base.baseSubtitle};
    width: 90%;
  }
`;

export const CoffeeInfoContainer = styled.div`
  font-family: 'RobotoRegular';
  font-size: ${({ theme }) => theme.font.textRegularS};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  margin-top: 4rem;
`;
