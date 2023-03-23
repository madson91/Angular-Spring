import { Action } from './../models/action';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap, delay  } from 'rxjs';
import { animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private readonly API = '/aassets/actions.json';

  constructor(private httpCliente: HttpClient) { }

  list() {

    return this.httpCliente.get<Action[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(action => console.log(action))

      );


  }
}
