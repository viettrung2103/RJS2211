// Object => đối tượng
const people = {
  name: "Tung",
  age: "20",
  job: "teacher",
};

//CRUD: tương tác với object: CREATE, GET, UPDATE, DELETE
// C1
people.sex = "male";
people.age = "28";
delete people.job;
console.log({ people });

//check phan tu co ton tai ko
// console.log(people.hasOwnProperty("age"));

// C2 de trup cap gia tri cua object
// people[index] = "test 123"; // dung cho truong hop properties dong.
console.log(people);

// Object {
//   key: value
// }

console.log(Object.keys(people)); // access people object's key
console.log(Object.values(people));// access people object's value
