// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp
// object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy sắp xếp danh sách
// học viên theo tên (firstName).
students = [
  {
    id: "T3HXX1",
    firstName: "Ngan",
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
  {
    id: "T3HXX4",
    firstName: "Anh",
    lastName: "Nguyen Phuong",
  },
  {
    id: "T3HXX6",
    firstName: "Trung",
    lastName: "Doan",
  },
  {
    id: "T3HXX7",
    firstName: "Phuong",
    lastName: "Doan",
  },
  {
    id: "T3HXX9",
    firstName: "Nam",
    lastName: "Doan",
  },
];

const studentsMap = students.map((item, index) => {
  return item.firstName;
});

const studentMapSort = studentsMap.sort((a, b) =>
  a.localeCompare(b, "vi", { sensitivity: "base" })
);
// console.log(`studentMap la ${studentsMap}`);
// console.log(`studentMapSort la ${studentMapSort}`);

const compareArray = (arr1, arr2) => {
  let newArray = [];
  for (let index = 0; index <= arr1.length - 1; index++) {
    for (let index1 = 0; index1 <= arr2.length - 1; index1++) {
      if (arr1[index] === arr2[index1].firstName) {
        newArray.push(arr2[index1]);
        break;
      } else {
        continue;
      }
    }
  }
  return newArray;
};

console.log(compareArray(studentMapSort, students));
