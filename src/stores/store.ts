import {
  generateHorse,
  getOrdinalSuffix,
  pickRandomElements,
  runs,
} from "@src/helpers/helpers";
import { InjectionKey } from "vue";
import { Store, createStore, useStore } from "vuex";
import { Participant, Race, Run, State } from "./state.interface";

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    const initialRuns = runs.map((run, index) => ({
      name: getOrdinalSuffix(index + 1) + " " + "Lap" + " " + run,
      type: run,
      participants: Array(10).fill(undefined),
    }));
    return {
      horseList: Array(20)
        .fill(void 0)
        .map(() => generateHorse()),
      race: {
        runs: initialRuns,
        results: initialRuns,
        activeRun: initialRuns[0],
        runIndex: 0,
        activeIntervals: [],
      },
    };
  },
  mutations: {
    setActiveRun(state, payload: Run) {
      state.race.activeRun = payload;
    },
    setRunIndex(state, runIndex: number) {
      state.race.runIndex = runIndex;
    },
    setRuns(state, runs: Run[]) {
      state.race.runs = runs;
    },
    setResults(state, results: Run[]) {
      state.race.results = results;
    },
    setRace(state, race: Race) {
      state.race = race;
    },
    start(state, payload: { participants: Participant[] }) {
      if (!state.race.activeRun) return;
      state.race.activeRun.participants = payload.participants;
    },
    setActiveIntervals(state, payload: NodeJS.Timeout[]) {
      state.race.activeIntervals = payload;
    },
  },
  actions: {
    generateRace({ state, commit }) {
      commit(
        "setRuns",
        runs.map((run, index) => {
          return {
            type: run,
            name: getOrdinalSuffix(index + 1) + " " + "Lap" + " " + run,
            participants: pickRandomElements(state.horseList, 10).map(
              (item, index) => ({
                horse: item,
                position: index + 1,
                distance: 0,
              })
            ),
          };
        })
      );
      commit(
        "setResults",
        state.race.runs.map((item) => ({
          ...item,
          participants: item.participants.map(() => ({
            position: undefined,
            horse: undefined,
            distance: 0,
          })),
        }))
      );
      commit("setRunIndex", 0);
      commit("setActiveRun", state.race.runs[state.race.runIndex]);
    },
    startRace: async ({ state, commit }) => {
      if (state.race.activeIntervals.length) {
        state.race.activeIntervals.forEach((interval) => {
          clearInterval(interval);
        });
        commit("setActiveIntervals", []);
        return;
      }
      if (!state.race.activeRun) return;
      let position = 0;
      const racePromises = state.race.activeRun.participants.map<
        Promise<Participant>
      >((item) => {
        const finishPromise: Promise<Participant> = new Promise((resolve) => {
          const raceInterval = setInterval(() => {
            if (item.distance < 90) {
              if (item.horse) {
                item.distance += item.horse.condition / 25;
              }
            } else {
              const participant = { ...item, position };
              clearInterval(raceInterval);
              state.race.results[state.race.runIndex].participants[position] = {
                ...participant,
                position: position ? (++position).toString() : undefined,
              };
              resolve({ ...participant, position: position.toString() });
            }
          }, 100);
          commit("setActiveIntervals", [
            ...state.race.activeIntervals,
            raceInterval,
          ]);
        });
        return finishPromise;
      });
      Promise.all(racePromises).then(() => {
        if (state.race.runIndex > 5) {
          return;
        } else {
          commit("setRunIndex", state.race.runIndex + 1);
          commit("setActiveRun", state.race.runs[state.race.runIndex]);
          commit("setActiveIntervals", []);
        }
      });
    },
  },
});

export function useAppStore() {
  return useStore(storeKey);
}
