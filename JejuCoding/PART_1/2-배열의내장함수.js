function solution(arr) {
  arr.splice(2, 0, 10000);
  return arr;
}

const arr = [200, 100, 300];
console.log(solution(arr));
