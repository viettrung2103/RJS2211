var readlineSync = require("readline-sync");

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
  if ((input = -1)) {
    console.log("Chuan bi thoat khoi chuong trinh");
    readlineSync.keyInPause("Dang thoat khoi chuong trinh ...");
    console.log(`Da Thoat Khoi Chuong Trinh`);
    console.log("Hen Gap Ban Lan Sau");
    break;
  }
  // console.log();
}

// var readlineSync = require("readline-sync"),
//   animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
//   index = readlineSync.keyInSelect(animals, "Which animal?");
// console.log("Ok, " + animals[index] + " goes to your room.");
