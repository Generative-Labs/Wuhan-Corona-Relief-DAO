import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedsSpecificsModalComponent } from './needs-specifics-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,],
  declarations: [NeedsSpecificsModalComponent],
  exports: [NeedsSpecificsModalComponent]
})
export class NeedsSpecificsModalComponentModule {}
