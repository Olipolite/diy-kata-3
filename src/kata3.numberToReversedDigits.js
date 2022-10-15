const numberToReversedDigits = (number) => {
  const numArray = Array.from(String(number), Number);
  numArray.reverse();
  return numArray;
};
module.exports = numberToReversedDigits;
