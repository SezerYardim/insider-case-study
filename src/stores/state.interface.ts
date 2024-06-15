import { colors } from "@src/helpers/helpers";

export interface Horse {
  name: string;
  condition: number;
  color: colors;
}

export interface State {
  horseList: Array<Horse>;
  race: Race;
}

export interface Run {
  type: RunType;
  name: string;
  participants: Participant[];
}
export interface Participant {
  horse: Horse | undefined;
  position: number | undefined;
  distance: number;
}

export interface Race {
  runs: Run[];
  results: Run[];
  activeRun: Run | null;
  runIndex: number;
}

export type RunType = "1200m" | "1400m" | "1600m" | "1800m" | "2000m" | "2200m";
