//singletonObjects
const tinderUsers=new Object();
tinderUsers.id="123abc"
tinderUsers.name="Aryan"
tinderUsers.isLoggedIn=false
// console.log(tinderUsers);

const regularUsers={
    Email:"sinha123@gmail.com",
    fullname:{
        Username:{
            firstname:"Aryan",
            lastname:"Sinha"
        }
    }
}
//console.log(regularUsers.fullname.Username);

//jab object ko merge karna hota hai
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}
//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3};//merge from the spread operator

//console.log(obj4)

// const users=[
//     {
//          id:123,
//          email:"sinha@gamil.com"
//     },
//     {
//          id:123,
//          email:"sinha@gamil.com"
//     },
//     {
//          id:123,
//          email:"sinha@gamil.com"
//     }

//]
// users[1].email
// console.log(tinderUsers);
// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));
// console.log(Object.entries(tinderUsers));

// console.log(tinderUsers.hasOwnProperty('isLoggedIn'));

//destructuring of objects

const course={
    coursename:"javascript",
    courseprice:"2300",
    courseInstructor:"Aryan"
}
//course.courseInstructor
const {courseInstructor}=course  //jab bhii aise {}ka structuring ho matlab destructuring ho raha hai
console.log(courseInstructor);

//API-matlab aapna kaam dusre par daalna,API array aur object dono ke form me milta hai
//JSON-basically ek tarah ka object ya array hi 
//hota hai but without any name given AUR isme key aur value dono string me hi hota hai
//for ex-
// {
//     "coursename":"javascript",
//     "courseprice":"2300",
//     "courseInstructor":"Aryan"
// }







   



