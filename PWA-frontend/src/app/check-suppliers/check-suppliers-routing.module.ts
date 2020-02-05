import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckSuppliersPage } from './check-suppliers.page';

const routes: Routes = [
  {
    path: '',
    component: CheckSuppliersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckSuppliersPageRoutingModule {}
