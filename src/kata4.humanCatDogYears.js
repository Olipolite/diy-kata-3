const humanCatDogYears = (number) => {
  let array = [0, 0, 0];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      array[0] += 1; //humanYears
      array[1] += 15; //catYears
      array[2] += 15; //dogYears
    } else if (i === 1) {
      array[0] += 1;
      array[1] += 9;
      array[2] += 9;
    } else if (i <= number) {
      array[0] += 1;
      array[1] += 4;
      array[2] += 5;
    }
  }
  return array;
};

module.exports = humanCatDogYears;
