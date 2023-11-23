import { CoffeeCard } from '../coffee-card';
import * as S from './styles';

export function CoffeeMenu() {
  return (
    <S.CoffeeCardContainer>
      <S.Title>
        <h1>Nossos Cafés</h1>
      </S.Title>

      <S.CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </S.CoffeeList>
    </S.CoffeeCardContainer>
  );
}
