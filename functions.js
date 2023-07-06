const favColour = (colour) => {
    console.log(`My fav colour is ${colour}`);
}
favColour("red");
favColour("blue");
favColour(75);


const func = function() {
    console.log("Blue");
}
func();

function func1() {
    console.log("Red");
}
func1();

//ACTIVITY 1
const factorial = (n) => {
    console.log(n);
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
    
}
console.log(factorial(5));

//ACTIVITY 2
let orderCount = 0;
const takeOrder = (topping, size) => {
    console.log(`${size} pizza with ${topping}`);
    console.log(`Order number = ${orderCount}`);
    orderCount++;
}

takeOrder("pineapple", "Large");
takeOrder("peperoni", "Small");
takeOrder("Cheese", "Large");

//ACTIVITY 3
let balance = 1000;
let pin = 8894;

const cashMachine = (enteredPin, amountToWithdraw) => {
    if (enteredPin === pin && amountToWithdraw <= balance) {
        balance -= amountToWithdraw;
        console.log(`You have withdrawn ${amountToWithdraw}, Current balance = ${balance}`);
    } else if (enteredPin !== pin) {
        console.log("You have entered the wrong pin");
    } else if (amountToWithdraw > balance) {
        console.log("You don't have enough money");
    } else {
        console.log("Error");
    }
}

cashMachine(8894, 1000);