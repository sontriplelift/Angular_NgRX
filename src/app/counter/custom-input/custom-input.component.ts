import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toogleCustomInput } from '../states/counter.actions';
import { Subscription } from 'rxjs';
import { getToogle } from '../states/counter.selector';

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
    this.toogleSubscription = this.store.select(getToogle).subscribe((toogle) => {
      console.log('toogle');
      this.showCustomInput = toogle;
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
