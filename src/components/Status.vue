<template>
  <div class="status">
    <span class="title">{{ name }}</span>
    <div class="unitcell__control">
      Afficher mailles: x
      <select v-model="a">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      y
      <select v-model="b">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      z
      <select v-model="c">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <br />
    <span
      class="atom"
      v-for="atom in listAtoms"
      :style="{ color: atom.color }"
      :key="atom.symbol"
    >
      {{ atom.symbol }}<sup v-if="atom.charge !== ''">{{ atom.charge }}</sup>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { atomName } from "../utils/atoms";
import { AtomicSymbol, AtomProps } from "../utils/types";

import { useStore } from "../store/store";
import { MutationTypes } from "../store/mutations-types";

const store = useStore();

export default defineComponent({
  name: "Status",
  computed: {
    ...mapState(["name", "unitcell"]),
    a: {
      get: function(): number {
        return this.unitcell.a;
      },
      set: function(newVal: string) {
        store.commit(MutationTypes.SET_UNITCELLS, [
          parseInt(newVal),
          this.unitcell.b,
          this.unitcell.c
        ]);
      }
    },
    b: {
      get: function(): number {
        return this.unitcell.b;
      },
      set: function(newVal: string) {
        store.commit(MutationTypes.SET_UNITCELLS, [
          this.unitcell.a,
          parseInt(newVal),
          this.unitcell.c
        ]);
      }
    },
    c: {
      get: function(): number {
        return this.unitcell.c;
      },
      set: function(newVal: string) {
        store.commit(MutationTypes.SET_UNITCELLS, [
          this.unitcell.a,
          this.unitcell.b,
          parseInt(newVal)
        ]);
      }
    },

    atoms: function(): AtomProps[] {
      return store.state.atoms as AtomProps[];
    },
    listAtoms(): {
      symbol: AtomicSymbol;
      charge: string;
      name: string;
      color: string;
    }[] {
      return this.atoms.map((atom: AtomProps) => {
        return {
          symbol: atom.symbol,
          charge:
            atom.charge === 0
              ? ""
              : (Math.abs(atom.charge) === 1 ? "" : Math.abs(atom.charge)) +
                (atom.charge < 0 ? "-" : "+"),
          name: atomName[atom.symbol],
          color: atom.color
        };
      });
    }
  }
});
</script>

<style scoped lang="scss">
.status {
  background: #0c1c24;
  flex: 0 0 80px;
  color: white;
  margin: 0 2px 6px 6px;
  padding: 4px 8px;
  border-radius: 4px;
}
.title {
  font-size: 1.6rem;
  font-weight: bold;
}
.atom {
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0 0.2rem;
}
sup {
  font-size: 0.8rem;
}
.unitcell__control {
  float: right;
  max-width: 300px;
}
</style>
