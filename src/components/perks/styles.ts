import styled from 'styled-components';

export const PerksWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

interface PerksContainerProps {
  iconBg: string;
}

export const PerksContainer = styled.div<PerksContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconBg }) => iconBg};
  color: ${(props) => props.theme.colors.base.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
