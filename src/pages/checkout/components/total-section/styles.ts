import styled from 'styled-components';

export const TotalSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TotalItem = styled.div`
  font-family: 'RobotoRegular';

  > small {
    font-size: ${({ theme }) => theme.font.textRegularS};
  }
`;

export const TotalSum = styled.div`
  color: ${({ theme }) => theme.colors.base.baseSubtitle};
  font-family: 'RobotoRegular';
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.titleS};
`;
