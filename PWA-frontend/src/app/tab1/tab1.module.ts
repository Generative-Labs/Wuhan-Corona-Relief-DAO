import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { UploadNeedsPageModule } from '../upload-needs/upload-needs.module';
// import { UploadNeedsModalComponentModule } from '../upload-needs-modal/upload-needs-modal.module';
// import { FindHospitalityPageModule } from '../find-hospitality/find-hospitality.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UploadNeedsPageModule,
    RouterModule.forChild(
      [
        { 
          path: '', 
          component: Tab1Page 
        }
      ]
    ),
    // UploadNeedsModalComponentModule,
    // FindHospitalityPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
