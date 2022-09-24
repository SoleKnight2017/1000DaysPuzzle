import { Component, OnInit } from '@angular/core';

import { Tile } from '../../models/tile';

@Component({
  selector: 'app-puzzle-one',
  templateUrl: './puzzle-one.component.html',
  styleUrls: ['./puzzle-one.component.css']
})

export class PuzzleOneComponent implements OnInit {
  rows = 13;
  cols = 26;
  characterSet = "ABEFGHJKLMOPQRSTUVWXZ";
  public itemGrid: Tile[][] = [];

  constructor() { }

  ngOnInit(): void {
    for(let y = 0; y < this.rows; ++y) {
      let itemRow: Tile[] = [];
      for(let x = 0; x < this.cols; ++x) {
        let idx = Math.floor(Math.random() * this.characterSet.length);
        itemRow.push(new Tile(this.characterSet[idx]));
      }
      this.itemGrid.push(itemRow);
    }
    
    this.setI(1, 1);
    this.setL(4, 1);
    this.setO(13, 1);
    this.setV(2, 7);
    this.setE(13, 7);
    this.setU(19, 7);
  }

  onTileClicked(x: number, y: number, event: any) {
    this.itemGrid[y][x].selected = !this.itemGrid[y][x].selected;
    if(this.itemGrid[y][x].selected) {
      event.currentTarget.classList.add("selected");
    } else {
      event.currentTarget.classList.remove("selected");
    }
  }

  setI(x: number, y: number): void {
    this.itemGrid[y][x] = new Tile('C');
    this.itemGrid[y+1][x] = new Tile('I');
    this.itemGrid[y+2][x] = new Tile('N');
    this.itemGrid[y+3][x] = new Tile('D');
    this.itemGrid[y+4][x] = new Tile('Y');
  }

  setL(x: number, y: number): void {
    this.itemGrid[y][x] = new Tile('C');
    this.itemGrid[y+1][x] = new Tile('I');
    this.itemGrid[y+2][x] = new Tile('N');
    this.itemGrid[y+3][x] = new Tile('D');
    this.itemGrid[y+4][x] = new Tile('Y');
    this.itemGrid[y+4][x+1] = new Tile('C');
    this.itemGrid[y+4][x+2] = new Tile('I');
    this.itemGrid[y+4][x+3] = new Tile('N');
    this.itemGrid[y+4][x+4] = new Tile('D');
    this.itemGrid[y+4][x+5] = new Tile('Y');
  }

  setO(x: number, y: number): void {
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+0][x+1] = new Tile('I');
    this.itemGrid[y+0][x+2] = new Tile('N');
    this.itemGrid[y+0][x+3] = new Tile('D');
    this.itemGrid[y+0][x+4] = new Tile('Y');
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+1][x] = new Tile('I');
    this.itemGrid[y+2][x] = new Tile('N');
    this.itemGrid[y+3][x] = new Tile('D');
    this.itemGrid[y+4][x] = new Tile('Y');
    this.itemGrid[y+4][x+1] = new Tile('C');
    this.itemGrid[y+4][x+2] = new Tile('I');
    this.itemGrid[y+4][x+3] = new Tile('N');
    this.itemGrid[y+4][x+4] = new Tile('D');
    this.itemGrid[y+4][x+5] = new Tile('Y');
    this.itemGrid[y][x+5] = new Tile('C');
    this.itemGrid[y+1][x+5] = new Tile('I');
    this.itemGrid[y+2][x+5] = new Tile('N');
    this.itemGrid[y+3][x+5] = new Tile('D');
    this.itemGrid[y+4][x+5] = new Tile('Y');
  }

  setV(x: number, y: number): void {
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+1][x+1] = new Tile('I');
    this.itemGrid[y+2][x+2] = new Tile('N');
    this.itemGrid[y+3][x+3] = new Tile('D');
    this.itemGrid[y+4][x+4] = new Tile('Y');
    this.itemGrid[y+3][x+5] = new Tile('D');
    this.itemGrid[y+2][x+6] = new Tile('N');
    this.itemGrid[y+1][x+7] = new Tile('I');
    this.itemGrid[y+0][x+8] = new Tile('C');
  }

  setE(x: number, y: number): void {
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+0][x+1] = new Tile('I');
    this.itemGrid[y+0][x+2] = new Tile('N');
    this.itemGrid[y+0][x+3] = new Tile('D');
    this.itemGrid[y+0][x+4] = new Tile('Y');

    this.itemGrid[y+2][x-1] = new Tile('C');
    this.itemGrid[y+2][x+0] = new Tile('I');
    this.itemGrid[y+2][x+1] = new Tile('N');
    this.itemGrid[y+2][x+2] = new Tile('D');
    this.itemGrid[y+2][x+3] = new Tile('Y');

    this.itemGrid[y+4][x-3] = new Tile('C');
    this.itemGrid[y+4][x-2] = new Tile('I');
    this.itemGrid[y+4][x-1] = new Tile('N');
    this.itemGrid[y+4][x+0] = new Tile('D');
    this.itemGrid[y+4][x+1] = new Tile('Y');

    this.itemGrid[y+1][x-1] = new Tile('I');
    this.itemGrid[y+2][x-2] = new Tile('N');
    this.itemGrid[y+3][x-3] = new Tile('D');
    this.itemGrid[y+4][x-4] = new Tile('Y');
  }

  setU(x: number, y: number): void {
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+0][x+0] = new Tile('C');
    this.itemGrid[y+1][x] = new Tile('I');
    this.itemGrid[y+2][x] = new Tile('N');
    this.itemGrid[y+3][x] = new Tile('D');
    this.itemGrid[y+4][x] = new Tile('Y');
    this.itemGrid[y+4][x+1] = new Tile('C');
    this.itemGrid[y+4][x+2] = new Tile('I');
    this.itemGrid[y+4][x+3] = new Tile('N');
    this.itemGrid[y+4][x+4] = new Tile('D');
    this.itemGrid[y+4][x+5] = new Tile('Y');
    this.itemGrid[y][x+5] = new Tile('C');
    this.itemGrid[y+1][x+5] = new Tile('I');
    this.itemGrid[y+2][x+5] = new Tile('N');
    this.itemGrid[y+3][x+5] = new Tile('D');
    this.itemGrid[y+4][x+5] = new Tile('Y');
  }
}
