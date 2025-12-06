//Primitive dataTypes-these are of 7 types and in primitive datatypes ,ye sab wo hai jinki data directly reference ke 
// through allocate nhii kiya jaa sakta hai uska copy milta hai changes karne ke liye

//types of primitive datatypes-String,Number,BigInt,Boolean,null,undefined,Symbol

/*
examples-
const score=100
const scorevalue=100.3
const isLoggedIn=false;
const outsideTemp=null;
let serEmail;
let userEmail;
const bigNumber=456321489n
*/

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id==anotherid);
//inn dono ka value same hi hai lekin ye equal nhii hoga

//reference datatypes (non primitive) -ye sab wo hai jinki data directly reference ke 
// through allocate kiya jaa sakta hai
// types-Array,Objects,Function
//examples-
// for array-const heroes={"shaktimaan","nagraj","doga"};
//  for object-let myObject={
//     name:"Aryan",
//     age:21
// }
// for function-
// const myfunction=function(){
//     console.log("Hello World");
    
// }

// dataTypes ka types janne ke liye we use-
// console.log(typeof);

//isme table hai kya kya datatypes kya return karega
//https://262.ecma-international.org/5.1/#sec-11.4.3

//*******************************************Memories*********************************************** */
/*
memories are basically of two types-
1)stack(jitna bhii primitive datatypes hota hai wo satck me hi jata hai)-isme aise hota hai ki jo bhii reference 
milta hai wo original nhii hota hai wo copy hota hai*/

// let myname="Aryan"
// let anothername=myname

//  anothername="Sinha"
 //console.log(myname);
//console.log(anothername);



//2)Heap(jitna bhii non primitive types datatypes hota hai wo heap me hi jata hai)-isme aise hota hai ki jo bhii reference milta hai wo 
//original  hota hai 

// let userOne={
//     email:"sinha@gmail.com",
//     upi:"world@gmail.com"
// }
// let userTwo=userOne
// userTwo.email="Aryan@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

//matlab yahi hota hai ki jo bhii stack me hota hai agar uska reference deke bhii change kare tho wo change hoga 
// lekin uska originala form bhii present hoga jabki heap me jabhi change karenge tab original wla abhii change ho jayega

