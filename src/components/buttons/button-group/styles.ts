import styled from 'styled-components';

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.base.baseButton};
  gap: 6px;
  border-radius: 6px;
  padding: 0.7rem;

  input {
    background: none;
    width: 100%;
    text-align: center;
    border: none;
    color: ${(props) => props.theme.colors.base.baseTitle};
    font-family: 'RobotoRegular';

    &:focus {
      outline: none;
    }
  }
`;

export const MainButton = styled.button.attrs({
  type: 'button'
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.product.purple};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors.product.purpleDark};
  }
`;

export const MinusButton = styled.button`
  border: none;
  padding: 10px 8px;
`;

export const PlusButton = styled.button`
  border: none;
  padding: 10px 8px;
`;

export const AddToCartContainer = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.product.purpleDark};
    color: ${(props) => props.theme.colors.base.baseCard};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme.colors.product.purple};
    }
  }
`;
