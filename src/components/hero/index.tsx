import HeroCoffee from '../../assets/images/hero-coffee.svg';
import * as S from './styles';
import CartYellowDark from '../../assets/icons/cart-yellow-dark.svg';
import YellowClock from '../../assets/icons/clock-yellow.svg';
import GrayBox from '../../assets/icons/gray-box.svg';
import PurpleCoffee from '../../assets/icons/purple-coffee.svg';

export function Hero() {
  return (
    <S.Container>
      <S.InfoContainer>
        <S.TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </S.TextContainer>

        <S.CoffeeInfoContainer>
          <S.CoffeeItemsLeft>
            <S.CoffeeInfoItem>
              <div>
                <img src={CartYellowDark} alt='' />
              </div>
              <p>Compra simples e segura</p>
            </S.CoffeeInfoItem>

            <S.CoffeeInfoItem>
              <div>
                <img src={YellowClock} alt='' />
              </div>
              <p>Entrega rápida e rastreada</p>
            </S.CoffeeInfoItem>
          </S.CoffeeItemsLeft>

          <S.CoffeeItemsRight>
            <S.CoffeeInfoItem>
              <div>
                <img src={GrayBox} alt='' />
              </div>
              <p>Embalagem mantem o café intacto</p>
            </S.CoffeeInfoItem>
            <S.CoffeeInfoItem>
              <div>
                <img src={PurpleCoffee} alt='' />
              </div>
              <p>O café chega fresquinho até você</p>
            </S.CoffeeInfoItem>
          </S.CoffeeItemsRight>
        </S.CoffeeInfoContainer>
      </S.InfoContainer>

      <div>
        <img src={HeroCoffee} alt='' />
      </div>
    </S.Container>
  );
}
