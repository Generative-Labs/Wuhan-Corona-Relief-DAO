import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-upload-supplier',
  templateUrl: './upload-supplier.page.html',
  styleUrls: ['./upload-supplier.page.scss'],
})
export class UploadSupplierPage implements OnInit {
  isSubmitted = false;
  public shareSupplierForm: FormGroup;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) {
    this.shareSupplierForm = formBuilder.group({
      supply_name: ['', [Validators.required]],
      item_type:['', [Validators.required]],
      supply_tel: [''],
      supply_contact:[''],
      supply_country:['', [Validators.required]],
      supply_link:[''],
      comment:['']
    });
  }

  ngOnInit() {
  }

  submit(){
    if (!this.shareSupplierForm.valid) {
      console.log('请确认所有必填项及号码格式无误')
      return false;
    } else {
      console.log(this.shareSupplierForm.value)
      this.restService.postSupplier(this.shareSupplierForm.value);
      // .subscribe(
      //   response => { 
      //     console.log(response);
      //     this.router.navigate(['']);
      //   },
      //   error => {
      //     console.log(error);
      //   } 
      // );
    }
  }

}
