import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/state'

declare module '@vue/runtime-core' {
  // Declare your own store states.

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
