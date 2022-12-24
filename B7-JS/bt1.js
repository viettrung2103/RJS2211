// giai phuong trinh bac 2
console.log("giai phuong trinh bac 2");
// ax2 +bx + c = 0
let a = 10;
let b = 20;
let c = 5;
let mauSo = 2 * a;

let delta = b * b - 4 * a * c;
console.log(`delta = ${delta}`);

if (delta < 0) {
  console.log("phuong trinh vo nghiem");
} else if (delta == 0) {
  let x1 = -(b / mauSo);
  let x2 = x1;
  console.log(`nghiem la ${x2}`);
} else {
  let tuSo1 = -b + Math.sqrt(delta);
  let tuSo2 = -b - Math.sqrt(delta);
  let x1 = tuSo1 / mauSo;
  let x2 = tuSo2 / mauSo;
  console.log(`nghiem x1 = ${x1}`);
  console.log(`nghiem x2 = ${x2}`);
}
