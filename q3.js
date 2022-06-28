// Question 3
// Print the pattern given below, using loops.

// Input:
// No input is required.

// Output:
// 1
// 12
// 123
// 1234
// 12345

//ans

for(i=1;i<=5;i++){
    let star='';
    for(j=1;j<=i;j++){
    // console.log('*');
    star +=j;
}
console.log(star);
}