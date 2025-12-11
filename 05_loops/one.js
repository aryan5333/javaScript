// For loop

for(let i=0;i<10;i++){
    const element=i;
    console.log(element);
    

}
for(let i=0;i<10;i++){
    const element=i;
    if(element==5){
        console.log("5 is the best");
    }
    console.log(element);
    

}
for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(i+'*'+j+'='+i*j);
        //console.log(`Inner value ${j}, and outer loop${i}`);
    }   
}

let myArray=["shaktimann","batmann","superman","rohitsharma","kohli"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

for (let i = 0; i < 15; i++) {
    if(i==5){
        console.log(`detected 5`);
        break  
    }
    console.log(`value of i is ${i}`);  
}

for (let i = 0; i < 15; i++) {
    if(i==5){
        console.log(`detected 5`);
        continue   
    }
    console.log(`value of i is ${i}`);
       
}
// break aur continue me yahi difference hai ki break me wahi rukk jaata hai lekin continue me ek baar chance deta hai hai aur aage bhii print hota hai
