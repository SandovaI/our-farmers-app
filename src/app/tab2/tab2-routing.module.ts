import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeedsPage } from '../seeds/seeds.page';
import { ProfilePage } from '../profile/profile.page';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'vegetables',
    loadChildren: () =>
      import('../vegetables/vegetables.module').then(
        m => m.VegetablesPageModule
      )
  },

  {
    path: 'seeds',
    loadChildren: () =>
      import('../seeds/seeds.module').then(m => m.SeedsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile/profile.module').then(m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
