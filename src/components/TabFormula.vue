<template>
  <div class="container">
    <formula-restrict />
    <formula-planes />
    <formula-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormulaRestrict from "./Formula.Restrict.vue";
import FormulaPlanes from "./Formula.Planes.vue";
import FormulaTable from "./Formula.Table.vue";

export default defineComponent({
  name: "TabFormula",
  components: {
    FormulaRestrict,
    FormulaPlanes,
    FormulaTable
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  flex: 1 1;
}
</style>
