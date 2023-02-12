const shortid = require("shortid");
const { FormatMoney } = require("format-money-js");
const { uid } = require("uid");
const fs = require("fs");
const { Console } = require("console");

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

fs.readFile("./agenda.txt", function (err, data) {
  if (err) throw err;
  Console.log(data.toString());
});
