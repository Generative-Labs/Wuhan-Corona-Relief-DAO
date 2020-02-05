import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-upload-needs-modal',
  templateUrl: './upload-needs-modal.component.html',
  styleUrls: ['./upload-needs-modal.component.scss'],
})
export class UploadNeedsModalComponent implements OnInit {
  needsForm: FormGroup; 
  isSubmitted = false;
  constructor(private restService: RestService, private modalController: ModalController, public formBuilder: FormBuilder) {
    this.needsForm = this.formBuilder.group({
      hos_name: ['', [Validators.required]],
      hos_address: ['', [Validators.required]],
      contact_tel: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      need: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      contact_name: [''],
      comment: ['']
    });
  }

  ngOnInit() {
  };

  get errorControl() {
    return this.needsForm.controls;
  }

  async submitAndCloseModal() {
    this.isSubmitted = true;
    if (!this.needsForm.valid) {
      console.log('请确认所有必填项及号码格式无误')
      return false;
    } else {
      console.log(this.needsForm.value)
      this.restService.postNeed(this.needsForm.value);
    }
    // this.restService.postNeed(this.needobj);
    await this.modalController.dismiss();
  };

  async closeModal() {
    await this.modalController.dismiss();
  }

}
