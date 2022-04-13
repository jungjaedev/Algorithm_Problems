/**
 * ABOUT
 *
 * DATE: 2022-04-13
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12982
 *
 * COMMENT:
 * 예산
 **/

function solution(d, budget) {
  let answer = 0,
    sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];

    if (sum > budget) answer--;
  }
  return answer;
}
