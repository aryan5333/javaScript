const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","pokemon"]

//marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const myHeroes=marvel_heroes.concat(dc_heroes)
//console.log(myHeroes);

const all_new_heroes={...marvel_heroes,...dc_heroes}//spread operator
//console.log(dc_heroes);

const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11],12],13]
const newanotherarr=another_array.flat(Infinity)
//console.log(newanotherarr);

// console.log(Array.isArray("Aryan"));
// console.log(Array.from("Aryan"));
// console.log(Array.from({name:"Aryan"}));  // interesting bcz it will give empty error bcz we didnt mention any key or 

let score1=100
let score2=300
let score3=500

//console.log(Array.of(score1,score2,score3));



