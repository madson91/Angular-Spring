import { ActionsService } from './../services/actions.service';
import { Action } from './../models/action';
import { Component } from '@angular/core';
import { Observable, catchError , of} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  actions$:Observable<Action[]>;
  displayedColumns = ['name','value'];

  constructor(public dialog: MatDialog,
    private ActionsService:ActionsService){
    this.actions$ = ActionsService.list()
    .pipe(
      catchError(error => {
        this.openErrorDialog("Erro ao carregar as Actions");
        return of([])
      })
    );
  }

  openErrorDialog(errorMensage:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMensage
    });
  }


}
