<template>
  <div class="container">
    <commands-atom />
    <commands-bond />
    <commands-polyedra v-if="solidType !== 'molecular'" />
    <commands-toggles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommandsAtom from "./Commands.Atom.vue";
import CommandsBond from "./Commands.Bond.vue";
import CommandsPolyedra from "./Commands.Polyedra.vue";
import CommandsToggles from "./Commands.Toggles.vue";
import { mapState } from "pinia";
import { useStore } from "../store/state";


export default defineComponent({
  name: "TabCommands",
  components: {
    CommandsAtom,
    CommandsBond,
    CommandsPolyedra,
    CommandsToggles
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useStore, ["solidType"])
  },
  methods: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  flex: 1 1;
}
</style>
