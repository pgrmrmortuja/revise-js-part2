let arr = [1,2,3,4,5,6,7];

//sum, avg
let sum = 0;
for(i = 0; i <= arr.length - 1; i++){
    sum = sum + arr[i];
}

const avg = sum / arr.length;
console.log(sum , avg);