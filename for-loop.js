//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//reverse loop
for(let r = 5; r >= 0; r--){
    console.log(r);
}

//for---of
const friends = ["Reyad", "Mortuja", "Noman"];

for(let i = 0; i < friends.length - 1; i++){
    console.log(friends[i]);
}

for(friend of friends){
    console.log(friend);
}

//for------in
const students = {name: "Reyad", age: 24, address: "Dhaka"};
for(key in students){
    console.log(key);
    console.log(key, students[key]);
}