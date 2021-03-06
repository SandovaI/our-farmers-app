import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerPage } from './seller.page';

const routes: Routes = [
  {
    path: '',
    component: SellerPage
  },
  {
    path: 'produce',
    loadChildren: () =>
      import('../produce/produce.module').then(m => m.ProducePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPageRoutingModule {}
