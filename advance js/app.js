// //spread operator(...)
// //spread operator is used for copy the array and object values to another array and object
// var arr = [1,2,3,4,5];
// var arr1 = [...arr];
// console.log(arr);
// console.log(arr1);

// //heigher order functions
// //which accepts function in parmeter or return a function or return both

// //calling a function
// function abcd(a){
//     a();
// }
// abcd(function a(){
//     console.log("hey i am a function, passed as a parameter to the another function");
// });

// //constructor functions
// //to create many elements with same properties then we cn use constructor functions
// function biscuits(){
//     this.width = 12;
//     this.height = 8;
//     this.taste = "sugary";
//     this.color = "brown";
// }
// var bis1 = new biscuits();
// var bis2 = new biscuits();
// var bis3 = new biscuits();
// console.log(bis1);
// console.log(bis2);
// console.log(bis3);

// //another one constructor function
// function createButton(color){
//     this.view = "circular";
//     this.color = color;
//     this.size = "small";
// }
// var btn1 = new createButton("red");
// var btn2 = new createButton("violet");
// console.log(btn1, btn2);

// //iife (immediately invoked function expression)
// //values are private inside this function
// //we cannot access them directly for that we have to return getter and setter
// var ans = (function(){
//     var a=12;
    
//     return {
//         getter: function(){
//             console.log(a);
//         }
//         // setter: function(val){
//         //     a = val;
//         // }
//     }
// })();

// //prototype: when we create an object we have a prototype inherited in that object, this contains many helper methods and properties
// //prototypal inheritance: We can inherit another object properties by using prototype is called prototypal inheirtance
// var human = {
//     canFly: false,
//     canTalk: true,
//     canWalk: true,
//     haveEmotions: true
// };

// var developer = {
//     canMakeWebsites: true,
//     canBuildApplications: true
// };

// //inherit one object in another object
// developer.__proto__ = human;

// //this keyword ki value object, method and function ke andar alag alg hoti hain 
// //this keyword in global scope
// console.log(this); //it returns window object under global scope

// //this keyword in function scope
// function a(){
//     console.log(this); //it returns window object also under function scope
// }
// a();

// //this keyword in method scope
// var obj = {
//     name:'yash',
//     someMethod: function(){
//         console.log(this); //it returns object obj in method obj
//     }
// }
// obj.someMethod();

// //this keyword value under event listener
// var btn = document.querySelector("button");
// btn.addEventListener("click", function xyz(){
//     console.log(this); //it return btn 
//     console.log(this.style.color = "violet"); //it return btn when click on it color changes to violet
// })

// //agar hume this ki value window se object change krni hain tb hum call, apply and bind ka use krte hain
// //call()
// function abcd(){
//     console.log(this) //.name will return the name value i.e "yash"
// }

// var g = {
//     name:'yash'
// }

// abcd.call(g); //call function with call method and passing the object....it will change this keyword value from window to object

// //apply()
// //apply is just like call but it takes two parameter one is object and another one is array.....array is for parameter value passing to the function
// function y(val1, val2){
//     console.log(this, val1, val2); //it will return obj and 24 and 17 parameter value we passed
// }

// var r = {
//     name:'shraddha'
// }

// y.apply(r, [24,17]);

// //bind()
// //bind doesn`t return anything as soon as we keep bind in one variable because bind returns a binded function of our function and object
// function n(){
//     console.log(this);
// }

// var o = {
//     age: 12
// }

// var bindedFunc = n.bind(o);
// bindedFunc(); //calling a binded function which is bind using .bind() method

// //pure functions has 2 features:
//  //1) It always return same output with same input
//  //2) It does not change/update the global variables
// function pure(val){
//     return val*2; //it always returns same value 
// }
// var a = pure(2);
// var b = pure(2);
// console.log(a,b);

// //impure functions does not return the same value and it also change the global variable values
// function impure(val){
//     return Math.random() *  val; //does not return the same value
// }
// var ans1 = impure(2);
// var ans2 = impure(2);
// console.log(ans1, ans2);