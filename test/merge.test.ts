import { merge } from "../src/merge";

describe('merge function Comprehensive Test', () => {

  const testCases = [
    // --- correctness ---
    {
      name: "non-overlapping ranges",
      input: { c1: [1, 2, 3], c2: [4, 5, 6], c3: [9, 8, 7] },
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      name: "interleaved ranges",
      input: { c1: [1, 4, 7], c2: [2, 5, 8], c3: [9, 6, 3] },
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },

    // --- Empty arrays ---
    {
      name: "all three empty",
      input: { c1: [], c2: [], c3: [] },
      expected: []
    },
    {
      name: "collection_1 empty",
      input: { c1: [], c2: [1, 3], c3: [4, 2] },
      expected: [1, 2, 3, 4]
    },
    {
      name: "only collection_3 has values (desc)",
      input: { c1: [], c2: [], c3: [9, 6, 3] },
      expected: [3, 6, 9]
    },

    // --- Single elements & Duplicates ---
    {
      name: "each array has one element",
      input: { c1: [2], c2: [1], c3: [3] },
      expected: [1, 2, 3]
    },
    {
      name: "duplicates all around",
      input: { c1: [1, 2, 3], c2: [1, 2, 3], c3: [3, 2, 1] },
      expected: [1, 1, 1, 2, 2, 2, 3, 3, 3]
    },

    // --- Negative and mixed values ---
    {
      name: "all negative values",
      input: { c1: [-9, -6, -3], c2: [-8, -5, -2], c3: [-1, -4, -7] },
      expected: [-9, -8, -7, -6, -5, -4, -3, -2, -1]
    },
    {
      name: "negative + positive",
      input: { c1: [-3, 0, 3], c2: [-1, 1, 4], c3: [5, 2, -2] },
      expected: [-3, -2, -1, 0, 1, 2, 3, 4, 5]
    },

    // --- lengths ---
    {
      name: "collection_1 >>>> collection_2 & collection_3",
      input: { c1: [1, 2, 3, 4, 5, 6, 7, 8], c2: [10], c3: [9] },
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ];

  for (const tc of testCases) {
    test(`case: ${tc.name}`, () => {
      const actual = merge(tc.input.c1, tc.input.c2, tc.input.c3);
      expect(actual).toEqual(tc.expected);
    });
  }

  // splite check Immutability 
  describe('Immutability checks', () => {
    test('input arrays must not be mutated', () => {
      const c1 = [1, 2];
      const c2 = [3, 4];
      const c3 = [6, 5];
      const c3Copy = [...c3];
      
      merge(c1, c2, c3);
      
      //check c3 still the same as before, not mutated
      expect(c3).toEqual(c3Copy);
    });
  });

});