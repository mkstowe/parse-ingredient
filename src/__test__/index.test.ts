import { parseIngredient } from '../index';

describe("Index functions", () => {
  test("parseIngredient", () => {
      let input: string = "1 cup milk"
    expect(parseIngredient(input)).toEqual([{
        "input": "1 cup milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1.5 cup milk')).toEqual([{
        "input": "1.5 cup milk",
        "quantity": 1.5,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 1/2 cup milk')).toEqual([{
        "input": "1 1/2 cup milk",
        "quantity": 1.5,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('2-3 dashes milk')).toEqual([{
        "input": "2-3 dashes milk",
        "quantity": 2,
        "quantity2": 3,
        "unit": "dash",
        "unitPlural": "dashes",
        "unitShort": "dash",
        "unitEntered": "dashes",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 T milk')).toEqual([{
        "input": "1 T milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "tablespoon",
        "unitPlural": "tablespoons",
        "unitShort": "tbsp",
        "unitEntered": "T",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 t milk')).toEqual([{
        "input": "1 t milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "teaspoon",
        "unitPlural": "teaspoons",
        "unitShort": "tsp",
        "unitEntered": "t",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('a lot of milk')).toEqual([{
        "input": "a lot of milk",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": "a lot of milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1/4 to 1/3 cup milk')).toEqual([{
        "input": "1/4 cup milk",
        "quantity": 0.25,
        "quantity2": 0.333,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('¼ cup milk')).toEqual([{
        "input": "¼ cup milk",
        "quantity": 0.25,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 ¼ - 3¼ cup milk')).toEqual([{
        "input": "1 ¼ - 3¼ cup milk",
        "quantity": 1.25,
        "quantity2": 3.25,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1/0 cup milk')).toEqual([{
        "input": "1/0 cup milk",
        "quantity": null,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('one cup milk')).toEqual([{
        "input": "one cup milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 CuP milk')).toEqual([{
        "input": "1 cup milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 milk')).toEqual([{
        "input": "1 milk",
        "quantity": 1,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('1 cup of milk')).toEqual([{
        "input": "1 cup of milk",
        "quantity": 1,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "milk",
        "isGroupHeader": false}]
    )
    expect(parseIngredient('For the milk:')).toEqual([{
        "input": "For the milk:",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": null,
        "isGroupHeader": true}]
    )
    expect(parseIngredient('Milk:')).toEqual([{
        "input": "Milk:",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": null,
        "isGroupHeader": true}]
    )
    expect(parseIngredient('For the milk')).toEqual([{
        "input": "For the milk",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": null,
        "isGroupHeader": true}]
    )
    expect(parseIngredient('For 1 cup milk:')).toEqual([{
        "input": "For 1 cup milk:",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": null,
        "isGroupHeader": true}]
    )
    expect(parseIngredient('1 cup milk:')).toEqual([{
        "input": "1 cup milk:",
        "quantity": null,
        "quantity2": null,
        "unit": null,
        "unitPlural": null,
        "unitShort": null,
        "unitEntered": null,
        "description": null,
        "isGroupHeader": true}]
    )
    expect(parseIngredient('1 cup For the milk: a')).toEqual([{
        "input": "1 cup For the milk: a",
        "quantity": 1,
        "quantity2": null,
        "unit": "cup",
        "unitPlural": "cups",
        "unitShort": "c",
        "unitEntered": "cup",
        "description": "For the milk: a",
        "isGroupHeader": false}]
    )
  })
})

export {}
