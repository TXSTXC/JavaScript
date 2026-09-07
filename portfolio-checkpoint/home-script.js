//Declares and grabs my data from the local storage
const homePageEntries = JSON.parse(localStorage.getItem('userEntries')) || [];
const homeEntries = homePageEntries.slice(-4).reverse();
console.log("Entries loaded on the Home Page:", homeEntries);

//Grab rows for assignment


//wipe all of the custom tile elements
//refresh them with the latest homeEntries array items
//Class per tile 'row-con{i] left / right (for loop to generate the latest {i}?)

const tileSelectors = ['.row0-l', '.row0-r', '.row1-l', '.row1-r', '.row2'];

function populateEntries() {
    homeEntries.forEach((entry, index) => {
        // Find the specific tile container using its unique class
        const tile = document.querySelector(tileSelectors[index]);

        if (tile && entry) {
            // 1. Target the date paragraph (the first <p> inside the tile)
            const datePara = tile.querySelector('p');
            if (datePara) datePara.innerText = entry.date || '';

            // 2. Target the subject heading
            const heading = tile.querySelector('h2');
            if (heading) heading.innerText = entry.subject || '';

            // 3. Target the description paragraph
            const descPara = tile.querySelector('.entry-para');
            if (descPara) descPara.innerText = entry.description || '';
        }
    });
}

populateEntries();













/*

// 3 ROW / ENTRY CREATION FUNCTION USING A FOR LOOP
function createRow(fiveEntries) {

    const parentContainer = document.querySelector('.row-container'); 
    if (!parentContainer) return;


    for (let i = 0; i < homeEntries.length; i++) {
        const row = document.createElement('div');
        
        row.classList.add("row-container", "main-row", `row-con${i}`);
        
        if (i % 2 === 0) {
            row.classList.add(`row${i}-left`);
        } 
        else {
            row.classList.add(`row${i}-right`);
        }

        createElements(row, i);
        parentContainer.appendChild(row);
    }
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


*/




















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