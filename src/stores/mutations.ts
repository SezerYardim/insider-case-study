import { Participant, Run, State } from "./state.interface";

export const mutations = {
  setActiveRun(state: State, payload: Run) {
    state.race.activeRun = payload;
  },
  setRunIndex(state: State, runIndex: number) {
    state.race.runIndex = runIndex;
  },
  setRuns(state: State, runs: Run[]) {
    state.race.runs = runs;
  },
  setResults(state: State, results: Run[]) {
    state.race.results = results;
  },
  start(state: State, payload: { participants: Participant[] }) {
    if (!state.race.activeRun) return;
    state.race.activeRun.participants = payload.participants;
  },
  setActiveIntervals(state: State, payload: NodeJS.Timeout[]) {
    state.race.activeIntervals = payload;
  },
};
