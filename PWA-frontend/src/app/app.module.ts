import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { UploadNeedsPage } from './upload-needs/upload-needs.page'
// import { ViewAndAdoptNeedsPage } from './view-and-adopt-needs/view-and-adopt-needs.page';
// import { FindHospitalityPage } from './find-hospitality/find-hospitality.page';
// import { ViewAndAdoptNeedsPageModule } from './view-and-adopt-needs'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    FormsModule, 
    // IonicModule.forRoot({mode:"md"}), 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
