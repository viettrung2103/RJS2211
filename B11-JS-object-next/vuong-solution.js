const arr = [1, 2, 3, 4, 5, 6];

//Map
const arrMap = arr.map((item, index) => item * 2);

const students = [
  { id: "T3HXX1", firstName: "NgAN", lastName: "Duong Thuy" },
  { id: "T3HXX2", firstName: "Ha", lastName: "Do Thi Thu" },
  { id: "T3HXX5", firstName: "Minh", lastName: "Nguyen Nhat" },
];

//B27

const formatName = (student) => {
  student.firstName =
    student.firstName[0].toUpperCase() +
    student.firstName.slice(1).toLowerCase();
  student.lastName =
    student.lastName[0].toUpperCase() + student.lastName.slice(1).toLowerCase();
  return student;
};

const studentMap = students.map(formatName) // Mảng đã chuẩn hóa tên
console.log(1,studentMap);
const result = studentMap.filter((student) =>( student.firstName.includes("A") || student.firstName.includes("a")) && student.firstName.length >= 3) // mảng có kí tự là A
console.log(2,result);

//B28
const uniqueStudents = students.filter(student => student.lastName.includes("Do"));
console.log(uniqueStudents);
