import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})

export class CountingComponent {
  @Input()
  title1 : string | undefined;
  @Input()
  title2 : string | undefined;
  @Input()
  head : string | undefined;

  countOne = 0;
  countTwo = 0;
  objects = [1, 2, 3, 4, 5];

  constructor() {}

  countNumberOne(){
    this.countOne = this.countOne + 1;
  }
  countNumberTwo(){
    this.countTwo = this.countTwo + 2;
  }
}
