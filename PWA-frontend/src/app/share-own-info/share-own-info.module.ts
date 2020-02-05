import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareOwnInfoPageRoutingModule } from './share-own-info-routing.module';

import { ShareOwnInfoPage } from './share-own-info.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShareOwnInfoPageRoutingModule
  ],
  declarations: [ShareOwnInfoPage]
})
export class ShareOwnInfoPageModule {}
