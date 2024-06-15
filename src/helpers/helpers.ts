import { RunType } from "@src/stores/state.interface";

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
] as const;

function generateHorseName() {
  const nameArr = [...horseNames];
  const name = horseNames[Math.round(Math.random() * horseNames.length)];
  const remainingHorseNames = nameArr.filter((item) => item !== name);
  const surname =
    remainingHorseNames[Math.round(Math.random() * horseNames.length)];

  return name + " " + surname;
}

function randomCondition() {
  const condition = Math.round(Math.random() * 100);
  return condition > 50 ? condition : condition + 50; // to make it more competitive :)
}
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function generateHorse() {
  return {
    name: generateHorseName(),
    condition: randomCondition(),
    color: randomColor(),
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

export function pickRandomElements<T>(array: T[], n: number): T[] {
  if (n > array.length) {
    throw new Error(
      "The number of elements to pick is greater than the array length",
    );
  }
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, n);
}
