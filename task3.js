// prompt the user to enter their full name. Generate a username  for them based on the input start username with @
// followed by their full name and ending with the full name length.
// e.g username = "NoumanSheikh" username should be "@NoumanSheikh12"

const username= prompt("Enter your username");
const symbol= "@";
const userNameLength= username.length;
const finalUserName= symbol.concat(username).concat(userNameLength);
console.log(finalUserName);


// arrays in js 

// looping on array by using for loop 

const arr= ["ironman","thor","hulk","shaktiman","spiderman"];
for(let i=0; i<arr.length; i++){
    console.log(arr[i], "by using for loop");
}

// looping on array by using for of loop 

for(let val of arr){
    console.log(val, "by using for of loop");
}

// for a given array with marks of students find the average marks of entire class.

const marks=[85,97,44,37,76,60];
const markLength= marks.length;
let sum=0;
for(let mark of marks){
    sum+=mark;
    
}
console.log(`The average marks is ${sum/markLength}`);

// for a given array  price of five items [250,645,300,900,50] all item have an offer of 10% off on them change the 
// array to store final price after applying offer.

let itemArray= [250,645,300,900,50];
for(let i=0; i<itemArray.length; i++){
    let offer=  itemArray[i] / 10;
    let finaloffer= itemArray[i] - offer;
    const result = itemArray[i]=finaloffer;
    console.log(result);
}

console.log(itemArray);


// array methods 

let foodItems=["potato","litchi","apple","tomato"];

// the  push method also return the length of array
      const len = foodItems.push("chips","burger","paneer");
console.log(foodItems, len);


foodItems.pop();
console.log(foodItems);