export type AtomDisplay = 'bs'|'sphere'|'none'
export type BondDisplay = 'stick'|'wireframe'|'none'
export type SolidType = 'metal'|'ionic'|'molecular'|'covalent'
export type HBondDisplay = 'hbond'|'none'
export type PolyhedraDisplay = 'translucent'|'plain'|'collapsed'|'none'
export type BottomFrameContent = 'help'|'scripts'|'settings'
export interface UnitcellProp {
    a: number
    b: number
    c: number
    alpha: number
    beta: number
    gamma: number
    volume: number
  }
export interface AtomProps {
  charge: number,
  color: string,
  ionicRadius: number,
  occupancy: number,
  symbol: AtomicSymbol,
  unitVolume: number,
  unitCharge: number,
  unitNb: number,
  unitMass: number
}
export interface FormulaRestrictedView {
  part: 'interior'|'face'|'edge'|'vertex'|'all',
  element?: AtomicSymbol|'all'
}
export type FormulaPlaneView = 'none'|'all'|'back'
export type MinuscMode = 'regular'|'formula'
export type AtomicSymbol = 'H'|'He'|'Li'|'Be'|'B'|'C'|'N'|'O'|'F'|'Ne'|'Na'|
  'Mg'|'Al'|'Si'|'P'|'S'|'Cl'|'Ar'|'K'|'Ca'|'Sc'|'Ti'|'V'|'Cr'|'Mn'|'Fe'|'Co'|
  'Ni'|'Cu'|'Zn'|'Ga'|'Ge'|'As'|'Se'|'Br'|'Kr'|'Rb'|'Sr'|'Y'|'Zr'|'Nb'|'Mo'|
  'Tc'|'Ru'|'Rh'|'Pd'|'Ag'|'Cd'|'In'|'Sn'|'Sb'|'Te'|'I'|'Xe'|'Cs'|'Ba'|'Hf'|
  'Ta'|'W'|'Re'|'Os'|'Ir'|'Pt'|'Au'|'Hg'|'Tl'|'Pb'|'Bi'|'Po'|'At'|'Rn'|'Fr'|
  'Ra'|'Rf'|'Db'|'Sg'|'Bh'|'Hs'|'Mt'|'Ds'|'Rg'|'La'|'Ce'|'Pr'|'Nd'|'Pm'|'Sm'|
  'Eu'|'Gd'|'Tb'|'Dy'|'Ho'|'Er'|'Tm'|'Yb'|'Lu'|'Ac'|'Th'|'Pa'|'U'|'Np'|'Pu'|
  'Am'|'Cm'|'Bk'|'Cf'|'Es'|'Fm'|'Md'|'No'|'Lr'

  export type TAtomCountSet = {
    I: number,
    F: number,
    E: number,
    V: number
  }