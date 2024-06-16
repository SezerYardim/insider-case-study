import {
  getOrdinalSuffix,
  pickRandomElements,
  runs,
} from "@src/helpers/helpers";
import { mutations } from "@src/stores/mutations";
import { state } from "@src/stores/state";
import { expect, describe, it } from "vitest";

describe("mutations", () => {
  const mutationMethods = mutations;
  const storeState = state();
  it("setRuns", () => {
    mutationMethods.setRuns(
      storeState,
      runs.map((run, index) => {
        return {
          type: run,
          name: getOrdinalSuffix(index + 1) + " " + "Lap" + " " + run,
          participants: pickRandomElements(storeState.horseList, 10).map(
            (item, index) => ({
              horse: item,
              position: (index + 1).toString(),
              distance: 0,
            })
          ),
        };
      })
    );
    expect(storeState.race.runs[0].name).toBe(
      "1st Lap " + storeState.race.runs[0].type
    );
    expect(storeState.race.runs[1].name).toBe(
      "2nd Lap " + storeState.race.runs[1].type
    );
    expect(storeState.race.runs[2].name).toBe(
      "3rd Lap " + storeState.race.runs[2].type
    );
    expect(storeState.race.runs[3].name).toBe(
      "4th Lap " + storeState.race.runs[3].type
    );
    expect(storeState.race.runs[4].name).toBe(
      "5th Lap " + storeState.race.runs[4].type
    );
    expect(storeState.race.runs[5].name).toBe(
      "6th Lap " + storeState.race.runs[5].type
    );
    storeState.race.runs.forEach((run) => {
      expect(run.participants).toHaveLength(10);
    });
  });

  it("setRunIndex", () => {
    mutationMethods.setRunIndex(storeState, 2);
    expect(storeState.race.runIndex).toBe(2);
  });

  it("setActiveRun", () => {
    mutationMethods.setActiveRun(
      storeState,
      storeState.race.runs[storeState.race.runIndex]
    );
    expect(storeState.race.activeRun).toEqual(storeState.race.runs[2]);
  });
  it("setActiveInterals", () => {
    const intervals = Array(10)
      .fill(undefined)
      .map(() => setInterval(() => undefined, 100));
    mutationMethods.setActiveIntervals(storeState, intervals);
    expect(storeState.race.activeIntervals).toHaveLength(10);
    intervals.forEach(clearInterval);
  });
});
