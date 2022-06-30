// Question 6
// Print the pattern given below, using loops.

// Input:
// No input is required.

// Output:
// 1
// 01
// 101
// 0101
// 10101
// 010101


let num = 6;
for(i=1;i<=num;i++){
    let star='';
    for(j=1;j<=i;j++){
      if((i+j) % 2 == 0){
        star += 1;
      }else{
        star += `${0}`;
      }
    
}
console.log(star);
}