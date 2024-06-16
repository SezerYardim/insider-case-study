import { InjectionKey } from "vue";
import { Store, createStore, useStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import { State } from "./state.interface";

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
  actions,
});

export function useAppStore() {
  return useStore(storeKey);
}
