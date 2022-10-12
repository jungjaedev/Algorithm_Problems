/**
 * ABOUT
 *
 * DATE: 2022-10-12
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 두 집합 공통원소 오름차순 출력
 **/

function solution1(arr1, arr2) {
  let answer = [];
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
      }
    }
  }
  return answer.sort();
}

function solution2(arr1, arr2) {
  let answer = [];
  let len = arr1.length;
  let p1 = 0;
  let p2 = 0;
  arr1.sort();
  arr2.sort();
  while (p1 < len && p2 < len) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
// console.log(solution1(arr1, arr2));
console.log(solution2(arr1, arr2));
