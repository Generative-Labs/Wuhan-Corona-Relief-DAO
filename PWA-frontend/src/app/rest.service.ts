import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Observable, of } from  'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';


//interfaces should be strictly defined later
// export interface needsItemObj{
//     needs: Array<String>;
//     any;
// }

// export interface needsItemsResponseObj{
//   response:{
//     [index: number]:{
//       needs:{
//         [index: number]:string;
//       };
//       any;
//     }
//   }
// };

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseAPIUrl = "https://backend.wuhanrelief.org";

  constructor(private http : HttpClient) {
  }

  //get geographic options from json
  public getLocations(){
    const getlocationUrl = "assets/data/hotel_location.json";
    // const getChannelUrl = this.baseUrl + "/api/v1/loadchannels";
    return this.http.get(getlocationUrl);
  }

  //get hospital supply needs feed
  public getNeeds(){
    const getNeedsUrl = this.baseAPIUrl+ "/get_needs"
    return this.http.get(getNeedsUrl);
  }

  public getMainFeed(){
    const getMainFeedUrl = this.baseAPIUrl+ "/volu_feed_get";
    return this.http.get(getMainFeedUrl);
  }

  //post needs from hospital workers
  public postNeed(needsobj){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const postNeedUrl = this.baseAPIUrl+"/post_needs";
    this.http.post(postNeedUrl, needsobj, httpOptions).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

  //get list of item suppliers, update to supply filters tomorrow
  public getSuppliers(){
    const getSupplierUrl = this.baseAPIUrl+"/supply";
    return this.http.get(getSupplierUrl);
  }

  //get list of hotels
  public getHotels(queryobject){
    const getHotelsUrl = this.baseAPIUrl+"/hotel_get";
    return this.http.post(getHotelsUrl,queryobject);
    // .subscribe(data => {
    //     // console.log(data['_body']);
    //    }, error => {
    //     console.log(error);
    //   });
  }

  //get list of affected transports
  public getAffectedTransports(){
    const getAffectedTransportsUrl = this.baseAPIUrl+"/transport_get";
    return this.http.get(getAffectedTransportsUrl);
  }

  //post donation targets
  public postDonationTargets(formvals){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const postDonationTargetsUrl = this.baseAPIUrl+"/volu_share_post";
    return this.http.post(postDonationTargetsUrl, formvals, httpOptions).subscribe(data => {
        // console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }


  //post supply chain
  public postSupplyChain(formvals){
    const postSupplyChainUrl = this.baseAPIUrl+"/volu_logistic_post";
    return this.http.post(postSupplyChainUrl, formvals).subscribe(data => {
        // console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

  //post supplier
  public postSupplier(formvals){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //   })
    // };
    const postSupplierUrl = this.baseAPIUrl+"/volu_source_post";
    console.log('post supplier rest call evoked')
    // console.log(formvals)
    // return this.http.post(postSupplierUrl, formvals, httpOptions);
    return this.http.post(postSupplierUrl, formvals).subscribe(data => {
        // console.log(data['_body']);
       }, error => {
        console.log(error);
      });
    // .subscribe(
    //         response => {
    //           console.log(response); 
    //           return response;
    //         },
    //           error => {console.log(error)}
    //         );
  }


}
