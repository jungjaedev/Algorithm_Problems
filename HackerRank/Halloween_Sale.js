/**
 * ABOUT
 *
 * DATE: 2022-04-24
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true
 *
 * COMMENT:
 * s까지 d만큼 차감하면서(m까지) 더한 횟수
 **/

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let sum = 0;
  let cnt = 0;
  let num = p;
  console.log(d, m);
  while (true) {
    sum += num;
    if (sum > s) break;
    if (num >= d + m) {
      num = num - d;
    } else if (num < d + m) {
      num = m;
    }
    cnt++;
    console.log('cnt : ', cnt);
    console.log('num : ', num);
    console.log('sum : ', sum);
  }
  return cnt;
}
