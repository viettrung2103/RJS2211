// b1. // '  NGuYen ThAc tUnG  ' => 'Nguyen Thac Tung'

let string1 = "  NGuYen ThAc tUnG  ";
// string to lower case
let string2 = string1.toLowerCase();
// trim space dau voi duoi cua string
let string3 = string2.trim();

console.log("chay loop");
for (let i = 0; i <= string3.length - 1; i++) {
  if (i === 0 || string3[i - 1] === " ") {
    //khi ki tu tai i hoac ki tu tai (i-1) === ' ', thay doi ki tu tai i voi ki tu to Uppercase tai i
    let upperLetter = string3[i].toUpperCase();
    string3 = string3.replace(string3[i], upperLetter);
    console.log(string3);
  }
}

//bai tap xuc sac

console.log("-----");
console.log("bai tap xuc sac");

let a = Math.random() * 6;
let aLamTron = Math.floor(a);
// console.log(aLamTron, b);
let soXucSac = aLamTron + 1;
console.log(`so xuc sac la ${soXucSac}`);
//tu min toi max, max - min + 1

//tong quat max, min
let max = 100;
let min = 10;
// let randomnum = Math.floor(Math.random() * (max - min + 1)); // return from 0 to max number ( 0 >> max)
// to return from min >> + min
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`so random la ${randomNum}`);
