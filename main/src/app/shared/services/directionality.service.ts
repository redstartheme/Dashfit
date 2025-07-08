import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  EventEmitter,
  Injectable,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppDirectionality implements Directionality, OnDestroy {
  readonly change = new EventEmitter<Direction>();

  private _value: Direction = 'ltr';
  readonly valueSignal: WritableSignal<Direction> = signal(this._value);

  get value(): Direction {
    return this._value;
  }

  set value(value: Direction) {
    this._value = value;
    this.valueSignal.set(value);
    this.change.next(value);
  }

  ngOnDestroy() {
    this.change.complete();
  }
}
