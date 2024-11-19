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
