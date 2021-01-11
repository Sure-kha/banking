import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/components/guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewtransactionComponent } from './components/newtransaction/newtransaction.component';
import { ViewtransactionComponent } from './components/viewtransaction/viewtransaction.component';

const routes: Routes = [
  
   {
    path:'',
    canActivate:[AuthGuard],
     component:DashboardComponent
  },
  {
    path:'newtransaction',
    component:NewtransactionComponent
  },
  {
    path:'viewtransaction',
    component:ViewtransactionComponent
  } ,
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }