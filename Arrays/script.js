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

const arrayElements = document.getElementById("arrayElements");
const booksArray = [];
const bookList = document.getElementById("bookList");
const inputEmptyMessage = "Please check the input field as it is empty";

//Function to create the Array and display it in the HTML.
function displayArray () {
    //This clears my Array in the HTML.
    bookList.innerHTML = '';
    booksArray.forEach((bookName,index) => {
        //if (!array.contains(bookName)) For duplication
        const listItem = document.createElement('li');
        listItem.textContent = `${index}: ${bookName}`;
        listItem.className = 'list-item';
        bookList.appendChild(listItem);
    });
}
function clearInput() {
    bookInput.value = '';
    spliceInput.value = '';
};

//PUSH PUSH PUSH
//Grabs the button and adds event listeners to it
const bookPush = document.getElementById("bookPush");
bookPush.addEventListener("click", pushArray);
//Grabs the input ID and the function Inputs a book at the end of the Array
const bookInput = document.getElementById("bookInput");
function pushArray() {
    if (!bookInput.value.trim()) {
        alert(inputEmptyMessage);
        clearInput();
        return;
    }
    booksArray.push(bookInput.value.toLowerCase());
    displayArray();
    clearInput();
}

//POP POP POP
//Grabs the button and adds an event listener to it.
const bookPop = document.getElementById("bookPop");
bookPop.addEventListener("click", popArray);
//Removes a book at the end of the Array
function popArray() {
    if (booksArray.length === 0) {
        return;
    }
    booksArray.pop();
    displayArray();
    clearInput();
}

//SHIFT SHIFT SHIFT
//Grabs the button and adds an event listener to it.
const bookShift = document.getElementById('bookShift');
bookShift.addEventListener('click', shiftArray);
//Removes the first element of an Array
function shiftArray() {
    if (booksArray.length === 0) {
        return;
    }
    booksArray.shift();
    displayArray();
    clearInput();
};

//UNSHIFT UNSHIFT UNSHIFT
//Grabs the button and adds an event listener to it.
const bookUnshift = document.getElementById('bookUnshift');
bookUnshift.addEventListener('click', unshiftArray);
//Inputs a book at the start of the Array
function unshiftArray() {
    if (!bookInput.value.trim()) {
        clearInput();
        return;
    }
    booksArray.unshift(bookInput.value.toLowerCase());
    displayArray();
    clearInput();
};

//SPLICE SPLICE SPLICE
//Grabs the button and adds an event listener to it.
const bookSplice = document.getElementById('bookSplice');
bookSplice.addEventListener('click', spliceArray);
//specify which item to remove from the Array
function spliceArray() {
    //This currently does not account for multiples of the same.
    //It just removes the first instance of the item in the array.
    const index = booksArray.indexOf(spliceInput.value.toLowerCase());
    if (index === -1) {
        alert("Book not found in the list.");
        clearInput();
        return;
    }
    booksArray.splice(index, 1);
    displayArray();
    clearInput();
};

//Array to store the random book
const randomBook = [];
const randomBookList = document.getElementById('book-picker-list');
//Random book Picker
const bookPickerBtn = document.getElementById('book-picker-btn');
bookPickerBtn.addEventListener('click', ()=> {
    //wipes the array so it can contain ONLY the newly selected ranom book.
    randomBook.splice(0, randomBook.length);
    //This clears my Array in the HTML.
    randomBookList.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * booksArray.length);
    const randomBookIndex = booksArray[randomIndex];
    randomBook.push(randomBookIndex);
    randomBook.forEach((bookName) => {
        if (booksArray.length === 0) {
        alert("No books added yet!");
        return;
    }
        const listItem = document.createElement('li');
        listItem.textContent = `${bookName}`;
        listItem.className = 'list-item';
        randomBookList.appendChild(listItem);
    });
});

//TO DO - .filter to create a bespoke LOTR Array to display.





