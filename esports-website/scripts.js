



const findMoreButton = document.getElementById('find-more');

findMoreButton.addEventListener('click', () => {
    const gameFinderContainer = document.querySelector('.game-finder-container');
    gameFinderContainer.classList.toggle('hidden');
});

const findGameCancelButton = document.getElementById('find-game-cancel-btn');
findGameCancelButton.addEventListener('click', () => {
    const gameFinderContainer = document.querySelector('.game-finder-container');
    gameFinderContainer.classList.toggle('hidden');
});





//IDEA
//Replicate an APP, but built within a browser.
//Esports APP to help players matchmake and find teams to play against.
//Categories for each GAME, with sub-pages and ways to matchmake within each.