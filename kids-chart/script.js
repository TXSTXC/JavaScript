

//Grab the theme of the CHART
const chartTheme = document.getElementById('chart-theme-select');
let themeValue = null; 
chartTheme.addEventListener('click', () => {
    if (chartTheme.value === "behaviour"){
        themeValue = 1;
    }
    if (chartTheme.value === "potty-training"){
        themeValue = 2;
    }
    console.log(themeValue);
});

function testThemeValue(){
    console.log(themeValue);
}


