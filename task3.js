// prompt the user to enter their full name. Generate a username  for them based on the input start username with @
// followed by their full name and ending with the full name length.
// e.g username = "NoumanSheikh" username should be "@NoumanSheikh12"

const username= prompt("Enter your username");
const symbol= "@";
const userNameLength= username.length;
const finalUserName= symbol.concat(username).concat(userNameLength);
console.log(finalUserName);