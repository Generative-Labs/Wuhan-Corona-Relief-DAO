import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-and-adopt-needs',
    loadChildren: () => import('./view-and-adopt-needs/view-and-adopt-needs.module').then( m => m.ViewAndAdoptNeedsPageModule)
  },
  {
    path: 'info-verification',
    loadChildren: () => import('./info-verification/info-verification.module').then( m => m.InfoVerificationPageModule)
  },
  {
    path: 'check-suppliers',
    loadChildren: () => import('./check-suppliers/check-suppliers.module').then( m => m.CheckSuppliersPageModule)
  },
  {
    path: 'check-affected-transports',
    loadChildren: () => import('./check-affected-transports/check-affected-transports.module').then( m => m.CheckAffectedTransportsPageModule)
  },
  {
    path: 'find-hospitality',
    loadChildren: () => import('./find-hospitality/find-hospitality.module').then( m => m.FindHospitalityPageModule)
  },
  {
    path: 'upload-info',
    loadChildren: () => import('./upload-info/upload-info.module').then( m => m.UploadInfoPageModule)
  },
  {
    path: 'share-own-info',
    loadChildren: () => import('./share-own-info/share-own-info.module').then( m => m.ShareOwnInfoPageModule)
  },
  {
    path: 'upload-supplier',
    loadChildren: () => import('./upload-supplier/upload-supplier.module').then( m => m.UploadSupplierPageModule)
  },
  {
    path: 'upload-supply-chain',
    loadChildren: () => import('./upload-supply-chain/upload-supply-chain.module').then( m => m.UploadSupplyChainPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
