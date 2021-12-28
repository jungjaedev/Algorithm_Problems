/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/87389
 *
 * COMMENT:
 * 나머지가 1이되는 수 리턴
 **/

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
