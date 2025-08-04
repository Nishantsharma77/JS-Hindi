const user ={
    username: "Nishant",
    price:999,
          //this= current context
    welcomeMessaage: function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessaage()
// user.username= "sam"
// user.welcomeMessaage()
// console.log(this);  //empty object

//browser min global object windows

// function chai(){
//     let username = "Nishant"
//     console.log(this.username);  
// }
// chai()


// const chai = function(){
//    let username = "Nishant" 
//    console.log(this.username);  
// }
// chai()

const chai = () => {
   let username = "Nishant" 
   console.log(this);  
}
// chai()

//arrow function
// const addTwo = (num1,num2) =>{
//     return num1+num2
// }  

//implicit return = we dont use the return keyword
//explicit return = we use the return kyword

//remember if we use curly braces use return, 
//if we use paranthesis there is no need of return
// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) =>  (num1+num2)

const addTwo = (num1,num2) =>  ({username:"Nishant"}) //to define object use paranthesis
console.log(addTwo(2,3));

//





