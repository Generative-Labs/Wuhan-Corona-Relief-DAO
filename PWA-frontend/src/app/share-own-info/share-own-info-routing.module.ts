import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareOwnInfoPage } from './share-own-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShareOwnInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareOwnInfoPageRoutingModule {}
