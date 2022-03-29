function solution(name) {
  // return name.toUpperCase();
  let answer = '';
  for (let i = 0; i < name.lenth; i++) {
    if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
      answer += name[i].toUpperCase();
    } else {
      answer += name[i];
    }
  }
  return answer;
}

console.log(solution('mary'));
