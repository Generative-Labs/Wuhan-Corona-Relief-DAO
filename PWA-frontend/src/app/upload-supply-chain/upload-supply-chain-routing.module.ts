import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadSupplyChainPage } from './upload-supply-chain.page';

const routes: Routes = [
  {
    path: '',
    component: UploadSupplyChainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadSupplyChainPageRoutingModule {}
