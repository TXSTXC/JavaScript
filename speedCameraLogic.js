



// JavaScript test - SPEED CAMERA
// I want the camera to be able to check the speed + 10% to allow for human error, so I need to calculate the speed limit + 10%
alert("This is a page alert, please close to continue.");

let speed = 31;

const nationalSpeedLimit = 70;
const standardSpeedLimit = 30;
const schoolSpeedLimit = 20;

const speedTolerance = 0.1; // 10% tolerance

const nationalSpeedLimitTolerance = nationalSpeedLimit + (nationalSpeedLimit * speedTolerance);
const standardSpeedLimitTolerance = standardSpeedLimit + (standardSpeedLimit * speedTolerance);
const schoolSpeedLimitTolerance = schoolSpeedLimit + (schoolSpeedLimit * speedTolerance);
const criminalSpeedingLimit = {
    nationalSpeedLimitCriminal: nationalSpeedLimit * 0.3,
    standardSpeedLimitCriminal: standardSpeedLimit * 0.3,
    schoolSpeedLimitCriminal: schoolSpeedLimit * 0.3
};

let roadType = "school"; // This can be "national", "standard", or "school"

let legalSpeedMessage = "You are not breaking any speed limits, keep driving safely!";
let toleranceSpeedMessage = "You are breaking the " + roadType + " speed limit! Please slow down!";
let speedingMessage = "You are above the " + roadType + " speed limit threshold of " + schoolSpeedLimitTolerance + ". You will be receiving a fine through the post in due course. Please slow down and drive safely!";
let criminalSpeedingMessage = "You are now travelling at " + speed +"which is within the criminal threshold for " + roadType + "roads. You should expect a fine and possibly a driving ban. Please slow down and drive safely!";

if (roadType === "school"){
    if (speed <= schoolSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > schoolSpeedLimit && speed <= schoolSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > schoolSpeedLimitTolerance && speed <= criminalSpeedingLimit.schoolSpeedLimitCriminal){
        console.log ("speedingMessage");
    }
    else{
        console.log ("criminalSpeedingMessage");
    }
}
else if (roadType === "standard"){
    if (speed <= standardSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > standardSpeedLimit && speed <= standardSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > standardSpeedLimitTolerance && speed <= criminalSpeedingLimit.standardSpeedLimitCriminal){
        console.log ("speedingMessage");
    }
    else{
        console.log ("criminalSpeedingMessage");
    }
}
else if (roadType === "national"){
    if (speed <= nationalSpeedLimit){
    console.log("legalSpeedMessage");
    }
    else if (speed > nationalSpeedLimit && speed <= nationalSpeedLimitTolerance){
    console.log("toleranceSpeedMessage");
    }
    else if (speed > nationalSpeedLimitTolerance && speed <= criminalSpeedingLimit.nationalSpeedLimitCriminal){
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
    }
);
    
















