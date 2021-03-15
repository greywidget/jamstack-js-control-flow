function sayWhat() {
    console.log('Get this...');
}

function sayThis(what) {
    console.log(what);
}

function addThese(first, second) {
    console.log('The total ');
}

// Ewww semi-colons are optional it seems...

// 1. Percentage Calculator

// function getPercentage(number, percent) {
//     percentage = number * percent / 100;
//     return percentage
// }

// console.log(getPercentage(10, 50));
// console.log(getPercentage(33, 10));

// 2. Drink Order function

// function drinkOrder(drink, size) {

//     var message = 'You ordered ';

//     switch (drink) {
//         case 'cola':
//             message += 'cola ';
//             break;
//         case 'lemonade':
//             message += 'lemonade';
//             break;

//         case 'orangeade':
//             message += 'orangeade';
//             break;
//     }

//     message += ', size ';

//     switch (size) {
//         case 'S':
//             message += 'small';
//             break;
//         case 'M':
//             message += 'medium';
//             break;

//         case 'L':
//             message += 'large';
//             break;
//     }

//     console.log(message);

// }

// drinkOrder('cola', 'M');
// drinkOrder('orangeade', 'S');

// 2. His Version
// function drinkOrder(size, drink) {
//     switch(drink) {
//         case 'cola':
//             return outputDrinksOrder(size, 'cola');
//             break;
//         case 'lemon':
//             return outputDrinksOrder(size, 'lemon');
//             break;
//         case 'orange':
//             return outputDrinksOrder(size, 'orange');
//             break
//     }
// }

// function outputDrinksOrder(size, drink) {
//     switch(size) {
//         case 'small':
//             return 'You have ordered a small of ' + drink;
//             break;
//         case 'medium':
//             return 'You have ordered a medium of ' + drink;
//             break;
//         case 'large':
//             return 'You have ordered a large of ' + drink;
//             break;
//     }
// }

// console.log(drinkOrder('small', 'orange'));
// console.log(drinkOrder('medium', 'cola'));
// console.log(drinkOrder('small', 'lemon'));

// 3. calculator
function calculator(num1, num2, operator) {
    var result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        case '%':
            result = num1 % num2;
            break;
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
}

calculator(2, 7, '+');
calculator(22, 10, '-');
calculator(1.01, 100, '*');
calculator(3, 6, '/');
calculator(7, 3, '%');