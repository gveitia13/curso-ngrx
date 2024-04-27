import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from './contador/contador.action';
import {AppState} from "./app.reducers";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contador!: number

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  incrementar() {
    this.store.dispatch(actions.incrementar())
  }

  decrementar() {
    this.store.dispatch(actions.decrementar())
  }
}
