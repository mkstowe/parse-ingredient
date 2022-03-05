import numericQuantity from 'numeric-quantity';

// import wordsToNumbers from 'words-to-numbers';
import { units, unitsPlural, unitsShort } from './units';

export interface Ingredient {
  /**
   * The received input
   */
  input: string;
  /**
   * The primary quantity (the lower quantity in a range, if applicable)
   */
  quantity: number | null;
  /**
   * The secondary quantity (the upper quantity in a range, or `null` if not applicable)
   */
  quantity2: number | null;
  /**
   * The unit of measure
   */
  unit: string | null;
  /**
   * The plural form of the unit
   */
  unitPlural: string | null;
  /**
   * The shorthand form of the unit
   */
  unitShort: string | null;
  /**
   * The unit as entered by the user
   */
  unitEntered: string | null;
  /**
   * The description
   */
  description: string;
  /**
   * Whether the "ingredient" is actually a group header, e.g. "For icing:"
   */
  isGroupHeader: boolean;
}

/**
 * Removes falsy values from an array
 *
 * Originally from lodash: https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6874
 */
function compactArray(array: any[]) {
  let index = -1;
  const length = array.length;
  let resIndex = 0;
  const result: any[] = [];

  while (++index < length) {
    const value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Parses a string into an array of recipe ingredient objects
 * @param ingText The ingredient text
 */
const parseIngredient = (ingText: string): Ingredient[] => {
  const arrRaw = compactArray(
    ingText
      .replace(/\n{2,}/g, '\n')
      .split('\n')
      .map(ing => ing.trim())
  );

  const arrIngs = arrRaw.map(line => {
    const oIng: Ingredient = {
      input: line,
      quantity: null,
      quantity2: null,
      unit: null,
      unitPlural: null,
      unitShort: null,
      unitEntered: null,
      description: '',
      isGroupHeader: false,
    };

    // Check if the first character is numeric.
    const nqResultFirstChar = numericQuantity(line.substring(0, 1));
    // const firstWord = line.replace(/ .*/, '');
    // let wordToNumber;

    // if (typeof(wordsToNumbers(firstWord)) == 'number') {
    // wordToNumber = wordsToNumbers(firstWord);
    // }

    // If the first character is not numeric, the entire line is the description.
    if (isNaN(nqResultFirstChar)) {
      oIng.description = line;

      // If the line ends with ":" or starts with "For ", then it is assumed to be a group header.
      if (/:$/.test(oIng.description) || /^For /i.test(oIng.description)) {
        oIng.isGroupHeader = true;
      }

      // If the first character is numeric, then see how many of the first seven
      // constitute a single value.  This will be `quantity`.
    } else {
      let lenNum = 6;
      let nqResult = NaN;

      while (lenNum > 0 && isNaN(nqResult)) {
        nqResult = numericQuantity(line.substring(0, lenNum).trim());

        if (nqResult > -1) {
          oIng.quantity = nqResult;
          oIng.description = line.substring(lenNum).trim();
        }

        lenNum--;
      }
    }

    // Now check the description for a `quantity2` at the beginning.
    // First we look for a dash, emdash, endash, or the word "to" to indicate
    // a range, then process the next seven characters just like we did for
    // `quantity`.
    const q2re = /^(-|–|—|to )/i;
    const q2reMatch = q2re.exec(oIng.description);
    if (q2reMatch) {
      const q2reMatchLen = q2reMatch[1].length;
      const nqResultFirstChar = numericQuantity(
        oIng.description
          .substring(q2reMatchLen)
          .trim()
          .substring(0, 1)
      );

      if (!isNaN(nqResultFirstChar)) {
        let lenNum = 6;
        let nqResult = NaN;

        while (lenNum > 0 && isNaN(nqResult)) {
          nqResult = numericQuantity(
            oIng.description.substring(q2reMatchLen, lenNum)
          );

          if (!isNaN(nqResult)) {
            oIng.quantity2 = nqResult;
            oIng.description = oIng.description.substring(lenNum).trim();
          }

          lenNum--;
        }
      }
    }

    // Check for a known unit of measure
    const firstWordRE = /^([a-zA-Z.]+)\b(.+)/;
    const firstWordREMatches = firstWordRE.exec(oIng.description);
    if (firstWordREMatches) {
      const firstWord = firstWordREMatches[1];
      let remainingDesc = firstWordREMatches[2];

      oIng.unitEntered = firstWord;
      oIng.unit = getUnit(firstWord);
      if (oIng.unit) {
        oIng.unitPlural = unitsPlural.get(oIng.unit)!;
        oIng.unitShort = unitsShort.get(oIng.unit)!;
      }

      remainingDesc = remainingDesc.trim();
      // Remove next word if it is "of"
      if (remainingDesc.replace(/ .*/, '') == 'of') {
        remainingDesc = remainingDesc.replace('of', '');
      }

      oIng.description = remainingDesc.trim();
    }

    return oIng;
  });

  return arrIngs;
}

function getUnit(input: string) {
  // Remove whitespace and period from input
  input.replace('/s/g', '');
  input.replace('/./g', '');

  // Special cases where capitalization matters
  if (input == 't') {
    return 'teaspoon';
  }
  if (input == 'T') {
    return 'tablespoon';
  }

  // Make input all lower case
  input = input.toLowerCase();

  // Return input if it's already normalized form
  if (units.has(input)) {
    return input;
  }

  // Check if input matches any of the unit variants
  for (let [key, val] of units) {
    for (let variant of val) {
      if (input == variant) {
        return key;
      }
    }
  }

  return null;
}

export default parseIngredient;
