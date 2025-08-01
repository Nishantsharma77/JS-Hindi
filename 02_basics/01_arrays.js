// array

const myArr = [0,1,2,3,4,5]
// const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);  

//Array Methods

// myArr.push(6) //[0,1,2,3,4,5,6]
// myArr.pop(6) //rmove last value [0,1,2,3,4,5]
// console.log(myArr); 

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr); //[0,0,1,2,3,4,5]

// console.log(myArr.includes(9)); //boolean -false
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join() //convert into string
// console.log(myArr); 
// //  array form mein ayega
// console.log(typeof newArr); //String form mein


//Slice,Splice

console.log("A" , myArr); // A[0,1,2,3,4,5]

const myn1 = myArr.slice(1,3)

console.log(myn1); //[1,2]
console.log("B", myArr); //B[0,1,2,3,4,5]

const myn2 = myArr.splice(1,3) //1,2,3 gets removed
console.log("C", myArr);

console.log(myn2); //[1,2,3]

//in js splice manipulate the oiginal array but slice does not manipulate the original array











