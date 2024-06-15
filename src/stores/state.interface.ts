export interface Horse {
  name: string;
  condition: number;
  color: string;
}

export interface State {
  horseList: Array<Horse>;
  race: Race;
}
interface Result {
  position: number;
  horse: Horse;
}
export interface Run {
  done: boolean;
  type: RunType;
  name: string;
  result: Result[];
  participants: Participant[];
}
interface Participant {
  horse: Horse;
  position: number;
}

interface Race {
  runs: Run[];
  participants: Participant[];
}

export type RunType = "1200m" | "1400m" | "1600m" | "1800m" | "2000m" | "2200m";
