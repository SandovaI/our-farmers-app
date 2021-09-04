import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('../payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'order',
    loadChildren: () =>
      import('../order/order.module').then(m => m.OrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule {}
