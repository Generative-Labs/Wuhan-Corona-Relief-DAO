import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindHospitalityPage } from './find-hospitality.page';

const routes: Routes = [
  {
    path: '',
    component: FindHospitalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindHospitalityPageRoutingModule {}
