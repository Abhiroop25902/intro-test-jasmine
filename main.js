// I understand the value testing brings and will help to educate those about it

/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {
  let model;
  beforeEach(() => {
    model = new Person();
  });

  describe("Default Values", () => {
    it("should default first name to empty string if not given in constructor", () => {
      // assert
      expect(model.firstName).toBe("");
    });

    it("should default last name to empty string if not given in constructor", () => {
      // assert
      expect(model.lastName).toBe("");
    });

    it("should default middle name to empty string if not given in constructor", () => {
      // assert
      expect(model.middleName).toBe("");
    });
  });

  describe("full name", () => {
    beforeEach(() => {
      model = new Person({
        firstName: "Dylan",
        lastName: "Israel",
      });
    });

    it("should give firstName and lastName only if middleName is empty", () => {
      //arrange
      model.middleName = "";

      //act
      const expectedResult = `${model.firstName} ${model.lastName}`;
      const actualResult = model.fullName;

      //assert
      expect(actualResult).toEqual(expectedResult);
    });

    it("should give middleName first letter also if middle name is not empty", () => {
      //arrange
      model.middleName = "Christopher";

      //act
      const expectedResult = `${model.firstName} ${model.middleName[0]}. ${model.lastName}`;
      const actualResult = model.fullName;

      //assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
