<template>
  <div class="info" :style="visibility">
    <span class="title">{{ name }}</span>
    <ul>
      <li v-for="l in lengths" :key="l[0]">
        {{ l[0] }} = {{ precision(l[1], 1) }} pm
      </li>
      <li v-for="a in angles" :key="a[0]">{{ a[0] }} = {{ a[1] }}°</li>
      <li v-if="formulaIsOn">Compteur : {{ counter }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { UnitcellProp } from "../utils/types";
import { useStore } from "../store/store";

const store = useStore();

export default defineComponent({
  name: "UnitcellInfo",
  computed: {
    ...mapState(["name", "counter", "formulaIsOn"]),
    lengths() {
      const prop = store.state.unitcellProp as UnitcellProp;
      return [
        ["a", prop.a * 100],
        ["b", prop.b * 100],
        ["c", prop.c * 100]
      ];
    },
    angles() {
      const prop = store.state.unitcellProp as UnitcellProp;
      return [
        ["α", prop.alpha],
        ["β", prop.beta],
        ["γ", prop.gamma]
      ];
    },
    visibility() {
      return store.state.unitcellProp.volume === 0
        ? { visibility: "hidden" }
        : { visibility: "visible" };
    }
  },
  methods: {
    precision(value: number, toPrecision: number) {
      if (isNaN(value)) return "";
      return value.toFixed(toPrecision);
    }
  }
});
</script>

<style scoped lang="scss">
.info {
  position: absolute;
  top: 4px;
  left: 6px;
  width: 140px;
  background: rgba(85, 99, 105, 0.4);
  color: white;
  padding: 0.5em;
  border-radius: 3px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
