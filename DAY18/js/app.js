const users = ["Ujjwal", "Ratnesh", "Zeeva", "Ajeet", "Lala"];

console.log(users)
console.log(users[0])
console.log(users[1])
console.log(users[2])
console.log(users[3])
console.log(users[4])
console.log(users[5]) // undefinde

console.log(users.length);

console.log(users.pop());

// updating array
users[1] = "Atul";
console.log(users);


const addData = () => {
    console.log(users);
    console.log(users.push("Abhiraj"));
    console.log(users);
}