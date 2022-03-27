function solution(a, b) {
  let answer = 1;
  for (let i = 0; i < b; i++) {
    answer *= a;
  }
  return answer;
}

console.log(solution(3, 5));
