/**
 * ABOUT
 *
 * DATE: 2022-03-30
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/82612
 *
 * COMMENT:
 * 부족한 돈 계산하기
 **/

function solution(price, money, count) {
  let answer = 0;
  let sum = 0;
  let priceSum = price;
  for (let i = 0; i < count; i++) {
    sum += price;
    price += priceSum;
  }

  answer = sum - money;
  if (answer < 0) {
    return 0;
  }
  return answer;
}
