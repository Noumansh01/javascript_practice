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