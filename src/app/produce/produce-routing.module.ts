import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducePage } from './produce.page';

const routes: Routes = [
  {
    path: '',
    component: ProducePage
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
export class ProducePageRoutingModule {}
