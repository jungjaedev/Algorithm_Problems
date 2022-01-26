/**
 * ABOUT
 *
 * DATE: 2022-01-26
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/4153
 *
 * COMMENT:
 * 직각삼각형인지 확인하는 함수
 **/

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let line of inputs) {
  let values = line.split(' ').map(el => parseInt(el));

  if (values[0] === 0) break;
  values.sort((a, b) => {
    return a - b;
  });

  if (values[0] * values[0] + values[1] * values[1] === values[2] * values[2]) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}
