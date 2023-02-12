// C1: callback
// pha cà phê: Start =>> đang pha ( doing) >> xong (done)

// callback
const doingCoffee = (cb) => {
  setTimeout(() => {
    console.log("Doing ...");
    const a = "co ca phe";
    const b = "co sua";
    cb(a, b);
  }, 5000);
};
console.log("Start");
doingCoffee((params1, params2) => {
  console.log(params1, params2);
  console.log("Done");
});

//cb
