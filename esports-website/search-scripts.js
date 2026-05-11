


function searchCancelButton () {
 const searchCancelButton = document.querySelector('.search-cancel-btn');
 cancelButton.addEventListener('click', (input) =>{
    const canceButtonID = input;
     cancelButtonId.classList.toggle('hidden');
 })

};


//CREATE A LOBBY
const createLobbyBtn = document.getElementById('create-lobby-btn');
createLobbyBtn.addEventListener('click', () => {
    const createLobbyContainer = document.querySelector('.create-lobby-search-container');
    createLobbyContainer.classList.toggle('hidden');
});



//SEARCH PLAYERS
const searchPlayersBtn = document.getElementById('player-finder-btn');
searchPlayersBtn.addEventListener('click', () => {
    const searchPlayersContainer = document.querySelector('.search-players-search-container');
    searchPlayersContainer.classList.toggle('hidden');
}); 

//MATCH FINDER
const matchFinderBtn = document.getElementById('search-games-container');
matchFinderBtn.addEventListener('click', () =>{
    const matchFinderContainer = document.querySelector('.match-finder-search-container');
    matchFinderContainer.classList.toggle('hidden');
})
