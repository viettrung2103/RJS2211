// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9

n = 1;
if (n === 0) {
  console.log(`n khong hop le`);
} else {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    //cho i = i, neu i nho hon bang n, i+2
    sum = sum + i;
  }
  console.log(`tong tu 1 toi n la: ${sum}`);
}
