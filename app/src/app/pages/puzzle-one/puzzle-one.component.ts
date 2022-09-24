import { Component, OnInit } from '@angular/core';

import { Tile } from '../../models/tile';

@Component({
  selector: 'app-puzzle-one',
  templateUrl: './puzzle-one.component.html',
  styleUrls: ['./puzzle-one.component.css']
})

export class PuzzleOneComponent implements OnInit {
  rows = 10;
  cols = 20;
  characterSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
  public itemGrid: Tile[][] = [];

  constructor() { }

  ngOnInit(): void {
    for(let y = 0; y < this.rows; ++y) {
      let itemRow: Tile[] = [];
      for(let x = 0; x < this.cols; ++x) {
        let idx = Math.floor(Math.random() * this.characterSet.length);
        itemRow.push({item: 'A'});//this.characterSet[idx]);
      }
      this.itemGrid.push(itemRow);
    }
  }

}
