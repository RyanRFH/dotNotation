console.log("All around the word".charAt(8).toUpperCase());

//ACTIVITY 1
let name = "Ryan";
let age = "27";
let favColour = "Blue";
console.log(`My name is ${name}, my age is ${age} and my favourite colour is ${favColour}.`);

name = "Jack";
age = "25";
favColour = "Red";
console.log(`My name is ${name}, my age is ${age} and my favourite colour is ${favColour}.`);

//ACTIVITY 2
let breakfast = "Oats";
let lunch = "Eggs";
let dinner = "Fish and Chips";
console.log(`For breakfast I will have ${breakfast}, for lunch ${lunch} and for dinner ${dinner}.`);

breakfast = "Toast";
lunch = "Sausages";
dinner = "Chinese Food";
console.log(`For breakfast tomorrow I will have ${breakfast}, for lunch tomorrow ${lunch} and for dinner tomorrow ${dinner}.`);

//ACTIVITY 3
let birthDate = new Date("1995-09-09");
let currentDate = new Date("2023-07-03");
let dateDiff = currentDate -= birthDate;
console.log(((((dateDiff / 1000) /60) /60 ) /24));


//ACTIVTY 4
let pieces = [];
let randBool;
for (let i = 0; i < 9; i++) {
    randBool = Math.random();
    console.log(randBool);
    if (randBool < 0.5) {
        pieces[i] = "X";
    } else {
        pieces[i] = "O";
    }
}

console.log(pieces);

let walls = ["    |     |    ", "---------------"]
let pieceCount = 0;
let verticalPieceCount = 0;
let diagonalPieceCount = 0;
let isHLine = "";
let isVLine = "";
let isDiagonalLine1 = "test";
let isDiagonalLine2 = "test";
for (let i = 0; i < 3; i++) {
    if (pieces[pieceCount] === pieces[pieceCount+1] && pieces[pieceCount] === pieces[pieceCount+2]) {
        isHLine = `(${pieces[pieceCount]} made a horizontal line!)`;
    } else {
        isHLine = "";
    }

    if (pieces[verticalPieceCount] === pieces[verticalPieceCount+3] && pieces[verticalPieceCount] === pieces[verticalPieceCount+6]) {
        isVLine = `(${pieces[verticalPieceCount]} made a vertical line!)`;
    } else {
        isVLine = "";
    }

    if (pieces[0] === pieces[4] && pieces[0] === pieces[8] && isDiagonalLine1 !== "used") {
        isDiagonalLine1 = `(${pieces[0]} made a diagonal line!)`;
    } else {
        isDiagonalLine1 = "";
    }

    if (pieces[2] === pieces[4] && pieces[2] === pieces[6] && isDiagonalLine2 !== "used") {
        isDiagonalLine2 = `(${pieces[2]} made a diagonal line!)`;
    } else {
        isDiagonalLine2 = "";
    }

    // console.log(pieceCount);

    console.log(walls[0]);

    console.log(`  ${pieces[pieceCount]} |  ${pieces[pieceCount+=1]}  |  ${pieces[pieceCount+=1]}  ${isHLine} ${isVLine} ${isDiagonalLine1} ${isDiagonalLine2}`);
    
    //Does not work
    if (isDiagonalLine1.length > 5) {
        isDiagonalLine1 = "used";
    }
    if (isDiagonalLine2.length > 5) {
        isDiagonalLine2 = "used";
    }

    pieceCount++;
    verticalPieceCount++;
    console.log(walls[0]);
    if (i < 2) {
        console.log(walls[1]);
    }
}


