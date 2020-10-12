import { createStore,
  Store as VuexStore,
  CommitOptions
} from 'vuex'
import { Mutations, mutations } from './mutations'
import { State, state } from './state'

export const store = createStore({
  state,
  mutations
})

export type Store = Omit<
  VuexStore<State>,
  'commit'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}

export function useStore() {
  return store as Store
}