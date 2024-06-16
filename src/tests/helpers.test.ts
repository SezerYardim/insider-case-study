import {
  ELEMENTS_COUNT_EXCEEDS_ARRAY_LENGTH_ERROR,
  createColorNameGenerator,
  createHorseNameGenerator,
  getOrdinalSuffix,
  pickRandomElements,
  randomCondition,
  shuffleArray,
} from "@src/helpers/helpers";
import { describe, expect, it, test } from "vitest";

test("generateHorseName function to generate 20 unique random names", () => {
  const generateHorseName = createHorseNameGenerator();
  const horseArray = Array(20).fill(undefined).map(generateHorseName);
  const uniqueHorse = new Set(horseArray);
  expect(uniqueHorse).toHaveLength(horseArray.length);
});

test("generatecolorName function to generate 20 unique random colors", () => {
  const colorArray = Array(20).fill(undefined).map(createColorNameGenerator);
  const uniqueColor = new Set(colorArray);
  expect(uniqueColor).toHaveLength(colorArray.length);
});

describe("getOrdinalSuffix function", () => {
  it("to return 1st", () => {
    expect(getOrdinalSuffix(1)).toBe("1st");
  });
  it("to return 2nd", () => {
    expect(getOrdinalSuffix(2)).toBe("2nd");
  });
  it("to return 3rd", () => {
    expect(getOrdinalSuffix(3)).toBe("3rd");
  });
  it("to return 4th", () => {
    expect(getOrdinalSuffix(4)).toBe("4th");
  });
  it("to return  11th", () => {
    expect(getOrdinalSuffix(11)).toBe("11th");
  });
  it("to return 12th", () => {
    expect(getOrdinalSuffix(12)).toBe("12th");
  });
  it("to return 13th", () => {
    expect(getOrdinalSuffix(13)).toBe("13th");
  });
  it("to return 129th", () => {
    expect(getOrdinalSuffix(129)).toBe("129th");
  });
});

test("shuffleArray function to shuffle the array", () => {
  const generateColorName = createColorNameGenerator();
  const colorArray = Array(20).fill(undefined).map(generateColorName);
  const shuffled = shuffleArray(colorArray);
  expect(shuffled).toHaveLength(colorArray.length);
  expect(shuffled).not.toEqual(colorArray);
});

describe("pickRandomElements function", () => {
  const arr = ["a", "b", "c", "d", "e"];
  it("to return 2 random elements from an array", () => {
    const pickTwoRandom = pickRandomElements(arr, 2);
    expect(pickTwoRandom.length).toBe(2);
    expect(arr).toEqual(expect.arrayContaining(pickTwoRandom));
  });

  it("to throw ELEMENTS_COUNT_EXCEEDS_ARRAY_LENGTH_ERROR", () => {
    const pickRandomElementsExceeds = () => pickRandomElements(arr, 8);
    expect(pickRandomElementsExceeds).toThrow(
      ELEMENTS_COUNT_EXCEEDS_ARRAY_LENGTH_ERROR
    );
  });
  it("to return 0 lengh", () => {
    expect(pickRandomElements(arr, 0)).toHaveLength(0);
  });
});

describe("randomCondition function", () => {
  it("to be between 1-100", () => {
    for (let i = 0; i < 1000; i++) {
      const condition = randomCondition();
      expect(condition).toBeGreaterThanOrEqual(1);
      expect(condition).toBeLessThanOrEqual(100);
    }
  });
});
