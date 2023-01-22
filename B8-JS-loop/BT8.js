// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES’

let n = 1354;

let stringN = n + "";
let flag = true; // convert n to string
for (let i = 0; i <= stringN.length - 1; i++) {
  if (stringN[i] % 2 === 0) {
    console.log(`chu so thu ${i + 1} la ${stringN[i]} la so chan`);
    flag = false;
    break;
  }
}

if (flag === true) {
  console.log(`${n} la so toan le`);
} else {
  console.log(`${n} khong la so toan le`);
}
