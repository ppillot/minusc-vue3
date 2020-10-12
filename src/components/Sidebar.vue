<template>
  <div class="sidebar">
    <h1>MinUSc</h1>
    <controls />
    <!--<help />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Controls from "./Controls.vue";
// import Help from './Help.vue'

export default defineComponent({
  name: "Sidebar",
  components: {
    Controls // ,
    // Help
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  background: #263338;
  flex: 0 0 310px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
h1 {
  margin: 0.1rem 0.2rem;
  text-align: left;
  color: white;
}
</style>
