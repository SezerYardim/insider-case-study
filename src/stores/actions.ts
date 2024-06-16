import { ActionTree } from "vuex";
import { Participant, State } from "./state.interface";
import {
  getOrdinalSuffix,
  pickRandomElements,
  runs,
} from "@src/helpers/helpers";

export const actions: ActionTree<State, State> = {
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
              position: (index + 1).toString(),
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
    state.race.activeIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    commit("setActiveIntervals", []);
  },
  startRace: async ({ state, commit }) => {
    if (state.race.activeIntervals.length) {
      state.race.activeIntervals.forEach((interval) => {
        clearInterval(interval);
      });
      commit("setActiveIntervals", []);
      return;
    }
    if (!state.race.activeRun?.participants.some(Boolean)) return;
    let position = 0;
    const racePromises = state.race.activeRun.participants.map<
      Promise<Participant>
    >((item) => {
      const finishPromise: Promise<Participant> = new Promise((resolve) => {
        const runHorse = () => {
          if (item.distance < 90) {
            if (item.horse) {
              item.distance += item.horse.condition / 25;
            }
          } else {
            const participant = { ...item, position: position.toString() };
            clearInterval(raceInterval);
            state.race.results[state.race.runIndex].participants[position] = {
              ...participant,
              position:
                position !== undefined ? (++position).toString() : undefined,
            };
            resolve({ ...participant, position: position.toString() });
          }
        };
        runHorse();
        const raceInterval = setInterval(runHorse, 200);
        commit("setActiveIntervals", [
          ...state.race.activeIntervals,
          raceInterval,
        ]);
      });
      return finishPromise;
    });
    Promise.all(racePromises).then(() => {
      if (state.race.runIndex > 4) {
        return;
      } else {
        commit("setRunIndex", state.race.runIndex + 1);
        commit("setActiveRun", state.race.runs[state.race.runIndex]);
        commit("setActiveIntervals", []);
      }
    });
  },
  clearIntervalsIfExist({ state, commit }) {
    if (state.race.activeIntervals.length) {
      state.race.activeIntervals.forEach((interval) => {
        clearInterval(interval);
      });
      commit("setActiveIntervals", []);
      return true;
    }
  },
};
