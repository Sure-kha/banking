import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
 
  imports: [    
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
    
    ],
  declarations: [LoginComponent]
})
export class AuthModule { }
