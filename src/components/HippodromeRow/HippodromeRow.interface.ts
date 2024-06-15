import { HippodromeNumberProps } from "@components/HippodromeNumber/HippodromeNumber.interface";
import { colors } from "@src/helpers/helpers";

export interface HippodromeRowProps extends HippodromeNumberProps {
  distance: number;
  color?: colors;
}
