const allBtn = document.querySelectorAll('.btn');
const moveOf = document.querySelector('.move');
const winDeclare = document.querySelector('#winner');
const reset = document.querySelector('#reset-btn');
let isMoveX = true; //to know who is gonna move exactly
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

allBtn.forEach(button => {
  button.addEventListener('click', () => {
   
    if(isMoveX){
      button.innerText = 'X';
      button.disabled = true;
      isMoveX = false;
      checkWinner();
     
      moveOf.innerText = 'O to play';
    } else {
      button.innerText = 'O';
      isMoveX = true;
      button.disabled = true;
      checkWinner();

      moveOf.innerText = 'X to play';
    }
  });
});

//const values = Array.from(allBtn).map(btn => btn.innerText);  this is wild you can use it in the future 
//console.log(values)

function checkWinner(){
  const values = Array.from(allBtn).map(btn => btn.innerText); //convert the response which is X O in an array
  console.log(values);
  for(let pattern of winPattern){
    const [a, b, c] = pattern; // forming pattern to compare it with the values
    if( values[a]!=='' && values[a]===values[b] && values[a]===values[c]){
      moveOf.style.display = 'none';
      winDeclare.innerText = `${values[a]} won the match.`;
      allBtn.forEach(btn => btn.disabled = true);
      return;
    }
  }
  if (!values.includes('')){
    moveOf.style.display = 'none';
    winDeclare.innerText = `Its a tie.`;
  }
}

reset.addEventListener('click', () => {
  allBtn.forEach(btn => {
    btn.innerText = '';
    btn.disabled = false;
  }); //you cant use just allbtn inner text u gotta make a loop
  winDeclare.innerText = '';
  isMoveX = true; //this is very impo and very helpfull
  moveOf.style.display = 'inline-block';
  moveOf.innerText = 'X to play';
})