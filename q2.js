// Question 2
// Print the pattern given below, using loops.

// Input:
// No input is required.

// Output:

// *
// **
// ***
// ****
// *****


//ans

let num = 5;
for(i=1;i<=num;i++){
    let star='';
    for(j=1;j<=i;j++){
    // console.log('*');
    star +='*'
}
console.log(star);
}