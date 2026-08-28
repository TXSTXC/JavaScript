//Declares and grabs my data from the local storage
const homePageEntries = JSON.parse(localStorage.getItem('userEntries')) || [];
const homeEntries = homePageEntries.slice(-5).reverse();
console.log("Entries loaded on the Home Page:", homeEntries);

//Grab rows for assignment


//wipe all of the custom tile elements
//refresh them with the latest homeEntries array items
//Class per tile 'row-con{i] left / right (for loop to generate the latest {i}?)

function refreshEntries() {
    //This will remove all rows and tiles.
};

//3 ROW CREATION FUNCTION
function createRow(fiveEntries) {
    homeEntries.forEach((_,index) => { //Creates rows 1 - 3.
        for (j=0; j<=1; j++){ //creates Left and Right tiles.
            const row = document.createElement('div');
            row.classList.add("main-row", `row-con${index}`)
                if (j === 0){
                    row.classList.add(`row-con${index}`, `row${index}-left`);
                    createElements(row, index);
                }
                else {
                    row.classList.add(`row-con${index}`, `row${index}-right`);
                    createElements(row, index);
                };
                const mainRow = document.querySelector('.main-row').appendChild(row);
        };
    });
};

function createElements (row,index) {
    const tileDate = document.createElement('p');
    tileDate.innerText = homeEntries[index].date; 
    row.appendChild(tileDate);

    const tileSubject = document.createElement('h2');
    tileSubject.innerText = homeEntries[index].subject;
    row.appendChild(tileSubject);

    const tileDesc = document.createElement('p');
    tileDesc.innerText = homeEntries[index].description;
    row.appendChild(tileDesc)

    tileDesc.classList.add('entry-para');
};

createRow(homeEntries);








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