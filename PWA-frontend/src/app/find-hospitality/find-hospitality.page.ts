import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-find-hospitality',
  templateUrl: './find-hospitality.page.html',
  styleUrls: ['./find-hospitality.page.scss'],
})
export class FindHospitalityPage implements OnInit {
  locationresponse: any;
  lerror: any;
  locationsobj: any;
  hotelresponse:any;
  herror: any;
  hotels: any;
  provinceobj: any;
  province: any;
  provinceid: any;
  city: any;
  show = false;
  showCityOptions = false;
  cityparam: any;
  provinceparam: any;

  testvar = "this is a test";

  constructor(private restService: RestService, private modalController: ModalController) {
    this.calllocations();
   }

  ngOnInit() {
  }

  //get list of locations from backend
  calllocations(): void{
    this.restService.getLocations().subscribe(
      response => this.locationresponse = response,
      error => this.lerror = error,
      () => { 
        this.locationsobj = this.locationresponse.response;
        this.locationsobj.forEach((item, i) => {
          item.id = i + 1;
        });
        console.log(this.locationsobj)
      }
      // () => console.log(this.channelresponse)
    )
  };


  setProvince(): void{
    this.provinceparam = this.provinceobj.province;
    this.showCityOptions = true;
    this.cityparam = "";
  }

  //get list of hospitals from backend (need to upgrade to enable query)
  searchhotels(): void{
    this.show = true;
    let payload = {
      "province": this.provinceparam,
      "city": this.cityparam
    }
    this.restService.getHotels(payload).subscribe(
      response => this.hotelresponse = response,
      error => this.herror = error,
      () => { 
        this.hotels = this.hotelresponse.response;
        this.show = false;
      }
      // () => console.log(this.hotelresponse)
    )
  };

  async closeModal() {
    await this.modalController.dismiss();
  }
}
