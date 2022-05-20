/**
 * ABOUT
 *
 * DATE: 2022-05-20
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12915
 *
 * COMMENT:
 * 문자열 내 마음대로 정렬하기
 **/

function solution(strings, n) {
  strings.sort(function (a, b) {
    let first = a[n];
    let second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}
