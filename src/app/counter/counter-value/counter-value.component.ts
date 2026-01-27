import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css'],
})
export class CounterValueComponent {
  counter = 0;
  counterSubscription: Subscription | null = null;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.counterSubscription = this.store
      .select(getCounter)
      .subscribe((counter) => {
        console.log('counter');
        this.counter = counter;
      });
  }

  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
}
