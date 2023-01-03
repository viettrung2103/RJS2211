// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10


let n = 30;
for (let index = 0; index <= n; index++) {
  if (index % 2 === 0) {
    console.log(index);
  } else {
    continue;
  }
}
