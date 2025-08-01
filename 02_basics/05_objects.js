//Objects deconstructing

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Nishant"
}
// course.courseInstructor 
//this is deconstructing
const {courseInstructor: instructor} = course
console.log(instructor); //Nishant

//API 
//apna kam kisi orr ke srr mein dalna

// {
//    "name":"Nishant",
//     "courseName": "Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]

