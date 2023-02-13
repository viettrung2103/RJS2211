// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp
// object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy đưa tên và họ về
// chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ
// cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

// Output: [ {
//   id: "T3HXX1",
//   firstName: "Ngan",
//   lastName: "Duong Thuy"
//   }]

const STUDENT = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do Thi Thu",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Nhat",
  },
];

const standardizeString = (string) => {
  let standardizeString = "";
  standardizeString = string.trim(); // loai bo string 2 dau
  standardizeString = standardizeString.toLowerCase(); // bien string ve dang chu thuong
  let finalString = "";
  for (index = 0; index <= standardizeString.length - 1; index++) {
    if (index === 0) {
      finalString = finalString + standardizeString[index].toUpperCase();
    } else if (standardizeString[index - 1] === " ") {
      finalString = finalString + standardizeString[index].toUpperCase();
    } else {
      finalString = finalString + standardizeString[index];
    }
  }
  return finalString;
};

// console.log(STUDENT[0].firstName);

// const chuanHoaHoTen = (obj) => {};

const STUDENT1 = {
  id: "T3HXX1",
  firstName: "NgAN",
  lastName: "Duong Thuy",
};

const chuanHoaHoTenObj = (obj) => {
  for (const [key, value] of Object.entries(STUDENT1)) {
    if (key === "id") {
      console.log(`${key} : ${value}`);
    }
    if (key === "firstName" || key === "lastName") {
      console.log(`${key}: ${standardizeString(value)}`);
    }
    // console.log(`${key}: ${value}`);
  }
  // return;
};

// console.log(chuanHoaHoTenObj(STUDENT[0]));

for (let index = 0; index <= STUDENT.length - 1; index++) {
  console.log(`index: ${index}`);
  console.log(chuanHoaHoTenObj(STUDENT[index]));
}
