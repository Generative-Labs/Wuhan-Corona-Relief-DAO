import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadSupplyChainPageRoutingModule } from './upload-supply-chain-routing.module';

import { UploadSupplyChainPage } from './upload-supply-chain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadSupplyChainPageRoutingModule
  ],
  declarations: [UploadSupplyChainPage]
})
export class UploadSupplyChainPageModule {}
