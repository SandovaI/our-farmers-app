import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentPage } from './payment.page';
import { PaymentPageRoutingModule } from './payment-routing.module.ts';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PaymentPageRoutingModule,
    RouterModule.forChild([{ path: '', component: PaymentPage }])
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
