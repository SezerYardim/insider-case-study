import { Store, createStore, useStore as baseUseStore } from "vuex";
import { State } from "./state.interface";
import { InjectionKey } from "vue";

const storeKey: InjectionKey<Store<State>> = Symbol();
export const store = createStore({
  state() {
    return {
      horseList: [
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
        {
          name: "Ada Lovelace",
          condition: 20,
          color: "Blue",
        },
      ],
    };
  },
});

export function useStore() {
  return baseUseStore(storeKey);
}
