/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12901
 *
 * COMMENT:
 * 2016년 요일 확인
 **/

function solution(a, b) {
  var answer = '';
  const date = new Date(`2016,${a},${b}`);
  let day = date.toString().split(' ');
  answer = day[0].toUpperCase();
  return answer;
}
