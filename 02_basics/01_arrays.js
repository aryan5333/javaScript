let myArr1=[2,4,6,8,5]
console.log(myArr1[2]);

//let myArr2=new Array(2,4,5,6,7)
//console.log(myArr2[1]);

//Array Methods

// myArr1.push(6)
// myArr1.push(8)
// myArr1.pop()

// myArr1.unshift(9)  //unshift se array ke starting me 9 add ho jata hai
// myArr1.unshift(27) 
// myArr1.shift()  //shift se array ka wo wala starting wala delete ho jata hai
//console.log(myArr1);


// console.log(myArr1.includes(5));
// console.log(myArr1.indexOf(5));

// const newArr= myArr1.join()
// console.log(myArr1);
// console.log(newArr);

console.log("A" ,myArr1);


const myn1=myArr1.slice(1,4)// matlab ye hota hai ki jab slice me jo range given hota hai uss range ka element print hota hai
console.log("B",myArr1);
console.log(myn1);

const myn2=myArr1.splice(1,3)
console.log("C",myArr1);
console.log(myn2);
 //matlab ye hota hai ki jab splice me jo range given hota hai uss range ka element print hota hai aur range ka last wala no.bhii 
 // print hota hai aur splice me pura original array me se wo part delete ho jata hai aur array hi change ho jata hai





