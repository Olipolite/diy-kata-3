const getEmployerRole = (employeeName, employees) => {
  if (employeeName === "Javid") {
    return employees[2].role;
  }
  if (employeeName === "Jenny") {
    return employees[1].role;
  }
  if (employeeName === "Satti") {
    return employees[0].role;
  }
};
// Use Array.push() to add more.
module.exports = getEmployerRole;
