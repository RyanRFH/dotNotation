//ACTIVITY 1
let age = 27;
let country = "UK";
if (age > 17 && country === "UK") {
    console.log("Yes i can serve you");
} else {
    console.log("I cannot serve you");
}

//ACTIVITY 2
let pizzaTop = "Peperoni";
switch (pizzaTop) {
    case "Peperoni":
        console.log(`${pizzaTop} is an important ingredient for my pizza`);
        break;
    case "Cheese":
        console.log("Cheese should not be on pizza");
        break;
    default:
        console.log("Ingredient not found");
}

//ACTIVITY 3
let password = "5596546456645";
let num = 97;
if (num%3 === 0 || num%5 === 0) {
    console.log("Divisible by 3 or 5");
} else {
    console.log("Not divisible");
}

if (password.length < 8 ) {
    console.log("Password too short");
} else {
    console.log(password);
}

//ACTIVITY 4
let num2 = 90;
if (num2%3 === 0) {
    console.log("Fizz");
} else if (num2%5 === 0) {
    console.log("Buzz");
} else if (num2%3 === 0 && num2%5) {
    console.log("Fizz Buzz");
} else {
    console.log(num2);
}

//ACTYIVITY 5
let num3 = 6006;
if (num3.toString()[0] === num3.toString()[3] && num3.toString()[1] === (num3.toString()[2])) {
    console.log("Palindrome");
} else {
    console.log("Not palindrome");
}

//ACTIVITY 6
let time = 9;
let placeOfWork = "Office";
let townOfHome = "Burnley";
if (time === 9) {
    console.log(`At ${placeOfWork}`);
} else if (time === 7) {
    console.log(`At ${townOfHome}`);
}

//ACTIVITY 7
let letters = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let x = 1;

// console.log(letters.length -6);

for (let i = 0; i < letters.length; i++) {
    // console.log(letters[letters.length -1 - i]);
    if (letters[letters.length -1 - i] === "a") {
        console.log(`a is the last vowel at index ${letters.length -1 - i}`);
        break;
    } else if (letters[letters.length -1 - i] === "e") {
        console.log(`e is the last vowel at index ${letters.length -1 - i}`);
        break;
    } else if (letters[letters.length -1 - i] === "i") {
        console.log(`i is the last vowel at index ${letters.length -1 - i}`);
        break;
    } else if (letters[letters.length -1 - i] === "o") {
        console.log(`o is the last vowel at index ${letters.length -1 - i}`);
        break;
    } else if (letters[letters.length -1 - i] === "u") {
        console.log(`u is the last vowel at index ${letters.length -1 - i}`);
        break;
    }
}

//ACTIVITY 8
let word = "test";
console.log(word[word.length - 1]);
console.log(word[0]);
if (word[0] === word[word.length -1]) {
    console.log("First and last letter are the same");
} else {
    console.log("First and last letter are not the same");
}
//ACTIVITY 9

let num5 = 7;
let num6 = 12;
if ((num5 + num6)%2 === 0) {
    console.log("The numbers are even");
    console.log(num5+num6);
} else {
    console.log("The numbers are not even");
    console.log(num5*num6);
}