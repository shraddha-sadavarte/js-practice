//asynchronise js
//promises
const count = true;
let countValue =  new Promise(function(res,rej){
    if(count){
        res("There is a count value");
    }
    else{
        rej("There is no count value");
    }
});

console.log(countValue);

//promise with then and catch
//.then: when promise is resolved
//.catch: when promise is rejected
let abc = new Promise(function(res,rej){
    if(false){
        return res();
    }
    else{
        return rej();
    }
});

abc.then(function(){
    console.log("Resolved!");
})
.catch(function(){
    console.log("Rejected!");
})

//async and await
async function abcd(){
    let raw = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    let data = await raw.json();
    console.log(data);
}
abcd();

//bulb on off using js
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function(){
   if(flag == 0){
     bulb.style.backgroundColor = "yellow"
     flag = 1;
   } else{
     bulb.style.backgroundColor = "black"
     flag = 0;
   }
})