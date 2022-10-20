/**
 * ABOUT
 *
 * DATE: 2022-10-19
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 아나그램
 **/

function solution(str1, str2) {
  let answer = 'YES';
  let hash = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (hash.has(str1[i])) {
      hash.set(str1[i], hash.get(str1[i]) + 1);
    } else {
      hash.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash.get(str2[i]) === 0) {
      answer = 'NO';
    } else {
      hash.set(str2[i], hash.get(str2[i]) - 1);
    }
  }
  return answer;
}

const str1 = 'AbaAeCe';
const str2 = 'baeeACA';

console.log(solution(str1, str2));
