// //control flow-iske help se basically kon sa code kab kaam karna chaiye wo decide hota hai

// comparison operator-<,>,==,<=,>=,!=,===,!=

//if-isme condition agar true hai tho code execute hoga nhii tho nhii hoga

// const temp=41;

// if(temp<50){
//     console.log("temp is less than 50");
    
// }
// else{
//     console.log("temp is greater than 50");
    
// // }

// const score=200
// if(score<100){
//     const power="fly"
//     console.log(`user power${power}`);
    
// }
// else{
//     const poweraction="flow"
//     console.log(`useraction${poweraction}`);
    
// }
const balance=1000
// if(balance>500)console.log("test");
if(balance<500){
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}
else{
    console.log("less than 1100");
    
}
const userLoggedIn=true;
const debitcard=true;
const userLoggedInfromgoogle=true;
const userLoggedInfromEmail=true;

if(userLoggedIn && debitcard){
    console.log("Allow for shoping");
    
}
if(userLoggedInfromgoogle ||userLoggedInfromEmail){
    console.log("Welcome to gmail/google");
    
}
