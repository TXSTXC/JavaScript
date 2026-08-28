//Declares and grabs my data from the local storage
const homePageEntries = JSON.parse(localStorage.getItem('userEntries')) || [];
const homeEntries = homePageEntries.slice(-5).reverse();
console.log("Entries loaded on the Home Page:", homeEntries);

//Grab rows for assignment




function refreshEntries() {
//wipe all of the custom tile elements
//refresh them with the latest homeEntries array items
//Class per tile 'row-con{i] left / right (for loop to generate the latest {i}?)


//Cave a function that creates all the correct tags and values; linked to the array.





};








/*
const placeholderRow = document.querySelector('.placeholder');

const createRow = (indx) => {
    const row = document.createElement('div');
    row.classList.add('main-row');
    row.setAttribute('data-index', indx);
    return row;
};

let rowLeft = true;
let dataIndex = 1;
const outputContainer = document.querySelector('.main-container');

const updateEntry = (element, data) => {
    //element.querySelector('p').innerText = `${data.date}, ${data.time}`; 
    //element.querySelector('h2').innerText = data.subject;
    //element.querySelector('.entry-para').innerText = data.description;
    return element;
};

homeEntries.forEach(({subject, description, date, time}) => {
    console.log(subject);
    let replicate = placeholderRow.cloneNode();
    replicate.classList.remove('hidden');
    replicate.classList.remove('placeholder');
    let r = null;
    replicate = updateEntry(replicate, {subject, description, date, time});

    if (rowLeft) {
        r = createRow(dataIndex);
        r.appendChild(replicate);
    } else {
        r = document.querySelector(`.main-container[data-index='${dataIndex}']`);
        replicate.classList.remove('row1-l');
        replicate.classList.add('row1-r');
        r.appendChild(replicate);
        dataIndex++;
    }

    rowLeft = !rowLeft;
    outputContainer.appendChild(r);
});

refreshEntries();
*/