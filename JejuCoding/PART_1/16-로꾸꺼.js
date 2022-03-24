function solution(str) {
  let reverse = str.split('').reverse().join('');
  return reverse;
}

const word = '거꾸로';
console.log(solution(word));
