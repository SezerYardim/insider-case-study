export interface HorseListItem {
  name: string;
  condition: number;
  color: string;
}

export interface State {
  horseList: Array<HorseListItem>;
}
