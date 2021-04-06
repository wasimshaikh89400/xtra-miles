import { Component, OnInit } from '@angular/core';
import { ServiveService } from '../Services/servive.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  constructor(private service: ServiveService, protected router: Router , private http:HttpClient) { }
  
  mobileNumber = ""
  countSec: number = 30
  countNew: any
  request_token:string = ""
  userOTP: string = ""
  getAPIOTP : any = ""
  
  ngOnInit(): void {

    //setInterval function for decrease the the time for OTP resend
    this.countNew = setInterval(() => {
    this.countSec--; 
    }, 1000);
    
    //display the mobile number of user
    this.mobileNumber = this.service.getData()

    this.request_token = this.service.request_token

    console.log(this.request_token);

    //access the getOtp function for get token
    
    this.service.getOtp().subscribe((data) => {
      this.getAPIOTP = data
    })
    
  }

  // reset the OTP resend second by 30 sec after user click on resend OTP button
  resendOtp() {
      this.countSec = 30
  }

 
  //Catch OTP enter by user
  onOtpChange(event: any) {
    this.userOTP = event
  }

   ngOnDestroy(): void {
    clearInterval(this.countNew)
   }
  
  //login login for otp check
  login() {
    
  }
}
