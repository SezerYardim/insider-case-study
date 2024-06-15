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
    return {
      horseList: Array(20)
        .fill(void 0)
        .map(() => generateHorse()),
      race: {
        runs: runs.map((run) => ({
          name: "",
          type: run,
          participants: [],
        })),
        results: [],
        activeRun: null,
        runIndex: 0,
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
              }),
            ),
          };
        }),
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
        })),
      );
      commit("setActiveRun", state.race.runs[state.race.runIndex]);
    },
    startRace: async ({ state, commit }) => {
      if (!state.race.activeRun) return;
      let position = 0;
      const racePromises = state.race.activeRun.participants.map<
        Promise<Participant>
      >((item) => {
        return new Promise((resolve) => {
          const raceInterval = setInterval(() => {
            if (item.distance < 90) {
              if (item.horse) {
                item.distance += item.horse.condition / 100;
              }
            } else {
              const participant = { ...item, position };
              clearInterval(raceInterval);
              state.race.results[state.race.runIndex].participants[position] = {
                ...participant,
                position: ++position,
              };
              resolve({ ...participant, position: position });
            }
          }, 100);
        });
      });
      Promise.all(racePromises).then(() => {
        commit("setRunIndex", state.race.runIndex + 1);
        commit("setActiveRun", state.race.runs[state.race.runIndex]);
      });
    },
  },
});

export function useAppStore() {
  return useStore(storeKey);
}
