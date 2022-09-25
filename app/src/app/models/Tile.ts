export class Tile {
  public item: string;
  public isDisable: boolean;
  public isError: boolean
  public selected: boolean;

  constructor(item: string, isDisable?: boolean) {
    this.item = item;
    this.isDisable = isDisable? isDisable : false;
    this.isError = false;
    this.selected = false;
  }

}
