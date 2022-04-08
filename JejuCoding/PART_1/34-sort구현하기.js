function solution(arr) {
  let sorted = arr
    .split(' ')
    .sort((a, b) => {
      return a - b;
    })
    .join(' ');

  if (arr === sorted) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

console.log(solution('176 156 155 165 166 169'));
