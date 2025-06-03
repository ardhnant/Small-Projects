
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




//for array lop

// let marks = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < marks.length; i++){
//   console.log(marks[i]);
// }



//find average marks of students though array and loop

// const marks = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;
// let i =0;
// while(i < marks.length){
//   totalMarks += marks[i]; 
//   i++;
// }
// console.log(i)
// let averageMarks = totalMarks/(i);
// console.log(averageMarks);



// let price = [250, 645, 300, 900, 50];
// let finalPrice = [];
// for(let i = price.length - 1; i >= 0; i--){
//   console.log(price[i])
//   let price10off = price[i] - price[i]/10

//   finalPrice.push(price10off)
// }
// console.log(finalPrice);



//learning splice now very usefull in arrays

// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// companies.slice(0);
// companies.splice(2, 1, 'Ola');
// companies.push('Amazon')
// console.log(companies);