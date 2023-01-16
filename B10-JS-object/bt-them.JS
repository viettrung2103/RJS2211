//STRING

// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
const countWhiteSpace = (string) => {
  let count = 0;
  for (let index = 0; index <= string.length - 1; index++) {
    if (string[index] === " ") {
      count++;
    }
  }
  return count;
};
// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “ Hello world ”, output: “Helloworld”
const removespace = (string) => {
  let newString = "";
  for (let index = 0; index <= string.length - 1; index++) {
    if (string[index] === "/n " || string[index] === " ") {
      continue;
    } else {
      newString = newString + string[index];
    }
  }
  return newString;
};

// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”
const reverseString = (string) => {
  let newString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    newString = newString + string[index];
  }
  return newString;
};

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2
const indexofString = (string1, string2) => {
  result = string1.indexOf(string2);
  return result;
};
// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”
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

// 16. Viết chương trình lấy id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “Tung Nguyenthac”
const getName = (url) => {
  let result = "";
  let REGEX = /[0-9]/g; // regex for number from 0 -9
  let subStringArray = url.split("/"); // split array by /
  let idNamewithNum = subStringArray[3].split(".");
  let num = idNamewithNum.pop(idNamewithNum[3]);
  let idNamewithoutNum = idNamewithNum.join(" "); // vi pop la shallow copy, no se anh huong toi main array
  for (index = 0; index <= idNamewithoutNum.length - 1; index++) {
    if (index === 0) {
      // chu so dau tien viet hoa
      result = result + idNamewithoutNum[index].toUpperCase();
    } else if (idNamewithoutNum[index - 1] === " ") {
      // vi tri index - 1 === space, chu tai vi tri index viet in hoa
      result = result + idNamewithoutNum[index].toUpperCase();
    } else {
      result = result + idNamewithoutNum[index];
    }
  }
  return result;
};

const EXAMPLE_STRING = "NguyeN THI tho tHu hA";
const URL = "https://www.facebook.com/tung.nguyenthac.1/";

console.log("--");
const s2 = "is";
console.log(getName(URL));
