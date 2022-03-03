# parse-ingredient

Built based on code written by Jake Boone

Parses a string, which can include mixed numbers or vulgar fractions (thanks to [numeric-quantity](https://www.npmjs.com/package/numeric-quantity)), into an array of recipe ingredient objects with the following signature:

```ts
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
```

For the `isGroupHeader` attribute to be `true`, the ingredient string must not start with a number, and must either start with `'For '` or end with `':'`.

This library pairs nicely with [format-quantity](https://www.npmjs.com/package/format-quantity) which can display numeric values as imperial measurements (e.g. `'1 1/2'` instead of `1.5`).

## Installation

### npm

```shell
# npm
npm i mkstowe/parse-ingredient

# yarn
yarn add mkstowe/parse-ingredient
```

### Browser

In the browser, available as a global function `parseIngredient`. Remember to first include `numeric-quantity`.

```html
<script src="https://unpkg.com/numeric-quantity"></script>
<script src="https://unpkg.com/parse-ingredient"></script>
<script>
  console.log(parseIngredient('1 1/2 cups sugar'));
  // [
  //   {
  //     input: '1 1/2 cups sugar',
  //     quantity: 1.5,
  //     quantity2: null,
  //     unit: 'cup',
  //     unitPlural: 'cups',
  //     unitShort: 'c',
  //     unitEntered: 'cups',
  //     description: 'sugar',
  //     isGroupHeader: false,
  //   },
  // ]
</script>
```

## Usage

```js
import parseIngredient from 'parse-ingredient';

console.log(parseIngredient('1-2 pears'));
// [
//   {
//     input: '1-2 pears',
//     quantity: 1,
//     quantity2: 2,
//     unit: null,
//     unitPlural: null,
//     unitShort: null,
//     unitEntered: null,
//     description: 'pears',
//     isGroupHeader: false,
//   },
// ]
console.log(
  parseIngredient(
    `2/3 cup flour
1 tsp baking powder`
  )
);
// [
//   {
//     input: '2/3 cup flour',
//     quantity: 0.667,
//     quantity2: null,
//     unit: 'cup',
//     unitPlural: 'cups',
//     unitShort: 'c',
//     unitEntered: 'cup',
//     description: 'flour',
//     isGroupHeader: false,
//   },
//   {
//     input: '1 tsp baking powder',
//     quantity: 1,
//     quantity2: null,
//     unit: 'teaspoon',
//     unitPlural: 'teaspoons',
//     unitShort: 'tsp',
//     unitEntered: 'tsp',
//     description: 'baking powder',
//     isGroupHeader: false,
//   },
// ];
```
