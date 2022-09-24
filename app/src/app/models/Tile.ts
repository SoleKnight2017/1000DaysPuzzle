export class Tile {
  public item: string;
  public selected: boolean;

  constructor(item: string) {
    this.item = item;
    this.selected = false;
  }
}
