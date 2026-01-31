const users = ["Ujjwal", "Ratnesh", "Zeeva", "Ajeet", "Lala"];

const users2 = []

for(var user of users){
    console.log(user);
}

for(var user of users){
    users2.push(user);
}

console.log(users2);