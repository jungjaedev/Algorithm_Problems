/**
 * ABOUT
 *
 * DATE: 2022-03-31
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12953
 *
 * COMMENT:
 * arr의 최소공배수 구하기
 **/

function solution(arr) {
  let result = 1;

  function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}
