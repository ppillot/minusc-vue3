<template>
  <div class="command__button__set">
    <fieldset>
      <legend>
        Afficher polyèdres
      </legend>
      <div class="button" @click="displayPoly('plain')">
        <img src="img/polyopaq.gif" />
        <br />
        Plein
      </div>
      <div class="button" @click="displayPoly('translucent')">
        <img src="img/polyhedre2.gif" />
        <br />
        Translucide
      </div>
      <div class="button" @click="displayPoly('collapsed')">
        <img src="img/polycoll.gif" />
        <br />
        Creux
      </div>
      <div class="button" @click="displayPoly('none')">
        <img src="img/noir.gif" /> <br />
        Effacer
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PolyhedraDisplay } from "../utils/types";
import { useStore } from "../store/state";
import { mapWritableState } from "pinia";

export default defineComponent({
  name: "CommandsPolyedra",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useStore, ['polyhedraDisplay'])
  },
  methods: {
    displayPoly(type: PolyhedraDisplay) {
      this.polyhedraDisplay = type;
    }
  }
});
</script>
