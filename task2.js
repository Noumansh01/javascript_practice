// write practice question of for of loop by iterating on a string

let str= "My name is Nouman";

for(let val of str){

    console.log(val);
}

// write practice question of for of loop by iterating on  array 

let arr= [1,2,"a","b",3,4,"c",5];
for(let arr1 of arr){
    console.log(arr1);
}

// iterate on object by using for in loop

const obj={
    name: "ali",
    age: 20,
    cgpa: 7,
    isPass: true

};

for(let obj1 in obj){
    console.log(` ${obj1} = ${obj[obj1]}`);
}


// print even number from 0 to 100 

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i, "is a even number");
    };
    
}


// print odd number from 0 to 100 

for(let i=0; i<=100; i++){
    if(i % 2 !==0){
        console.log(i, "is a odd number");
    };
    
}

// create a game where you start with any random game number. Ask user to keep guessing the game number until the user enters correct
function guessNum(){
    const gameNum=11;
    let userNum= prompt("write any num to guess the game num");
    while(gameNum!= userNum){
        userNum= prompt(" Please write correct num to guess the game num");
    }
       console.log("Your guess is write the Num is" , gameNum);
    

}
guessNum();

// check the length of a string 

let string="hello world!";
console.log(string.length);

// access the value of a string by using index number

let value = "apna college";
console.log(value[9]);

// example of template leterals 

const obj1={
item:"pen",
price: 10,
quantity:20
};

console.log(`This is a ${obj1.item} and the price is ${obj1.price} and the quantity is ${obj1.quantity}`);

// escape characters example

// \n is used to start from next line

console.log("Apna\nCollege");

// \t is used to give space of a tab

console.log("Apna\tCollege");

// string methods 

const text= "Hi how are you";
console.log(text.toUpperCase());

console.log(text.toLowerCase());

//trim method in js removes the white spaces from string
const text2= "    Hi how are you     ";

console.log(text2.trim());
console.log(text2.trimStart());
console.log(text2.trimEnd());

// slice method in js for string 

const text3= "I am 20 years old";
console.log(text3.slice(5,9));

// concat method 
const text4= "My name is ali and";
console.log(text4.concat("\tI am 20 years old"));

// replace method in js 
const text5= "ABCDEFGEEE";
console.log(text5.replace("E","e"));
console.log(text5.replaceAll("E","e"));

// charat method 

 console.log(text5.charAt(4));

//  conditional statement
// check the age of vote
let age=18;
if(age>=18){
    console.log("Yes you can vote");
}

// check the mode by using conditional statement 
let mode="white";
let color;
if(mode==="dark"){
    color="black";
}else{
    color="white";
}

console.log(color);

// check the num is even or odd by using conditional statement

let num=10;
if(num%2===0){
    console.log("the number is even");
}else{
    console.log("the num is odd");
};
