import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-verification',
  templateUrl: './info-verification.page.html',
  styleUrls: ['./info-verification.page.scss'],
})
export class InfoVerificationPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
