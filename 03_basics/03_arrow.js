//this ke help se current context ko refer kiya jata hai

const user = {
    username:"Aryan sinha",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.username},welcome to my website`);
        // console.log(this);
        
        
    }
    
}
// user.welcomeMessage();
// user. username="chandra"
// user.welcomeMessage()

//console.log(this); //agar sirf aise object ke bahar this denge tho wo sirf {}provide karega aur anndar lenge tab bahut kuch aayega

//function ke aandar bhii kaam nhii karegaaur bahar bhii (this) kaam nhii karega
// function chai(){
//     let username="Aryan sinha"
//     console.log(this);
    
// }
// chai()

//*********************************************Arrow function****************************************************
    

//(this) Arrow function ke aandar bhii kaam nhii karta hai
const chai=() => {
    username:"Aryan sinha"
    price:999
    console.log(this.username);
    
}
chai()

//Arrow function- ()=>{}

// const addTwo=(num1,num2) => {
//     return num1+num2
// }

//implict return
// const addTwo=(num1,num2) => num1+num2

// console.log(addTwo(3,4));

const addTwo=(num1,num2) => (num1+num2)

console.log(addTwo(3,4));

