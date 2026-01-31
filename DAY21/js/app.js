// const student = {
//     name: "ravi",
//     class: 1, 
//     roll: 2,
//     subject: "math"
// };

const students = [
    {
        name: "ravi",
        class: 1, 
        roll: 2,
        subject: "math"
    },
    {
        name: "prashant",
        class: 3, 
        roll: 6,
        subject: "hindi"
    },
    {
        name: "shikha",
        class: 5, 
        roll: 12,
        subject: "english"
    },
    {
        name: "shivani",
        class: 10, 
        roll: 20,
        subject: "math-2"
    },
    {
        name: "ajeet",
        class: 11, 
        roll: 22,
        subject: "physics"
    },
]

console.log(students);
console.log(students[1].name);

for(var student of students){
    console.log(student);
}

// for(var student of students){
//     console.log(student.name);
//     console.log(student.class);
//     console.log(student.roll);
//     console.log(student.subject);
// }

for(var student of students){
    const {name, class:cls, roll, subject} = student;
    console.log(name, cls, roll, subject);
}