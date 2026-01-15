import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';

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
      .select('counter')
      .subscribe((data) => {
        this.counter = data.counter;
      });
  }

  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
}
