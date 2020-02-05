import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { UploadNeedsPageRoutingModule } from './upload-needs-routing.module';

import { UploadNeedsPage } from './upload-needs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // UploadNeedsPageRoutingModule
  ],
  entryComponents: [UploadNeedsPage],
  declarations: [UploadNeedsPage]
})
export class UploadNeedsPageModule {}
