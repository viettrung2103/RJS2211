// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

n = 151;
for (let index = 1; index <= n; index += 2) {
  if (index === 1) {
    continue;
  }
  if (index === 3) {
    console.log("2");
    console.log(`${index}`);
  }
  if (index > 3) {
    for (let k = 3; k < index; k += 2) {
      if (index % k === 0) {
        break;
      } else {
        console.log(`${index}`);
        break;
      }
    }
  }
}
