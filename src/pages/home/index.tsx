import { CoffeeMenu } from '../../components/coffee-menu';
import { Header } from '../../components/header';
import { Hero } from '../../components/hero';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CoffeeMenu />
    </>
  );
}
