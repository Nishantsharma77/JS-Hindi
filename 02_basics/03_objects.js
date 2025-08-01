// //Singleton nahi banta
// //constructors se singleton banta hai

// //object literals =object declare krne ka tareeka

const mySym =Symbol("Key1")

const JsUser  ={
    name: "Nishant",
    "full name": "Nishant Sharma",
    [mySym]: "myKey1", //to use as symbol use square brackets
    age: 18,
    location: "Jaipur",
    email: "nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday",["Saturday"]]
}  
// console.log(JsUser.email); //nishant@google.com
// console.log(JsUser["email"]);//nishant@goofle.com
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

// to change
JsUser.email ="Nishant@gmail.com"
// Object.freeze(JsUser) //to lock
jsUseremail="nishant@microsoft.com"
// console.log(JsUser);

//to add functions

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);  //to reference with same object use this
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());




