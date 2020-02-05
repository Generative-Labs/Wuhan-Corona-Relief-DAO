import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-check-affected-transports',
  templateUrl: './check-affected-transports.page.html',
  styleUrls: ['./check-affected-transports.page.scss'],
})
export class CheckAffectedTransportsPage implements OnInit {

  transportsreponse: any;
  terror: any;
  transports: any;

  show = true;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getAffectedTransports();
  }

  getAffectedTransports(): void{
    this.restService.getAffectedTransports().subscribe(
      response => { this.transportsreponse = response},
      error => this.terror = error,
      () => { 
        this.transports = this.transportsreponse.response;
        this.show = false;
        // console.log(this.transportsreponse)
      }
      // () => console.log(this.channelresponse)
    )
  };

}
