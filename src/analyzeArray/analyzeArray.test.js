import analyzeArray from "./analyzeArray";

test('Given an array of numbers, returns an object with avg, min, max, length properties', () => {
    //Empty array
    expect(analyzeArray([])).toEqual({average: null, min: null, max: null, length: 0});

    //Single element
    expect(analyzeArray([0])).toEqual({average: 0, min: 0, max: 0, length: 1});
    expect(analyzeArray([1])).toEqual({average: 1, min: 1, max: 1, length: 1});
    expect(analyzeArray([-1])).toEqual({average: -1, min: -1, max: -1, length: 1});

    //2 element combinations
    expect(analyzeArray([0, 0])).toEqual({average: 0, min: 0, max: 0, length: 2});
    expect(analyzeArray([1, 1])).toEqual({average: 1, min: 1, max: 1, length: 2});
    expect(analyzeArray([-1, -1])).toEqual({average: -1, min: -1, max: -1, length: 2});
    expect(analyzeArray([0, 1])).toEqual({average: 0.5, min: 0, max: 1, length: 2});
    expect(analyzeArray([-1, 1])).toEqual({average: 0, min: -1, max: 1, length: 2});

    //Multi-element combos
    expect(analyzeArray([0, 0, 0, 10, 10, 10])).toEqual({average: 5, min: 0, max: 10, length: 6});

});