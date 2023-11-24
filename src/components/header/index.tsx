import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import * as S from './styles';

export function Header() {
  return (
    <S.AppHeader>
      <S.InnerHeader className='contentContainer'>
        <div>
          <img src={Logo} alt='coffee logo' />
        </div>
        <S.HeaderActions>
          <S.ActionButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </S.ActionButton>
          <S.ActionButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </S.ActionButton>
        </S.HeaderActions>
      </S.InnerHeader>
    </S.AppHeader>
  );
}
