import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {DashBoardRoutingModule} from './dashboard-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewtransactionComponent } from './components/newtransaction/newtransaction.component';
import { ViewtransactionComponent } from './components/viewtransaction/viewtransaction.component';
import { AlphabetOnlyDirective } from '../directives/alphabetsonly.directive';
import { NumberDirective } from '../directives/numbersonly.directive';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [    
    CommonModule,
    ReactiveFormsModule,
    DashBoardRoutingModule,
    MatSelectModule,
    
    ],
  declarations: [DashboardComponent,
                 NewtransactionComponent,
                 ViewtransactionComponent,
                 AlphabetOnlyDirective,
                 NumberDirective
                
                 ]
})
export class DashBoardModule { }
