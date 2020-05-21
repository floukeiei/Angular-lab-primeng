import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input()
  name = 'sunny';
  str = 'ploy';
  @Input()
  name2 = 'sunny2';

  @Input()
  name3: string;

  @Input()
  maxInput = 99;

  num = 0;

  @Output()
  valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onInput(event) {
    console.log('event', event);
    console.log('value', event.target.value);

    this.name = event.target.value;

    this.valueChange.emit(event.target.value);
  }

  send() {
    this.valueChange.emit(this.name);
  }

  increase() {
    if (this.num < this.maxInput) {
      this.num++;
    }

  }

  decrease() {
    if (this.num > 0) {
      this.num--;
    }

  }

}
