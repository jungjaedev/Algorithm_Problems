/**
 * ABOUT
 *
 * DATE: 2022-05-03
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 *
 * COMMENT:
 * 가장 긴 candle 갯수 구하기
 **/

function birthdayCakeCandles(candles) {
  let maxH = Math.max(...candles);
  let cnt = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == maxH) {
      cnt++;
    }
  }
  return cnt;
}
