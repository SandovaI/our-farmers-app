import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProducePage } from './produce.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProducePageRoutingModule } from './produce-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProducePageRoutingModule
  ],
  declarations: [ProducePage]
})
export class ProducePageModule {}
