




//Grab the theme of the CHART
const chartTheme = document.getElementById('chart-theme-select');
let themeValue = null;
chartTheme.addEventListener('change', function () {
    if ((templateValue === 4) || 8){
        themeValue = chartTheme.value === "behaviour" ? 1 : 2;
        templateValue = templateValue + themeValue;
        console.log(`"ThemeValue =" ${themeValue}`);
        console.log(`"templateValue =" ${templateValue}`);
    }
    if ((templateValue === null) || 1 || 2 || 5 || 6 || 9 || 10){
        return;
    }
});

//Grab the Colour Style for the chart
const colourStyle = document.getElementById('chart-colour-select');
let colourValue = null;
colourStyle.addEventListener('change', function () {
    if (templateValue === 4 || 8){
        colourValue = colourStyle.value === "blue" ? 4 : 8;
        templateValue = templateValue + colourValue;
        console.log(colourValue);
    }

});

//Grab the value from nameInput
const childNameInput = document.getElementById('name-input');
let childName = null;

const previewButton = document.getElementById('pre-btn');
const generateButton = document.getElementById('gen-btn');

//This may need moving up if not working.
let templateValue = null;

previewButton.addEventListener('click', function (){
    if (templateValue === null){
        alert("Please complete all requirements to preview a template.")
    }
});









