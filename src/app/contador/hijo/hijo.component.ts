import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent implements OnInit {
  contador: number | undefined

  constructor(private store: Store<AppState>) {
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({numero: 3}))
  }

  dividir() {
    this.store.dispatch(actions.dividir({numero: 3}))
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }
}
