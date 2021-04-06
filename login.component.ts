import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { ServiveService } from '../Services/servive.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: ServiveService, private http:HttpClient) { }

  number = ""
  dialCode = "91"
  mobileNumber = /^\d{0,15}$/
  tokenParmas:any

  ngOnInit(): void {
    
  }

  //reactive form for form validation
  formObj = new FormGroup({
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern(this.mobileNumber),Validators.minLength(7)]),
  })

  //mobile input box function from 
  onCountryChange($event: any) {
    this.dialCode = $event.dialCode
  }

  hasError($event: any) {}
  
  getNumber($event: any) {}
  
  telInputObject($event: any) { }

   //mobile input box function to 
  
  
  // generate the OTP 
  
  passNumber(number: any) {

     //used for API
    var newNum =  "+" + this.dialCode + "" + number;

    //used for display the number in OTP window
    this.number = "+" +this.dialCode + " " + number;

    //send the number to service for display the number to user
    this.service.setData(this.number)

      //POST method for send the OTP to user
    this.service.sendOtp(newNum).subscribe((data) => {
      this.tokenParmas = data;
      this.service.request_token = this.tokenParmas.request_token;
    })

    //alert message for user
    alert('OTP successfully send on mobile number')

    //redirect to the user OTP window for enter OTP
     this.router.navigate(['/verify-otp'])
     
  }
 
    get mobileNumberF() {
      return this.formObj.get('mobileNumber')
    }  
  
  

 
  
}
