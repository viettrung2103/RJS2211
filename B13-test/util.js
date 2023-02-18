const svArr = [];
// const INDEX = 0;

class SinhVien {
  constructor(id, name, age, sex) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

// tao va them sinh vien vo array
const createSV = (name, age, sex) => {
  let index = 0;
  if (svArr[0]) {
    // let max = 0;
    // for (let index = 0; index <= svArr.length - 1; index++) {
    //   if (svArr[index].id > max) {
    //     max = svArr[index].id;
    //   } else {
    //     continue;
    //   }
    //   return max;
    // }

    index = svArr[svArr.length - 1].id + 1; // lay id  trong index cuoi cung + 1
    const newSV = new SinhVien(index, name, age, sex);
    console.log(
      `sinh vien ${name}, tuoi ${age}, gioi tinh ${sex} has been created`
    );
    return svArr.push(newSV);
  } else {
    index = index + 1;
    const newSV = new SinhVien(index, name, age, sex);
    console.log(
      `sinh vien ${name}, tuoi ${age}, gioi tinh ${sex} has been created`
    );
    return svArr.push(newSV);
  }
};

const timSV = (id) => {
  let foundId = true;
  for (let index = 0; index <= svArr.length - 1; index++) {
    if (svArr[index].id === id) {
      console.log(`sinh vien voi id ${id} ton tai`);
      return foundId;
    } else {
      console.log(`sinh vien voi id ${id} khong ton tai`);
      foundId = false;
      return foundId;
    }
  }
};

// const xoaSV = (id) => {
//   svArr.filter(id =>)

// }

console.log(svArr);
console.log(createSV("Trung", 18, "nam"));
console.log(svArr);
console.log(createSV("Nam", 20, "nam"));
console.log(createSV("Ha", 20, "nu"));
console.log(svArr);
// console.log(createSV("Trinh", 25, "nu"));
// console.log(svArr);
// console.log(timSV(1));
// const max = svArr.reduce(function (prev, current) {
//   return prev.id > current.id ? prev.id : current.id;
// });
// console.log(max);
// console.log(svArr[svArr.length - 1].id);
