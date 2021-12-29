/**
 * ABOUT
 *
 * DATE: 2021-12-29
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12917
 *
 * COMMENT:
 * 문자열 내림차순으로 정렬(대문자 < 소문자)
 **/

function solution(s) {
  return s.split('').sort().reverse().join('');
}
