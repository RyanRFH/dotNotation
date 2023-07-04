//ACTIVITY 1
let songlist = ["song1", "song2", "song3"];
console.log(songlist);
songlist.push("song4", "song5");
console.log(songlist);
songlist.pop();
console.log(songlist);

//ACTIVITY 2
let map1 = new Map();
console.log(map1);
map1.set('a', 100);
map1.set('b', 250);
map1.set('c', 325);
map1.set('c1234', 3);
console.log(map1.entries());
console.log(map1.get("a"));