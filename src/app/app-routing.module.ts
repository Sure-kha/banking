import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/components/guards/auth.guard';


const routes: Routes = [
  {
 path:'',
 loadChildren: ()=> import('../app/auth/components/auth.module').then(m=>m.AuthModule)
},
  {
  path:'dashboard',
  loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashBoardModule)
 }  
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
