// 9. Kiểm tra n có phải là số đối xứng?let k = 12321;
// biến về string ( để đổi ngược)
// dao nguoc string
// so sanh tung so cua so dao nguoc voi so luc dau
// console.log(k);
// let flag = true;
let numToString = k + "";
let reverseStr = "";
// cach reverse 1 so
for (let i = numToString.length - 1; i >= 0; i--) {
  reverseStr += numToString[i];
  //tao day so nguoc bang so duoc cho,
  // neu so nguoc khac so duoc cho, so duoc cho khong la so palindrome
}
if (reverseStr === numToString) {
  console.log(`${k} la so dao nguoc`);
} else {
  console.log(`${k} khong phai la so dao nguoc`);
}