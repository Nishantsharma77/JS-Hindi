// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); //empty objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Nishant",
            lastName:"Sharma",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);
 //to merge
const obj1 = { 1: "a",  2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = Object.assign( {},obj1,obj2) //use this for merging //
//but we will use spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const Users = [
    {
        id: 1,
        email: "some@gmail.com",
    },
]

console.log(Users[0].email);
console.log(tinderUser);

console.log(Objects.key(tinderUser)); //datatype arrays

console.log(tinderUser.hasOwnProperty('isLoggedid')); //true or false






