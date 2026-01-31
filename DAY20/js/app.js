const admission = {
    studentName: "Ajeet Singh",
    courseName: "react",
    price: 3000,
    discount: 20
};


console.log(admission.studentName);
console.log(admission.courseName);
console.log(admission.price);
console.log(admission.discount);

for(var info in admission){
    console.log(info, admission[info]);
}