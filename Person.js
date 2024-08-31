class Person {
  firstName;
  lastName;
  middleName;
  id;
  fullNamePieces;

  constructor(data = {}, personService) {
    this.firstName = data.firstName || "";
    this.lastName = data.lastName || "";
    this.middleName = data.middleName || "";
    this.fullNamePieces = [data.firstName, data.middleName, data.lastName];
    this.id = data.id;
    this.personService = personService;
  }

  get fullName() {
    if (this.middleName.length > 0) {
      return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }

    return `${this.firstName} ${this.lastName}`;
  }

  async getMyFullUserData() {
    return this.personService.getUserById(this.id);
  }

  sayMyName() {
    window.alert(this.fullName);
  }

  getCodeName() {
    const isATestingGod = confirm("Are you a testing god?");

    if (isATestingGod) return "TESTING GOD!";
    else return "Scrub Skipping tests in his best friend's ride";
  }
}
