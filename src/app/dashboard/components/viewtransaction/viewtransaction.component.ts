import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent implements OnInit {
  jsondata:any;
  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.viewalltransaction().subscribe(response=>{
      if(response && response!=undefined){
      console.log("server details:",response);
       this.jsondata=response;
     }
      //handing the error
}, error => {
  console.log("error server:",error);
},() => {
//complete cycle of subscribe
console.log("complete cycle of subscribe:")
});
  }

}
