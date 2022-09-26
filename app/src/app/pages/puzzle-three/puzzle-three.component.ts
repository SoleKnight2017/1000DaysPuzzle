import { Component, OnInit } from '@angular/core';

import { Tile } from '../../models/tile';

@Component({
  selector: 'app-puzzle-three',
  templateUrl: './puzzle-three.component.html',
  styleUrls: ['./puzzle-three.component.css']
})
export class PuzzleThreeComponent implements OnInit {
  rows = 9;
  cols = 9;
  isFinish = false;
  public itemGrid: Tile[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.initGrid();
  }

  onTileClicked(x: number, y: number, $event: any) {
    if(this.isFinish) return;

    if(this.itemGrid[y][x].isDisable) return;

    const rotate = ' 123456789';
    let idx = rotate.indexOf(this.itemGrid[y][x].item) + 1;
    if(idx == rotate.length) idx = 0

    this.itemGrid[y][x].item = rotate[idx];

    if(!this.checkGrid(x, y)) return;

    this.isFinish = true; 
  }
  
  onResetClicked() {
    if(this.isFinish) return;

    this.initGrid();
  }

  initGrid(): void {
    let puzzle = [
      ['2', '5', ' ', '4', ' ', ' ', ' ', ' ', ' '],
      [' ', '7', '4', ' ', ' ', ' ', '8', ' ', ' '],
      ['8', '9', ' ', ' ', ' ', '5', '3', '4', ' '],
      [' ', '3', '5', ' ', ' ', '6', ' ', ' ', '1'],
      [' ', ' ', '2', ' ', '5', ' ', '4', '3', '6'],
      [' ', ' ', ' ', '7', '3', '4', '2', ' ', ' '],
      [' ', ' ', ' ', ' ', '9', '1', ' ', ' ', ' '],
      ['1', ' ', '7', '5', ' ', ' ', ' ', '2', '3'],
      [' ', ' ', ' ', ' ', '7', ' ', '5', ' ', ' '],
    ];

    this.itemGrid = [];
    for(let y = 0; y < this.rows; ++y) {
      let itemRow: Tile[] = [];
      for(let x = 0; x < this.cols; ++x) {
        if(puzzle[y][x] !== ' ') {
            itemRow.push(new Tile(puzzle[y][x], true));
        } else {
            itemRow.push(new Tile(puzzle[y][x]));
        }
      }
      this.itemGrid.push(itemRow);
    }
  }

  checkGrid(x: number, y: number): boolean {
    let isValid = true;
    for(let v = 0; v < 9; ++v) {
      for(let u = 0; u < 9; ++u) {
        if(this.itemGrid[v][u].isDisable) continue;
        if(this.itemGrid[v][u].item === ' ') {
            isValid = false;
            continue;
        }

        if(!this._checkBox(u, v) || !this._checkRow(u, v) || !this._checkCol(u, v)) {
          this.itemGrid[v][u].isError = true;
          isValid = false;
        } else {
          this.itemGrid[v][u].isError = false;
        }
      }
    }
    return isValid;
  }

  _checkBox(x: number, y: number) : boolean {
    let boxCX = Math.floor(x / 3) * 3 + 1;
    let boxCY = Math.floor(y / 3) * 3 + 1;

    let value = this.itemGrid[y][x].item;
    for(let v = 0; v < 3; ++v) {
      for(let u = 0; u < 3; ++u) {
        let targetX = boxCX + u - 1;
        let targetY = boxCY + v - 1;

        if(targetX === x && targetY === y) continue;

        if(this.itemGrid[y][x].item === this.itemGrid[targetY][targetX].item) return false;
      }
    }
    return true;
  }

  _checkRow(x: number, y: number) : boolean {
    for(let i = 0; i < 9; ++i) {
      if(x == i) continue;

      if(this.itemGrid[y][x].item === this.itemGrid[y][i].item) return false;
    }
    return true;
  }

  _checkCol(x: number, y: number) : boolean {
    for(let i = 0; i < 9; ++i) {
      if(y == i) continue;

      if(this.itemGrid[y][x].item === this.itemGrid[i][x].item) return false;
    }
    return true;
  }

  setTdClass(x: number, y: number) {
    let classStr = "";
    if(this.isFinish) {
        if((y == 2 && x == 3)
            || (y == 3 && x == 4)
            || (y == 4 && x == 5)
            || (y == 5 && x == 6)
            || (y == 6 && x == 7)) classStr += "success ";
    }
    if(this.itemGrid[y][x].isDisable) {
      return classStr + "freeze ";
    } else if(this.itemGrid[y][x].isError) {
      return classStr + "text-danger ";
    } else {
      return classStr + "text-secondary ";
    }
  }

}
