//function: la 1 subprogram, chuong trinh con
//tập hợp của những source code có cùng ý nghĩa >> làm code ngắn gọn hơn, tường minh hơn
// 
//cũ: sử dụng từ khóa function;
function chayBo() {
  console.log('khoi dong');
  console.log('start chay');
  console.log('khoi dong');
  console.log('khoi dong');
  console.log('khoi dong');
  console.log('khoi dong');
}

// arrow function: phổ biến : sử dụng như 1 biến
const learnReact = () => {
  console.log(`learn HTML/CSS`);
  console.log(`learn HTML/CSS`);
  console.log(`learn HTML/CSS`);
}

// neu ko truyen bien vao paramer, chuong trinh se chay voi bien default
const defautlParams = (name = 'trung') => {
  console.log(`ten toi la ${name}`);
}

defautlParams();




