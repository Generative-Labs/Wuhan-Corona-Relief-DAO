import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadNeedsModalComponent } from './upload-needs-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, IonicModule,],
  declarations: [UploadNeedsModalComponent],
  entryComponents: [UploadNeedsModalComponent],
  exports: [UploadNeedsModalComponent]
})
export class UploadNeedsModalComponentModule {}
