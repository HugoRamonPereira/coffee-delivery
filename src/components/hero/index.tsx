import HeroCoffee from '../../assets/images/hero-coffee.svg';
import * as S from './styles';
import { Perks } from '../perks';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Hero() {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ContentContainer className='contentContainer'>
        <div>
          <S.TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.TextContainer>

          <S.CoffeeInfoContainer>
            <Perks
              icon={<ShoppingCart weight='fill' />}
              text='Compre simples e segura'
              iconBackground={colors.product.yellowDark}
            />
            <Perks
              icon={<Package weight='fill' />}
              text='Embalagem mantem o café intacto'
              iconBackground={colors.base.baseText}
            />
            <Perks
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada'
              iconBackground={colors.product.yellow}
            />
            <Perks
              icon={<Coffee weight='fill' />}
              text='O café chega fresquinho até você'
              iconBackground={colors.product.purple}
            />
          </S.CoffeeInfoContainer>
        </div>

        <div>
          <img src={HeroCoffee} alt='' />
        </div>
      </S.ContentContainer>
    </S.Container>
  );
}
