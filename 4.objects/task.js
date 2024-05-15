function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}
Student.prototype.getAverage = function() {
  if (!this.marks|| !this.marks.length) {
    return 0;
  }
  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student = new Student("Tony", "male", 37);
student.exclude("плохая успеваемость");
console.log(student.getAverage());
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
