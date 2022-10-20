/**
 * ABOUT
 *
 * DATE: 2022-10-18
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 학급 회장(해쉬)
 **/

function solution(str) {
  let answer = '';
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    let cnt = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && str[j] !== 0) {
        cnt++;
        str[j] = 0;
      }
    }
    strObj[str[i]] = cnt;
  }
  let maxValue = 0;
  for (const [key, value] of Object.entries(strObj)) {
    if (maxValue < value) {
      maxValue = value;
      answer = key;
    }
  }
  return answer;
}

// use hashmap
function solution1(str) {
  let answer;
  let hash = new Map();
  for (let i = 0; i < str.length; i++) {
    if (hash.has(str[i])) {
      hash.set(str[i], hash.get(str[i]) + 1);
    } else {
      hash.set(str[i], 1);
    }
  }
  let maxValue = 0;
  for (const [key, value] of hash) {
    if (maxValue < value) {
      maxValue = value;
      answer = key;
    }
  }
  return answer;
}

const str = 'DDACBBBEABBEABEDCBADDEBBEDABADDBBBBEDDBBBBEBBACCDB';

console.log(solution1(str));
