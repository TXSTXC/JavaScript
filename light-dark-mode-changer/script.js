



//This targets the <html> element in the DOM.
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function toggleTheme (){
        if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
    }
    else {
        html.setAttribute('data-theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);