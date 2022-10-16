const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])
    ).toEqual("Bart, Lisa & Maggie");
  });
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
        {
          name: "Cringe",
        },
        {
          name: "Stjärt",
        },
      ])
    ).toEqual("Bart, Lisa, Maggie, Cringe & Stjärt");
  });
});
