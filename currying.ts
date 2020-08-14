// currying
const AddNumberFunctionFactory = num => (x => x + num);

let addSeven = AddNumberFunctionFactory(7);
let addEight = AddNumberFunctionFactory(8);

// console.log(addSeven.toString());


const multiply = x => (y => (z => x * y * z));

// console.log('multiply(3)(4)(5)');
// console.log(multiply(3)(4)(5));

//greet
const greetFnFactory = greet => (name => `I wish you a ${greet} , ${name}`);

const sayGoodMorning = greetFnFactory('Good Morning');

console.log(sayGoodMorning('Thomas'));

const add = x => y => x * y;
