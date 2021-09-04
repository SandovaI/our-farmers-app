import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeedsPage } from './seeds.page';

const routes: Routes = [
  {
    path: '',
    component: SeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeedsPageRoutingModule {}
