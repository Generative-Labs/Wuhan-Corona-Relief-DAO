import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UploadNeedsPage } from '../upload-needs/upload-needs.page'
import { ViewAndAdoptNeedsPage } from '../view-and-adopt-needs/view-and-adopt-needs.page'
import { FindHospitalityPage } from '../find-hospitality/find-hospitality.page';
// import { UploadNeedsModalComponent } from '../upload-needs-modal/upload-needs-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {}

  // async openModal() {
  //   const modal = await this.modalController.create({
  //     component: UploadNeedsModalComponent
  //   });
  //   return await modal.present();
  // }


  async openNeedsUploadModal() {
    const modal = await this.modalController.create({
      component: UploadNeedsPage,
      // componentProps:{article_data:inObj}
    });
    await modal.present()
    const { data } = await modal.onWillDismiss();
    console.log(data);
    return "success";
  }

  // async openFindHospitalityModal() {
  //   const modal = await this.modalController.create({
  //     component: FindHospitalityPage,
  //     // componentProps:{article_data:inObj}
  //   });
  //   await modal.present()
  //   const { data } = await modal.onWillDismiss();
  //   console.log(data);
  //   return "success";
  // }

}
