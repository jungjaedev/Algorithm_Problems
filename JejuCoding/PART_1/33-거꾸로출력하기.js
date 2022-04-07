function solution(str) {
  let answer = '';
  let newStr = str.split(' ').reverse();
  for (let i = 0; i < str.length; i++) {
    answer += newStr[i];
  }
  return answer;
}

const string = '1 2 3 4 5';
console.log(solution(string));
