
// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14
n = 4;
if (n === 0) {
  console.log(`n khong hop le`);
} else {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let sqrI = i * i;
    sum = sum + sqrI;
  }
  console.log(`tong tu 1 toi n la: ${sum}`);
}
