
const editProfileIcon = document.getElementById('edit-profile-icon')
editProfileIcon.addEventListener('click', () => {
    const editProfileContainer = document.querySelector('.edit-profile-container');
        editProfileContainer.classList.toggle('hidden');
});
const editProfileCancelButton = document.querySelector('.edit-profile-btn-container .edit-profile-form-btn:nth-child(2)');
editProfileCancelButton.addEventListener('click', () => {
    const editProfileContainer = document.querySelector('.edit-profile-container');
        editProfileContainer.classList.toggle('hidden');
});
