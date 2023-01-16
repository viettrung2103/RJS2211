const isPrimeNum = (n) => {
  let flag = true; // la so nguyen to
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    flag = true;
  } else if (n % 2 === 0) {
    // kiem tra xem n co phai la so chan khac 2 k
    flag = false;
  } else {
    for (let index = 3; index < n; index += 2) {
      if (n % index === 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag === true) {
    return true;
  } else {
    return false;
  }
};

// BT 21, 22, 24, 25
// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90
const sumArray = (arr) => {
  let sum = 0;
  for (let index = 0; index <= arr.length - 1; index++) {
    sum = sum + arr[index];
    console.log(sum);
  }
};

// 22. Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong
// mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
const timMinMaxMedium = (arr) => {
  let min = Math.min(...arr); // so nho nhat trong arr
  let max = Math.max(...arr); //  so lon nhat trong arr
  let medium = Math.floor((min + max) / 2);
  console.log(`so min la ${min}`);
  console.log(`so max la ${max}`);
  console.log(`so medium la ${medium}`);
  // let min = 0;
  // let max = 0;
  // let medium = (Min + Max) /2;
  // for(let index = 0; index <= arr.length-1; index++){
  //   if(arr.length === 0) {
  //     console.log(`mang rong`);
  //   } else {

  //   }
};
// tạo bảng số nguyên tố

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất và
// số đó xuất hiện bao nhiêu lần?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 9
const soXuatHienNhat = (arr) => {
  let soNhieuNhat = [0, 0];
  arr.sort(); // sort array de cac so giong nhau dung canh nhau
  let count = 1;
  for (let index = 0; index < arr.length; index++) {
    let soHienTai = arr[index];
    if (soHienTai === arr[index - 1]) {
      // neu so hien gio bang so trc do, count + 1
      count++;
    } else {
      if (count > soNhieuNhat[1]) {
        soNhieuNhat[1] = count;
        soNhieuNhat[0] = arr[index - 1];
        count = 1;
      }
    }
  }
  return `so xuat hien voi tan so nhieu nhat la ${soNhieuNhat[0]} voi tan suat la ${soNhieuNhat[1]}`;
};

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số
// là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
// C1
const taoBangSoNguyenTo = (arr) => {
  if (arr.length === 0) {
    console.log(`mang rong`);
  } else {
    arr.sort();
    let newArr = [];
    for (let index = 0; index <= arr.length - 1; index++) {
      if (isPrimeNum(arr[index])) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
};
// C2
const taoBangSoNguyenTo2 = (arr) => {
  if (arr.length === 0) {
    console.log(`mang rongo`);
  } else {
    arr.sort();
    const bangSoNguyenTo = arr.filter(isPrimeNum); // chu y khong call callback function trong filer
    return bangSoNguyenTo;
  }
};

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình
// phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
// C1:
const makeSquareNumber = (a) => {
  return a * a;
};
const makeSquareArray1 = (arr) => {
  let squareArray = [];
  for (let index = 0; index <= arr.length - 1; index++) {
    squareNum = makeSquareNumber(arr[index]); // tạo square number
    squareArray.push(squareNum); //them so dc binh phuong vo array
  }
  return squareArray; // return array so binh phuong
};

//C2:
const makeSquareArray2 = (arr) => {
  const squareArray = arr.map((x) => x * x);
  return squareArray;
};

const ARR1 = (a = [1, 2, 3, 2, 3, 4, 6, 7]);
const ARR = [
  11, 2, 234, 1, 45654, 131, 2, 3, 4, 5, 2, 6, 11, 2, 524, 11, 11, 3, 1235, 76,
  2, 11, 11,
];

console.log(taoBangSoNguyenTo2(ARR));
