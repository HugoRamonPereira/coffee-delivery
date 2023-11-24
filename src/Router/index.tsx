import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { CompleteOrder } from '../pages/complete-order';
import { Checkout } from '../pages/checkout';
import { MainLayout } from '../layout/default';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/completeOrder' element={<CompleteOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
