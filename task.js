// practice question 1
// make object for product
let product = {
    tittle: "Ball Pen",
    rating: 4,  
    offer: 5,
    price: 270

};
console.log(product);
// practice question 2
// make object for profile
let profile = {
username: "Nouman",
isFollow: false,
followers: 125,
following: 200
};
console.log(profile);


// get user to input a number using prompt("Enter a number:"). Check if the number is multiple of  5 or not?

const userInput= prompt("Enter a number:");

if(userInput % 5 == 0){
    console.log(userInput,"is a multiple of 5");
}else{
    console.log(userInput,"is not a multiple of 5");
};