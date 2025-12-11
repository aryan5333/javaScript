//truthy-iska matlab ye hota hai ki jab ham kisi value se compare nhii karr rahe hai by default humlog value ko true hi maan liye hai
// truthy values="0","false"," ",[],{},function(){},
// falsy values=  0,-0,false,"",BigInt 0n,null,undefined,NaN

const user=[]  //empty array
if(user.length===0){
    console.log("print the Array");
    
}
const userObj={}   //empty object
if(Object.keys(userObj).length===0){
    console.log("print the object");
    
}

const userEmail="Aryan@gmail"
if(userEmail){
    console.log("welcome to the domain");
    
}
else{
    console.log("out of the domain");
}

//??(Nullish Coalescing Operator(null ya undefined pe hi work karega))-ye operator basically use hota hai jab koi
//  values given hai tho wahi value ko asiign karna  hai 

let val1;
//val1=5??10 //yahan ans 5 hi ayega

val1=null??10 //isme 10 ayega kyunki null/undefined hone par jo value hoga wahi assign karenge
val1=undefined??15//isme15
val2=null??10??15 //isme 10 ayega
console.log(val1);
console.log(val2);

//terniary Operator(?)-ye aise use hota hai(condition?true: false)

const icecreamprice=100
//if(icecreamprice<=80) ? console.log("less than 80"):console.log("more than 80");





    