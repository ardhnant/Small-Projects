
//for loop

// let sum = 0;
// let n =  5;
// for(let i = 1; i <= n; i++){
//   sum += i;
// }
// console.log(sum);



//while loop

// let i = 0;
// while(i<5){
//   i++;
//   sum += i;
//   console.log(i);
// }
// console.log(sum);



//for-of loop

// let word = "JavaScript";
// size = 0;
// for(let i of word){
//   console.log("i=", i);
//   size++;
// }
// console.log('string size:', size);


// for-in loop

// let student = {
//   name: 'Abhay Raj',
//   age: 20,
//   cgpa: 8
// };

// for (let i in student){
//   console.log(i,':', student[i]);
// }


// print all the no, from 0 to 100 

// for(let i = 0; i<=100; i++){
//   console.log(i);
// }



// print all the even no, from 0 to 100

// for(let i = 0; i<=100; i++){
//   console.log(i);
// }


//create a game where u user will guess no. through prompt until its right

// const num = Math.round(Math.random()*100);

// let guessNum = Number(prompt('enter the no. of your mind'));

// while(guessNum !== num ){
//   if(guessNum < num){
//     guessNum = Number(prompt('too low, try again'));
//   } else {
//     guessNum = Number(prompt('too high, try again'));
//   }
// }
// alert('yay, you guess the right num.');


let str = prompt('Enter your full name.');
let cleaned = str.replaceAll(' ', '').toLowerCase();
console.log('@' + cleaned + cleaned.length);;