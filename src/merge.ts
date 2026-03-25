export function merge(
  collection_1: number[], 
  collection_2: number[], 
  collection_3: number[]
): number[] {
  const result: number[] = [];
  
  // px = Pointers
  let p1 = 0;                       // start from the 1st which is smallest of collection_1
  let p2 = 0;                       // same as p1 but for collection_2
  let p3 = collection_3.length - 1; // start from the end which is smallest of collection_3 (desc order)

  const totalLength = collection_1.length + collection_2.length + collection_3  .length;

  // loop
  while (result.length < totalLength) {

    const v1 = getValue(collection_1, p1);
    const v2 = getValue(collection_2, p2);
    const v3 = getValue(collection_3, p3);

    // who smallest
    if (v1 <= v2 && v1 <= v3) {
      result.push(v1);
      p1++; // move pointer for collection_1
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      p2++; // move pointer for collection_2
    } else {
      result.push(v3);
      p3--; // move pointer for collection_3 (move backwards to find the next smallest value)
    }
  }

  return result;
}

// get value if not it'll return Infinity 
const getValue = (arr: number[], index: number) => 
  (index >= 0 && index < arr.length) ? arr[index] : Infinity;

//random for test

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const RandARR = (size: number) => Array.from({ length: size }, () => getRandomInt(0, 100));

//Ascending
const rand_c1 = RandARR(5).sort((a, b) => a - b);
const rand_c2 = RandARR(5).sort((a, b) => a - b);

//Descending
const rand_c3 = RandARR(5).sort((a, b) => b - a);

//call merge
const result = merge(rand_c1, rand_c2, rand_c3);

//display
console.log("Collection 1 (Asc): ", rand_c1);
console.log("Collection 2 (Asc): ", rand_c2);
console.log("Collection 3 (Desc):", rand_c3);
console.log("----------------------");
console.log("Result (Sorted Asc):", result);
