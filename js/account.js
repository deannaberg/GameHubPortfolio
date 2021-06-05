const profileButton = document.querySelector("#editProfileButton");
const cancel = document.querySelector("#cancelUpdate");
const profileDetails = document.querySelector("#profDetailWrap");
const editDetails = document.querySelector("#profEditWrap");



profileButton.addEventListener('click', function () {
    profileDetails.style.display = "none";
    editDetails.style.display = "block";
});

cancel.addEventListener('click', function () {
    profileDetails.style.display = "block";
    editDetails.style.display = "none";
});

