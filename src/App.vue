<template>
  <div id="app">
    <Viewport />
    <Sidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Viewport from "./components/Viewport.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    Viewport
  }
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  display: flex;
  height: 100%;
  background-color: #0c1c24;
}
</style>
