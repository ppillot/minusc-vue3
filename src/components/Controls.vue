<template>
  <div class="controls">
    <ul class="tabs" @click="activate">
      <li data-tab="files" :class="{ active: activeTab == 'files' }">
        Fichiers
      </li>
      <li data-tab="commands" :class="{ active: activeTab == 'commands' }">
        Commandes
      </li>
      <li data-tab="formula" :class="{ active: activeTab == 'formula' }">
        Formule
      </li>
    </ul>
    <div class="tab__content">
      <div :class="{ active: activeTab == 'files' }">
        <tab-files />
      </div>
      <div :class="{ active: activeTab == 'commands' }">
        <tab-commands />
      </div>
      <div :class="{ active: activeTab == 'formula' }">
        <tab-formula />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabFiles from "./TabFiles.vue";
import TabCommands from "./TabCommands.vue";
import TabFormula from "./TabFormula.vue";
import { useStore } from "../store/state";
import { mapWritableState } from "pinia";

export default defineComponent({
  name: "Controls",
  components: {
    TabFiles,
    TabCommands,
    TabFormula
  },
  data() {
    return {
      activeTab: "commands"
    };
  },
  computed: {
    ...mapWritableState(useStore, ['formulaIsOn'])
  },
  methods: {
    activate(ev: MouseEvent) {
      const tabType = (ev.target as HTMLElement).dataset.tab;
      if (!tabType) return;
      this.activeTab = tabType;
      if (tabType === "formula") {
        this.formulaIsOn = true;
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.controls {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
ul.tabs {
  flex: 0 0;
  margin: 0;
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-width: 0 0 1px 0;
    border-color: #ced8dc;
    border-style: solid;
    margin: 0 0.4rem -1px 0;
    border-radius: 2px 2px 0 0;
    background: #eaeff1;
    cursor: pointer;
    &.active {
      border-bottom-color: white;
      background: white;
      color: dodgerblue;
      opacity: 0.99; // this overlays this div over the tab shadow
    }
  }
}
.tab__content {
  flex: 1 1;
  background: white;
  padding: 0.4rem;
  border-radius: 2px 2px 0 0;
  box-shadow: -2px 0 3px #999;
  & > div {
    display: none;
    &.active {
      display: flex;
    }
  }
  overflow: auto;
}
</style>
