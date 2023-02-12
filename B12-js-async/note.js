// cách để biết code js chạy như thế nào
// js là ngôn ngữ chạy bất đồng bộ
// động bộ: sync
// bất đồng bộ: async.

let a = 10;
setTimeout(() => {
  console.log("hello")
},1000);

console.log(a);

// đồng bộ: chạy code từ trên xuống dưới, từ trái qua phải.
// bất đồng bộ: chạy không theo  thứ tự trên, nhưng code (JS sẽ đánh giá dòng code nào mất ít thời gian nhất sẽ chạy trước), và chạy dòng code đó đầu tiên
// xử lý bất đồng bộ >> biến bất đồng bộ thành đồng bộ => async thành sync

// phía client đăng nhập >> server báo client đã đăng nhập >> phía client xử lý tiếp

// có 3 cách để xử lý bất đồng bộ: callback, promise, async - await.


// event loop trong js
// call stack: xu ly ngay lap tuc
// web api: noi cac dong code async se cho
// call stack: sau khi cac code async chờ xong sẽ lưu vô đây, theo thứ tự code nào xử lý xong sớm sẽ vô sớm >> first in first out ( sắp xép các dòng code api, xong sớm thì vô callback sớm)

// thứ tự trong callback
// onEvent sẽ xử lý sau setTImeOut
// tương tác ngay lập tức


// C1: callback
// pha cà phê: Start =>> đang pha ( doing) >> xong (done)

// doc ghi file trong ó
// thao tac CRUD với array