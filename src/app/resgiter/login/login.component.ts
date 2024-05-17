import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  response:any
  msgAlert:any=''
  loader:any=false
  res:any
  constructor(private fb: FormBuilder,private router:Router, private loginService : LoginService,private http:HttpClient) {
    this.createForm();
  
   }

  ngOnInit(): void {
    
    localStorage.removeItem("tiersClient")
    localStorage.setItem("ret","");
    localStorage.clear()
    this.f?.['login'].setValue("");
    this.f?.['pwd'].setValue("");

  }

  login()
  {
    this.loader=true
    localStorage.setItem("cuser",this.f?.['login'].value);
    localStorage.setItem("istrue","true");

this.Authenticate();


  }
  createForm() {
    this.LoginForm = this.fb.group({
      login: ['', Validators.required],
      pwd: ['', Validators.required]

    })
  }
  get f() { return this.LoginForm.controls; }

  Authenticate(){

   
    this.loginService.login(this.f?.['login'].value,this.f?.['pwd'].value)
    .subscribe(data => {
    this.response=data
    if(this.response==true){
      localStorage.setItem("login",this.f?.['login'].value.trim())

    
      this.loader=false
      this.router.navigate(['home']);
    }
    else{
      this.msgAlert = "Votre login ou mot de passe est incorrect.";
        document.getElementById("exampleModalLabelProcessedpop")?.setAttribute("style", "color:red;font-weight:bold")
        document.getElementById("btnalertPop")?.click()
        this.loader=false 
    }
 
    }, err => {
      this.loader=false
      if(err.indexOf('400')!=-1){
        this.msgAlert = "Votre login ou mot de passe est incorrect.";
        document.getElementById("exampleModalLabelProcessedpop")?.setAttribute("style", "color:red;font-weight:bold")
        document.getElementById("btnalertPop")?.click()
       }
      console.log(err);
      console.log('error API')


    });
  
    
  }




  
  FermerAlert() {
    document.getElementById("alertPop")?.setAttribute("class", "modal fade  hide")

  }

}
