
const inputEl = document.querySelector('#input');
const btn = document.querySelector('#button');
const chore = document.querySelector('#chore');

const todoList = [];

function addData(){
  if(!(inputEl.value)){
    alert('enter something genius');
    return;
  }
  
  const value = inputEl.value.trim();
  todoList.push(value);
  console.log(todoList); 


  const html = `
    <p id="real-chores" onclick="this.remove(); delChore('${value}')">
     ${inputEl.value}
      <button> Delete </button>
    </p>`;
  chore.innerHTML += html;
  console.log(chore.innerHTML);


  inputEl.value = ''; 
}

function delChore(value){
  const index = todoList.indexOf(value);
  if (index > -1) {
    todoList.splice(index, 1);
    console.log(`index ${index} item deleted.`);
  }
}

inputEl.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addData();
  }
});