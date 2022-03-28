function solution(a, b) {
  let result = [];
  let num1 = parseInt(a / b);
  let num2 = a % b;
  result.push(num1);
  result.push(num2);
  return result;
}

console.log(solution(10, 2));
