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
});
