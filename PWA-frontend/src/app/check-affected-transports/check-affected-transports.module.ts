import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckAffectedTransportsPageRoutingModule } from './check-affected-transports-routing.module';

import { CheckAffectedTransportsPage } from './check-affected-transports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckAffectedTransportsPageRoutingModule
  ],
  declarations: [CheckAffectedTransportsPage]
})
export class CheckAffectedTransportsPageModule {}
