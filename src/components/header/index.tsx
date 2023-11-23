import Logo from '../../assets/logo.svg';
import LocationPin from '../../assets/icons/location-pin.svg';
import Cart from '../../assets/icons/cart.svg';

import * as S from './styles';
import { CartButton } from '../buttons/cart-button/styles';

export function Header() {
  return (
    <S.AppHeader>
      <div>
        <img src={Logo} alt='coffee logo' />
      </div>
      <S.HeaderActions>
        <S.LocationButton>
          <img src={LocationPin} alt='Location pin' />
          Porto Alegre, RS
        </S.LocationButton>
        <CartButton>
          <img src={Cart} alt='cart icon' />
        </CartButton>
      </S.HeaderActions>
    </S.AppHeader>
  );
}
