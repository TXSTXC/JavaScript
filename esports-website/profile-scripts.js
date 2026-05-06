
const editProfileIcon = document.getElementById('edit-profile-icon')
editProfileIcon.addEventListener('click', () => {
    const editProfileContainer = document.querySelector('.edit-profile-container');
        editProfileContainer.classList.toggle('hidden');
});
