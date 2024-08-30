/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {
  it("should default first name to empty string if not given in constructor", () => {
    //arrange
    const data = {
      firstName: null,
    };

    //act
    const model = new Person(data);

    // assert
    expect(model.firstName).toBe("");
  });
});
