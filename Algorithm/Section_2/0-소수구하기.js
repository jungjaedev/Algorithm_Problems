/**
 * ABOUT
 *
 * DATE: 2022-09-30
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 소수구하기
 **/

function solution(num) {
  let answer = 0;
  let arr = [];
  // 일단 1부터 num까지 true로 된 배열
  for (let i = 0; i < num + 1; i++) {
    arr.push(true);
  }
  // 배수인 수, 제곱인 수 false로
  for (let i = 2; i * i <= num; i += 1) {
    for (let j = i * i; j <= num; j += i) {
      console.log(j);
      arr[j] = false;
    }
  }
  // 0, 1 false로
  arr.splice(0, 2, false, false);
  // ture인 배열
  let isPrimeArr = arr.filter(el => el === true);
  answer = isPrimeArr.length;
  return answer;
}

const number = 20;
console.log(solution(number));
