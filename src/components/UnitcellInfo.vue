<template>
  <div class="info" :style="visibility">
    <div class="title">{{ name }}</div>
    <ul>
      <li v-for="l in lengths" :key="l[0]">
        {{ l[0] }} = {{ precision(l[1], 1) }} pm
      </li>
      <li v-for="a in angles" :key="a[0]">{{ a[0] }}&#x302; = {{ a[1] }}°</li>
      <li v-if="formulaIsOn">Compteur : {{ counter }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useStore } from "../store/state";

export default defineComponent({
  name: "UnitcellInfo",
  computed: {
    ...mapState(useStore, ["name", "counter", "formulaIsOn", "unitcellProp"]),
    lengths(): [string, number][] {
      const prop = this.unitcellProp;
      return [
        ["a", prop.a * 100],
        ["b", prop.b * 100],
        ["c", prop.c * 100]
      ];
    },
    angles(): [string, number][] {
      const prop = this.unitcellProp;
      return [
        ["α", prop.alpha],
        ["β", prop.beta],
        ["γ", prop.gamma]
      ];
    },
    visibility(): {visibility: 'hidden'|'visible'} {
      return this.unitcellProp.volume === 0
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

.title {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

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
