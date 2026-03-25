# TypeScript Merge Function

## Overview
This project implements a TypeScript function "merge" that combines three sorted arrays into one ascending array without using built-in sort functions.

## Problem
- collection_1, collection_2: ascending
- collection_3: descending
- Output must be ascending
- !!!!!!! Do not use '.sort()' !!!!!!!!!
## Approach
- Reverse collection_3
- Use 3 pointers to merge
- Time Complexity: O(n)

## Setup
bash
```
npm install
```

## Run
bash
```
npx tsx src/merge.ts
```

## Test
bash
```
npm run test
```

## Example
- merge([1,4,7], [2,5,8], [9,6,3]);
- Answer [1,2,3,4,5,6,7,8,9]

## Structure
```
src/
  merge.ts
test/
  merge.test.ts
.gitignore
jest.config.js
pagkage-lock.jason
package.json
test-report.html
```

----- You can also watch report on website as well -------


## Tech
- TypeScript
- HTML
- Jest
- tsx
