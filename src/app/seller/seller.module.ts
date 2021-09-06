import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerPage } from './seller.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SellerPageRoutingModule } from './seller-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SellerPageRoutingModule
  ],
  declarations: [SellerPage]
})
export class SellerPageModule {}
