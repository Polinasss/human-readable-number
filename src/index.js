module.exports = function toReadable (number) {
  const first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const second = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const third = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const hundreds = 'hundred';

  let result = [];
  let n = String(number).split('');
  let leng = n.length;
  if (leng == 1) {
    result.push(first[number]);
  } else if (leng == 2) {
    if (n[0] == '1') {
      result.push(second[Number(n[1])]);
    } else {
      result.push(third[Number(n[0])]);
      Number(n[1]) !== 0 ? result.push(first[Number(n[1])]) : result;
    }
  } else if (leng == 3) {
    result.push(first[Number(n[0])]);
    result.push(hundreds);

    if(n[1] == '0' && n[2] !== '0') {
      result.push(first[Number(n[2])]);
    } else if (n[1] == '0' && n[2] == '0') {
      result;
    } else if (n[1] == '1') {
      result.push(second[Number(n[2])]);
    } else {
      result.push(third[Number(n[1])]);
      Number(n[2]) !== 0 ? result.push(first[Number(n[2])]) : result;
    }
  }
  let res = result.join(' ');
  return res;
}
