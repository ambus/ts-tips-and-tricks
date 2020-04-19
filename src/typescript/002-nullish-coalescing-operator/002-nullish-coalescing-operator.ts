let foo;
let bar = () => 'yes'

let x = foo ?? bar();
// let x = foo || bar();

console.log(x);