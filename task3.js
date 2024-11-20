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
    console.log(arr[i]);
}