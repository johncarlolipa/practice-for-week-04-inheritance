class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
      return;
    }

    for (let person of people) {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
        return;
      }
    }

    people.forEach((person) => person.introduce());
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, StudentId){
    super(firstName, lastName, age);{
      this.StudentId=StudentId;
    }
  }

  study(){
    return `${this.firstName} is studying now.`;
  }

  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and my student id is ${this.studentId}.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}