const readlineSync = require("readline-sync");
const fs = require("fs");

let indexSex = ["male", "female"];
// + Hiển thị tất cả học sinh
// + Thêm mới học sinh
// + Xoá 1 học sinh theo id
// +  Xoá nhiều học sinh theo id
// + Edit thông tin học sinh
// + Tìm kiếm học sinh theo tên
// + Tìm kiếm học sinh thủ khoa vào trường
// + Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)
// + Sắp xếp học sinh theo bảng chữ cái
// + Sắp xếp học sinh theo điểm trung bình tăng dần
// +  Sắp xếp học sinh theo tuổi tăng dần
// +  Exit: thoát khỏi chương trình và không hiện menu nữa
const showMenu = () => {
  console.log("     Student Managerment ");
  console.log("===============================");
  console.log(" 1.Show all student");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student by Id");
  console.log(" 4.Delete multiple students by Id");
  console.log(" 5.Edit student by Id");
  console.log(" 6.Find students by name"); // return it hoac nhieu ten theo mang
  console.log(" 7.Tìm kiếm học sinh thủ khoa vào trường"); // return it hoac nhieu ten theo mang
  console.log(
    " 8.Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)"
  );
  console.log(" 9.Sort student by name ascending ");
  console.log(" 10.Sort student by medium grade ascending ");
  console.log(" 11.Sort student by age ascending ");
  console.log(" 12.Exit");
};
showMenu();

let chose = readlineSync.question("Your chose ?");
let studenStr = ""; // de student Str luc dau tuong tac
try {
  // lay data tu trong data.txt va gan vo bien dataJSON
  const dataStr = fs.readFileSync("./data.txt", "utf8");
  var studentJSON = JSON.parse(dataStr);
} catch (err) {
  console.error(err);
}

// id, tên, tuổi, giới tính, điểm vào trường, điểm trung bình
// {id:0, name: 'abc', age: '40', sex: 'female','entrance-grade':8,'medium-grade':8 }
const saveFile = () => {
  // luu array vo file
  studenStr = JSON.stringify(studentJSON);
  fs.writeFileSync("./data.txt", studenStr, "utf8");
};

const createStudent = () => {
  let index = 0;
  if (studentJSON[0]) {
    // ton tai array
    index = studentJSON[studentJSON.length - 1].id + 1;
    let name = readlineSync.question("name?");
    let age = readlineSync.question("age?");
    let sex = readlineSync.keyInSelect(indexSex, "sex? [0: male, 1: female]");
    let entranceGrade = readlineSync.question(`diem dau vao?`);
    let mediumGrade = readlineSync.question(`diem trung binh?`);
    studentJSON.push({
      id: index,
      name: name,
      age: age,
      sex: indexSex[sex],
      "entrance-grade": entranceGrade,
      "medium-grade": mediumGrade,
    });
  } else {
    // array rong
    index = index + 1;
    let name = readlineSync.question("name?");
    let age = readlineSync.question("age?");
    let sex = readlineSync.keyInSelect(indexSex, "sex? [0: male, 1: female]");
    let entranceGrade = readlineSync.question(`diem dau vao?`);
    let mediumGrade = readlineSync.question(`diem trung binh?`);
    studentJSON.push({
      id: index,
      name: name,
      age: age,
      sex: indexSex[sex],
      entraceGrade: entranceGrade,
      mediumGrade: mediumGrade,
    });
  }
  saveFile();
};
const deleteStudent = () => {
  const name = readlineSync.question("What name?");
  const filterWithoutName = studentJSON.filter((i) => i.name != name);
  studentJSON = filterWithoutName;
  saveFile();
};
const deleteManyStudentById = () => {};
const editStudentById = () => {
  const findId = parseInt(readlineSync.question("What id do you want edit?"));
  let indexId = studentJSON.findIndex((i) => i.id === findId); // return index cua object can tim trong array, -1 neu khong co
  if (indexId >= 0) {
    let nameEdit = readlineSync.question("name? ");
    let ageEdit = readlineSync.question("age? ");
    let sexEdit = readlineSync.keyInSelect(
      indexSex,
      "sex? [0: male, 1: female]"
    );
    let entranceGradeEdit = readlineSync.question("entrance grade? ");
    let mediumGradeEdit = readlineSync.question("medium?  ");
    const newStudent = {
      id: findId,
      name: nameEdit,
      age: ageEdit,
      sex: indexSex[sexEdit],
      entranceGrade: entranceGradeEdit,
      mediumGrade: mediumGradeEdit,
    };

    studentJSON.splice(indexId, 1, newStudent);
    saveFile();
  } else {
    console.log("Không tìm thấy id");
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
const findHighestEntranceStudent = () => {};
const showWarningStudentsBelow4 = () => {
  // const warningList = student.JSON.filter((i) => {
  // })
};
const sortStudentByMediumGradeASC = () => {
  const sortedByGradeASC = studentJSON.sort((current, next) => {
    console.log(current.mediumGrade, next.mediumGrade);
    if (current.mediumGrade < next.mediumGrade) return -1;
    if (current.mediumGrade > next.mediumGrade) return 1;
    return 0;
  });
  console.log(sortedByGradeASC);
};
const sortStudentByNameASC = () => {
  const sortedByNameASC = studentJSON.sort((current, next) => {
    return current.name.localeCompare(next.name, "vi", { sensitivity: "base" });
  });
  console.log(sortedByNameASC);
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
      deleteManyStudentById();
      chose = 0;
      break;
    case 5:
      editStudentById();
      chose = 0;
      break;
    case 6:
      findStudentByName();
      chose = 0;
      break;
    case 7:
      findHighestEntranceStudent();
      chose = 0;
      break;
    case 8:
      showWarningStudentsBelow4();
      chose = 0;
      break;
    case 9:
      sortStudentByNameASC();
      chose = 0;
      break;
    case 10:
      sortStudentByMediumGradeASC();
      chose = 0;
      break;
    case 11:
      sortStudentByAgeASC();
      chose = 0;
      break;
    case 12:
      process.exit(); // thoat khoi chuong trinh

    default:
      break;
  }
}
