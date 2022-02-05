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
  border-radius: 5px;
  padding-top: 5px;
}
ul.tabs {
  flex: 0 0;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  li {
    flex: 1 1 auto;
    text-align: center;
    border-radius: 4px 4px 0 0;
    color: white;
    line-height: 2.4em;
    cursor: pointer;
    &.active {
      background: #39464c;
      font-weight: 500;
    }
  }
}
.tab__content {
  flex: 1 1;
  background: #39464c;
  border-radius: 0 0 4px 4px;
  & > div {
    display: none;
    &.active {
      display: flex;
    }
  }
  overflow: auto;
}
</style>
