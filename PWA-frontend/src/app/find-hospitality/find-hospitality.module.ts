import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindHospitalityPageRoutingModule } from './find-hospitality-routing.module';

import { FindHospitalityPage } from './find-hospitality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindHospitalityPageRoutingModule
  ],
  entryComponents: [FindHospitalityPage],
  declarations: [FindHospitalityPage],
  exports: [FindHospitalityPage]
})
export class FindHospitalityPageModule {}
