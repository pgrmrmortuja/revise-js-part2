const user = {
    name: "Reyad",
    age: 24,
    class: "BSC",
    address: "Dhaka"
}

//add
user.isAbsent = true;

//delete
delete user.isAbsent;

//update
user.class = "MSC";


console.log(user);
console.log(typeof(user));
console.log(typeof(user.age));


//Nested Object
const students = [
    {name: "Reyad", age: 24},
    {name: "Tarek", age: 23},
    {name: "Mortuja", age: 22}
]

//update
students[1].age = 24;

console.log(students);
console.log(students[0]);
console.log(typeof(students))
console.log(typeof(students[0]))
console.log(typeof(students[0].name))