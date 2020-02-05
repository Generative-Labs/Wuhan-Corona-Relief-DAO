import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAndAdoptNeedsPage } from './view-and-adopt-needs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAndAdoptNeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAndAdoptNeedsPageRoutingModule {}
