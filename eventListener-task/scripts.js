


for (let i = 1; i <= 4; i++) {
    const button = document.getElementById(`add-image${i}`);
    button.addEventListener("click", () => {
        const fileInput = document.getElementById(`file-input${i}`);
        const image = document.getElementById(`image${i}`);
        addImage(fileInput, image);
    });
}

function addImage(fileInput, image, button) {
    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }
    console.log(fileInput.files[0])
    image.src = URL.createObjectURL(fileInput.files[0]);
}

/*

//Can this be optimised? I feel like it can be but I don't know how to do it.
const button1 = document.getElementById("add-image1");
button1.addEventListener("click", () => {
    const fileInput = document.getElementById("image1-input");
    const file = fileInput.files[0];
    const image = document.getElementById('image1');
    image.src = URL.createObjectURL(file);
    addImage(file, image, button1);
});

//CREATE THE IMAGE 'function' HERE
function addImage(attachment, image, button) {
    if(attachment === ""){
        alert("Please select an image to upload.");
    }
    if(attachment !== ""){
        if (button === "add-image1") {
            image.src = attachment;
        }
        if (button === "add-image2") {
            image.src = attachment;
        }
        if (button === "add-image3") {
            image.src = attachment;
        }
        if (button === "add-image4") {
            image.src = attachment;
        }        
    }
    else{
        alert("something unexpected happened... Hmm... Please try again.");
    }
};
*/