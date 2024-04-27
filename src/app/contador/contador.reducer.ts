import {Action, createReducer, on} from "@ngrx/store";
import {decrementar, dividir, incrementar, multiplicar, reset} from "./contador.action";

export const initialState = 20

const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(multiplicar, (state, {numero}) => state * numero),
  on(dividir, (state, {numero}) => state / numero),
  on(reset, () => initialState),
)

export function contadorReducer(state: number | undefined, action: Action) {
  return _contadorReducer(state, action)
}
