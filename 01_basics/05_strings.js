const name="Aryan"
const repoCount=50

// console.log(name+repoCount);
// or by this

//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

let gameName=new String('Aryan thakur')
console.log(gameName[1]);

//methods(strings) aur sab jo bhii java me hota tha
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,8)
console.log(newString);

const anotherString=gameName.slice(-5,3)
console.log(anotherString);

const newStringOne="    hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://aryan.com/aryan%20sinha"
console.log(url.replace('%20','-'));
console.log(url.includes('aryan'));
console.log(url.split('-'));















