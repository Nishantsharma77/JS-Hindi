// const marvel_heroes = ["thor", "Ironman", "spiderman"]
// const dc_heroes = ["superman" ,"flash", "batman"] 

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); //array ke ander array 
// // ['thor','ironman','spiderman'['superman','flash','batman']]
// console.log(marvel_heroes[3][1]);

// const allHeroes=marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);  //
//MERGE 2 ARRAYYS

//we use spread to merge(kanch ka glass)

// const all_new_heroes= [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(infinity)
// console.log(real_another_array); //all elements spread out

console.log(Array.isArray("Nishant")); //false
console.log(Array.from("Nishant")); //['N', .......]
console.log(Array.from({name: "Nishant"})); //empty array //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[100,200,300]

//-------------------------------END OF ARRAY----------------------------------------//




