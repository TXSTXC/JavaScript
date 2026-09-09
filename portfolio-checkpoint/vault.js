const vaultEntries = JSON.parse(localStorage.getItem('userEntries')) || [];
vaultEntries.reverse();
console.log("Entries loaded on the Vault Page:", vaultEntries);

//TESTING BELOW

// 3 ROW / ENTRY CREATION FUNCTION USING A FOR LOOP
function createEntries() {

    const parentContainer = document.querySelector('.main-lower'); 
    if (!parentContainer) return;

    for (let i = 0; i < vaultEntries.length; i++) {
        //creates row container for each entry
        const row = document.createElement('div');
        row.classList.add("tile-container");

        //Creates the elemnents for each entry
        createElements(row,i);
        parentContainer.appendChild(row);
    }
};

function createElements (row,index) {
    const tileDate = document.createElement('p');
    tileDate.innerText = vaultEntries[index].date; 
    row.appendChild(tileDate);

    const tileSubject = document.createElement('h2');
    tileSubject.innerText = vaultEntries[index].subject;
    row.appendChild(tileSubject);

    const tileDesc = document.createElement('p');
    tileDesc.innerText = vaultEntries[index].description;
    row.appendChild(tileDesc)

    tileDesc.classList.add('entry-para');
};

createEntries(vaultEntries);