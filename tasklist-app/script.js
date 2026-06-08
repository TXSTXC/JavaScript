

//Grabs the TO DO list and assigns to todoList variable.
const todoList = document.getElementById('ul-todo');
const input = document.getElementById('input-todo');

//function to add a new item into the .#ul-todo
function addItem() {

    //take the input from the input field and assign to a variable.
    const newTask = input.value;
    //create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = newTask;
    //append the new list item to the TO DO list
    todoList.appendChild(listItem);
    //clear the input field
    input.value = '';
}


const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function() {
    if(input.value === ''){
        alert('Please enter a task before adding to the list.');
    }
    else{
        addItem();
    }
});