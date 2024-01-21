const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience){
    super(firstName, lastName, age); // calling the parent class constructor
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    if (!Array.isArray(teachers)) {
      throw new Error("Parameter 'teachers' must be an array of Teacher instances.");
    }

    return teachers.reduce((sum, teacher) => sum + teacher.yearsOfExperience, 0);
  

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}