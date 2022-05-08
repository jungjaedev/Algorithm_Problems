/**
 * ABOUT
 *
 * DATE: 2022-05-08
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
 *
 * COMMENT:
 *
 **/

function dayOfProgrammer(year) {
  let ret = '13.09.' + year;
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      ret = '12.09.' + year;
    }
  } else if (year === 1918) {
    ret = '26.09.' + year;
  } else {
    if (year % 4 === 0) {
      ret = '12.09.' + year;
    }
  }
  return ret;
}
