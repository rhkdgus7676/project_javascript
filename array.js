'use strict';

// alert("hello");

const fruits= ['apple','banana','peach','strawberry','blueberry','onion']
console.log(fruits);

const fruitsarray = fruits.join('.');
console.log(fruitsarray);

const fruits2= 'a,b,c,d';
console.log(fruits2);

const fruits2array = fruits2.split(',');
console.log(fruits2array);

const fruitsreverse = fruits.reverse();
console.log(fruitsreverse);

const fruitsslice= fruits.slice(0,2);
console.log(fruitsslice);
console.log(fruits);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

const student90 = students.find((students)=>students.score===90);
console.log(student90);

const enrolledstudents = students.filter(function(students){
  return students.enrolled;
})
console.log(enrolledstudents);

const studentsnumber = students.map(function(students){
    return students.score;
});
console.log(studentsnumber);

const students50 =  students.some(function(students){
  return students.score<50;
})
//or can use every method
console.log(students50);

// const studentsaverage = students.reduce(function(students){
//   return students.score/5;
// })
// console.log(studentsaverage);

const studentscoretostring = students.map(function(students){
    return students.score;
})
.filter((score)=>score>=50)
.join();
console.log(studentscoretostring);

const studentsort = students.map((students)=> students.score)
.sort()
.join(',')
;
console.log(studentsort);
