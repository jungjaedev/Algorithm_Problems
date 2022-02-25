/**
 * ABOUT
 *
 * DATE: 2022-02-25
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42587
 *
 * COMMENT:
 * 처리속도에 따른 날짜별 완료 작업수 출력
 **/

function solution(priorities, location) {
  let answer = 0;
  let cnt = 0;
  let myDoc = location;
  while (priorities.length > 0) {
    let c = priorities.shift();
    if (priorities.filter(e => e > c).length > 0) {
      priorities.push(c);
    } else {
      cnt++;
      if (myDoc == 0) {
        return (answer = cnt);
      }
    }
    myDoc--;
    if (myDoc === -1) {
      myDoc = priorities.length - 1;
    }
  }
  return answer;
}
