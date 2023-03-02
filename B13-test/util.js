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
  // const chuanHoaTen = (name) => {
  //   let tenDcChuanHoa = name.toLowerCase();
  //   return this.name = tenDcChuanHoa;
  // }
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
      return svArr[index];
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
const xoaSVById = (id) => {
  let foundId = timSVById(id); //return false if no id, return student info with given id when true
  if (foundId === "false") {
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
    console.log(`thong tin hien tai`);
    console.log(`${timSVById(id)}`);
    timSVById(id).name = name;
    timSVById(id).age = age;
    timSVById(id).sex = sex;
    console.log(`update; ${id}, name:${name},age:${age},sex: ${sex}`);
    return svArr[timSVById(id)];
  }
};

const timSVByName = (keyword) => {
  const filteredName = svArr.filter((x) => x.name === keyword);
  return filteredName;
};

// const timSVById = (id) => {
//   const filteredName = svArr.filter((x) => x.id === id);
//   return filteredName;
// };

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

// console.log(svArr); // call svArr
// console.log(createSV("Trung", 18, "nam"));
// console.log(createSV("Nam", 20, "nam"));
// console.log(createSV("Ha", 20, "nu"));
// console.log(createSV("Nam1", 25, "nu"));
// console.log(createSV("Ha3", 24, "nu"));
// console.log(createSV("Trinh", 25, "nu"));
// console.log(svArr); // kiem tra Arr
// console.log(`tim sv voi id 5: ${timSVById(5)}`);
// let newArray = xoaSVById(5);
// console.log(newArray);
// console.log(svArr[0]);
// console.log(timSVById(1));
// console.log(editSV(1, "trung111", 2000, "nu"));
// console.log(svArr); // kiem tra Arr
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

data = [
  { id: "Tung", age: 38, gender: "nam" },
  { id: "Trung", age: 20, gender: "nam" },
  { id: "Trinh", age: 25, gender: "nu" },
  { id: "Trinh1", age: 30, gender: "nam" },
];
// de luu data vo txt thi can la string type >> stringify
// de lay data va xu ly thi can parse
const stringData = JSON.stringify(data);

console.log(stringData);
const data1 = JSON.parse(stringData);
console.log(data1);

const readFile = () => {
  c
}

// var userName = readlineSync.question("May I have your name? ");
// var age = readlineSync.question("May I have your age? ");
// console.log(`Hi ${userName} with age ${age}`);
// console.log(`------------------------`);
// console.log(`CHUONG TRINH QUAN LY SINH VIEN`);
// console.log(`------------------------`);
// const showMenu = () => {
//   commands = [
//     "Show all student",
//     "Create student and return Menu",
//     "Delete student",
//     "Edit student",
//     "Find student by name",
//     "Sort student by name ascending",
//     "Sort student by age ascending ",
//   ];
//   while (true) {
//     index = readlineSync.keyInSelect(commands, `Ban chon gi?`, {
//       cancel: "Exit",
//     });
//     console.log(`${commands[index]} duoc chon`);
//     if (commands[index] === undefined) {
//       // thoat khoi chuong trinh
//       console.log("Chuan bi thoat khoi chuong trinh");
//       readlineSync.keyInPause("Dang thoat khoi chuong trinh ...");
//       console.log(`Da Thoat Khoi Chuong Trinh!!`);
//       console.log("Hen Gap Ban Lan Sau!!");
//       break;
//     } else {
//       switch (index) {
//         case 0: // hien list hs
//           console.log(`chay chuong trinhn hien thong tin hoc sinh`);
//           readlineSync.keyInPause("Dang trich xuat du lieu...");
//           console.log(`Trich xuat du lieu thanh cong`);
//           console.log(danhSachSV());
//           readlineSync.keyInPause("Quay tro lai bang dieu khien...");
//           break;
//         case 1: //      "Create student and return Menu",
//           console.log(`Nhap Thong Tinh Sinh Vien Moi:`);
//           name = readlineSync.question(`Ten Sinh Vien:`);
//           age = readlineSync.question(`Tuoi Sinh Vien:`);
//           genderOption = ["nam", "nu", "khong xac dinh"];
//           index = readlineSync.keyInSelect(
//             genderOption,
//             `Gioi Tinh Sinh Vien:`
//           );
//           console.log(createSV(name, age, genderOption[index]));
//           break;
//         case 2: //            "Delete student",
//           console.log(`working this feature`);
//           var id = readlineSync.question("Nhap id sinh vien muon xoa:");
//           console.log(xoaSVById(id));
//           break;
//         case 3: //      "      "Edit student",
//           console.log(`Working on this feature`);
//           id = readlineSync.question(`Nhap Id Sinh Vien:`);
//           // if (timSVById(id) === false) {
//           //   break;
//           // } else {
//           //   console.log(timSVById(id));
//           console.log(`thay doi thong tin sinh vien voi id ${id}:`);
//           name = readlineSync.question(`Ten Sinh Vien:`);
//           age = readlineSync.question(`Tuoi Sinh Vien:`);
//           genderOption = ["nam", "nu", "khong xac dinh"];
//           index = readlineSync.keyInSelect(
//             genderOption,
//             `Gioi Tinh Sinh Vien:`
//           );
//           console.log(editSV(id, name, age, genderOption[index]));
//           break;
//         // let svById = timSVById(id);
//         case 4: //            "Find student by name",
//           var name = readlineSync.question(
//             "Nhap ten sinh vien muon tim (Case sensitive) :"
//           );
//           readlineSync.keyInPause("Dang trich xuat du lieu...");
//           console.log(timSVByName(name));
//           readlineSync.keyInPause("Hoan Thanh");
//           break;
//         case 5: //sap xep theo ten tang dan
//           console.log(sortByName());
//           break;
//         case 6: // sap xep theo tuoi tang dan
//           console.log(sortByAge());
//           break;
//       }
//     }
//   }
// };

// showmenu();
