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

  describe("say my name", () => {
    it("should alert the full name of the user", () => {
      //arrange
      model.firstName = "Dylan";
      model.lastNam = "Israel";

      spyOn(window, "alert");

      //act
      model.sayMyName();

      //assert
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(model.fullName);
    });
  });

  describe("get code name", () => {
    it("should return positive case", () => {
      //arrange
      spyOn(window, "confirm").and.returnValue(true);

      //act
      const actualValue = model.getCodeName();

      //assert
      const expectedValue = "TESTING GOD!";
      expect(expectedValue).toBe(actualValue);
      expect(window.confirm).toHaveBeenCalledWith("Are you a testing god?");
    });

    it("should return negative case", () => {
      //arrange
      spyOn(window, "confirm").and.returnValue(false);

      //act
      const actualValue = model.getCodeName();

      //assert
      const expectedValue = "Scrub Skipping tests in his best friend's ride";
      expect(expectedValue).toBe(actualValue);
      expect(window.confirm).toHaveBeenCalledWith("Are you a testing god?");
    });
  });
});
