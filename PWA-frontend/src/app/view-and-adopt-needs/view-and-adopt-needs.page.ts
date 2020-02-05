import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
// import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-view-and-adopt-needs',
  templateUrl: './view-and-adopt-needs.page.html',
  styleUrls: ['./view-and-adopt-needs.page.scss'],
})


export class ViewAndAdoptNeedsPage implements OnInit {
  error: any;
  needsresponse: any;
  needs: any;

  show = true;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.callneeds();
  }

  callneeds(): void{
    this.restService.getNeeds().subscribe(
      response => { this.needsresponse = response},
      error => this.error = error,
      () => { 
        this.needs = this.needsresponse.response;
        this.needs.forEach((item, i) => {
          item.showAll = false;
          item.index = i + 1;
        });
        this.show = false;
      }
      // () => console.log(this.channelresponse)
    )
  };

  showAllItems(event, need){
    need.showAll=true;
    // console.log(need.index);
  }

  collapseItems(event, need){
    need.showAll=false;
  }

  // async closeModal() {
  //   await this.modalController.dismiss();
  // }

}
