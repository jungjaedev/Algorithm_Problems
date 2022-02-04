/**
 * ABOUT
 *
 * DATE: 2022-02-04
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42840
 *
 * COMMENT:
 * 수포자 3명중에 가장 많이 맞힌 사람
 **/

function solution(answers) {
  let pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let count = [0, 0, 0];
  for (let i in answers) {
    if (pattern[0][i % 5] === answers[i]) {
      count[0]++;
    }
    if (pattern[1][i % 8] === answers[i]) {
      count[1]++;
    }
    if (pattern[2][i % 10] === answers[i]) {
      count[2]++;
    }
  }
  let max = Math.max(...count);
  let answer = [];
  for (let x in count) {
    if (count[x] === max) {
      answer.push(Number(x) + 1);
    }
  }
  return answer;
}
