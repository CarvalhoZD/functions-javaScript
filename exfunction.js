const prompt = require('prompt-sync')();

const calcBmi = require('./functioBmi');

const weight = parseInt(prompt('Type your weight: '));

const height = parseFloat(prompt('Type your height: '));

console.log(`Your BMI (Body Max Index) is ${calcBmi(weight, height)}.`)