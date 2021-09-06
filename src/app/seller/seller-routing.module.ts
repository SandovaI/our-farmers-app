import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerPage } from './seller.page';

const routes: Routes = [
  {
    path: '',
    component: SellerPage
  },
  {
    path: 'tab2',
    loadChildren: () =>
      import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPageRoutingModule {}
