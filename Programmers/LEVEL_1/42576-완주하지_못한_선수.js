/**
 * ABOUT
 *
 * DATE: 2022-01-03
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12950
 *
 * COMMENT:
 * 두 행렬을 더한 배열 리턴
 **/

function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}
