// Structure of a callback

function sum(num1, num2){
    return num1+num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Wait 5 secs to print a message

setTimeout(function(){
    console.log("Hola JavaScript");
},5000)

// Print a gretting with a name after 5 secs
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 5000, "Daniel");