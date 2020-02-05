import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckSuppliersPageRoutingModule } from './check-suppliers-routing.module';

import { CheckSuppliersPage } from './check-suppliers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckSuppliersPageRoutingModule
  ],
  declarations: [CheckSuppliersPage]
})
export class CheckSuppliersPageModule {}
