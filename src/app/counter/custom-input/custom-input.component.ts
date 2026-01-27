import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toogleCustomInput } from '../states/counter.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent {
  customValue = 0;
  showCustomInput = false;
  toogleSubscription: Subscription | null = null;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.toogleSubscription = this.store.select('counter').subscribe((data) => {
      this.showCustomInput = data.toogle;
    })
  }

  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: Number(this.customValue) }));
  }

  onToogleCustomInput() {
    this.store.dispatch(toogleCustomInput());
  }

  ngOnDestroy() {
    this.toogleSubscription?.unsubscribe();
  }
}
