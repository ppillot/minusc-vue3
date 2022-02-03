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
import { useStore } from "../store/state";
import { mapStores } from "pinia";

export default defineComponent({
  name: "CommandsToggles",
  data() {
    return {};
  },
  computed: {
    ...mapStores(useStore)
  },
  methods: {
    toggleAxis() {
      this.stateStore.showAxis = !this.stateStore.showAxis;
    },
    toggleCharges() {
      this.stateStore.showCharges = !this.stateStore.showCharges;
    },
    toggleScripts() {
       this.stateStore.toggleScripts();
    },
    toggleBgColor() {
      this.stateStore.backgroundIsDark = !this.stateStore.backgroundIsDark;
    },
    toggleSettings() {
      this.stateStore.toggleSettings();
    }
  }
});
</script>
