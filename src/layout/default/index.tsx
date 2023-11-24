import { Outlet } from 'react-router-dom';
import * as S from './styles';
import { Header } from '../../components/header';

export function MainLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
