// const person={
// name:"mosh",
// walk:function(){},
// talk() {},

// };
// person.talk();
// person.name='';
// const targetMember='name';
// person[targetMember.value]='john';

//->'This' key word in Java Script
// const person={
//      name:"mosh",
//      walk(){
//          console.log(this);
//      }
//     };
//     person.walk();
//     const walk=person.walk;
//     console.log(walk);

//->Binding this keyword
// const person={
//         name:"mosh",
//           walk(){
//               console.log(this);
//           }
//          };
//          person.walk();
//          const walk=person.walk.bind(person);
//          walk();
//with bind method we can set of 'this' permanently!


//Arrow Function in MS6
// const square =function(number) {
//     return number*number;
// }
// const square =number =>number*number;
// console.log(square(4));
// const jobs=[
//     {id:1,isActive:true},
//     {id:2,isActive:true},
//     {id:3,isActive:false},
// ];
// // const Ajobs=jobs.filter(function(job){return job.isActive;});
// const Ajobs=jobs.filter (job=> job.isActive);

//Arrow Functions and this
// const person = {
//     talk() {
//         var self = this;
//         setTimeout(() =>{
//             console.log("self", self);
//         }, 1000);
//     }
// };
// person.talk(); (NOTE:- Arrow function dont bind with this function)

//Array.map()
// const colors=['red','green','blue'];
// colors.map(function(color){
// return'<li>'+color+'</li>';
// })
// const colors=['red','green','blue'];
// colors.map(color=>
// '<li>'+color+'</li>');

//Object Destructing
// const address={
//     street:'',
//     city:'',
//     country:''
// };
// const street =address.street;
// const city=address.city;
// const country=address.country;
//The above code can be renamed to below code using destructor'
// const{street,city,country}=address;

//Spread operator
// const first=[1,2,3];
// const second=[4,5,6];
// const combined=first.concat(second);
// const combined=[...first,'a',...second,'b'];
// const clone=[...first];
// console.log(first);
// console.log(clone);
//  const first={name:'mosh'};
//  const second={job:'Instructor'};
// const combined={...first,...second,location:"Australia"}
// console.log(combined);
// const clone={...first};

//Classes
// class Person{
//     constructor(name){
//         this.name=name;

    
// }
// walk(){
//     console.log("walk"); 
// }
// }
// const person=new Person("Jayanth");
// person.walk

//Inheritance
// class Person{
//        constructor(name){
//              this.name=name;
    
  
//      }
//      walk(){
//          console.log("walk"); 
//      }
//      }
     
// class teacher extends person{
//     constructor(name,degree){
//         super(name);
//         this.degree=degree;

//     }
//     teach(){
//         console.log('teach');
//     }
// }
// const teacher=new teacher("mosh","MSc");

//Modules
//Here we created 2 files for demonstrating modules!
// class Person{
//     constructor(name){
//           this.name=name;
 

//   }
//   walk(){
//       console.log("walk"); 
//   }
//   class teacher extends person{
//     constructor(name,degree){
//         super(name);
//         this.degree=degree;

//     }
//     teach(){
//         console.log('teach');
//     }
// }
// import {teacher} from "./teacher";
// const teacher = new teacher("mosh","MSc");
// teacher.teach()

//Named and Default Exports
