import * as S from './styles';
import orderDelivery from '../../assets/images/order-delivery.svg';
import { Perks } from '../../components/perks';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function OrderConfirmation() {
  const { colors } = useTheme();

  return (
    <S.OrderConfirmationContainer className='contentContainer'>
      <div>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <S.OrderInfoContainer>
          <Perks
            icon={<MapPin weight='fill' />}
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
            iconBackground={colors.product.purple}
          />
          <Perks
            icon={<Clock weight='fill' />}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
            iconBackground={colors.product.yellow}
          />
          <Perks
            icon={<CurrencyDollar weight='fill' />}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </p>
            }
            iconBackground={colors.product.yellowDark}
          />
        </S.OrderInfoContainer>
        <img src={orderDelivery} alt='delivery boy riding a scooter' />
      </section>
    </S.OrderConfirmationContainer>
  );
}
