function one(n) {
  function two(value) {
    const num = Math.pow(value, n);
    return num;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
