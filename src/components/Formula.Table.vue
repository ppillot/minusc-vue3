<template>
  <div v-if="atoms[0] && atoms[0].symbol !== ''">
    <div class="instructions"></div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th class="part">Intérieur</th>
          <th class="part">Faces</th>
          <th class="part">Arêtes</th>
          <th class="part">Sommets</th>
          <th class="result" @dblclick="autoFill">Total</th>
          <th class="result">Masse</th>
          <th class="result">% (masse)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(atom, index) in listAtoms" :key="index">
          <td class="symbol" :style="{ color: atom.color }">
            <span class="symbol">
              {{ atom.symbol
              }}<sup v-if="atom.charge !== ''">{{ atom.charge }}</sup>
            </span>
          </td>
          <td>
            <input
              v-model="table[index].interior"
              :class="{ invalid: isInvalid[index]['interior'] }"
              @focus="restrictView({ part: 'interior', element: atom.symbol })"
            />
          </td>
          <td>
            <input
              v-model="table[index].face"
              :class="{ invalid: isInvalid[index]['face'] }"
              @focus="restrictView({ part: 'face', element: atom.symbol })"
            />
          </td>
          <td>
            <input
              v-model="table[index].edge"
              :class="{ invalid: isInvalid[index]['edge'] }"
              @focus="restrictView({ part: 'edge', element: atom.symbol })"
            />
          </td>
          <td>
            <input
              v-model="table[index].vertex"
              :class="{ invalid: isInvalid[index]['vertex'] }"
              @focus="restrictView({ part: 'vertex', element: atom.symbol })"
            />
          </td>
          <td>{{ precision(amount[index].total, 1) }}</td>
          <td>{{ precision(amount[index].mass, 1) }}</td>
          <td>{{ precision(amount[index].percent, 1) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="statistics">
      Masse volumique calculée : {{ precision(density, 3) }} g/cm<sup>3</sup>
      <br />
      Compacité calculée : {{ precision(compacity, 1) }} % (volume) <br />
      Pourcentage d'hydratation : {{ precision(hydration, 2) }} % (masse)
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  AtomicSymbol,
  AtomProps,
  FormulaRestrictedView,
  TAtomCountSet
} from "../utils/types";
import { molarMass } from "../utils/atoms";
import { useStore } from "../store/store";
import { MutationTypes } from "../store/mutations-types";

const store = useStore();

interface UnitcellPart {
  interior: string;
  vertex: string;
  edge: string;
  face: string;
}
type UnitcellValidity = {
  interior: boolean;
  vertex: boolean;
  edge: boolean;
  face: boolean;
};
interface Computation {
  total: number;
  mass: number;
  percent: number;
}
type Amount = { total: number; mass: number; percent: number };

function castInt(s: string) {
  const v = parseInt(s);
  return isNaN(v) ? 0 : v;
}

const avogadroNumber = 6.02214076e23;

export default defineComponent({
  name: "FormulaTable",
  data() {
    return {
      table: [] as UnitcellPart[]
    };
  },
  computed: {
    atoms: function() {
      return store.state.atoms;
    },
    counts: function() {
      return store.state.atomsSetsCounts;
    },
    occupancies: function() {
      return store.state.atomsSetsOccupancies;
    },
    isInvalid(): UnitcellValidity[] {
      // there might be a transient state, after atoms has been set and before
      // atomsSetsCounts is, when there is a discrepancy between both tables
      // length. In that case, the following code sets everything to false
      if (this.table.length !== store.state.atomsSetsCounts.length) {
        return this.table.map(() => {
          return {
            interior: false,
            face: false,
            vertex: false,
            edge: false
          };
        });
      }

      return store.state.atomsSetsCounts.map(
        (aCount: TAtomCountSet, i: number) => {
          if (this.table[i] === undefined) {
            return {
              interior: false,
              face: false,
              vertex: false,
              edge: false
            };
          }

          return {
            interior:
              this.table[i].interior === ""
                ? false
                : this.table[i].interior !== aCount.I.toString(),
            face:
              this.table[i].face === ""
                ? false
                : this.table[i].face !== aCount.F.toString(),
            edge:
              this.table[i].edge === ""
                ? false
                : this.table[i].edge !== aCount.E.toString(),
            vertex:
              this.table[i].vertex === ""
                ? false
                : this.table[i].vertex !== aCount.V.toString()
          };
        }
      );
    },
    listAtoms(): { symbol: AtomicSymbol; charge: string; color: string }[] {
      return this.atoms.map((atom: AtomProps) => {
        return {
          symbol: atom.symbol,
          charge:
            atom.charge === 0
              ? ""
              : (Math.abs(atom.charge) === 1 ? "" : Math.abs(atom.charge)) +
                (atom.charge < 0 ? "-" : "+"),
          color: atom.color
        };
      });
    },
    amount: function(): Amount[] {
      let overallMass = 0;
      const amount: { mass: number; total: number }[] = this.table.map(
        (row: UnitcellPart, i: number) => {
          const occupancy =
            this.atoms[i].occupancy === 1 ? [1, 1, 1, 1] : this.occupancies[i];
          const total =
            occupancy[0] * castInt(row.interior) +
            (occupancy[1] * castInt(row.face)) / 2 +
            (occupancy[2] * castInt(row.edge)) / 4 +
            (occupancy[3] * castInt(row.vertex)) / 8;
          const mass = molarMass[this.atoms[i].symbol] * total;
          overallMass += mass;
          return {
            total,
            mass
          };
        }
      );
      return amount.map(row => {
        return {
          ...row,
          percent: (row.mass / overallMass) * 100
        };
      }) as Amount[];
    },
    density(): number {
      const m = this.amount.reduce(
        (
          acc: number,
          row: { total: number; mass: number; percent: number }
        ) => {
          return acc + row.mass;
        },
        0
      );
      return m / (store.state.unitcellProp.volume * avogadroNumber * 10e-25);
    },
    compacity(): number {
      const v = this.amount.reduce(
        (
          acc: number,
          row: { total: number; mass: number; percent: number },
          i: number
        ) => {
          return (
            acc +
            ((row.total * 4) / 3) *
              Math.PI *
              Math.pow(this.atoms[i].ionicRadius, 3)
          );
        },
        0
      );
      return (v / store.state.unitcellProp.volume) * 100;
    },
    hydration: function(): number {
      const ixH = this.atoms.findIndex((atom: AtomProps) => {
        return atom.symbol === "H";
      });
      if (ixH === -1) return 0;

      const nbH = this.amount[ixH].total;
      const totalMass = (this.amount as Amount[]).reduce((sum, el) => {
        return sum + el.mass;
      }, 0);
      return ((nbH * (molarMass["H"] + molarMass["O"])) / totalMass) * 100;
    }
  },
  watch: {
    atoms(cur: AtomProps[]) {
      this.table = cur.map(() => {
        return {
          interior: "",
          vertex: "",
          edge: "",
          face: ""
        };
      });
    }
  },
  methods: {
    restrictView(type: FormulaRestrictedView) {
      store.commit(MutationTypes.RESTRICT_VIEW, type);
      // reset counter after a change in focused cell
      store.commit(MutationTypes.CHANGE_COUNTER, 0);
    },
    autoFill() {
      this.table = store.state.atomsSetsCounts.map(
        (setsCounts: TAtomCountSet) => {
          return {
            interior: setsCounts.I.toString(),
            face: setsCounts.F.toString(),
            edge: setsCounts.E.toString(),
            vertex: setsCounts.V.toString()
          };
        }
      );
    },
    precision(value: number, toPrecision: number) {
      if (isNaN(value)) return "";
      if (Math.floor(value) === value) return value;
      return value.toFixed(toPrecision);
    }
  }
});
</script>

<style scoped>
input {
  width: 2em;
  border: none;
  text-align: center;
  font-size: 0.9em;
  background: none;
}
input.invalid {
  color: #d84315;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 2rem;
}
th {
  user-select: none;
}
th.part {
  font-size: 0.9rem;
  transform: rotate(-30deg) translate(5px, 6px);
  max-width: 40px;
}
th.result {
  font-weight: normal;
  vertical-align: bottom;
  font-size: 0.8rem;
}
td {
  border: 1px solid #ddd;
  text-align: center;
  min-width: 30px;
}
td.symbol {
  border: transparent;
}
span.symbol {
  background: #0c1d24;
  font-weight: bold;
  border-radius: 2px;
  display: inline-block;
  font-size: 1rem;
  width: 40px;
  margin-right: 2px;
}
span.symbol sup {
  font-size: 0.7rem;
}
</style>
