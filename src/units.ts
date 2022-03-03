const units = new Map<string, string[]>([
  // Volume
  ['teaspoon', ['tsp', 'tspn', 't', 'teaspoons']],
  ['tablespoon', ['tbs', 'tbsp', 'tbspn', 'T', 'tablespoons']],
  [
    'fluid ounce',
    [
      'fl oz',
      'floz',
      'fl-oz',
      'fluid-ounce',
      'fluid ounces',
      'fluid-ounces',
      'fluidounces',
      'fl ounce',
      'fl ounces',
      'fl-ounce',
      'fl-ounces',
      'fluid oz',
      'fluid-oz',
    ],
  ],
  ['cup', ['c', 'cups']],
  ['pint', ['p', 'pnt', 'pt', 'pints']],
  ['quart', ['q', 'qt', 'quarts']],
  ['gallon', ['gal', 'gallons']],
  ['milliliter', ['ml', 'milliliters', 'millilitre', 'millilitres']],
  ['liter', ['l', 'liters', 'litre', 'litres']],

  // Weight
  ['ounce', ['oz', 'ouncez']],
  ['pound', ['lb', 'lbs', 'pounds', '#']],
  ['milligram', ['mg', 'milligrams', 'milligramme', 'milligrammes']],
  ['gram', ['g', 'gm', 'grams', 'gramme', 'grammes']],
  [
    'kilogram',
    ['kg', 'k', 'kilo', 'kilos', 'kilograms', 'kilogramme', 'kilogrammes'],
  ],

  // Length
  ['inch', ['inches', 'in']],
  ['foot', ['feet', 'foots', 'ft']],

  // Misc
  ['bag', ['bags']],
  ['box', ['boxes']],
  ['bunch', ['bunches']],
  ['can', ['cans']],
  ['carton', ['cartons']],
  ['clove', ['cloves']],
  ['container', ['containers']],
  ['dash', ['dashes']],
  ['drop', ['drops']],
  ['ear', ['ears']],
  ['head', ['heads']],
  ['pack', ['packs']],
  ['package', ['packages', 'pkg', 'pkgs']],
  ['piece', ['pieces', 'pc', 'pcs']],
  ['pinch', ['pinches']],
  ['sprig', ['sprigs']],
  ['stick', ['sticks']],
]);

const unitsPlural = new Map<string, string>([
  ['teaspoon', 'teaspoons'],
  ['tablespoon', 'tablespoons'],
  ['fluid ounce', 'fluid ounces'],
  ['cup', 'cups'],
  ['pint', 'pints'],
  ['quart', 'quarts'],
  ['gallon', 'gallons'],
  ['milliliter', 'milliliters'],
  ['liter', 'liters'],

  ['ounce', 'ounces'],
  ['pound', 'pounds'],
  ['milligram', 'milligrams'],
  ['gram', 'grams'],
  ['kilogram', 'kilograms'],

  ['inch', 'inches'],
  ['foot', 'feet'],

  ['bag', 'bags'],
  ['box', 'boxes'],
  ['bunch', 'bunches'],
  ['can', 'cans'],
  ['carton', 'cartons'],
  ['clove', 'cloves'],
  ['container', 'containers'],
  ['dash', 'dashes'],
  ['drop', 'drops'],
  ['ear', 'ears'],
  ['head', 'heads'],
  ['pack', 'packs'],
  ['package', 'packages'],
  ['piece', 'pieces'],
  ['pinch', 'pinches'],
  ['sprig', 'sprigs'],
  ['stick', 'sticks'],
]);

const unitsShort = new Map<string, string>([
  ['teaspoon', 'tsp'],
  ['tablespoon', 'tbs'],
  ['fluid ounce', 'fl oz'],
  ['cup', 'c'],
  ['pint', 'pt'],
  ['quart', 'qt'],
  ['gallon', 'gal'],
  ['milliliter', 'ml'],
  ['liter', 'l'],

  ['ounce', 'oz'],
  ['pound', 'lb'],
  ['milligram', 'mg'],
  ['gram', 'g'],
  ['kilogram', 'kg'],

  ['inch', 'in'],
  ['foot', 'ft'],

  ['bag', 'bag'],
  ['box', 'box'],
  ['bunch', 'bunch'],
  ['can', 'can'],
  ['carton', 'carton'],
  ['clove', 'clove'],
  ['container', 'container'],
  ['dash', 'dash'],
  ['drop', 'drop'],
  ['ear', 'ear'],
  ['head', 'head'],
  ['pack', 'pack'],
  ['package', 'pkg'],
  ['piece', 'piece'],
  ['pinch', 'pinch'],
  ['sprig', 'sprig'],
  ['stick', 'stick'],
]);

export { units, unitsPlural, unitsShort };
