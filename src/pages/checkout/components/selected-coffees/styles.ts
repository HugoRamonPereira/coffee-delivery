import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.baseButton};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-family: 'RobotoBold';
  }
`;

export const ActionsContainer = styled.div`
  > p {
    font-family: 'RobotoRegular';
    font-size: ${({ theme }) => theme.font.textRegularM};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 1rem;

  > div {
    width: 75px;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.base.baseText};
  font-family: 'RobotoRegular';
  font-size: 0.75rem;
  text-transform: uppercase;
  border: none;
  background: ${({ theme }) => theme.colors.base.baseButton};
  padding-inline: 0.5rem;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.base.baseHover};
  }
`;
