

//Grabs the TO DO list and assigns to todoList variable.
const todoList = document.getElementById('ul-todo');
const doneList = document.getElementById('ul-done');
const input = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');


addBtn.addEventListener('click', function() {
    if (input.value === '') {
        alert('Please enter a task before adding to the list.');
    } else {
        addItem();
    }
});

removeBtn.addEventListener('click', function() {
    listItem.remove();
});

// function to add a new item into the. #ul-todo
function addItem() {
    const newTask = input.value;

    const listItem = document.createElement('li');
    listItem.textContent = newTask;
    listItem.className = 'list-item';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
        listItem.remove();
        doneList.appendChild(listItem);
        removeBtn.remove(); 
    });

    listItem.appendChild(removeBtn);     
    todoList.appendChild(listItem);           
    input.value = '';
}





