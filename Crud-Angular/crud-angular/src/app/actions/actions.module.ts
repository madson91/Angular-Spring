import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';



import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsComponent } from './actions/actions.component';


@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    MatTableModule
  ]
})
export class ActionsModule { }
