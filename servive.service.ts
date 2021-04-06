import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TOKEN } from '../Model/token'
import { OTP } from '../Model/otp'


@Injectable({
  providedIn: 'root'
})
export class ServiveService {
   
  mobileNumber: any
  request_token: string = ""
  postUrl = "http://3.142.179.66:8080/api/otp/new/"
  getUrl  = " http://3.142.179.66:8080/api/otp/valiidate/"
  constructor(private http : HttpClient) { }
  setData(data:any) {
    this.mobileNumber = data
    console.log(this.mobileNumber);
    
  }
  getData() {
    return this.mobileNumber
  }
  sendOtp(newNum: string): Observable<TOKEN> {
    
   const httpHeader = new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
   })
    var data = "mobile_no" + newNum
    return this.http.post(this.postUrl + newNum, { headers: httpHeader })
      .map((response:any) => response.json());
  }
 
  getOtp(): Observable<OTP>{

    const httpHeader = new HttpHeaders()
    
    if (this.request_token) {
      httpHeader.append('Authorization' , 'Bearer' + this.request_token)
    }

    return this.http.get(this.getUrl, {
      headers : httpHeader
    }).map((response:any) => response.json());
  }

}
