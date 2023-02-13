const shortid = require("shortid");
const { FormatMoney } = require("format-money-js");
const { uid } = require("uid");
const fs = require("fs");
const { Console } = require("console");
var readlineSync = require("readline-sync");

const fm = new FormatMoney({
  decimals: 2,
});
// console.log(shortid.generate());

const products = [
  {
    id: shortid.generate(),
    name: "iphone",
  },
  {
    id: shortid.generate(),
    name: "samsung",
  },
];

console;
console.log(products);
const employees = [
  {
    id: uid(),
    name: "Trung",
  },
  {
    id: uid(),
    name: "Hoa",
  },
];

// fs.readFile("./agenda.txt", function (err, data) {
//   if (err) throw err;
//   Console.log(data.toString());
// });

var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

var readlineSync = require("readline-sync"),
  animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
  index = readlineSync.keyInSelect(animals, "Which animal?");
console.log("Ok, " + animals[index] + " goes to your room.");

readlineSync.setDefaultOptions({ limit: ["green", "yellow", "red"] });
a1 = readlineSync.question("Which color of signal? "); // Input is limited to 3 things.
a2 = readlineSync.question("Which color of signal? "); // It's limited yet.
a3 = readlineSync.question("What is your favorite color? ", { limit: null }); // It's unlimited temporarily.
a4 = readlineSync.question("Which color of signal? "); // It's limited again.
readlineSync.setDefaultOptions({ limit: ["beef", "chicken"] });
a5 = readlineSync.question("Beef or Chicken? "); // Input is limited to new 2 things.
a6 = readlineSync.question("And you? "); // It's limited to 2 things yet.
