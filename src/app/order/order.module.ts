import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page';
import { OrderPageRoutingModule } from './order-routing.module.ts';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OrderPageRoutingModule,
    RouterModule.forChild([{ path: '', component: OrderPage }])
  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
