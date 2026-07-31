

//Create an object to store the theme values for colour and style.

function consoleLogValues() {
    console.log(`"themeValue =" ${themeValue}`);
    console.log(`"colourValue =" ${colourValue}`);
    console.log(`"templateValue =" ${templateValue}`);
}

//Grab the theme of the CHART
const chartTheme = document.getElementById('chart-theme-select');
let themeValue = 0;
chartTheme.addEventListener('change', function () {
    if (chartTheme.value === "behaviour"){
        themeValue = 1;
        templateValue = themeValue + colourValue; 
        consoleLogValues();       
    }
    if (chartTheme.value === "potty-training"){
        themeValue = 2;
        templateValue = themeValue + colourValue;
        consoleLogValues();      
    }
});

//Grab the Colour Style for the chart
const colourStyle = document.getElementById('chart-colour-select');
let colourValue = 0;
colourStyle.addEventListener('change', function () {

    if (colourStyle.value === "blue"){
        colourValue = 4;
        templateValue = colourValue + themeValue;
        consoleLogValues();
    }
    if (colourStyle.value === "pink"){
        colourValue = 8;
        templateValue = colourValue + themeValue;
        consoleLogValues();      
    }
});

//Grab the value from nameInput
const childNameInput = document.getElementById('name-input');
let childName = null;

const previewButton = document.getElementById('pre-btn');
const generateButton = document.getElementById('gen-btn');

//This may need moving up if not working.
let templateValue = 0;

previewButton.addEventListener('click', function (){
    if (![5,6,9,10].includes(templateValue)){
        alert("Please complete all requirements to preview a template.")
    }
});









