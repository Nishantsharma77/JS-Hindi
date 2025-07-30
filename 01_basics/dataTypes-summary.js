 //Primitive

 // 7 types: String,Number, Boolean, null, undefined, Symbol, BigInt
 
 // Js in a dynamically typd language

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId);

//  const bigNumber = 3349857052175n

 //Refernce(Non Primitive)

 //Array, Objects, Functions =>datatype=Function 

 const heros = ["Shaktiman" , "naagraj"];

 //objects

 let myobj = {
    name:"Nishant",
    age : 22 
 }

 //function

 const myFunction=function(){
console.log("hello world");

 }

 //datatype pata kro
 console.log(typeof outsideTemp);

 //type of null is object
//  type of undefined is undefined
//type of function is function


// Stack(Primitive), heap memory(Non-Primitive)

// in stack we always get copy
//in heap we get reference (means we change in oriignal value)

let myYoutubename="Nishant "
let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
 console.log(anothername);

 let userone = {
    email: "user@google.com"  ,
    upi: "nishanthdfc",
 }

 let usertwo=userone

 usertwo.email="nishant@google.com"
 console.log(userone.email);
 console.log(usertwo.email);
 
 


 