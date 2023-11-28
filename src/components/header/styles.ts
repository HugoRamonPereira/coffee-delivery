import styled, { css } from 'styled-components';

export const AppHeader = styled.header`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.base.baseGround};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface ActionButtonProps {
  variant: 'purple' | 'yellow';
}

export const ActionButton = styled.button<ActionButtonProps>`
  position: relative;
  padding: 10px 8px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 8px;
  font-family: 'RobotoRegular';
  border: none;
  border-radius: 8px;
  cursor: inherit;

  ${({ variant, theme }) => css`
    background: ${theme.colors.product[`${variant}Light`]};
    color: ${theme.colors.product[`${variant}Dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors.product[`${variant}`]};
      }
    `}
`;

export const QuantityBadge = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.product.yellowDark};
  color: ${({ theme }) => theme.colors.base.white};
  font-family: 'RobotoBold';
  font-size: ${({ theme }) => theme.font.tag};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
`;
