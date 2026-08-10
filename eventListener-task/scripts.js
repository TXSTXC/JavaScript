


//Can this be optimised? I feel like it can be but I don't know how to do it.
const button1 = document.getElementById("add-image1");
button1.addEventListener("click", () => {
    const imageInput = document.getElementById("file-input1");
    addImage(imageInput.value);
});
const button2 = document.getElementById("add-image2");
button2.addEventListener("click", () => {
    const imageInput = document.getElementById("file-input2");
    addImage(imageInput.value);
});
const button3 = document.getElementById("add-image3");
button3.addEventListener("click", () => {
    const imageInput = document.getElementById("file-input3");
    addImage(imageInput.value);
});
const button4 = document.getElementById("add-image4");
button4.addEventListener("click", () => {
    const imageInput = document.getElementById("file-input4");
    addImage(imageInput.value);
});



//CREATE THE IMAGE 'function' HERE
function addImage(attachment, imageOption) {
    if(attachment === ""){
        alert("Please select an image to upload.");
    }
    if(imageOption === "option1"){
        imageOption.src = attachment;
    }
    if(imageOption === "option2"){
        imageOption.src = attachment;
    }
    if(imageOption === "option3"){
        imageOption.src = attachment;
    }
    if(imageOption === "option4"){
        imageOption.src = attachment;
    }
    else{
        alert("something unexpected happened... Hmm... Please try again.");
    }
};