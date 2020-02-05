import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { RestService } from '../rest.service';
// import { ModalController } from '@ionic/angular';
// import { ViewAndAdoptNeedsPage } from '../view-and-adopt-needs/view-and-adopt-needs.page'
// import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  data: any;
  error: any;
  objfeed: any;
  objects: any;

  constructor(private restService: RestService) {
    this.objects=[];
    this.callfeed();
   }

  ngOnInit() {
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.callfeed();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  callfeed(): void{
    this.restService.getMainFeed().subscribe(
      response => { 
        this.objfeed = response;
        console.log(response)
        console.log(this.objects);
      },
      error => this.error = error,
      () => { 
        // this.objects = this.objfeed.response;
        this.objfeed.response.forEach((item, i) => {
          this.objects.push(item);
          // console.log(item)
        });
        // this.objects.forEach((item, i) => {
        //   item.showAll = false;
        //   item.index = i + 1;
        // });
        // this.show = false;
      }
      // () => console.log(this.channelresponse)
    )
  };

  // async openNeedsAdoptionModal() {
  //   const modal = await this.modalController.create({
  //     component: ViewAndAdoptNeedsPage,
  //     // componentProps:{article_data:inObj}
  //   });
  //   await modal.present()
  //   const { data } = await modal.onWillDismiss();
  //   console.log(data);
  //   return "success";
  // }

}
