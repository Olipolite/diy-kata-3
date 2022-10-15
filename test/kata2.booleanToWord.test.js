const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns Yes if boolean is passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("Returns No if boolean is passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
