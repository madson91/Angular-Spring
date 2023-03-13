import { Action } from './../models/action';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  actions:Action[] = [
    {
      _id:1, name:'itausa', value:'10,00'
    }
  ];
  displayedColumns = ['name','value'];
}
