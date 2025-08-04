// var c = 300
//bahr sb global scope
// let a = 300
// {} //scope
 if (true){    //block scope
   let a = 10
   const b = 20 
   var c = 300
  //  console.log("Inner:", a);
    
 }
//  console.log(a); //error
//  console.log(b); //error
//  console.log(c);


 
 
 

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }


// console.log(a);
// // console.log(b);
// // console.log(c); //30

//nested scope

function one(){
  const username = "Nishant"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website); //error

  two()
  
}

one()

if(true){
  const username = "Nishant"
  if (username === "Nishant") {
    const website = "youtube"
    // console.log(username + website);
  }
  // console.log(website); //error 
  
}
// console.log(username); //error



//////#######Interesting#########//////////


addone(5)   //no error

function addone(num){
  return num + 1
}

addTwo(5)        //error  //hoisting
const addTwo= function(num){  //exprssions
  return num+2
}








