const readlineSync = require("readline-sync");
const fs = require("fs");

let indexSex = ["male", "female"];
const showMenu = () => {
  console.log("     Student Managerment ");
  console.log("===============================");
  console.log(" 1.Show all student");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending ");
  console.log(" 7.Sort student by age ascending ");
  console.log(" 8.Exit");
};
showMenu();

let chose = readlineSync.question("Your chose ?");
let studenStr = ""; // de student Str luc dau tuong tac
try {
  const dataStr = fs.readFileSync("./data.txt", "utf8");
  var studentJSON = JSON.parse(dataStr);
} catch (err) {
  console.error(err);
}

const saveFile = () => {
  studenStr = JSON.stringify(studentJSON);
  fs.writeFileSync("./data.txt", studenStr, "utf8");
};

const createStudent = () => {
  let name = readlineSync.question("name?");
  let age = readlineSync.question("age?");
  let sex = readlineSync.keyInSelect(indexSex, "sex? [0: male, 1: female]");
  studentJSON.push({
    name: name,
    age: age,
    sex: indexSex[sex],
  });
  saveFile();
};
const deleteStudent = () => {
  const name = readlineSync.question("What name?");
  const filterWithoutName = studentJSON.filter((i) => i.name != name);
  studentJSON = filterWithoutName;
  saveFile();
};
const editStudent = () => {
  const nameEdit = readlineSync.question("What name do you want edit?");
  let indexName = studentJSON.findIndex((i) => i.name === nameEdit);
  if (indexName >= 0) {
    const ageEdit = readlineSync.question("age? ");
    let sexEdit = readlineSync.keyInSelect(
      indexSex,
      "sex? [0: male, 1: female]"
    );
    const newStudent = {
      name: nameEdit,
      age: ageEdit,
      sex: indexSex[sexEdit],
    };

    studentJSON.splice(indexName, 1, newStudent);
    saveFile();
  } else {
    console.log("Không tìm thấy tên");
  }
};
const findStudentByName = () => {
  const nameEdit = readlineSync.question("What name do you want to find?");
  let indexName = studentJSON.findIndex((i) => i.name === nameEdit);
  if (indexName >= 0) {
    console.log(studentJSON[indexName]);
  } else {
    console.log(`Khong tim thay hoc sinh voi ten: ${nameEdit}`);
  }
};
const sortStudentByNameASC = () => {
  const sortedByNameASC = studentJSON.sort((current, next) => {
    return current.name.localeCompare(next.name, "vi", { sensitivity: "base" });
  });
  console.log(sortStudentByNameASC);
};
const sortStudentByAgeASC = () => {
  const sortedByAgeASC = studentJSON.sort((current, next) => {
    if (current.age < next.age) return -1;
    if (current.age > next.age) return 1;
    return 0;
  });
  console.log(sortedByAgeASC);
};

while (true) {
  switch (parseInt(chose)) {
    case 0:
      showMenu();
      chose = readlineSync.question("Your chose ?");
      break;
    case 1:
      console.log(studentJSON);
      chose = 0;
      break;
    case 2:
      createStudent();
      chose = 0;
      break;
    case 3:
      deleteStudent();
      chose = 0;
      break;
    case 4:
      editStudent();
      chose = 0;
      break;
    case 5:
      findStudentByName();
      chose = 0;
      break;
    case 6:
      sortStudentByNameASC();
      chose = 0;
      break;
    case 7:
      sortStudentByAgeASC();
      chose = 0;
      break;
    case 8:
      process.exit();

    default:
      break;
  }
}
