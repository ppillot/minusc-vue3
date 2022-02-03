<template>
  <div class="command__button__set">
    <fieldset>
      <legend>
        Montrer/Cacher limites de maille
      </legend>
      <div class="button--big" @click="planeView('back')">
        <img src="img/planb.png" />
        <br />
        Maille ouverte
      </div>
      <div class="button--big" @click="planeView('all')">
        <img src="img/plans.png" />
        <br />
        Maille fermée
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FormulaPlaneView } from "../utils/types";
import { useStore } from "../store/state";
import { mapWritableState } from "pinia";

export default defineComponent({
  name: "FormulaPlanes",
  computed: {
    ...mapWritableState(useStore, ['formulaDisplayPlanes'])
  },
  methods: {
    planeView(type: FormulaPlaneView) {
      this.formulaDisplayPlanes = type === this.formulaDisplayPlanes
        ? 'none'  // disable if already set
        : type;
    }
  }
});
</script>
