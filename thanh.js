// filter(),map(),reduce(),some(),every()

// tim cac so chan tu 1 den 10

let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(
  arr.filter((value) => {
    return value % 2 == 0;
  })
);

console.log(
  arr.map((value) => {
    if (value % 2 === 0) {
      return value;
    }
  })
);

console.log(
  arr.reduce((value) => {
    return;
  }, 0)
);

function pow(x, n) {
  // ...
}

console.log(8 ** 2);

const a = 1 * "2";
console.log(a);
console.log(typeof a);
