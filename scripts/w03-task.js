/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2) {
    return num1 + num2;
}

function addNumbers(){
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const sum = add(num1, num2);

    const sumField = document.getElementById('sum');
    sumField.value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(num1, num2) {
    return num1 - num2;
}

const subtractNumbers = function(){
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    const difference = subtract(num1, num2);

    const differenceField = document.getElementById('difference');
    differenceField.value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */




const multiply = (num1, num2) => {
    return num1 * num2;
}

const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    const product = multiply(num1, num2);

    const productField = document.getElementById('product');
    productField.value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);







/* Open Function Use - Divide Numbers */




const divide = (num1, num2) => {
    return num1 / num2;
}

const divideNumbers = function() {
    const num1 = parseFloat(document.getElementById('dividend').value);
    const num2 = parseFloat(document.getElementById('divisor').value);
    const quotient = divide(num1, num2);

    const quotientField = document.getElementById('quotient');
    quotientField.value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);




/* Decision Structure */

function isAMember(){
    const member = document.getElementById('member').checked;
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const total = document.getElementById('total');

    if(member){
        total.value = subtotal * 0.9;
    } else {
        total.value = subtotal;
    }

    total.innerHTML = `<span>${total.value}</span>`;
}

document.getElementById('getTotal').addEventListener('click', isAMember);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11, 12, 13];

const array = document.getElementById('array');

array.innerHTML = `<span>${numbersArray}</span>`;

/* Output Odds Only Array */

const oddsOnly = numbersArray.filter((number) => number % 2 !== 0);
const arrayOdds = document.getElementById('odds');
arrayOdds.innerHTML = `<span>${oddsOnly}</span>`;

/* Output Evens Only Array */

const evensOnly = numbersArray.filter((number) => number % 2 == 0);
const arrayEvens = document.getElementById('evens');
arrayEvens.innerHTML = `<span>${evensOnly}</span>`;

/* Output Sum of Org. Array */

const sum = numbersArray.reduce((sum, number) => sum + number)
const arraySum = document.getElementById('sumOfArray');
arraySum.innerHTML = `<span>${sum}</span>`;

/* Output Multiplied by 2 Array */

const multiplies = numbersArray.map(number => number * 2)
const arrayMultiplied = document.getElementById('multiplied');
arrayMultiplied.innerHTML = `<span>${multiplies}</span>`;
 
/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = document.getElementById('sumOfMultiplied')
sumOfMultiplied.innerHTML = `<span>${multiplies.reduce((sum, number) => sum + number)}</span>`;