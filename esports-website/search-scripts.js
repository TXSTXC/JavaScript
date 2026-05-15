


///////////////////////////////////////////////////////////////////////////////////////

//CREATE A LOBBY
const createLobbyBtn = document.getElementById('create-lobby-btn');
createLobbyBtn.addEventListener('click', () => {
    const createLobbyContainer = document.querySelector('.create-lobby-search-container');
    createLobbyContainer.classList.toggle('hidden');
});
//Lobby CANCEL process
const lobbyCancelButton = document.getElementById('lobby-search-cancel-button');
lobbyCancelButton.addEventListener('click', () =>{
    //Unsure how to reset this drodpown option? The below semi-works, but is buggy.
    
    lobbyVisibilityOption.value = "";
    if (! codeBox.classList.contains("hidden")){
        codeBox.classList.add('hidden');
    }

    const createLobbyContainer = document.querySelector('.create-lobby-search-container');
    createLobbyContainer.classList.toggle('hidden');
})

const codeBox = document.getElementById('code-generator');
// Lobby Visibility & Random Code
const lobbyVisibilityOption = document.getElementById('search-visibility-select');
lobbyVisibilityOption.addEventListener('click', () =>{
    if (lobbyVisibilityOption.value === "private"){

        const lobbyCodeNum = Math.floor(Math.random() * 90000) + 10000;
        const lobbyCode = document.getElementById('search-lobby-code');
        lobbyCode.innerHTML = lobbyCodeNum;
        
        codeBox.classList.toggle('hidden');
    } 
});
///////////////////////////////////////////////////////////////////////////////////////



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

///////////////////////////////////////////////////////////////////////////////////////

//MATCH FINDER
const matchFinderBtn = document.getElementById('search-games-container');
matchFinderBtn.addEventListener('click', () =>{
    const matchFinderContainer = document.querySelector('.match-finder-search-container');
    matchFinderContainer.classList.toggle('hidden');
});
const matchCancelBtn = document.getElementById('match-search-cancel-button');
matchCancelBtn.addEventListener('click', () =>{
    const matchFinderContainer = document.querySelector('.match-finder-search-container');
    matchFinderContainer.classList.toggle('hidden');
});

///////////////////////////////////////////////////////////////////////////////////////