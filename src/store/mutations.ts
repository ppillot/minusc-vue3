import { MutationTree } from 'vuex'
import { MutationTypes } from './mutations-types'
import { State } from './state'
import { AtomDisplay,
    HBondDisplay,
    BondDisplay,
    PolyhedraDisplay,
    UnitcellProp,
    FormulaRestrictedView,
    MinuscMode,
    FormulaPlaneView,
    TAtomCountSet,
    AtomProps
  } from '../utils/types'
import { MinUScFile } from '../utils/files'

export type Mutations<S = State> = {
  [MutationTypes.CHANGE_FILE](state: S, payload: MinUScFile): void,
  [MutationTypes.ATOM_DISPLAYED](state: S, payload: AtomDisplay): void,
  [MutationTypes.BOND_DISPLAYED](state: S, payload: BondDisplay): void,
  [MutationTypes.HBOND_DISPLAYED](state: S, style: HBondDisplay): void,
  [MutationTypes.POLYHEDRA_DISPLAYED](state: S, style: PolyhedraDisplay): void,
  [MutationTypes.TOGGLE_AXIS](state: S): void,
  [MutationTypes.TOGGLE_CHARGES](state: S): void,
  [MutationTypes.TOGGLE_SCRIPTS](state: S): void,
  [MutationTypes.TOGGLE_SETTINGS](state: S): void,
  [MutationTypes.TOGGLE_BGCOLOR](state: S): void,
  [MutationTypes.SET_ATOMS](state: S, atoms: AtomProps[]): void,
  [MutationTypes.SET_UNITCELLS](state: S, dimensions: [number, number, number]): void,
  [MutationTypes.LOADING_FINISHED](state: S): void,
  [MutationTypes.SET_UNITCELL_PROP](state: S, prop: UnitcellProp): void,
  [MutationTypes.SET_MODE](state: S, mode: MinuscMode): void,
  [MutationTypes.RESTRICT_VIEW](state: S, view: FormulaRestrictedView): void,
  [MutationTypes.PLANE_VIEW](state: S, mode: FormulaPlaneView): void,
  [MutationTypes.CHANGE_COUNTER](state: S, count: number): void,
  [MutationTypes.SET_ATOM_SETS_COUNTS](state: S, aCounts: TAtomCountSet[]): void,
  [MutationTypes.SET_ATOM_SETS_OCCUPANCIES](state: S, occupancies: number[][]): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.CHANGE_FILE]: function (state, file: MinUScFile) {
        state.isLoading = true
        state.fileName = file.file
        state.name = file.name
        state.solidType = file.type || 'ionic'
        state.initScript = file.script || ''
        state.atomDisplay = 'bs'
        state.bondDisplay = 'stick'
        state.hbondDisplay = 'none'
        state.polyhedraDisplay = 'none'
        state.unitcell = {
          a: 1,
          b: 1,
          c: 1
        }
        state.formulaDisplayPlanes = 'none'
      },
      [MutationTypes.ATOM_DISPLAYED]: function (state, style: AtomDisplay) {
        state.atomDisplay = style
      },
      [MutationTypes.BOND_DISPLAYED]: function (state, style: BondDisplay) {
        state.bondDisplay = style
        if (style === 'none') {
          state.hbondDisplay = 'none'
        }
      },
      [MutationTypes.HBOND_DISPLAYED]: function (state, style: HBondDisplay) {
        state.hbondDisplay = style
      },
      [MutationTypes.POLYHEDRA_DISPLAYED]: function (state, style: PolyhedraDisplay) {
        state.polyhedraDisplay = style
      },
      [MutationTypes.TOGGLE_AXIS]: function (state) {
        state.showAxis = !state.showAxis
      },
      [MutationTypes.TOGGLE_CHARGES]: function (state) {
        state.showCharges = !state.showCharges
      },
      [MutationTypes.TOGGLE_SCRIPTS]: function (state) {
        state.sidebar.bottomFrame = (state.sidebar.bottomFrame === 'scripts')
          ? 'help'
          : 'scripts'
      },
      [MutationTypes.TOGGLE_SETTINGS]: function (state) {
        state.sidebar.bottomFrame = (state.sidebar.bottomFrame === 'settings')
          ? 'help'
          : 'settings'
      },
      [MutationTypes.TOGGLE_BGCOLOR]: function (state) {
        state.backgroundIsDark = !state.backgroundIsDark
      },
      [MutationTypes.SET_ATOMS]: function (state, atoms) {
        state.atoms = atoms
      },
      [MutationTypes.SET_UNITCELLS]: function (state, dimensions: [number, number, number]) {
        state.unitcell = {
          a: dimensions[0],
          b: dimensions[1],
          c: dimensions[2]
        }
      },
      [MutationTypes.LOADING_FINISHED]: function (state) {
        state.isLoading = false
      },
      [MutationTypes.SET_UNITCELL_PROP]: function (state, prop: UnitcellProp) {
        state.unitcellProp = prop
      },
      [MutationTypes.SET_MODE]: function (state, mode: MinuscMode) {
        state.formulaIsOn = (mode === 'formula')
      },
      [MutationTypes.RESTRICT_VIEW]: function (state, view: FormulaRestrictedView) {
        state.formulaDisplay = view
      },
      [MutationTypes.PLANE_VIEW]: function (state, mode: FormulaPlaneView) {
        state.formulaDisplayPlanes = (mode === state.formulaDisplayPlanes)
          ? 'none' // disable if already set
          : mode
      },
      [MutationTypes.CHANGE_COUNTER]: function (state, count: number) {
        state.counter = count
      },
      [MutationTypes.SET_ATOM_SETS_COUNTS]: function (state, aCounts: TAtomCountSet[]) {
        state.atomsSetsCounts = aCounts
      },
      [MutationTypes.SET_ATOM_SETS_OCCUPANCIES]: function (state, occupancies: number[][]) {
        state.atomsSetsOccupancies = occupancies
      }
}