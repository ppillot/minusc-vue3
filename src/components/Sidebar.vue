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
  flex: 0 0 340px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
h1 {
  margin: 0.1rem 0.2rem;
  text-align: left;
  color: white;
  font-size: 2.5em;
  line-height: 1.5em;
  font-weight: 300;
}
</style>
