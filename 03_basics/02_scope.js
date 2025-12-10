// scope-jab bhii {}ye kisi function ya if else loop ke saath aata hai tab wo (scope) hota hai
//scope me jo bhii if loop ke aandar hota hai wo block scope hota hai aur if ke bahar wala global scope hota hai
//global scope ke aandar jo bhii values hoti hai wo if ke aandar ja sakti hai lekin if ke aandar wala bahar 
// read nhii ho sakta hai lekin jab bhii (var) se initailze karte hai tab wo if ke aandar wala read hota hai isliye var use nhii karte hai
//console me aur node me jo scope ka values hota hai dono different hota hai

let a=300
const b=400
const c=600
if(true){
    let a=10
    const b=50
    const c=40
    // console.log("INNEAR:",a);
    // console.log("INNEAR:",b);
    // console.log("INNEAR:",c);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//if ke aandar me console log karne se wo sirf aandar wala(block)scope ko hi print karega
////if ke bahar me console log karne se wo sirf bahar wala(global)scope ko hi print karega

//nested Scope-wo hota hai jisme jo child function hota hai wo parent function ko axis kar pata hai
function one(){
    const Username="Aryan Sinha"

    function two(){
        const website="youtube"
        console.log(Username);
    }
    //console.log(website);
    
    two()
}
//one()

if(true){
    const username="Aryan sinha"
    if(username=="Aryan sinha"){
        const website="youtube"
        //console.log(username+ website);
        
    }
}

//******************************************(hoisting basic)******************************************** */
// console.log(oneadd(5));

// function oneadd(num){
//     return num+1
// }


// //console.log(oneadd(5))
// const addTwo=function (num){
//     return num+1
// }

//hoisting matlab yahi hota hai ki kon sa function kiss tarah likha hai jaise ki isme 1st wala console kahi
//  bhii kara rahe the tho chal raha tha par 2nd me nhii cahala kyunki waha store karna tha 
