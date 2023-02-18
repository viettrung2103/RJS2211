var readlineSync = require("readline-sync");

let svArr = [];
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

// neu ton tai, return index cua id
// neu khong ton tai, return false
const timSVById = (id) => {
  let foundId = true;
  for (let index = 0; index <= svArr.length - 1; index++) {
    if (svArr[index].id === id) {
      console.log(`sinh vien voi id ${id} ton tai`);
      return index;
    } else {
      foundId = false;
    }
  }
  console.log(`sinh vien voi id ${id} khong ton tai`);
  return foundId;
};

const danhSachSV = () => {
  return svArr;
};
// xoa sinh voi id # va tra ve mang sinh vien khong co sinh vien voi id#
const xoaSV = (id) => {
  timSVById(id);
  if (timSVById(id) === "false") {
    console.log(`sinh vien voi id ${id} khong ton tai`);
  } else {
    let arrMoi = [];
    for (let index = 0; index <= svArr.length - 1; index++) {
      if (svArr[index].id !== id) {
        arrMoi.push(svArr[index]);
      } else {
        continue;
      }
    }
    console.log(`sinh vien voi id: ${id} da duoc xoa`);
    svArr = arrMoi;
    return svArr;
  }
  // return svArr;
};

const editSV = (id, name, age, sex) => {
  timSVById(id);
  if (timSVById(id) === "false") {
    console.log(`khong ton tai sinh vien voi id: ${id}`);
  } else {
    svArr[timSVById(id)].name = name;
    svArr[timSVById(id)].age = age;
    svArr[timSVById(id)].sex = sex;
    console.log(`update; ${id}, name:${name},age:${age},sex: ${sex}`);
    return svArr[timSVById(id)];
  }
};

const timSVByName = (name) => {
  const filteredName = svArr.filter((x) => x.name === "Trinh");
  return filteredName;
};

const sortByName = () => {
  const sortedByName = svArr.sort(function (current, next) {
    return current.name.localeCompare(next.name, "vi", { sensitivity: "base" });
  });
  return sortedByName;
};

const sortById = () => {
  const sortedById = svArr.sort((current, next) => {
    if (current.id < next.id) return -1;
    if (current.id > next.id) return 1;
    return 0;
  });
  return sortedById;
};
// sap xep theo tuoi tang dan
const sortByAge = () => {
  const sortedByAge = svArr.sort((current, next) => {
    if (current.age < next.age) return -1;
    if (current.age > next.age) return 1;
    return 0;
  });
  return sortedByAge;
};
// sap xep theo tuoi giam dan
const invertbyAge = () => {
  const sortedByAge = svArr.sort((current, next) => {
    if (current.age > next.age) return -1; // -1 la so lon de sau so be
    if (current.age < next.age) return 1; // 1 nghia la so lon de truoc so be
    return 0;
  });
  return sortedByAge;
};

console.log(svArr); // call svArr
console.log(createSV("Trung", 18, "nam"));
console.log(createSV("Nam", 20, "nam"));
console.log(createSV("Ha", 20, "nu"));
console.log(createSV("Nam1", 25, "nu"));
console.log(createSV("Ha3", 24, "nu"));
console.log(createSV("Trinh", 25, "nu"));
console.log(svArr); // kiem tra Arr
// console.log(`tim sv voi id 5: ${timSVById(5)}`);
// let newArray = xoaSV(5);
// console.log(newArray);
// console.log(svArr[0]);
// console.log(timSVById(1));
// console.log(editSV(1, "trung111", 2000, "nu"));
// console.log(timSVByName("Trinh"));
// console.log(sortbyname(svArr));
// const sortedbyName = svArr.sort(function (a, b) {
//   return a.name.localeCompare(b.name, "vi", { sensitivity: "base" });
// });
// const sortedbyId = svArr.sort((a, b) => {
//   if (a.id < b.id) return -1;
//   if (a.id > b.id) return 1;
//   return 0;
// });
// console.log(sortedbyName);
// console.log(sortByName());
// console.log(sortById());
// console.log(sortedbyId);
// editSV(2, "Nam22", 30, "nu");
// console.log(sortByAge());
// console.log(invertbyAge());
// console.log(svArr[0]);
// console.log(svArr);

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
var age = readlineSync.question("May I have your age? ");
console.log(`Hi ${userName} with age ${age}`);
console.log(`------------------------`);
console.log(`CHUONG TRINH QUAN LY SINH VIEN`);
console.log(`------------------------`);
commands = [
  "Show all student",
  "Create student and return Menu",
  "Delete student",
  "Edit student",
  "Find student by name",
  "Sort student by name ascending",
  "Sort student by age ascending ",
];
while (true) {
  index = readlineSync.keyInSelect(commands, `Ban chon gi?`, {
    cancel: "Exit",
  });
  console.log(`${commands[index]} duoc chon`);
  if (commands[index] === undefined) {
    // thoat khoi chuong trinh
    console.log("Chuan bi thoat khoi chuong trinh");
    readlineSync.keyInPause("Dang thoat khoi chuong trinh ...");
    console.log(`Da Thoat Khoi Chuong Trinh!!`);
    console.log("Hen Gap Ban Lan Sau!!");
    break;
  }
  switch (index) {
    case 0:
      console.log(`chay chuong trinhn hien thong tin hoc sinh`);
      readlineSync.keyInPause("Dang trich xuat du lieu...");
      console.log(`Trich xuat du lieu thanh cong`);
      console.log(danhSachSV());
      readlineSync.keyInPause("Quay tro lai bang dieu khien...");
    case 5:
      console.log(sortByName());
    case 6:
      console.log(sortByAge());
  }

  // console.log();
}

// var readlineSync = require("readline-sync"),
//   animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
//   index = readlineSync.keyInSelect(animals, "Which animal?");
// console.log("Ok, " + animals[index] + " goes to your room.");
