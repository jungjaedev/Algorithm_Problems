/**
 * ABOUT
 *
 * DATE: 2021-12-31
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42586
 *
 * COMMENT:
 * 처리속도에 따른 날짜별 완료 작업수 출력
 **/

function solution(progresses, speeds) {
  var answer = [];
  let count = 0;
  let day = 1;
  while (progresses[0]) {
    if (progresses[0] + speeds[0] * day >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    } else {
      if (count > 0) {
        answer.push(count);
      }
      day++;
      count = 0;
    }
  }
  answer.push(count);
  return answer;
}
