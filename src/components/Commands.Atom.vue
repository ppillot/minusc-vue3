<template>
  <div class="command__button__set">
    <fieldset>
      <legend>
        Afficher atomes
      </legend>
      <div class="button" @click="displayAtom('sphere')">
        <img src="img/cpk100pc.gif" />
        <br />
        Sphères
      </div>
      <div class="button" @click="displayAtom('bs')">
        <img src="img/cpk20pc.gif" /> <br />
        Sphères 20%
      </div>
      <div class="button" @click="displayAtom('none')">
        <img src="img/noir.gif" /> <br />
        Effacer
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AtomDisplay } from "../utils/types";
import { useStore } from "../store/store";
import { MutationTypes } from "../store/mutations-types";

const store = useStore();

export default defineComponent({
  name: "CommandsAtom",
  data() {
    return {};
  },
  computed: {},
  methods: {
    displayAtom(type: AtomDisplay) {
      store.commit(MutationTypes.ATOM_DISPLAYED, type);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.command__button__set {
  fieldset {
    border: 1px solid #cfd8dc;
    border-radius: 2px;
    padding: 0 0.7rem;
    font-size: 0.9rem;
  }
  .button {
    display: inline-block;
    font-size: 11px;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
    img {
      height: 40px;
      width: 40px;
      border: none;
      border-radius: 3px;
      box-shadow: 1px 1px 3px #aaa;
    }
  }
}
</style>
