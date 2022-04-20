function solution(month, day) {
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let answer = new Date(`2020-` + month + '-' + day);
  return week[answer.getDay()];
}

console.log(solution(5, 26));
// 'Tue'출력 2022년기준
