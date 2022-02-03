<template>
  <div class="command__button__set">
    <fieldset>
      <legend>
        Afficher liaisons
      </legend>
      <div class="button" @click="displayBond('stick')">
        <img src="img/baton.gif" />
        <br />
        Bâtonnets
      </div>
      <div class="button" @click="displayBond('wireframe')">
        <img src="img/fil2fer.gif" />
        <br />
        Fil de fer
      </div>
      <div
        class="button"
        v-if="solidType === 'molecular'"
        @click="displayHBond('hbond')"
      >
        <img src="img/hbond.png" />
        <br />
        Liaison H
      </div>
      <div class="button" @click="displayBond('none')">
        <img src="img/noir.gif" /> <br />
        Effacer
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { BondDisplay, HBondDisplay } from "../utils/types";
import { mapWritableState } from "pinia";
import { useStore } from "../store/state";

export default defineComponent({
  name: "CommandsBond",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useStore, ['bondDisplay', 'hbondDisplay', "solidType"])
  },
  methods: {
    displayBond(type: BondDisplay) {
      this.bondDisplay = type;
    },
    displayHBond(type: HBondDisplay) {
      this.hbondDisplay = type;
    }
  }
});
</script>
