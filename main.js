/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {
  describe("Default Values", () => {
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

    it("should default last name to empty string if not given in constructor", () => {
      //arrange
      const data = {
        lastName: null,
      };

      //act
      const model = new Person(data);

      // assert
      expect(model.lastName).toBe("");
    });

    it("should default middle name to empty string if not given in constructor", () => {
      //arrange
      const data = {
        middleName: null,
      };

      //act
      const model = new Person(data);

      // assert
      expect(model.middleName).toBe("");
    });
  });
});
