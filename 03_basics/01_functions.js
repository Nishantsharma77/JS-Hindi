// //ek code ko package mein bnd kdiya us package ko hum khi bhi in the form ofc copies leke ja skte hain. = functions



// function sayMyName() {
//   console.log("H");
// console.log("N");
// console.log("P");
// }

// // sayMyName() //reference and execuction()

// // function addTwonumbers(number1,number2){ //parameters
// //   console.log(number1+number2); 
  
// // }

// function addTwonumbers(number1,number2){ //parameters
//   // let result= number1 + number2
//   // console.log("Nishant");
//   return number1+number2

// }
// const result=addTwonumbers(3, 5) //NAN(IF NOT GIVEN NUMBERS) //arguments
// // console.log("Result: ", result); //undefined
 
// function loginUserMessage(username="sam"){ //sam
//   if(!username){
//    console.log("Please enter a username")
//    return
//   }
//   return `${username} just logged in`
// }
     
// // console.log(loginUserMessage("Nishant")) //no value is stored and printed

// console.log(loginUserMessage()); //undefined


function calculateCartPrice(val1,val2, ...num){ //200 400 600 rest operators
  return num
}
console.log(calculateCartPrice(200 , 400 , 600,1000));

// to pass object in function
const user = {
  username: "Nishant",
  prices:199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price }`);
  
}
// handleObject(user)
handleObject({
  username:"Nishant",
  price: 399 
});

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));








