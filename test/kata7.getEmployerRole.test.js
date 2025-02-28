const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    {
      name: "Satti",

      role: "Developer",
    },
    {
      name: "Jenny",

      role: "Sales Associate",
    },
    {
      name: "Javid",

      role: "Human Recommended Reading Assistant",
    },
  ];

  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employees)).toEqual(
      "Human Recommended Reading Assistant"
    );
  });
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Jenny", employees)).toEqual("Sales Associate");
  });
});
