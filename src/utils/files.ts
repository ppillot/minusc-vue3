/**
* @author Paul Pillot
* Files and their properties
*/
export interface MinUScFile {
    name: string
    file: string
    script?: string
    aliases?: string[]
    type?: 'metal'|'molecular'|'ionic'|'covalent'
}

const files: MinUScFile[] = [
  { name: 'Actinote',
    'file': 'actinote-9001932.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, calcium, iron) (oxygen); connect 0.1 1.0 (hydrogen) (oxygen) '
  },
  { name: 'Albite',
    'file': 'albite.cif',
    aliases: ['Feldspath alcalin'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, aluminum) (oxygen)'
  },
  { name: 'Andalousite',
    'file': 'andalousite-9000715.cif',
    'script': 'connect (*) delete; connect 1.0 2.2 (silicon,aluminium) (oxygen)'
  },
  { name: 'Anorthite',
    'file': 'anorthite.cif',
    aliases: ['Feldspath plagioclase', 'Plagioclase'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, aluminum) (oxygen)'
  },
  { name: 'Anhydrite',
    'file': 'anhydrite-9004096.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (sulfur) (oxygen)'
  },
  { name: 'Antigorite',
    'file': 'antigorite-serpentine-9003103.cif',
    aliases: ['Serpentine'],
    'script': 'connect 1.5 3.0 (_H) (_O) delete'
  },
  { name: 'Apatite',
    'file': 'apatite.cif'
  },
  { name: 'Aragonite',
    'file': 'aragonite-2100187.cif',
    script: 'connect (*) delete; connect 1.0 3.0 (carbon, calcium) (oxygen)'
  },
  { name: 'Argent',
    'file': 'argent.cif',
    type: 'metal'
  },
  { name: 'Augite',
    'file': 'augite.cif',
    aliases: ['Pyroxène (augite)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, magnesium) (oxygen)'
  },
  { name: 'Biotite',
    'file': 'biotite.cif',
    aliases: ['Mica (biotite)'],
    'script': 'connect (potassium) (*) delete;'
  },
  { name: 'Calcite',
    'file': 'calcite.cif',
    'script': ''
  },
  { name: 'Chlorite',
    'file': 'chlorite-9000757.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,magnesium, aluminium) (oxygen); connect 0.2 1.5 (hydrogen) (oxygen)'
  },
  { name: 'Chlorure de Cesium',
    'file': 'chlorure-cesium-9008789.cif',
    aliases: ['CeCl']
  },
  { name: 'Coesite',
    'file': 'coesite.cif'
  },
  { name: 'Diamant',
    'file': 'diamant.cif',
    type: 'covalent'
  },
  { name: 'Diopside',
    'file': 'diopside.cif',
    'script': 'connect (calcium) (*) delete;'
  },
  { name: 'Disthène',
    'file': 'disthene-9000720.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,aluminium) (oxygen)'
  },
  { name: 'Dolomite',
    'file': 'dolomite.cif'
  },
  { name: 'Fayalite',
    'file': 'fayalite.cif',
    aliases: ['Péridot (Fayalite)', 'Olivine (Fayalite)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, iron) (oxygen)'
  },
  { name: 'Fer',
    'file': 'fer-5000217.cif',
    type: 'metal'
  },
  { name: 'Fluorine',
    'file': 'fluorine-1000043.cif'
  },
  { name: 'Forstérite',
    'file': 'forsterite.cif',
    aliases: ['Péridot (forstérite)', 'Olivine (forstérite)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, magnesium) (oxygen)'
  },
  { name: 'Gibbsite',
    'file': 'gibbsite-1200016.cif',
    'script': 'connect 1.5 2.5 (hydrogen) (*) delete'
  },
  { name: 'Glace',
    'file': 'glace.cif',
    'script': 'connect (*) delete; connect 0.1 1.0 (hydrogen) (oxygen);',
    type: 'molecular'
  },
  { name: 'Glaucophane',
    'file': 'glaucophane-9005070.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,magnesium,iron,aluminium) (oxygen); connect 0.2 1.5 (hydrogen) (oxygen)'
  },
  { name: 'Graphite',
    'file': 'graphite.cif',
    type: 'covalent'
  },
  { name: 'Grenat pyrope',
    'file': 'pyrope.cif',
    'script': 'connect(magnesium) (*) delete'
  },
  { name: 'Gypse',
    'file': 'gypse-9013164.cif',
    'script': 'connect (hydrogen) (!OW) delete;'
  },
  { name: 'Halite',
    'file': 'halite.cif',
    aliases: ['Sel (halite)', 'NaCl (halite)', 'Chlorure de Sodium (halite)'],
    'script': 'connect 3 (*) (*)'
  },
  { name: 'Hornblende',
    'file': 'hornblende-9001225.cif',
    aliases: ['Amphibole (hornblende)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,magnesium,iron,aluminium) (oxygen); connect 0.2 1.5 (hydrogen) (oxygen)'
  },
  { name: 'Hydroxyapatite',
    'file': 'hydroxyapatite-9002213.cif',
    aliases: ['Hydroxylapatite', 'Émail (hydroxyapatite)'],
    'script': 'connect (oxygen) (oxygen) delete; connect (hydrogen) (hydrogen) delete',
    type: 'molecular'
  },
  { name: 'Illite',
    'file': 'illite.cif',
    aliases: ['Argile (illite)'],
    'script': 'connect (aluminium) (aluminium) delete'
  },
  { name: 'Jadéite',
    'file': 'jadeite.cif',
    'script': 'connect (sodium) (*) delete'
  },
  { name: 'Kaolinite',
    'file': 'kaolinite-9009234.cif',
    aliases: ['Argile (kaolinite)'],
    'script': 'connect 1.5 3.0 (hydrogen) (oxygen) delete'
  },
  { name: 'Lizardite',
    'file': 'lizardite-9000848.cif'
  },
  { name: 'Magnésiowüstite',
    'file': 'magnesiowustite-9006091.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (_Fe, _Mg) (oxygen)'
  },
  { name: 'Muscovite',
    'file': 'muscovite-9000837.cif',
    aliases: ['Mica (muscovite)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (_Al, _Si) (oxygen); connect 0.0 1.0 (_H) (_O);'
  },
  { name: 'Or',
    'file': 'or.cif',
    type: 'metal'
  },
  { name: 'Orthose',
    'file': 'orthose.cif',
    aliases: ['Feldspath potassique (orthose)'],
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, aluminium) (oxygen)'
  },
  { name: 'Oxalate',
    'file': 'whewellite-2300210.cif',
    aliases: ['whewellite'],
    type: 'molecular'
  },
  { name: 'Permanganate de Potassium',
    file: 'permanganate-potassium-1521179.cif',
    aliases: ['KMnO4']
  },
  { name: 'Perovskite-Bridgmanite',
    'file': 'perovskite-9004008.cif',
    'script': 'connect (*) delete; connect 1.0 2.0 (silicon,magnesium) (oxygen)'
  },
  { name: 'Polonium',
    'file': 'polonium.cif',
    type: 'metal'
  },
  { name: 'Post-Perovskite',
    'file': 'post-perovskite-9009217.cif',
    'script': 'connect (*) delete; connect 1.0 2.0 (silicon,magnesium) (oxygen)'
  },
  { name: 'Pyrite',
    'file': 'pyrite.cif',
    script: '{_S}.ionic = 1.53;'
  },
  { name: 'Ringwoodite',
    'file': 'ringwoodite-9003069.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,magnesium) (oxygen)'
  },
  { name: 'Quartz',
    'file': 'sio2.cif',
    aliases: ['SiO2']
  },
  { name: 'Saccharose',
    'file': 'sucrose.cif',
    aliases: ['Sucre'],
    type: 'molecular'
  },
  { name: 'Sillimanite',
    'file': 'sillimanite-1011204.cif',
    'script': 'connect (*) delete; connect 1.0 2.2 (silicon,aluminium) (oxygen)'
  },
  { name: 'Stishovite',
    'file': 'stishovite-9001283.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon) (oxygen)'
  },
  { name: 'Staurotide',
    'file': 'staurolite-9005341.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon, aluminum) (oxygen)'
  },
  { name: 'Sulfate de cuivre',
    file: 'cuso4-2310620.cif',
    script: 'connect (*) delete; connect 1.0 3.0 (_S, _Cu) (oxygen)',
    aliases: ['CuSO4', 'Chalcocyanite']
  },
  { name: 'Sylvite',
    'file': 'sylvite.cif',
    'script': 'connect 3 (*) (*)'
  },
  { name: 'Vanilline',
    'file': 'vanilline.cif',
    type: 'molecular'
  },
  { name: 'Wadsleyite',
    'file': 'wadsleyite-9002355.cif',
    'script': 'connect (*) delete; connect 1.0 3.0 (silicon,magnesium) (oxygen)'
  },
  { name: 'Wollastonite',
    'file': 'wollastonite.cif',
    'script': 'connect (calcium) (*) delete'
  },
  { name: 'ZnS Blende',
    'file': 'sphalerite-9000107.cif'
  }
]

export default files
