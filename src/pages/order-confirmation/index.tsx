import * as S from './styles';
import orderDelivery from '../../assets/images/order-delivery.svg';
import { Perks } from '../../components/perks';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckoutData } from '../checkout';
import { paymentOptions } from '../checkout/components/payment-options';
import { useEffect } from 'react';

// We chose the interface we declared in the Checkout component
// This interface contains all the types for each property in the cart
interface LocationDataType {
  state: CheckoutData;
}

export function OrderConfirmation() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  //We associate the interface here below
  const { state } = useLocation() as LocationDataType;

  //Added this useEffect because if we close the window and reopen we don't have the data
  //So the application breaks, we need to validate this scenario
  //Then if we don't have the state, we have to go to the home page
  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  });

  //Return this empty tag during the redirect to home page process
  if (!state) return <></>;

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
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
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
                <strong>{paymentOptions[state.paymentMethod].title}</strong>
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
