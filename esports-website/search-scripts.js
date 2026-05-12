




//CREATE A LOBBY
const createLobbyBtn = document.getElementById('create-lobby-btn');
createLobbyBtn.addEventListener('click', () => {
    const createLobbyContainer = document.querySelector('.create-lobby-search-container');
    createLobbyContainer.classList.toggle('hidden');
});

const lobbyCancelButton = document.getElementById('lobby-search-cancel-button');
lobbyCancelButton.addEventListener('click', () =>{
    const createLobbyContainer = document.querySelector('.create-lobby-search-container');
    createLobbyContainer.classList.toggle('hidden');
})

// Lobby Visibility
const lobbyVisibilityOption = document.getElementById('search-visibility-select');
lobbyVisibilityOption.addEventListener('click', () =>{
    if (lobbyVisibilityOption.value === "Private"){

        const lobbyCodeNum = Math.floor(Math.random() * 90000) + 10000;
        const lobbyCode = document.getElementById('search-lobby-code');
        lobbyCode.innerHTML = lobbyCodeNum;

        const codeBox = document.getElementById('code-generator');
        codeBox.classList.toggle('hidden');
    } 
})


//SEARCH PLAYERS
const searchPlayersBtn = document.getElementById('player-finder-btn');
searchPlayersBtn.addEventListener('click', () => {
    const searchPlayersContainer = document.querySelector('.search-players-search-container');
    searchPlayersContainer.classList.toggle('hidden');
}); 

const playerCancelButton = document.getElementById('player-search-cancel-button');
playerCancelButton.addEventListener('click', () =>{
    const searchPlayerContainer = document.querySelector('.search-players-search-container');
    searchPlayerContainer.classList.toggle('hidden');
})

//MATCH FINDER
const matchFinderBtn = document.getElementById('search-games-container');
matchFinderBtn.addEventListener('click', () =>{
    const matchFinderContainer = document.querySelector('.match-finder-search-container');
    matchFinderContainer.classList.toggle('hidden');
})
const matchCancelBtn = document.getElementById('match-search-cancel-button');
matchCancelBtn.addEventListener('click', () =>{
    const matchFinderContainer = document.querySelector('.match-finder-search-container');
    matchFinderContainer.classList.toggle('hidden');
})