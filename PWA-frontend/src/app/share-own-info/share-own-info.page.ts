import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-share-own-info',
  templateUrl: './share-own-info.page.html',
  styleUrls: ['./share-own-info.page.scss'],
})
export class ShareOwnInfoPage implements OnInit {
  itemlist = ['医用外科口罩','医用防护口罩','N95口罩','防护帽','医用防护服','防护眼镜/眼罩/护目镜',
'医用一次性乳胶手套','75%酒精','84消毒液','一次性医用手术衣','一次性消毒床罩','一次性普通口罩',
'一次性防污染深靴套','体温枪','医用紫外线消毒车','活力碘','过氧乙酸','速干手消毒液'];
  shareDonations=false;
  shareSupplyChain=false;
  shareSupplier=false;
  supplyChainCount=1;
  supplierCount=1;
  targets: FormArray;
  isSubmitted = false;
  public shareInfoForm: FormGroup;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { 
    this.shareInfoForm = formBuilder.group({
      user_name: ['', [Validators.required]],
      organization_url: [''],
      region_1:['', [Validators.required]],
      region_2:['', [Validators.required]],
      contact_type:[''],
      contact_tel:[''],
      donation_targets:this.formBuilder.array([
        this.initDonationTargetFields()
      ])
    });
  }

  ngOnInit() {
  }

  get errorControl() {
    return this.shareInfoForm.controls;
  }

  get donationTargetControls(){
    // return (this.shareInfoForm.get('donation_targets') as FormArray).controls;
    return (this.shareInfoForm.get('donation_targets') as FormArray)['controls'];
  }

  initDonationTargetFields(): FormGroup {
    return this.formBuilder.group({
      hos_name: ['', Validators.required],
      donation_status: ['', Validators.required],
      type_amount: ['', Validators.required],
    });
  }

  addNewTargetFields(): void{
    this.targets = this.shareInfoForm.get('donation_targets') as FormArray;
    this.targets.push(this.initDonationTargetFields());
  }

  removeTargetField(i:number): void{
    this.targets = this.shareInfoForm.get('donation_targets') as FormArray;
    this.targets.removeAt(i);
  }

  // toggleDonations(): void{
  //   if (this.shareDonations){
  //     this.shareDonations=false;
  //   }
  //   else{
  //     this.shareDonations=true;
  //   }
  //   console.log(this.shareDonations);
  // }

  // toggleSupplyChain(): void{
  //   if (this.shareSupplyChain){
  //     this.shareSupplyChain=false;
  //   }
  //   else{
  //     this.shareSupplyChain=true;
  //   }
  //   console.log(this.shareSupplyChain);
  //   // this.shareSupplyChain=true;
  // }

  // toggleSupplier(): void{
  //   if (this.shareSupplier){
  //     this.shareSupplier=false;
  //   }
  //   else{
  //     this.shareSupplier=true;
  //   }
  //   // this.shareSupplier=true;
  // }

  submit(){
    this.isSubmitted=true;
    if (!this.shareInfoForm.valid) {
      console.log('请确认所有必填项及号码格式无误')
      return false;
    } else {
      console.log(this.shareInfoForm.value)
      this.restService.postDonationTargets(this.shareInfoForm.value);
      this.router.navigate(['']);
    }
    // this.restService.postDonationTargets(this.shareInfoForm.value);
    // console.log(this.shareInfoForm.value);
    // this.router.navigate(['']);
  }

}
