import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckAffectedTransportsPage } from './check-affected-transports.page';

const routes: Routes = [
  {
    path: '',
    component: CheckAffectedTransportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckAffectedTransportsPageRoutingModule {}
