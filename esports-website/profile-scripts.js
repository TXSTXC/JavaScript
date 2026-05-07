

/*

for future use when login process exists...

class UserAccount {
    constructor(username, password, profilePicture, name, age, location, activeTeams, memberSince){
        this.username = username;
        this.password = password;
        this.profilePicture = profilePicture;
        this.name = name;
        this.age = age;
        this.location = location;
        this.activeTeams = activeTeams;
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
    memberSince: "October 2017"
};
*/

const usernameInput = document.getElementById('username');
const profilePictureInput = document.getElementById('profile-picture');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const locationInput = document.getElementById('location');

//UPDATE PROFILE INFO FUNCTION
updateProfileInfo = function() {
    const usernameInputValue = usernameInput.value;
    const profilePictureFile = profilePictureInput.files[0];
    const nameInputValue = nameInput.value;
    const ageInputValue = ageInput.value;
    const locationInputValue = locationInput.value;

    // Update the profile display on the page
    document.getElementById('profile-username').innerHTML = usernameInputValue;
    document.getElementById('profile-name').innerHTML = nameInputValue;
    document.getElementById('profile-age').innerHTML = `${ageInputValue}`;
    document.getElementById('profile-location').innerHTML = `${locationInputValue}`;
    //document.getElementById('profile-member-since').innerHTML = `${TXSTXC.memberSince}`;
};
resetEditProfileInfo = function (){
    usernameInput.value = '';
    profilePictureInput.value = '';
    nameInput.value = '';
    ageInput.value = '';
    locationInput.value = '';
}
populateEditProfileInfo = function() {
    usernameInput.value = document.getElementById('profile-username').innerHTML;
    nameInput.value = document.getElementById('profile-name').innerHTML;
    ageInput.value = document.getElementById('profile-age').innerHTML;
    locationInput.value = document.getElementById('profile-location').innerHTML;
}

//GRabs the Container for the EDIT PROFILE button
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
const editProfileCancelButton = document.querySelector('.edit-profile-btn-container .edit-profile-form-btn:nth-child(2)');
editProfileCancelButton.addEventListener('click', () => {
    editProfileContainer.classList.toggle('hidden');
    resetEditProfileInfo();
});


