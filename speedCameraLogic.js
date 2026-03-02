



// JavaScript test - SPEED CAMERA
// I want the camera to be able to check the speed + 10% to allow for human error, so I need to calculate the speed limit + 10%
alert("This is a page alert, please close to continue.");

let speed = 31;

const speedLimit = {
    nationalSpeedLimit: 70,
    standardSpeedLimit: 30,
    schoolSpeedLimit: 20
}

const speedTolerance = 0.1; // 10% tolerance

const speedLimitTolerance = {
    nationalSpeedLimitTolerance: speedLimit.nationalSpeedLimit + (speedLimit.nationalSpeedLimit * speedTolerance),
    standardSpeedLimitTolerance: speedLimit.standardSpeedLimit + (speedLimit.standardSpeedLimit * speedTolerance),
    schoolSpeedLimitTolerance: speedLimit.schoolSpeedLimit + (speedLimit.schoolSpeedLimit * speedTolerance)
};

const criminalSpeedingLimit = {
    nationalSpeedLimitCriminal: speedLimit.nationalSpeedLimit * 0.3,
    standardSpeedLimitCriminal: speedLimit.standardSpeedLimit * 0.3,
    schoolSpeedLimitCriminal: speedLimit.schoolSpeedLimit * 0.3
};

const roadType = {
    school: "school",
    standard: "standard",
    national: "national"
}

let legalSpeedMessage = "You are not breaking any speed limits, keep driving safely!";
let toleranceSpeedMessage = "You are breaking the " + roadType + " speed limit! Please slow down!";
let speedingMessage = "You are above the " + roadType + " speed limit threshold. You will be receiving a fine through the post in due course. Please slow down and drive safely!";
let criminalSpeedingMessage = "You are now travelling at " + speed +"which is within the criminal threshold for " + roadType + "roads. You should expect a fine and possibly a driving ban. Please slow down and drive safely!";

if (roadType.school){
    if (speed <= speedLimit.schoolSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > speedLimit.schoolSpeedLimit && speed <= speedLimitTolerance.schoolSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > speedLimitTolerance.schoolSpeedLimitTolerance && speed <= criminalSpeedingLimit.schoolSpeedLimitCriminal){
        console.log ("speedingMessage");
    }
    else{
        console.log ("criminalSpeedingMessage");
    }
}
else if (roadType.standard){
    if (speed <= speedLimit.standardSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > speedLimit.standardSpeedLimit && speed <= speedLimitTolerance.standardSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > speedLimitTolerance.standardSpeedLimitTolerance && speed <= criminalSpeedingLimit.standardSpeedLimitCriminal){
        console.log ("speedingMessage");
    }
    else{
        console.log ("criminalSpeedingMessage");
    }
}
else if (roadType.national){
    if (speed <= speedLimit.nationalSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > speedLimit.nationalSpeedLimit && speed <= speedLimitTolerance.nationalSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > speedLimitTolerance.nationalSpeedLimitTolerance && speed <= criminalSpeedingLimit.nationalSpeedLimitCriminal){
        console.log ("speedingMessage");
    }
    else{
        console.log ("criminalSpeedingMessage");
    }
}

// WEBSITE LOGIC BELOW

const button = document.getElementById("registration-button");
const form = document.getElementById("registration-form");

/*
This adds an Event Listener to the button, which, on click, removes the class of hidden from the form.
I created the button as a constant above, then referenced it below, with the . notation. Rather than having to use the 
document.getElementById.
It now also changes the text to - This has changed!
*/
button.addEventListener("click", () => {
        form.classList.toggle("hidden");
        document.getElementById("main-heading").innerHTML = "This has changed!";
        console.log("The H1 text has now changed, and the REG entry field has become visible. If the REG entry box is not visibile, this button has been clicked multiple times.");
    }
);
    

//Testing an array creation

let textFood = "";
let textNum = "";

let myFood = [
    "sausages",
    "eggs",
    "butter",
    "milk"
]
let myNumbers = [
    1,
    2,
    3,
    4,
    5
]

for (let i = 0; i < myFood.length; i++){
    textFood = textFood + myFood[i];
    console.log(textFood);
};

for (let i = 0; i < myNumbers.length; i++){
    textNum = textNum = myNumbers[i];
    console.log(textNum);
}


















