function solution(scores) {
  scores.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let arr = [];

  while (arr.length < 3) {
    let n = scores.pop();
    if (!arr.includes(n)) {
      arr.push(n);
    }
    count += 1;
  }
  return count;
}

let cnt = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
console.log(solution(cnt));
