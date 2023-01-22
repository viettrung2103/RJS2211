// B0: la so nguyen to
const isPrimeNum = (n) => {
  let flag = true; // la so nguyen to
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    flag = true;
  } else if (n % 2 === 0) {
    // kiem tra xem n co phai la so chan khac 2 k
    flag = false;
  } else {
    for (let index = 3; index < n; index += 2) {
      if (n % index === 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag === true) {
    return `${n} la so nguyen to`;
  } else {
    return `${n} khong la so nguyen to`;
  }
};

// B1:Viết chương trình in ra các số từ 1 đến n?
const inSo = (n) => {
  for (let index = 0; index <= n; index++) {
    console.log(index);
  }
  // return `xong`;
};

// 2. Viết chương trình in ra các số lẻ từ 1 đến n?
// VD: n = 10, output: 1 3 5 7 9
const inSoLe = (n) => {
  for (let index = 0; index <= n; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    } else {
      continue;
    }
  }
};

// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10
const inSoChan = (n) => {
  for (let index = 0; index <= n; index++) {
    if (index % 2 === 0) {
      console.log(index);
    } else {
      continue;
    }
  }
};

// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7
const inSoNguyenTo = (n) => {
  for (let index = 1; index <= n; index += 2) {
    if (index === 1) {
      continue;
    }
    if (index === 2) {
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
};

// 5. Viết chương trình tính tổng từ 1 đến n?
// VD: n = 10, output: 55
const tongChuSo = (n) => {
  if (n === 0) {
    return `n khong hop le`;
  } else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return `tong tu 1 toi n la: ${sum}`;
  }
};

// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14
const tongBinhPhuong = (n) => {
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
};

// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9
const tongSoLe = (n) => {
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
};

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES’
const soToanLe = (n) => {
  //doi so la string, kiem tra tung chu so la so le
  let stringN = n + "";
  let flag = true; // convert n to string
  for (let i = 0; i <= stringN.length - 1; i++) {
    if (stringN[i] % 2 === 0) {
      console.log(`chu so thu ${i + 1} la ${stringN[i]} la so chan`);
      flag = false;
      break;
    }
  }
  return flag;
  // if (flag === true) {
  //   console.log(`${n} la so toan le`);
  // } else {
  //   console.log(`${n} khong la so toan le`);
  // }
};

// 9. Kiểm tra n có phải là số đối xứng?let k = 12321;
// biến về string ( để đổi ngược)
// dao nguoc string
// so sanh tung so cua so dao nguoc voi so luc dau
// console.log(k);
// let flag = true;
const soDaoNguoc = (n) => {
  let numToString = n + "";
  let reverseStr = "";
  // cach reverse 1 so
  for (let i = numToString.length - 1; i >= 0; i--) {
    reverseStr += numToString[i];
    //tao day so nguoc bang so duoc cho,
    // neu so nguoc khac so duoc cho, so duoc cho khong la so palindrome
  }
  if (reverseStr === numToString) {
    return true;
    // console.log(`${n} la so dao nguoc`);
  } else {
    return false;
    // console.log(`${n} khong phai la so dao nguoc`);
  }
};

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
const inCuuChuong = () => {
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
};

console.log(isPrimeNum(7));
