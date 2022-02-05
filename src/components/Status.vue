<template>
  <div class="status">
    <span class="title">{{ name }}</span>
    <div class="unitcell__control">
      Afficher mailles: a
      &times;<select v-model="a">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      b
      &times;<select v-model="b">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      c
      &times;<select v-model="c">
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
import { mapWritableState } from "pinia";
import { atomName } from "../utils/atoms";
import { AtomicSymbol, AtomProps } from "../utils/types";

import { useStore } from "../store/state";


export default defineComponent({
  name: "Status",
  computed: {
    ...mapWritableState(useStore, ["name", "unitcell", "atoms"]),
    a: {
      get: function(): number {
        return this.unitcell.a;
      },
      set: function(newVal: string) {
        this.unitcell.a = parseInt(newVal);
      }
    },
    b: {
      get: function(): number {
        return this.unitcell.b;
      },
      set: function(newVal: string) {
        this.unitcell.b = parseInt(newVal);
      }
    },
    c: {
      get: function(): number {
        return this.unitcell.c;
      },
      set: function(newVal: string) {
        this.unitcell.c = parseInt(newVal);
      }
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
  font-weight: 500;
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
  max-width: 350px;
  select {
    margin-right: 0.8rem;
    margin-left: 2px;
  }
}
</style>
