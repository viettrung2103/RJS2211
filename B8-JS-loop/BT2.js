// 2. Viết chương trình in ra các số lẻ từ 1 đến n?
// VD: n = 10, output: 1 3 5 7 9

let n = 30;
for (let index = 0; index <= n; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  } else {
    continue;
  }
}
