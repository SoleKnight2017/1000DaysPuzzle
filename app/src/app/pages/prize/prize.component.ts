import { Component, OnInit } from '@angular/core';
import { state, style, animate, trigger, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css'],
  animations: [
    trigger('wrong', [
      transition('false => true', [
        animate('.5s ease-in-out', keyframes([
          style({ transform: 'translateX(0px)', offset: 0 }),
          style({ transform: 'translateX(10px)', offset: .2 }),
          style({ transform: 'translateX(-10px)', offset: .4 }),
          style({ transform: 'translateX(10px)', offset: .8 }),
          style({ transform: 'translateX(0px)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class PrizeComponent implements OnInit {
  pw: string = "";
  isWrong: boolean = false;
  isUnlocked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPasswordSubmitted() {
    this.isWrong = false;
    if(this.pw === '22927') {
        this.isUnlocked = true;
        return;
    }

    this.isWrong = true;
    this.pw = "";
  }
}
