/**
 * ABOUT
 *
 * DATE: 2022-05-06
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
 *
 * COMMENT:
 * 고양이와 쥐
 **/

function catAndMouse(x, y, z) {
  let catAPos = Math.abs(z - x);
  let catBPos = Math.abs(z - y);
  if (catAPos < catBPos) {
    return 'Cat A';
  } else if (catBPos < catAPos) {
    return 'Cat B';
  } else {
    return 'Mouse C';
  }
}
