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

export const state:State = {
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
}