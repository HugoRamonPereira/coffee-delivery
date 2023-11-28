import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { CompleteOrder } from '../pages/checkout/components/complete-order';
import { Checkout } from '../pages/checkout';
import { MainLayout } from '../layout/default';
import { OrderConfirmation } from '../pages/order-confirmation';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/completeOrder' element={<CompleteOrder />} />
          <Route path='/confirmedOrder' element={<OrderConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
