module.exports = function getZerosCount(number) {
  let copy = number, coef = 5;
  let count = 0;
  while(coef <= number) {
    count += parseInt(number / coef);
    coef *= 5;
  }
  return count;
}
