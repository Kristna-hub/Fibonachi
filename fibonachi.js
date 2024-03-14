// function fib(n){
//     let arr = [0,1];
//     for(let i = 2; i<=n ;++i){
//    let res = arr[i-1]+arr[i-2];
//      arr.push(res);
//     }
     
//     return arr[n];
//      }
   
//    console.log(fib(4));


// 2..REcursive Fibonachi

// function fib(n){
//     if (n < 0 || !Number.isInteger(n)) {
//         throw new Error('Input must be a non-negative integer');
//     }
//     if(n===0){
//         return 0;

//     }
//    else  if(n===1){
//         return 1;
//     }
//     return fib(n-1)+fib(n-2) ;
// }

// console.log(fib(3));
   

// 3.

// function fib(n, obj = {}) {
//     if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
//         throw new Error('Input  non-negative integer');
//     }

//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     if (obj[n] ) {
//         return obj[n];
//     }

//     obj[n] = fib(n - 1, obj) + fib(n - 2, obj);

//     return obj[n];
// }
//     console.log(fib(3)); 


// 4.arguments (Create a function that demonstrates the use of the arguments object.
// Define a function sumAll() that sums up an unknown number of arguments.
// Inside the function, loop through the arguments object to add all the passed values.
// Return the total sum.
// Show how this function can be called with any number of arguments.)


//  function sumAll(...arg){

//     let count = 0;
//     for(let i = 0; i < arguments.length; ++i) {
//      count += arg;

// }
 
//    return count;
// }

// console.log(sumAll(1, 4, 5)); 
// console.log(sumAll(10, 2, 30));     
// console.log(sumAll(2, 4, 6, 8, 10));
// console.log(sumAll(100));             
// console.log(sumAll());  