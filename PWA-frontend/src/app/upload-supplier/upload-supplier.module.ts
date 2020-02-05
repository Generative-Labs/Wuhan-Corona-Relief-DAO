import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadSupplierPageRoutingModule } from './upload-supplier-routing.module';

import { UploadSupplierPage } from './upload-supplier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadSupplierPageRoutingModule
  ],
  declarations: [UploadSupplierPage]
})
export class UploadSupplierPageModule {}
