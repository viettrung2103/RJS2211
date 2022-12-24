//hoisting: la 1 cai bien, khi khai baó thì sẽ có 2 phần, 1 phần tạo biến sẽ dc để lên trên cùng, sau đó biến sẽ dc gán với 1 giá trị tại nơi ghi code

let b = 2;
let c = "3";
console.log(b >= c);
// khi chay, js sẽ khai b = 2, c = 2 ( number not string) =>> false vi 2 < 3
console.log("--next--");
let array1 = [4, 5, 6];
for (i in array1) {
  console.log(i);
}
