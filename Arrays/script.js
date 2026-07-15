
/*Instructions:


Push Method: Write a function addElement() that retrieves an element from an input field (elementInput) and adds it to the end of the array using array.push(element).

Pop Method: Implement a function to remove the last element from the array using array.pop() when a "Remove Last" button is clicked.

Shift Method: Write a function to remove the first element from the array using array.shift() when a "Remove First" button is clicked.

Unshift Method: Implement a function to add an element to the beginning of the array using array.unshift(element) when an "Add First" button is clicked.

Splice Method: Create a function removeElement(index) that removes an element at a specific index from the array using array.splice(index, 1).

ForEach Method: Write a function displayArray() that iterates through the array using array.forEach() to display each element in the designated HTML area (#arrayElements).

Displaying Array State:

Implement a function displayArray() that updates the HTML to display all elements in the array after each operation (push, pop, shift, unshift, splice).

Use DOM manipulation to update the content of the #arrayElements div with the current state of the array. Each element should be displayed with an appropriate format (e.g., "Element 1: value").

Testing and Validation:
Test each array method individually to ensure they correctly modify the array and update the displayed results
Validate user inputs and handle edge cases such as empty arrays or invalid operations gracefully.
4. Styling (Optional):

Use styles.css to enhance the visual presentation of your mini project, focusing on clarity and user interaction.
5. Testing and Validation:

Test each array method individually to ensure they correctly modify the array and update the displayed results.
Validate user inputs and handle edge cases such as empty arrays or invalid operations gracefully.
*/


const bookShift = document.getElementById("bookShift");
const bookUnshift = document.getElementById("bookUnshift");
const bookSplice = document.getElementById("bookSplice");
const arrayElements = document.getElementById("arrayElements");


let booksList = [];

//Grabs the button and adds event listeners to it
const bookPush = document.getElementById("bookPush");
bookPush.addEventListener("click", pushArray);
//Grabs the input ID and the function Inputs a book at the end of the Array
const bookInput = document.getElementById("bookInput");
function pushArray() {
    booksList.push(bookInput.value);
}

//Grabs the button and adds an event listener to it.
const bookPop = document.getElementById("bookPop");
bookPop.addEventListener("click", popArray);
//Removes a book at the end of the Array
function popArray() {
    booksList.pop();
};

//Grabs the button and adds an event listener to it.
const bookShift = document.getElementById('bookShift');
bookShift.addEventListener('click', shiftArray);
//Removes the first element of an Array
function shiftArray() {
    booksList.shift();
};

//Grabs the button and adds an event listener to it.
const bookUnshift = document.getElementById('bookUnshift');
bookUnshift.addEventListener('click', unshiftArray);
//Inputs a book at the start of the Array
function unshiftArray() {
    booksList.unshift(bookInput.value);
};

//Grabs the button and adds an event listener to it.
const bookSplice = document.getElementById('bookSplice');
bookSplice.addEventListener('click', spliceArray);
//specify which item to remove from the Array
function spliceArray() {
    booksList.splice();
};