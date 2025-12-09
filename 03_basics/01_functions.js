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
//console.log(loginUserMessage());
//console.log(loginUserMessage("Aryan"));

function CalculateCarPrice(...num1){  //(...) iska matlab rest operator hota hai kisi ke bhii aage lag jaye tab uska matlab uske aandar jitna bhii no.hoga sabko read karega
    return num1
}
console.log(CalculateCarPrice(200,300,400,5000));


function CalculateCarPrice(val1,val2,...num1){ 
    return num1
}
//console.log(CalculateCarPrice(200,300,400,5000));

//jab koi bhii object ko function me read karwana ho

const User={
    Username:"Aryan SInha",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} and the price is ${anyobject.price}`); 
}

//handleObject(User)
//handleObject({
//     Username:"Aryan Sinha",    
//     price:500       //aise direct bhii object ko likh sakte hai
// })

//jab Array ko function me read karwana ho tab
const myNewArray=[100,200,300,400]

function returnSecondvalue(getArray){
    return getArray[3]
}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100,200,300,400])); //jab direct read karwana ho tab


       


    




