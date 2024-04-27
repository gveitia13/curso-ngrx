import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {reset} from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.scss'
})
export class NietoComponent implements OnInit {
  contador: number | undefined

  store = inject(Store<AppState>)

  reset() {
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }
}
