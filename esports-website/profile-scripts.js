

/*

for future use when login process exists...

class UserAccount {
    constructor(username, password, profilePicture, name, age, location, activeTeams, steamId, gamertag, psn, memberSince){
        this.username = username;
        this.password = password;
        this.profilePicture = profilePicture;
        this.name = name;
        this.age = age;
        this.location = location;
        this.activeTeams = activeTeams;
        this.steamId = steamId;
        this.gamertag = gamertag;
        this.psn = psn;
        this.memberSince = memberSince;
    }
};

const TXSTXC = {
    username: "TXSTXC",
    password: "password123",
    profilePicture: "./media/icons/user-pic.jpg",
    name: "Luke",
    age: 32,
    location: "Nuneaton, UK",
    activeTeams: ["Ethereal esports", "BATTLEFIELD with the BOYZ"],
    steamId: "TXSTXC",
    gamertag: "TXSTXC",
    psn: "",
    memberSince: "October 2017"
};
*/

//EDIT PROFILE UI VARIABLES

//UPDATE PROFILE INFO FUNCTION
const usernameInput = document.getElementById('edit-username');
const profilePictureInput = document.getElementById('edit-profile-picture');
const nameInput = document.getElementById('edit-name');
const ageInput = document.getElementById('edit-age');
const locationInput = document.getElementById('edit-location');
const bioInput = document.getElementById('edit-bio');

updateProfileInfo = function() {
    const usernameInputValue = usernameInput.value;
    const profilePictureFile = profilePictureInput.files[0];
    const nameInputValue = nameInput.value;
    const ageInputValue = ageInput.value;
    const locationInputValue = locationInput.value;
    const bioInputValue = bioInput.value;

    // Update the profile display on the page
    document.getElementById('profile-username').innerHTML = usernameInputValue;
    document.getElementById('profile-name').innerHTML = nameInputValue;
    document.getElementById('profile-age').innerHTML = `${ageInputValue}`;
    document.getElementById('profile-location').innerHTML = `${locationInputValue}`;
    document.getElementById('profile-bio').innerHTML = bioInputValue;
    //document.getElementById('profile-member-since').innerHTML = `${TXSTXC.memberSince}`;
};

//Reset EDIT PROFILE data fields
resetEditProfileInfo = function (){
    usernameInput.value = '';
    profilePictureInput.value = '';
    nameInput.value = '';
    ageInput.value = '';
    locationInput.value = '';
    bioInput.value = '';

}
//POPULATE EDIT PROFILE data fields from PRFOILE DISPLAY
populateEditProfileInfo = function() {
    usernameInput.value = document.getElementById('profile-username').innerHTML;
    nameInput.value = document.getElementById('profile-name').innerHTML;
    ageInput.value = document.getElementById('profile-age').innerHTML;
    locationInput.value = document.getElementById('profile-location').innerHTML;
    bioInput.value = document.getElementById('profile-bio').innerHTML;
}

//Grabs the Container for the EDIT PROFILE button
const editProfileContainer = document.querySelector('.edit-profile-container');

//Event Listener for the Edit Profile Button and the Cancel Button
const editProfileIcon = document.getElementById('edit-profile-icon')
editProfileIcon.addEventListener('click', () => {
    editProfileContainer.classList.toggle('hidden');
    populateEditProfileInfo();
});
//Event Listener for the Save Changes Button
const saveChangesButton = document.querySelector('.edit-profile-btn-container .edit-profile-form-btn:nth-child(1)');
saveChangesButton.addEventListener('click', () => {
    updateProfileInfo();
    //password change to come soon....
    editProfileContainer.classList.toggle('hidden');
    resetEditProfileInfo();
});
//Event Listener for the Cancel Button
const editProfileCancelButton = document.querySelector('.edit-profile-cancel-btn');
editProfileCancelButton.addEventListener('click', () => {
    editProfileContainer.classList.toggle('hidden');
    resetEditProfileInfo();
});










