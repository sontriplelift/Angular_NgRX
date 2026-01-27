export interface CounterState {
  counter: number;
  toogle: boolean
}

export const initialState: CounterState = {
  counter: 0,
  toogle: false
};
