/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;

}
function addNumbers () {
    const addNumber1 = parseInt(document.querySelector('#add1').value);
    const addNumber2 = parseInt(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers);


/* Function Expression - Subtract Num bers */
function subtract(subtract1, subtract2) {
    return subtract1 -  subtract2;
}
function subtractNumbers () {
    let subtractNumber1 = parseInt(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseInt(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers () {
    const factor1 =parseInt(document.querySelector('#factor1').value);
    const factor2 =parseInt(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers () {
    const dividend = parseInt(document.querySelector('#dividend').value);
    const divisor = parseInt(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */


const total = (subtotal, discount) => subtotal * discount;
function totalDiscount() {
    const subtotal = parseInt(document.querySelector('#subtotal').innerHTML.value);
    let discount = 1.0
    
    if (document.getElementById("member").innerHTML.checked){
    discount = 0.80;
    }
    
        
    
    document.querySelector("#total").innerHTML.value = total(subtotal, discount);
}
document.querySelector('#getTotal').addEventListener('click', totalDiscount);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */

let odds = numbersArray.filter(n => n%2)
document.getElementById('odds').innerHTML = odds;

/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 == 0);
document.getElementById('evens').innerHTML = evens;
/* Output Sum of Org. Array */
const sum = numbersArray.reduce((partialSum, a) => partialSum + a, 0);
document.getElementById('sumOfArray').innerHTML = sum;
/* Output Multiplied by 2 Array */
let doubleArray = numbersArray.map(x => x * 2);
document.getElementById('multiplied').innerHTML = doubleArray;
/* Output Sum of Multiplied by 2 Array */

let doubleSum = (sum * 2);
document.getElementById('sumOfMultiplied').innerHTML = doubleSum;