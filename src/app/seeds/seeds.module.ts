import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeedsPage } from './seeds.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SeedsPageRoutingModule } from './seeds-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SeedsPageRoutingModule
  ],
  declarations: [SeedsPage]
})
export class SeedsPageModule {}
