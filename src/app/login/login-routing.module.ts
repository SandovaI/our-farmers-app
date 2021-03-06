import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tab2',
    loadChildren: () =>
      import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('../seller/seller.module').then(m => m.SellerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
