const joinNames = (namesObj) => {
  let result = "";
  const comma = ", ";
  const end = " & ";
  while (namesObj.length) {
    result += namesObj.shift().name;
    if (namesObj.length == 1) {
      result += end;
    } else if (namesObj.length > 1) {
      result += comma;
    }
  }
  return result;
};

module.exports = joinNames;

// let simpsons = namesObj;
// simpsons = simpsons.map((names) => names.name);
// simpsons.splice(-1, 0, "&");
// return console.log(simpsons);
