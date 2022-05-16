/**
 * ABOUT
 *
 * DATE: 2022-05-16
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
 *
 * COMMENT:
 * k보다 큰지 비교
 **/

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count += 1;
    }
  }
  return count >= k ? 'NO' : 'YES';
}
