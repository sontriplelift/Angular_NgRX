import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement } from '../states/counter.actions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent {
  customValue = 0;

  constructor(private store: Store<{ counter: CounterState }>) {}

  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: Number(this.customValue) }));
  }
}
