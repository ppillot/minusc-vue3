<template>
  <div class="command__button__set">
    <fieldset>
      <legend>
        Activer/Désactiver
      </legend>
      <div class="button" @click="toggleAxis">
        <img src="img/axes.gif" />
        <br />
        Axes
      </div>
      <div class="button" @click="toggleCharges">
        <img src="img/plus_moins.png" />
        <br />
        Charges
      </div>
      <div class="button" @click="toggleScripts">
        <img src="img/form_text.gif" />
        <br />
        Scripts
      </div>
      <div class="button" @click="toggleBgColor">
        <img src="img/contrast.png" />
        <br />
        Fond
      </div>
      <div class="button" @click="toggleSettings">
        <img src="img/reglages.png" />
        <br />
        Réglages
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/store";
import { MutationTypes } from "../store/mutations-types";

const store = useStore();

export default defineComponent({
  name: "CommandsToggles",
  data() {
    return {};
  },
  methods: {
    toggleAxis() {
      store.commit(MutationTypes.TOGGLE_AXIS, undefined);
    },
    toggleCharges() {
      store.commit(MutationTypes.TOGGLE_CHARGES, undefined);
    },
    toggleScripts() {
      store.commit(MutationTypes.TOGGLE_SCRIPTS, undefined);
    },
    toggleBgColor() {
      store.commit(MutationTypes.TOGGLE_BGCOLOR, undefined);
    },
    toggleSettings() {
      store.commit(MutationTypes.TOGGLE_SETTINGS, undefined);
    }
  }
});
</script>
