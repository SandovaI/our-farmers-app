import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VegetablesPage } from './vegetables.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VegetablesPageRoutingModule } from './vegetables-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VegetablesPageRoutingModule
  ],
  declarations: [VegetablesPage]
})
export class VegetablesPageModule {}
