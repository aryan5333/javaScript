// singleton object -koi bhii object constructor se banate hai tab ye singleton object create hota hai

//object literals

const mySym=Symbol("key1")

const jsuser={
    name:"Aryan sinha",
    "full name":"Aryan Sinha 012",
    [mySym]:"keys1",
    age:20,
    location:"jamshedpur",
    Email:"sinharishu@gmail.com",
}
//objects ko axis karne ke liye
// console.log(jsuser.Email);
// console.log(jsuser["Email"]);// this is more suitable to axis
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.Email="aryan789@gmail.com"
//Object.freeze(jsuser)//isko likhne ke baad koi bhii element change nhii ho sakta hai 
jsuser.Email="sinha546@gmail.com"

//console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
    
}
jsuser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




