import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditPage } from './profileedit.page';
import { FruitsPage } from '../fruits/fruits.page';
import { SeedsPage } from '../seeds/seeds.page';
import { CartPage } from '..cart/cart.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditPage
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../cart/cart.module').then(m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEditPageRoutingModule {}
