const student = {
    name: "Reyad",
    subject: { bangla: 90, english: 80, math: 100 }
}

let sum = 0;
for (key in student.subject) {

    sum += student.subject[key];
}

const totalSubject = Object.keys(student.subject).length;

const avg = sum / totalSubject;

const grade = avg >= 80 ? "A+" : avg >=70 && avg <= 80 ? "A" : "Need to Improve";

console.log(sum, avg, grade);