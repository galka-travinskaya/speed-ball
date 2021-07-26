const countProgress = (arr, n) => {
  console.time("performance");
  let mod = null;
  let newMod = 0;
  let timeOfStableFlight = 1;
  let result = 0;
  const countVariants = (sec) => {
    let variants = 0;
    for (let j = n; j <= sec; j++) {
      variants += sec - j + 1;
    }
    return variants;
  };
  for (let i = 0; i <= arr.length; i++) {
    newMod = arr[i] - arr[i + 1];

    if (newMod !== mod) {
      mod = newMod;
      if (timeOfStableFlight >= n) {
        result += countVariants(timeOfStableFlight);
      }
      timeOfStableFlight = 2;
    } else {
      timeOfStableFlight++;
    }
  }
  console.timeEnd("performance");
  return result;
};
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 5, 7, 9];
const arr3 = [1, 2, 3, 4, 5, 5, 5];
const arr4 = [10, 5, 0, -5, -7, -9, -10, -11];
const arr5 = [5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 4, 5, 6];
// const numb = Array.apply(null, Array(1000)).map(Number.prototype.valueOf, 2);
const numbThnd = new Array(1000).fill().map((l, i) => 2);
const numbMln = new Array(1000000).fill().map((l, i) => 2);
console.log(arr1, "count of combinations -", countProgress(arr1, 3));
console.log(arr2, "count of combinations -", countProgress(arr2, 3));
console.log(arr3, "count of combinations -", countProgress(arr3, 3));
console.log(arr4, "count of combinations -", countProgress(arr4, 3));
console.log(arr5, "count of combinations -", countProgress(arr5, 3));
console.log(numbThnd, "count of combinations -", countProgress(numbThnd, 3));
console.log(numbMln, "count of combinations -", countProgress(numbMln, 3));