//javascript execution context-isme dhekhenge ki javascript run kaise karta hai code ko,basically two ways me karte hai
//({})-global execution context//ye this.me jaake store hota hai
//function Execution context
//Eval Execution context

/*javascript execute kaise hota hai
1)memory creation phase-yahan sirf variables aur objects ke liye space alocate hota hai
2)execution phase-yahan pe jo bhii variables initalize hua hai(+,-,*)kuch bhii sab execute hota hai
ex-*/
let val1=10;
let val2=5
function addtwoNumbers(num1,num2){
    let total=num1+num2
    return total;
}
let result1=addtwoNumbers(val1,val2)
console.log(result1);
let result2=addtwoNumbers(5,6)
console.log(result2);

/*isko execute karne ka process
1)global execution (this)-isse allocate hoga numbers aur variables
2)Memory execution phase-yahan pe saara chiz ko memory me daala jaata hai
val1-undefined
val2-undefined
addnum-defination hai iske aandar ka pura
result1-undefined
result2-undefined
3)execution phase-yahan basically pura problem execute hota hai
val1-10
val2-5
addnum(result wala)-yahan pe ek alag executional context banta hai(new variable environment+execution thread)jitni baar bhii 
function execute hoga utni baar naya executional context banta hai or phirr se memory phase or execution phase phirr se hoga
basically ye hai ki jitni baar function execute hoga utni baar naya variable context box create hoga aur last me execute hone 
ke baad wo global execution context me chala jayega result aur ye variable context ka kaam hone ke baad ye delete bhii ho jata hai*/

//call stack-call stack me basically ek stack hota hai usme global execution context hota hi hai firr jo bhii 
// function ko execute karna hota hai wo sab function ko stack ke aandar le jaate hai firr execute karte hai firr 
// stack se hata dete hai waise hi jitna hai sabko aise hi karte hai lekin agar ek saath bahut function aa jata 
// hai tho LIFO ke basis pe kaam hota haiaur ussi ke basis pe haat jata hai