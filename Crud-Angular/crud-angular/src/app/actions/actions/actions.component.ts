import { ActionsService } from './../services/actions.service';
import { Action } from './../models/action';
import { Component } from '@angular/core';
import { Observable, catchError , of} from 'rxjs';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  actions$:Observable<Action[]>;
  displayedColumns = ['name','value'];

  constructor(private ActionsService:ActionsService){
    this.actions$ = ActionsService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }
}
