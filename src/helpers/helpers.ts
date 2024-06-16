import { RunType } from "@src/stores/state.interface";

export function createHorseNameGenerator() {
  const horseNames = [
    "Ada",
    "Lovelace",
    "Grace",
    "Hopper",
    "Margaret",
    "Hamilton",
    "Joan",
    "Clarke",
    "John",
    "Doe",
  ] as const;

  const uniqueHorseNames: string[] = [];

  for (let i = 0; i < horseNames.length; i++) {
    for (let j = 0; j < horseNames.length; j++) {
      if (i !== j) {
        uniqueHorseNames.push(`${horseNames[i]} ${horseNames[j]}`);
      }
    }
  }

  for (let i = uniqueHorseNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueHorseNames[i], uniqueHorseNames[j]] = [
      uniqueHorseNames[j],
      uniqueHorseNames[i],
    ];
  }

  let index = 0;

  return function generateHorseName() {
    if (index >= uniqueHorseNames.length) {
      throw new Error("All unique horse names have been generated");
    }
    return uniqueHorseNames[index++];
  };
}

export type colors =
  | "Yellow"
  | "Blue"
  | "Red"
  | "Green"
  | "Orange"
  | "Cyan"
  | "Purple"
  | "Gray"
  | "Brown"
  | "Pink"
  | "Maroon"
  | "Olive"
  | "Teal"
  | "Navy"
  | "Lime"
  | "Magenta"
  | "Apricot"
  | "Beige"
  | "Mint"
  | "Lavender";

export const colorCodes: Record<colors, string> = {
  Yellow: "#ffe119",
  Blue: "#4363d8",
  Red: "#e6194B",
  Green: "#3cb44b",
  Orange: "#f58231",
  Cyan: "#42d4f4",
  Purple: "#911eb4",
  Gray: "#a9a9a9",
  Brown: "#9A6324",
  Pink: "#fabed4",
  Maroon: "#800000",
  Olive: "#808000",
  Teal: "#469990",
  Navy: "#000075",
  Lime: "#bfef45",
  Magenta: "#f032e6",
  Beige: "#fffac8",
  Apricot: "#ffd8b1",
  Mint: "#aaffc3",
  Lavender: "#dcbeff",
};

const generateHorseName = createHorseNameGenerator();

export function randomCondition() {
  const condition = Math.floor(Math.random() * 100) + 1;
  return condition;
}

function liftConditionIfLessThanFifty() {
  const condition = randomCondition();
  return condition > 50 ? condition : condition + 50; // to make it more competitive :)
}

export function generateHorse(): {
  name: string;
  condition: number;
  color: colors;
} {
  return {
    name: generateHorseName(),
    condition: liftConditionIfLessThanFifty(),
    color: generateColorName(),
  };
}

export const runs: RunType[] = [
  "1200m",
  "1400m",
  "1600m",
  "1800m",
  "2000m",
  "2200m",
];

export function getOrdinalSuffix(n: number): string {
  if (n === 11 || n === 12 || n === 13) {
    return n + "th";
  }

  switch (n % 10) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
    default:
      return n + "th";
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export const ELEMENTS_COUNT_EXCEEDS_ARRAY_LENGTH_ERROR = new Error(
  "The number of elements to pick is greater than the array length"
);

export function pickRandomElements<T>(array: T[], n: number): T[] {
  if (n > array.length) {
    throw ELEMENTS_COUNT_EXCEEDS_ARRAY_LENGTH_ERROR;
  }
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, n);
}

export function createColorNameGenerator() {
  const colors = [
    "Yellow",
    "Blue",
    "Red",
    "Green",
    "Orange",
    "Cyan",
    "Purple",
    "Gray",
    "Brown",
    "Pink",
    "Maroon",
    "Olive",
    "Teal",
    "Navy",
    "Lime",
    "Magenta",
    "Apricot",
    "Beige",
    "Mint",
    "Lavender",
  ] as const;

  const uniqueColorNames: colors[] = [];

  for (let i = 0; i < colors.length; i++) {
    uniqueColorNames.push(`${colors[i]}`);
  }

  for (let i = uniqueColorNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueColorNames[i], uniqueColorNames[j]] = [
      uniqueColorNames[j],
      uniqueColorNames[i],
    ];
  }

  let index = 0;

  return function generateColorName(): colors {
    if (index >= uniqueColorNames.length) {
      throw new Error("All unique color names have been generated");
    }
    return uniqueColorNames[index++];
  };
}

const generateColorName = createColorNameGenerator();
