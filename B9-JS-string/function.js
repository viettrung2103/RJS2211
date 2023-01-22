//arrow function

//rest params (...allParams)

// const sumAll = (...allParams) => {
//   let total = 0;
//   for (let index = 0; index < allParams.length; index++) {
//     const element = allParams[index];
//     total += element;
//     console.log(total);
//   }
// };
// console.log(sumAll(5, 6, 9));

//callback function
// 1 function la 1 bien cho 1 function
const aFunction = (callback) => {
  console.log(`Day la function A`);
  callback();
};
// cach viet 1
const bFunction = () => {
  console.log(`Day la function B`);
};

// aFunction(bFunction);

//cach viet 2

console.log(`chay o day`);
aFunction(() => {
  console.log(`Day la function B`);
});

// bfunction dc goi la callback function
// để thực hiện 1 tác vụ sau khi hoàn thành 1 tác vụ khác. >> bất đồng bộ