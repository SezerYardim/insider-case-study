import { generateHorse, getOrdinalSuffix, runs } from "@src/helpers/helpers";

export const state = () => {
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
};
