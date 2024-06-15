import { Run } from "@src/stores/state.interface";
import { ColumnProps } from "primevue/column";

export interface ProgramItemProps {
  run: Run;
  columnDefinitions: Pick<ColumnProps, "header" | "field">[];
}
