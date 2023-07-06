// const person = {
//     name : "ryan",
//     age : 27
// };
// let prop = "name";
// console.log(person.name, person.age);
// console.log(person[prop]);

let day = "sunday";
let alarmV;

const alarm = {
    weekendAlarm : "No alarm needed",
    weekdayAlarm : "Get up at 7am"
};

if (day === "saturday" || day === "sunday") {
    alarmV = alarm.weekendAlarm;
} else {
    alarmV = alarm.weekdayAlarm;
}

console.log(alarmV);

//Objects are mutable
alarm.weekendAlarm = "Get up at 9am on weekend";

if (day === "saturday" || day === "sunday") {
    alarmV = alarm.weekendAlarm;
} else {
    alarmV = alarm.weekdayAlarm;
}

console.log(alarmV)

//2 WAYS OF WRITING FUNCTION IN OBJECTS
const cafe = {
    cafeOpen: false,
    isCafeOpen() {
        if (this.cafeOpen === true) {
            return "Cafe is open returned";
        } else {
            return "Cafe is closed";
        }

    }, 
    openCafe: () => {
        console.log("We are open");
    },
    closedCafe: () => {
        console.log("We are closed");
    },

    openedCafe() {
        console.log("We are open 2");
    },
    closedCafe2() {
        console.log("We are closed 2");
    }
}

cafe.openCafe();
cafe.openedCafe();
console.log(cafe.isCafeOpen());

//ACTIVITY 1
const person = {
    name : "ryan",
    age : 27,
    sayHi() {
        return `Hello my name is ${this.name}`;
    }
};
let prop = "name";
console.log(person.name, person.age);
console.log(person[prop]);
console.log(person.sayHi());

//ACTIVITY 2
const pet = {
    name: "Olly",
    typeOfPet: "Dog",
    age: 2,
    colour: "white",
    eat() {
        return `${this.name} is eating`;
    },
    drink() {
        return `${this.name} is drinking`;
    }
};

console.log(pet.eat());

//ACTIVITY 3
const cofeeShop = {
    branch: "branch test",
    pizza: 10,
    fries: 5,
    sprite: 4,
    coke: 3,
    foodCost: 0,
    drinkCost: 0,
    orderTotalCost: 0,
    error: false,
    foodOrder(food, drink) {
        switch(food) {
            case "pizza":
                this.foodCost += this.pizza;
                break;
            case "fries":
                this.foodCost += this.fries;
                break;
            default:
                this.error = true;
                
        }

        if (this.error === true) {
            return "Food type not found";
        }

        switch(drink) {
            case "sprite":
                this.drinkCost += this.sprite;
                break;
            case "coke":
                this.drinkCost += this.coke;
                break;
            default:
                this.error = true;
        }

        if (this.error === true) {
            return "Drink type not found";
        }

        this.orderTotalCost = this.foodCost + this.drinkCost;
        return `Your order is: ${food}/£${this.foodCost} and a ${drink}/£${this.drinkCost}, your total bill is £${this.orderTotalCost}.`;
    }
};
console.log(cofeeShop.foodOrder("pizza", "sprite"));

// let matrixArray = [[0]];
// console.log(matrixArray);
// for (let i = 0; i<10; i++) {
//     for (let x = 0; x <10; x++) {
//         matrixArray[0][x] = 1;
//     }
// }

// matrixArray[0][1] = 2;
// for (let y = 0; y < 10; y++) {
//     matrixArray[0][0] = 1;
// }

// console.log(matrixArray[0][0]);
// console.log(matrixArray);

// let objArray = Object.entries(cofeeShop);
// let map = new Map(objArray);

// console.log(objArray);
// console.log(map);

//CREATES NEW KEY IN OBJECT
// cofeeShop.newVar = "test";
// console.log(cofeeShop);