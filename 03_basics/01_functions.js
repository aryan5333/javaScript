//Functions-ye basically ye hota hai ki koi bhii code ya aur kuch bhii likhe hai usko ek package me band 
// karde aur jab bhii kaam ho tab package ka copy le jake usko work karale

//function ko likhte kaise hai-

function Myname(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");

}
//Myname()

// function addTwoNumbers(numbers1,numbers2){   //jab function me jo bhii input lete hai usko parameter bolte hai
//     console.log(numbers1+numbers2);
    
// }
//addTwoNumbers(12,15)  //jab function me jo bhii values lete hai usko argument bolte hai

function addTwoNumbers(numbers1,numbers2){
    // let result= numbers1 + numbers2
    // return result   //result ke baad function ke aandar koi bhii chiz console log karenge tho nhii print hoga
    return numbers1+numbers2
}
const result=addTwoNumbers(3,5)
//console.log("Result:",result);

function loginUserMessage(Username="sam"){  //agar hamlog yahi username dede rahe hai tab niche me nhiii bhii denge tho chalega agar likh diye tho wo overwrite ho jayega
    if(Username==undefined){
        console.log("please enter your username");
        return  
    }
    return `${Username} just logged in`
}
console.log(loginUserMessage());
//console.log(loginUserMessage("Aryan"));



