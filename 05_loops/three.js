//for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num); 
}
const greeting="Hello World!"
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);   
}
 
//Maps-ye basically unique value pair hai aur jiss order me insert kiya hai ussi orderme output bhii aata hai

const map=new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('fr',"france")
map.set('ch',"China")
// console.log(map);

//isme jab (forof) loop lagayenge

for (const [key,value] of map) {
    //console.log(key,':-',value);
}
//basically object iteration ke liye (forof)loop work nhii karta hai object ke (forIn)work karta hai 

//for IN-objects pe work karta hai uar ye array pe bhii work karta hai

const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    git:"github"
}
for (const key in myObj) {
    //console.log(`${key} is the shortcut for ${myObj[key]}`);
    
}

const programining=["js","cpp","rb","git"]
for (const key in programining) {
    console.log(programining[key]);
    
}
