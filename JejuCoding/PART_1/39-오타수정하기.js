function solution1(str) {
  let fixedStr = str.split('q').join('e');
  return fixedStr;
}

function solution2(str) {
  let fixedStr = str.replace(/q/gi, 'e');
  return fixedStr;
}

console.log(solution1('querty'));
console.log(solution2('hqllo my namq is hyqwon'));
