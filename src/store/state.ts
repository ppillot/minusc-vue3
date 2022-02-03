import { defineStore, acceptHMRUpdate } from 'pinia'
import { MinUScFile } from '../utils/files'

import { AtomDisplay,
    HBondDisplay,
    BondDisplay,
    PolyhedraDisplay,
    BottomFrameContent,
    SolidType,
    UnitcellProp,
    FormulaRestrictedView,
    MinuscMode,
    FormulaPlaneView,
    TAtomCountSet, AtomicSymbol, AtomProps
  } from '../utils/types'

export interface State {
  fileName: string,
  initScript: string,
  name: string,
  solidType: SolidType,
  atomDisplay: AtomDisplay,
  bondDisplay: BondDisplay,
  hbondDisplay: HBondDisplay,
  polyhedraDisplay: PolyhedraDisplay,
  showAxis: boolean,
  showCharges: boolean,
  backgroundIsDark: boolean,
  isLoading: boolean,
  formulaIsOn: boolean,
  formulaDisplay: FormulaRestrictedView,
  formulaDisplayPlanes: FormulaPlaneView,
  unitcell: {
    a: number,
    b: number,
    c: number
  },
  unitcellProp: UnitcellProp,
  sidebar: {
    bottomFrame: BottomFrameContent
  },
  atoms: AtomProps[],
  atomsSetsCounts: TAtomCountSet[],
  atomsSetsOccupancies: number[][],
  counter: number
}

export const useStore = defineStore('state', {
  state: () => {
    return {
      fileName: '',
      initScript: '',
      name: 'Quartz',
      solidType: 'ionic' as SolidType,
      atomDisplay: 'bs' as AtomDisplay,
      bondDisplay: 'stick' as BondDisplay,
      hbondDisplay: 'off' as HBondDisplay,
      polyhedraDisplay: 'none' as PolyhedraDisplay,
      showAxis: true,
      showCharges: false,
      backgroundIsDark: true,
      isLoading: false,
      formulaIsOn: false,
      formulaDisplay: { part: 'all' } as FormulaRestrictedView,
      formulaDisplayPlanes: 'none' as FormulaPlaneView,
      unitcell: {
        a: 1,
        b: 1,
        c: 1
      },
      unitcellProp: {
        a: 0,
        b: 0,
        c: 0,
        alpha: 0,
        beta: 0,
        gamma: 0,
        volume: 0
      },
      sidebar: {
        bottomFrame: 'help'
      },
      atoms: [],
      atomsSetsCounts: [{ I: 0, F: 0, E: 0, V: 0 }],
      atomsSetsOccupancies: [[0, 0, 0, 0]],
      counter: 0
    } as State
  },
  actions: {
    toggleScripts() {
      this.sidebar.bottomFrame = this.sidebar.bottomFrame === 'scripts' ? 'help' : 'scripts'
    },
    toggleSettings() {
      this.sidebar.bottomFrame = this.sidebar.bottomFrame === 'settings' ? 'help' : 'settings'
    },
    changeFile(file: MinUScFile) {
      this.isLoading = true
      this.fileName = file.file
      this.name = file.name
      this.solidType = file.type || 'ionic'
      this.initScript = file.script || ''
      this.atomDisplay = 'bs'
      this.bondDisplay = 'stick'
      this.hbondDisplay = 'none'
      this.polyhedraDisplay = 'none'
      this.unitcell = {
        a: 1,
        b: 1,
        c: 1
      }
      this.formulaDisplayPlanes = 'none'
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}