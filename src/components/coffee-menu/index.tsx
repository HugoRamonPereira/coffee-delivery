import { coffeeList } from '../../data/coffee-list';
import { CoffeeCard } from '../coffee-card';
import * as S from './styles';

export function CoffeeMenu() {
  return (
    <S.CoffeeCardContainer className='contentContainer'>
      <S.Title>
        <h1>Nossos Cafés</h1>
      </S.Title>

      <S.CoffeeList>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeeList>
    </S.CoffeeCardContainer>
  );
}
