import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerProfilePage } from './sellerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SellerProfilePage
  },
  {
    path: 'edit',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerProfilePageRoutingModule {}
