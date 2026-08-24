let arr = [1,2,3,4,5];

//add 6 to 4 no index
arr.splice(4,0,6);

//remove 6 from 4 no index
arr.splice(4,1)

//remove 4,5 together from the array
arr.splice(3,2)

//replace 3 by 4 in 2 no index
arr.splice(2,1,4)

console.log(arr);