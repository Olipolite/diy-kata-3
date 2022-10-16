const reachDestination = (distance, speed) => {
  let equation = distance / speed;
  equation = Math.ceil(equation * 2) / 2;
  return `I should be there in ${equation} hours.`;
};

module.exports = reachDestination;
