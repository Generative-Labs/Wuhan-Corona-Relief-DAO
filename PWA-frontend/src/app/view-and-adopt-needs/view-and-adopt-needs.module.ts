import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAndAdoptNeedsPageRoutingModule } from './view-and-adopt-needs-routing.module';

import { ViewAndAdoptNeedsPage } from './view-and-adopt-needs.page';
import { NeedsSpecificsModalComponentModule } from '../needs-specifics-modal/needs-specifics-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAndAdoptNeedsPageRoutingModule,
    NeedsSpecificsModalComponentModule
  ],
  declarations: [ViewAndAdoptNeedsPage]
})
export class ViewAndAdoptNeedsPageModule {}
