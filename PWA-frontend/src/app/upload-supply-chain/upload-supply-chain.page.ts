import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-upload-supply-chain',
  templateUrl: './upload-supply-chain.page.html',
  styleUrls: ['./upload-supply-chain.page.scss'],
})
export class UploadSupplyChainPage implements OnInit {
  isSubmitted = false;
  public shareSupplyChainForm: FormGroup;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { 
      this.shareSupplyChainForm = formBuilder.group({
      logistic_name: ['', [Validators.required]],
      logistic_tel: [''],
      logistic_contact:[''],
      logistic_country:['', [Validators.required]],
      comment:['']
    });
  }

  ngOnInit() {
  }

  submit(){
    if (!this.shareSupplyChainForm.valid) {
      console.log('请确认所有必填项及号码格式无误')
      return false;
    } else {
      console.log(this.shareSupplyChainForm.value)
      this.restService.postSupplyChain(this.shareSupplyChainForm.value);
      // this.router.navigate(['']);
    }
    // this.restService.postSupplyChain(this.shareSupplyChainForm.value);
    // console.log(this.shareSupplyChainForm.value);
    // this.router.navigate(['']);
  }

}
