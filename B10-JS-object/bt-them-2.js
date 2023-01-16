// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k.
// Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án
// in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
/**
 *
 * @param {Array} arr
 * @param {number} k
 * @returns
 */
const findSmallestNumber = (arr) => {
  // tim so nho nhat
  arr.sort(); // sap xep
  let smallestNum = arr[0];
  for (let index = 0; index <= arr.length - 1; index++) {
    if (smallestNum >= arr[index]) {
      smallestNum = arr[index];
    } else {
      continue;
    }
  }
  return smallestNum;
};

const findClosestArray = (arr, k) => {
  let distance = 0;
  let distanceArray = []; // tao array cua so va khoang cach so do toi k
  let distanceRange = []; // tap array cua cac khoang cach
  let result = []; // array so can tim
  for (let index = 0; index <= arr.length - 1; index++) {
    if (arr[index] <= k) {
      // neu k lon hon so trong day
      distance = k - arr[index];
      distanceArray.push([arr[index], distance]);
      distanceRange.push(distance);
    } else {
      // khi k nho hon so trong day
      distance = arr[index] - k;
      distanceArray.push([arr[index], distance]);
      distanceRange.push(distance);
    }
    console.log(distanceArray);
  }
  let smallestNum = findSmallestNumber(distanceRange);
  console.log(`smallest number is ${smallestNum}`);
  // return smallestNum;
  for (let index = 0; index <= distanceArray.length - 1; index++) {
    if (distanceArray[index][1] === smallestNum) {
      result.push(distanceArray[index][0]);
      console.log(`resule:${result}`);
    } else {
      continue;
    }
  }
  return result;
};

const ARRAY = [1, 2, 3, 4, 6, 7];
const k = 5;
console.log(findClosestArray(ARRAY, k));
