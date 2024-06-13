import { HorseListItem } from "@components/HorseList/HorseList.interface";
import { Store } from "vuex";
import { State } from "./stores/state.interface";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
