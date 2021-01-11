import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient, ) { }
  login(objParams:any){
    console.log("login");
    
    return this.http.post('https://reqres.in/api/login',objParams)
    }
  newtransaction(objParams:any){
    return this.http.post('https://reqres.in/api/users',objParams)
    }
    viewalltransaction(){
      return this.http.get('https://my-json-server.typicode.com/ketan-pande/view-all-transactions/transactions');
  }
  

}
