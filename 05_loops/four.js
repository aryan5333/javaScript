//for Each-yahan name nhii dena hota hai kyunki ye callback method use karega
//const coding=["cpp","js","swift","git","python"]
// coding.forEach(  function(val){
//     console.log(val);
    
// })

//aab arrow function me for each use karenge

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// isme function phele hi likh ke for each me assign kar sakte hai

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// aab agar for each se humko sab kuch print karwana ho tab

//coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
//})

const mycoding=[
    {
        languageName:"javascript",
        languageshortcut:"js"
    },
    {
        languageName:"python",
        languageshortcut:"py"
    },
    {
        languageName:"java",
        languageshortcut:"java"
    },
]
mycoding.forEach( (item)=>{
    console.log(item.languageshortcut);
    console.log(item.languageName);
    
})