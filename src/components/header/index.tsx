import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cartAmmount } = useCart();

  return (
    <S.AppHeader>
      <S.InnerHeader className='contentContainer'>
        <NavLink to='/'>
          <div>
            <img src={Logo} alt='coffee logo' />
          </div>
        </NavLink>
        <S.HeaderActions>
          <S.ActionButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </S.ActionButton>
          <NavLink to='/checkout'>
            <S.ActionButton variant='yellow'>
              {cartAmmount >= 1 && (
                <S.QuantityBadge>{cartAmmount}</S.QuantityBadge>
              )}
              <ShoppingCart size={20} weight='fill' />
            </S.ActionButton>
          </NavLink>
        </S.HeaderActions>
      </S.InnerHeader>
    </S.AppHeader>
  );
}
