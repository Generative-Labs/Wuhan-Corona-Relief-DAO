import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-check-suppliers',
  templateUrl: './check-suppliers.page.html',
  styleUrls: ['./check-suppliers.page.scss'],
})
export class CheckSuppliersPage implements OnInit {

  suppliersresponse: any;
  serror: any;
  suppliers: any;

  show = true;

  constructor(private restService: RestService) {
    this.getSuppliers();
   }

  ngOnInit() {
  }

  getSuppliers(): void{
    this.restService.getSuppliers().subscribe(
      response => { this.suppliersresponse = response},
      error => this.serror = error,
      () => { 
        this.suppliers = this.suppliersresponse.response;
        this.show = false;
      }
      // () => console.log(this.channelresponse)
    )
  };

}
