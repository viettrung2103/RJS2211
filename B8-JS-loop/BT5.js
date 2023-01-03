// 5. Viết chương trình tính tổng từ 1 đến n?
// VD: n = 10, output: 55

n = 3;
if (n === 0) {
  console.log(`n khong hop le`);
} else {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log(`tong tu 1 toi n la: ${sum}`);
}
