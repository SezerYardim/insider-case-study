import { Run } from "@src/stores/state.interface";

export interface ProgramListProps {
  label: string;
  labelClass: HTMLParagraphElement["className"];
  runs: Run[];
}
