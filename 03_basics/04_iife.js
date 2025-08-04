//Immediately Invoked function expression (IIIFE)

(function chai(){
    //named ifee
    console.log("DB CONNECTED");
})();
// chai()

// ()() //iife //global scope ke pollution se problem hoti kyi baar to remove that pollution we use iife
 //unnamed ifee
(  (name) => {
    console.log(`DB CONNECTED ${name}`);
    
} )('Nishant');


