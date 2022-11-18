/**
 * ABOUT
 *
 * DATE: 2022-11-18
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 이분검색
 **/

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  // lt는 증가, rt는 감소하면서 체크하므로
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

const arr = [23, 87, 65, 12, 57, 32, 99, 81];

console.log(solution(32, arr));
