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

//callback function
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

//promise function
const congPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Start cong Promise`);
    const sum = a + b;
    if (sum) {
      setTimeout(() => {
        console.log(` Phep Cong: ${a} + ${b} = ${sum} `);
        resolve(sum);
      }, 1000);
    } else {
      reject(Error("Khong cong duoc"));
    }
  });
};

const truPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Start Tru Promise`);
    const minus = a - b;
    if (minus) {
      setTimeout(() => {
        console.log(` Phep Tru: ${a} - ${b} = ${minus} `);
        resolve(minus);
      }, 500);
    } else {
      reject(Error("Khong tru duoc"));
    }
  });
};

const nhanPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Start Nhan Promise`);
    let mul = a * b;
    if (mul) {
      setTimeout(() => {
        console.log(` Phep Nhan: ${a} * ${b} = ${mul} `);
        resolve(mul);
      }, 2000);
    } else {
      reject(Error("Khong Nhan duoc"));
    }
  });
};

const chiaPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Start Chia`);
    let div = a / b;
    if (b !== 0) {
      setTimeout(() => {
        console.log(` Phep Chia: ${a} / ${b} = ${div} `);
        resolve(div);
      }, 3000);
    } else reject(Error("Khong the chia voi so 0"));
  });
};

const phepTinhPromise = (a, b, c, d, e) => {
  congPromise(a, b)
    .then((kqCongPro1) => {
      return truPromise(kqCongPro1, c);
    })
    .then((kqTruPromise1) => {
      return nhanPromise(kqTruPromise1, d);
    })
    .then((kqNhanPromise) => {
      return chiaPromise(kqNhanPromise, e);
    })
    .then((kqChiaPromise1) => {
      console.log(`ket qua cuoi: ${kqChiaPromise1}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

// (a + b) * h * (c/ d) + (e- f) /2
const phepTinhNCPromise = (a, b, c, d, e, f, h) => {
  Promise.all([congPromise(a, b), chiaPromise(c, d), truPromise(e, f)]) // tao array
    // .then((kqArr) => {
    //   return kqArr; // [(a+b), (c/d),(e-f)]
    // })
    .then((kqArr) => {
      // sau khi co array thi cac promise sau se chay trong array nay
      return nhanPromise(kqArr[0], h) // chay promise trong promise object
        .then((result) => {
          return nhanPromise(result, kqArr[1]);
        })
        .then((result) => {
          return congPromise(result, kqArr[2]);
        })
        .then((result) => {
          return chiaPromise(result, 2);
        })
        .then((result) => console.log(`ket qua cuoi cung ${result}`));
    })

    .catch((error) => {
      console.log(error);
    });
};

phepTinhNCPromise(3, 5, 6, 4, 5, 3, 2, 5);
// ((a + b -c) * d)/e

// phepTinh(5, 6, 3, 4, 2, 5, 10);
// callback hell: rat kho maintain
// sinh ra 2 cái để xử lý bất đồng bộ: Promise, Async await

// xu ly bai tap tren theo dang promise

// all
// all xu ly error: khi xu ly cac promise, promise dau tien co error thi se chuyen error ay vo catch cua all, con nhung error khac ko nhan
