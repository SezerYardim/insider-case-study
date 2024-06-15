import { Store, createStore, useStore } from "vuex";
import { Horse, RunType, State } from "./state.interface";
import { InjectionKey } from "vue";
import {
  generateHorse,
  getOrdinalSuffix,
  pickRandomElements,
  runs,
} from "@src/helpers/helpers";

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      horseList: Array(20)
        .fill(void 0)
        .map(() => generateHorse()),
      race: {
        runs: runs.map((run) => ({
          done: false,
          result: [],
          name: "",
          type: run,
          participants: [],
        })),
        participants: [],
      },
    };
  },
  mutations: {
    generateRace(state) {
      state.race = {
        runs: runs.map((run, index) => ({
          done: false,
          result: [],
          type: run,
          name: getOrdinalSuffix(index + 1) + " " + "Lap" + " " + run,
          participants: pickRandomElements(state.horseList, 10).map(
            (item, index) => ({ horse: item, position: index + 1 })
          ),
        })),
        participants: pickRandomElements(state.horseList, 10).map(
          (item, index) => ({ horse: item, position: index + 1 })
        ),
      };
    },
    finish(state: State, payload: { run: RunType; horse: Horse }) {
      const runToFinish = state.race.runs.find(
        (item) => item.type === payload.run
      );
      if (!runToFinish) return;
      runToFinish.result.push({
        horse: payload.horse,
        position: runToFinish.result.length + 1,
      });
      if (runToFinish.result.length === 10) {
        runToFinish.done = true;
      }
    },
  },
});

export function useAppStore() {
  return useStore(storeKey);
}
