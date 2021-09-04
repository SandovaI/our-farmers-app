import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartPage } from './cart.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CartPageRoutingModule } from './cart-routing.module.ts';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CartPageRoutingModule,
    RouterModule.forChild([{ path: '', component: CartPage }])
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
