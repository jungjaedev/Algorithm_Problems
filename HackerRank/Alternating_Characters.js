/**
 * ABOUT
 *
 * DATE: 2022-05-17
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true
 *
 * COMMENT:
 * You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
 **/

function alternatingCharacters(s) {
  let result = 0;
  if (s.length >= 1 && s.length <= 100000) {
    let arr = s.split('');
    let past = arr[0];

    arr = arr.filter((item, key) => {
      if (item !== past && key !== 0) {
        past = item;
        return item;
      }
    });
    result = s.length - [s.charAt(0), ...arr].length;
  }
  return result;
}
