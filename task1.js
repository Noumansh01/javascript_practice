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

// write a code which can gives a grade to student according to theirs score

const score= prompt("Enter your score");
if(score >= 90 && score <= 100){
    console.log("Your grade is A");
}else if(score >= 70 && score <= 89){
    console.log("Your grade is B");
}else if(score >= 60 && score <= 69){
    console.log("Your grade is C");
}else if(score >= 50 && score <= 59){
    console.log("Your grade is D");
}else if(score >= 0 && score <= 49){
    console.log("Your grade is F");
};

// calculate sum of 1 to 10 by using  for loop
let sum = 0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log("The total sum is", sum);