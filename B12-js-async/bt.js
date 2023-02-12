// b1:
// Tính diện tích hình thang (a + b) * h /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Trả về kết quả cuối cùng.
// Sử dụng callback để xử lý

// const dienTichHinhThang = (a, b, h) => {
//   phepChia(phepNhan(phepCong(a, b), h));
// };

const phepCong = (a, b, cb) => {
  console.log(`Start cong`);
  setTimeout(() => {
    const sum = a + b;
    console.log(` Phep Cong: ${a} + ${b} = ${sum} `);
    cb(sum);
  }, 1000);
};

const phepTru = (a, b, cb) => {
  console.log(`Start Tru`);
  setTimeout(() => {
    const minus = a - b;
    console.log(` Phep Tru: ${a} - ${b} = ${minus} `);
    cb(minus);
  }, 500);
};

const phepNhan = (a, b, cb) => {
  console.log(`Start Nhan`);
  setTimeout(() => {
    let mul = a * b;
    console.log(` Phep Nhan: ${a} * ${b} = ${mul} `);
    cb(mul);
  }, 2000);
};

const phepChia = (a, b, cb) => {
  console.log(`Start Chia`);
  setTimeout(() => {
    let div = a / b;
    console.log(` Phep Chia: ${a} / ${b} = ${div} `);
    cb(div);
  }, 3000);
};

// const phepNhan = (h) => {
//   console.log(`phep nhan`);
//   setTimeout(() => {
//     let result = phepCong(a, b);
//     let result1 = result * h;
//     console.log(`Phep Nhan: ${result} + ${h} = ${result1}`);
//     // cb(result);
//   }, 2000);
// };
// const phepChia = (cb) => {
//   setTimeout((result) => {
//     let final = result / 2;
//     console.log(`Ket qua: ${result}`);
//   }, 1000);
// };

const dienTichHinhThang = (a, b, h) => {
  phepCong(a, b, (ketquaSum) => {
    phepNhan(ketquaSum, h, (ketquaMul) => {
      phepChia(ketquaMul, 2, (ketquaDiv) => {
        console.log(ketquaDiv);
      });
    });
  });
};

// dienTichHinhThang(5, 6, 10);
// (a + b) * h * (c/ d) + (e- f) /2

const phepTinh = (a, b, c, d, e, f, h) => {
  phepCong(a, b, (ketquaSum1) => {
    phepTru(e, f, (ketQuaMin1) => {
      phepChia(c, d, (ketquaDiv1) => {
        phepNhan(ketquaSum1, h, (ketquaMul1) => {
          phepNhan(ketquaMul1, ketquaDiv1, (ketquaMul2) => {
            phepCong(ketquaMul2, ketQuaMin1, (ketquaSUm2) => {
              phepChia(ketquaSUm2, 2, (ketquaDiv2) => {
                console.log("ket qua cuoi", ketquaDiv2);
              });
            });
          });
        });
      });
    });
  });
};
phepTinh(5, 6, 3, 4, 2, 5, 10);
// callback hell: rat kho maintain
// sinh ra 2 cái để xử lý bất đồng bộ: Promise, Async await

// xu ly bai tap tren theo dang promise


