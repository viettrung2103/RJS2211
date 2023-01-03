// 10. In bảng cửu chương ra màn hình?
// Output:
// 2x1=2
// 2x2=4
// 2x3=6
// 2x4=8
// 2x5=10
// 2x6=12
// 2x7=14
// 2x8=16
// 2x9=18
// 2x10=20
// ..
// 3x1=3
// 3x2=6
//
// 9x9=81
// 9x10=90
let n = 9;
if (n === 0) {
  console.log("n khong hop le");
}
for (let i = 1; i <= n; i++) {
  console.log(`---- i = ${i}`);
  for (let k = 1; k <= 10; k++) {
    let result = 0;
    result = i * k;
    console.log(`${i} * ${k} = ${result}`);
  }
}
