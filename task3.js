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

// the pop method remove item from last of array and also return the item who has removed
   const deletedItem=foodItems.pop();
console.log(foodItems, deletedItem);

// tostring() method converts array into string

const example = [1,2,3,4,5,6,7,8,9,10];
console.log(example.toString());

// concat method in array this method concat two or more arrays and return new array 

let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];

    const res= marvelHeroes.concat(dcHeroes);
    console.log(res);

    // unshift or shift method in array 

    // unshift method add value in the start of array 
    const unshiftmethod= marvelHeroes.unshift("antman");

    console.log(marvelHeroes);

    // shift method remove value from start of array 
    const shiftmethod=dcHeroes.shift();
    console.log(shiftmethod);

// slice and splice array method 

const arr2= [1,2,3,4,5]
// slice method 
console.log(arr2.slice(1,3));

// splice method this method change original array and it take 3 arg 1 startindex 2 to del index 
// 3 value which will be rewrite on remove indexes
const arr3= [1,2,3,4,5,6,7,8]
    arr3.splice(4,2,108,109);
console.log(arr3);

// create an array  to store company "bloomberg","microsoft", "uber","google","ibm","netflix"

let companyies=["bloomberg","microsoft", "uber","google","ibm","netflix"];

// task 1  remove the first company from array
               companyies.shift()
     console.log(companyies);

// task 2 remove uber and add ola in its place
companyies.splice(2,1,"ola");
console.log(companyies);


// task 3 add amazon at the end

       companyies.push("amazon");
       console.log(companyies);