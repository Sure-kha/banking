import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jsondata:any;
  //isUserLoggedin:true;
  constructor(private httpservice:HttpService,
              private router:Router) { }
  ngOnInit(): void {
  }
  newtransaction(){
    this.router.navigate(['newtransaction']);
  }
  
  
  viewtransaction(){
    this.router.navigate(['viewtransaction']);
    
}
logout(){
  //this.isUserLoggedin= false;
  //localStorage.setItem('token','');
  localStorage.clear();
  this.router.navigate(['/'])
} 

  }


