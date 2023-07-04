//ACTIVITY 1
let array1 = ["lotr", "bttf", "predator"];
console.log(array1);
array1.push("film1");
array1.push("film2");
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

//ACTIVITY 2
let ranNums = []
for (let i = 0; i < 6; i++) {
    ranNums[i]=Math.random()*50;
    console.log(ranNums[i]);
}

//ACTIVITY 3
for (let i = 0; i <= 9; i++) {
    console.log(i);
}
for (let i = 9; i > 0; i--) {
    console.log(i);
}

//ACTIVITY 4
let films = ["film1", "film2", "film3", "film4"];
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
    if (films[2] === "Ghostbusters") {
        console.log("Yay its ghostbusters");
    } else {
        console.log("Boo! We want ghostbusters");
    }
}

//ACTIVITY 5
let ranNums2 = [];
for (let i = 0; i < 6; i++) {
    
    ranNums2[i] = Math.floor(Math.random()*30);
    if (ranNums2[i]%7 === 0) {
        console.log(`${ranNums2[i]} is divisible by 7!`);
    } else {
        console.log(`${ranNums2[i]} is not divisible by 7`);
    }
}
console.log(ranNums2);

//ACTIVITY 6
let bobsFollowers = ["jack", "dan", "ryan", "adam", "mike"];
let ryansFollowers = ["mike", "jack", "steve", "adam", "sam"];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let x = 0; x < ryansFollowers.length; x++) {
        if (bobsFollowers[i] === ryansFollowers[x]) {
            console.log(`They are both following ${bobsFollowers[i]}`);
        }
    }
}

//ACTIVITY 7
let testNum = 5;
do {
    console.log(testNum);
    testNum--;
} while (testNum > 0);

//SORTING
let data = [];
let sortedData = [];
let holder = 0;
let highestNumIndex = 0;
for (let i = 0; i <100; i++) {
    data[i] = Math.random()*100;
}
console.log("UNSORTED DATA");
console.log(data);

for (let i = 0; i < 100; i++) {
    for (let x = 0; x < 100; x++) {
        if (data[x] > holder) {
            holder = data[x];
            highestNumIndex = x;
        }
    }
    data.splice(highestNumIndex, 1);
    sortedData.push(holder);
    holder = 0;
}


// let y = 0;
//     do {
//         if (data[y] === holder) {
//             data.splice(y, 1);
//             break;
//         }
//         y++;
//     } while (data.length >= 0);


    // for (let z = 0; z < data.length; z++) {
    //     if (data[z] === holder) {
    //         data[z] = 0;
    //         // console.log(data[z]);
    //         // console.log(holder);
    //         // data.splice(z, 0, 0);
    //         // data.splice(0, 1);
    //         // console.log(z*10);
    //     }
    //     // console.log(data[z]);
    //     // console.log(holder);
    // }

// data.splice(0, 1);
console.log("EMPTIED ARRAY");
console.log(data);
// console.log(data.length);
console.log("SORTED DATA");
console.log(sortedData);