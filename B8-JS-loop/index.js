// let n = 2;
// let flag = true;

// if( n < 2) {
//   flag = false;
// } else if (n === 2) {
//   console.log( '2 la so nguyen to');
// } else {
//   for( let index = 3, index < n, index +=2) {
//     if (n % index === 0 ) {
//       flag = false;
//       break;
//     }
//   }
// }

// if (flag === true) {
//   console.log('La so nguyen to');
// } else {
//   console.log('khong la so nguyen to')
// }

// Kiểm tra n có phải là số đối xứng không
let k = 12321;
// biến về string ( để đổi ngược)
console.log(k);
// let flag = true;
let numToString = k + "";
let reverseStr = "";
// cach reverse 1 so
for (let i = numToString.length - 1; i >= 0; i--) {
  reverseStr += numToString[i];
}
if( reverseStr === numToString) {
  console.log(`${k} la so dao nguoc`);
} else {
  console.log(`${k} khong phai la so dao nguoc`)
}

// if (flag === true) {
//   console.log(`${k} khong la so dao nguoc`);
// } else {
//   console.log(`${k} la so dao nguoc`);
// }
