//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //use this for date
// console.log(myDate.toLocaleDateString());// for time and date use this
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0, 23, 5,4 ) //month 0 se start hota hai
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("2023-01-14") // YY-MM-DD
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
//  to get in seconds

let newDate = new Date()
// console.log(newDate.getMonth()); //6
// console.log(newDate.getDay()); //4

newDate.toLocaleString('default' , {
    weekday: "long",
    
})










