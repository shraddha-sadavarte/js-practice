//heigher order functions
//which accepts function in parmeter or return a function or return both

//calling a function
function abcd(a){
    a();
}
abcd(function a(){
    console.log("hey i am a function, passed as a parameter to the another function");
});

//constructor functions
//to create many elements with same properties then we cn use constructor functions
function biscuits(){
    this.width = 12;
    this.height = 8;
    this.taste = "sugary";
    this.color = "brown";
}
var bis1 = new biscuits();
var bis2 = new biscuits();
var bis3 = new biscuits();
console.log(bis1);
console.log(bis2);
console.log(bis3);

//another one constructor function
function createButton(color){
    this.view = "circular";
    this.color = color;
    this.size = "small";
}
var btn1 = new createButton("red");
var btn2 = new createButton("violet");
console.log(btn1, btn2);

//iife (immediately invoked function expression)
//values are private inside this function
//we cannot access them directly for that we have to return getter and setter
var ans = (function(){
    var a=12;
    
    return {
        getter: function(){
            console.log(a);
        }
        // setter: function(val){
        //     a = val;
        // }
    }
})();
