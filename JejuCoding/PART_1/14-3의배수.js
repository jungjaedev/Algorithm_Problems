function solution(num) {
  if (num % 3 === 0) {
    return '짝';
  } else {
    return num;
  }
}

console.log(solution(15));
