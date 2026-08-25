//even
for(let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}

//odd
for(let i = 1; i <= 10; i++){
    i % 2 === 1 && console.log(i);
}

//break
for(let i = 1; i <= 10; i++){
    if(i > 5){
        break;
    }
    console.log(i);
}

//continue
for(let i = 1; i <= 5 ; i++){
    if(i === 4){
        continue;
    }
    console.log(i);
}

//prime
for(let i = 2; i <= 8; i++){
    if(i % i === 0 && i % 1 === 0){
        continue; 
    }
    console.log(i);
}