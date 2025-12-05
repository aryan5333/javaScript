console.log(2>1); 
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//different dataTypes ke saath comparison 
console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);  //the comparison operator and equality operator works differently in javascript
console.log(null>=0);  //Aur basically isske jaise comparison ko humlog ignore hi karte hai

console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined>=0);

//(this is basically the strict comparison(===) and this will only compare btw same datatypes)

console.log("2"===2);//it will return false


