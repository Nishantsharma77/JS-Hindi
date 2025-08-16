//javascript Execution contest(How js runs?)

//code -> global EC (reffred as variable this)
//global execution context
//functional execution context
//eval execution contest

//code -> memory creation phase
    //    ->execution phase

// let val1 = 10
// let  val2 = 5
// function addNum(num1, num2){
//     let total=num1+num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2) 

//steps
//1 global execution(this)
//2 Memory phase(sare variabls ko ikatha kiya jayega)
//     val1 = undefined
//     val2 = undefined
//     addnum = definction
//     result1=undefined
//     refund2= undefinex

// //3 execution phase
// vale 1 = 10
// val2 = 5
// addNum ->Exection contest  =  New variable environment+execution thread
//jitni baar funtion ayga memory phase and execution phase hoga
//then gets deleted

//continued
// in memory phase
// val1->undefined
// val2->undefined
// total->undefined
// result

// then exection control//
// num1=10
// num=5
// total=15 

// for result
// new variable environmnt + thread

