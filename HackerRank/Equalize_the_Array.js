/**
 * ABOUT
 *
 * DATE: 2022-05-02
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true
 *
 * COMMENT:
 * 배열 정렬
 **/

function equalizeArray(arr) {
  let arrObj = {};
  let maxCount = 0;
  for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
  for (let value in arrObj) {
    if (arrObj[value] > maxCount) {
      maxCount = arrObj[value];
    }
  }
  return arr.length - maxCount;
}
