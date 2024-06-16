import { actions } from "@src/stores/actions";
import { mutations } from "@src/stores/mutations";
import { state } from "@src/stores/state";
import { describe, expect, it, vi } from "vitest";

describe("actions", () => {
  const storeState = state();
  const storeActions = actions;
  it("generateRace", () => {
    const commit = vi.fn();
    // @ts-ignore vuex actions type doesnt infer the method names so just ignore this line
    storeActions.generateRace({
      commit,
      state: storeState,
    });
    expect(commit).toHaveBeenNthCalledWith(1, "setRuns", expect.anything());
    expect(commit).toHaveBeenNthCalledWith(2, "setResults", expect.anything());
    expect(commit).toHaveBeenNthCalledWith(3, "setRunIndex", expect.anything());
    expect(commit).toHaveBeenNthCalledWith(
      4,
      "setActiveRun",
      expect.anything()
    );
    expect(commit).toHaveBeenNthCalledWith(
      5,
      "setActiveIntervals",
      expect.anything()
    );
  });
  it("startRace", () => {
    const commit = vi.fn();
    const storeMutations = mutations;
    storeMutations.setActiveIntervals(
      storeState,
      Array(10)
        .fill(undefined)
        .map(() => setInterval(() => undefined, 100))
    );

    // @ts-ignore
    storeActions.startRace({ commit, state: storeState });
    expect(commit).toBeCalledTimes(1);
    expect(commit).toHaveBeenNthCalledWith(
      1,
      "setActiveIntervals",
      expect.anything()
    );
    // @ts-ignore
    storeActions.startRace({ commit, state: storeState });
    expect(commit).toBeCalledTimes(2);
    expect(commit).toHaveBeenNthCalledWith(2, "setActiveIntervals", []);
  });
});
