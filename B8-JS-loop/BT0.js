// 0. Viết chương trình kiểm tra n có phải là số nguyên tố hay không?

let n = 151;
let flag = true;

if (n < 2) {
  flag = false;
} else if (n === 2) {
  console.log("2 la so nguyen to");
} else {
  for (let index = 3; index < n; index += 2) {
    if (n % index === 0) {
      flag = false;
      break;
    }
  }
}

if (flag === true) {
  console.log(`${n} la so nguyen to`);
} else {
  console.log(`${n} khong la so nguyen to`);
}