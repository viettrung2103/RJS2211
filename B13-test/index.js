//Student Managerment
// ===============================
//  1.Show all student
//  2.Create student and return Menu
//  3.Delete student
//  4.Edit student
//  5.Find student by name
//  6.Sort student by name ascending
//  7.Sort student by age ascending
//  8.Exit
// Your chose?

// doc ghi file fs
// tuong tac voi terminal readline-sync

// tao file datajson.txt
// object: hocSinh(id, tên, tuổi, giới tính)

const fs = require("fs");
const readline = require(`readline-sync`);

// const bangDieuKhien () => {

// }
const URL = "./datajson.txt";
const svArr = [];
const sv1 = {
  id: 1,
  name: "trung",
  tuoi: 29,
  gioiTinh: "nam",
};
const sv2 = {
  id: 2,
  name: "trinh",
  tuoi: 30,
  sex: "nu",
};

const themDuLieu = (data) => {
  svArr.push(data);
};

const xoaDuLieu = (data) => {
  svArr.pop(data);
};

console.log(`xu ly array`);
themDuLieu(sv1);
themDuLieu(sv2);
console.log(`du lieu luc dau ${svArr}`);
xoaDuLieu(sv1);
console.log(`du lieu luc sau ${svArr}`);

console.log(svArr[0]);
const strData = JSON.stringify(svArr);
// tao File datajson.txt
const taoFile = () => {
  fs.writeFile(URL, strData, function (err) {
    if (err) throw err;
    console.log("Saved!");
    // file written successfully
  });
};
// them flag utf de doc file nhu bth
//docFile datajson.txt
const docFile = () => {
  fs.readFile(URL, "utf8", (err, data) => {
    if (err) throw err;
    console.log(`mo file: ${URL}`);
    // const dataStr = JSON.stringify(data);
    console.log(data);
    return data;
  });
};
const xoaFile = () => {
  fs.unlink(URL, function (err) {
    if (err) throw err;
    console.log(`File deleted`);
  });
};
// lay array de xu ly r add vo lai
// const

taoFile();
docFile();
// suaFile();
// xoaFile();
