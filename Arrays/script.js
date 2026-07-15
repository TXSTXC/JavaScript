
//Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);
    function toggleTheme(){
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    };


/*Instructions:


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


const arrayElements = document.getElementById("arrayElements");


const booksList = [];

//Grabs the button and adds event listeners to it
const bookPush = document.getElementById("bookPush");
bookPush.addEventListener("click", pushArray);
//Grabs the input ID and the function Inputs a book at the end of the Array
const bookInput = document.getElementById("bookInput");
function pushArray() {
    booksList.push(bookInput.value.toLowerCase());
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
    booksList.unshift(bookInput.value.toLowerCase());
};

//Grabs the button and adds an event listener to it.
const bookSplice = document.getElementById('bookSplice');
bookSplice.addEventListener('click', spliceArray);
//specify which item to remove from the Array
function spliceArray() {
    //This currently does not account for multiples of the same. I dont know how this works...
    const index = booksList.indexOf(spliceInput.value.toLowerCase());
    if (index === -1) {
        alert("Book not found in the list.");
        return;
    }
    else{
        booksList.splice(index, 1);    
    }
    
};


