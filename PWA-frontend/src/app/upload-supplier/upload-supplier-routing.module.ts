import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadSupplierPage } from './upload-supplier.page';

const routes: Routes = [
  {
    path: '',
    component: UploadSupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadSupplierPageRoutingModule {}
