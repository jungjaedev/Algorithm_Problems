function solution(arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  answer = Math.floor(sum / 3);
  return answer;
}

const scores = [20, 30, 50];
console.log(solution(scores));
