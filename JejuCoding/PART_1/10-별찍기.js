function solution(num) {
  let level = '';
  for (let i = 1; i <= num; i++) {
    let txt = '';
    for (let j = 1; j <= num - i; j++) {
      txt += ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      txt += '*';
    }
    level += txt + '\n';
    console.log(level);
  }
}

const n = 5;
console.log(solution(n));
