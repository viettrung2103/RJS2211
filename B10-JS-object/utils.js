const isPrimeNum = (n) => {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    return "2 la so nguyen to";
  } else {
    for (let index = 3; index < n; index += 2) {
      if (n % index === 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag === true) {
    return `${n} la so nguyen to`;
  } else {
    return `${n} khong la so nguyen to`;
  }
};