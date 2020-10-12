<template>
  <div class="help">
    Aide
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Help"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.help {
  background: chartreuse;
  flex: 0 0 200px;
  padding: 0.5 rem;
}
</style>
