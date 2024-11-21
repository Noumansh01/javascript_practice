// prompt the user to enter their full name. Generate a username  for them based on the input start username with @
// followed by their full name and ending with the full name length.
// e.g username = "NoumanSheikh" username should be "@NoumanSheikh12"





// const username= prompt("Enter your username");
// const symbol= "@";
// const userNameLength= username.length;
// const finalUserName= symbol.concat(username).concat(userNameLength);
// console.log(finalUserName);





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


       // functions practice start from here 


    //    print any message by using parameter in fuction

    function msg(message){
         console.log(message);
    }

    msg("I LOVE JAVASCRIPT");

    // write a funtion who calculate the sum of two values and take value from parameter

    function sumnum(num1,num2){
            console.log(num1+num2);
    }
    
    sumnum(10,37);


    // write a funtion who do substraction of two values but it donot print any thing it should return final value

    function sub(num1,num2){
         const finalValue= num1-num2;
         return finalValue;
    }

        let checkVal= sub(456,837);
      console.log(checkVal);


      // write arrow function of multiplication of two numbers

      const mul = (num1,num2)=>{

        console.log(num1*num2);

      };

      mul(756,987);

      // create a funtion using "funtion" keyword that takes a string as an argument and returns the number of vowels in the string.

      function checkVowel(string){
               
               let count=0;
        for(let str of string ){
             if(str==="a" || str==="e" || str==="i" || str==="o" || str==="u"){
                 count++;
             }
        }
        console.log(count, "this is from named function");
      }

      checkVowel("apna college");


      // create a funtion using " arrow funtion" that takes a string as an argument and returns the number of vowels


      const arrowfunc=(string)=>{
               let count=0;
 
               for(str of string){
                if(str==="a" || str==="e" || str==="i" || str==="o" || str==="u"){
                    count++;
                }
               }
                  
               console.log(count, " from arrow function");

      };

      arrowfunc("how are you ali");


      // for a given array of numbers print the square of each value using the forEach loop

      let numArr=[5,8,7,9,4,3,88];

      numArr.forEach((num)=>{
        console.log(num**2);
      });


      // for a given array of numbers return the square of each number by using map method
      // the map method return new array

       const numArr2= [6,7,8,3,9,1,5,7];

       const finalArr=numArr2.map((num)=>{
              return num * num;
       });

       console.log(finalArr);

       // filter array method practice example

       const filterExam=[3,5,4,6,8,2,10,24,65,46];

       let filterRes= filterExam.filter((val)=>{
                
              return val % 2 ===0;
       });
       console.log(filterRes, "this is from filter array");


       // reduce array method example

       const reduceArr=[3,6,4,7,8,3,7,];
       let redRes= reduceArr.reduce((acc,curr)=>{
                 
                   return acc+curr;
       },0);

       console.log(redRes, "this result is from reduce method");



    //    find  the largest number in array by using reduce method


    const reducearr2=[66,87,90,45,63,23,567];

    let finalres= reducearr2.reduce((prev,cur)=>{
                   
        return prev > cur ? prev : cur ;
    });

    console.log(finalres, " this is largest num from reduce method");


    // practice examples of with array method

    // we are given array of marks of students. filter the marks of student that scores 90

    const score=[87,45,67,90,65,34,99,94,95];

        const chkres=score.filter((val)=>{
        return  val >= 90;
    })
   
        console.log(chkres, "these score are greater");


   
