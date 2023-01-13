// Array: mang => du lieu dang list, thong ke, liet ke, danh sach
// array co gia tri
const arr1 = ["name", "age", "sex", 123, false, true, { data: `Du lieu` }];
// array rong:
const arr2 = [];

console.log(arr1);

const pushReal = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

pushReal(arr1, `my name`);
pushReal(arr1, `my name2`);
console.log(arr1[arr1.length]);
// them dau, duoi cua mang ( return do dai cua array)
const arrayGoc = [1, 2, 3, 4];
const data1 = arrayGoc.push(2);// them vo duoi
const data2 = arrayGoc.unshift(5); // them vo dau

// slplice() : them 1 gia tri vo 1 vi tri bat ki
arr1.splice(arr1.length, 0, "my name123");
console.log(arr1);
