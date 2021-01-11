import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
   loginForm: FormGroup;
   unSubscribeServer:Subscription;
  submitted = false; 
  constructor(private formbuilder:FormBuilder,
              private router:Router,
              private httpservice:HttpService) { }
  ngOnDestroy(){
    if(this.unSubscribeServer){
      this.unSubscribeServer.unsubscribe();
       }
  }

  ngOnInit(){
     this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  }); 
  }
   get f() { return this.loginForm.controls; }
      onSubmit() {
         this.submitted = true;

  // stop here if form is invalid
       if (this.loginForm.invalid) {
                  return;
          }
   
        let obj = { "email": "eve.holt@reqres.in", 
                  "password": "cityslicka"
                     }
        this.httpservice.login(obj).subscribe(result=>{
          console.log("inside",result);
          if(result!=undefined){
            console.log(result);
            Object.entries(result).forEach(([key, value]) => {
             if(key==='token'){
               let token=value;
               localStorage.setItem('token',token);
               console.log("the token of login is:",token);
           }
         });
       }
        })
                     /* this.httpservice.login(obj).subscribe(result =>{
            console.log("inside:");
            
           if(result){
             console.log(result);
             Object.entries(result).forEach(([key, value]) => {
              if(key==='token'){
                let token=value;
                localStorage.setItem('token',token);
                console.log("the token of login is:",token);
            }
          });
        }
      }) */
      this.router.navigate(['dashboard']);
    }
  }