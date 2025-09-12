function greetings(message){
    return function(name){
        return message + ' ' + name;
    }
}

let sayHi = greetings('Hi');
let sayHello = greetings('Hello');

console.log(sayHi('John'));
console.log(sayHello('tohny'));