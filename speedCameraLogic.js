



// JavaScript test - SPEED CAMERA
// I want the camera to be able to check the speed + 10% to allow for human error, so I need to calculate the speed limit + 10%
alert("This is a page alert, please close to continue.");

let randomNum1;
let randomNum2;
let roadOutput;

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
    nationalSpeedLimitCriminal: speedLimit.nationalSpeedLimit * 1.3,
    standardSpeedLimitCriminal: speedLimit.standardSpeedLimit * 1.3,
    schoolSpeedLimitCriminal: speedLimit.schoolSpeedLimit * 1.3
};

const roadType = {
    school: "school",
    standard: "standard",
    national: "national"
}




// WEBSITE LOGIC BELOW

/*
This adds an Event Listener to the button, which, on click, removes the class of hidden from the form.
I created the button as a constant above, then referenced it below, with the . notation. Rather than having to use the 
document.getElementById.
It now also changes the text to - This has changed!
*/
const button = document.getElementById("registration-button");
const form = document.getElementById("registration-form","decision");
button.addEventListener("click", () => {
        form.classList.toggle("hidden");
        document.getElementById("main-heading").innerHTML = "This has changed!";
        console.log("The H1 text has now changed, and the REG entry field has become visible. If the REG entry box is not visibile, this button has been clicked multiple times.");
    }
);


    //SUBMIT Button + Random Number Logic & Output
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (event,randomNum1,randomNum2) => {
    //stops page reload
    event.preventDefault();
    //Gets REG value
    const vrn = document.getElementById("registration-plate").value;
    //Updates HTML to display REG value
    document.getElementById("reg-output-message").innerHTML = `Your REG is ${vrn}`; 
    console.log(vrn);
    //RandomNumber generator + HTML update
        randomNum1 = Math.floor(Math.random() * 120);
        randomNum2 = Math.floor(Math.random() * 120);
        console.log(randomNum1);
        console.log(randomNum2);
        
    
        if(randomNum2 >= 0 && randomNum2 <= speedLimitTolerance.schoolSpeedLimitTolerance){
            roadOutput = roadType.school;
        }
        else if(randomNum2 >= speedLimit.schoolSpeedLimit + 1 && randomNum2 <= speedLimitTolerance.standardSpeedLimitTolerance ){
            roadOutput = roadType.standard;
        }
        else{
            roadOutput = roadType.national;
        }
            document.getElementById("speeding-message").innerHTML = `Your speed was ${randomNum1} in a ${roadOutput} zone.`; 
        }
        );

    const decisionButton = document.getElementById("decision")
    decisionButton.addEventListener("click",(event,roadOutput) => {
            
           //Decides output to user
           event.preventDefault();

        let legalSpeedMessage = `You are not breaking any speed limits, keep driving safely!`;
        let toleranceSpeedMessage = `You are breaking the ${roadOutput} speed limit! Please slow down!`;
        let speedingMessage = `You are above the ${roadOutput} speed limit threshold. You will be receiving a fine through the post in due course. Please slow down and drive safely!`;
        let criminalSpeedingMessage = `You are now travelling at ${randomNum1} mph, which is within the criminal threshold for ${roadOutput} roads. You should expect a fine and possibly a driving ban. Please slow down and drive safely!`;

        if (roadOutput == roadType.school){
            if (randomNum1 <= speedLimit.schoolSpeedLimit){
                document.getElementById("decision-message").innerHTML = `${legalSpeedMessage}`;
            }
            else if (randomNum1 > speedLimit.schoolSpeedLimit && randomNum1 <= speedLimitTolerance.schoolSpeedLimitTolerance){
                document.getElementById("decision-message").innerHTML = `${toleranceSpeedMessage}`;
            }
            else if (speed > speedLimitTolerance.schoolSpeedLimitTolerance && randomNum1 <= criminalSpeedingLimit.schoolSpeedLimitCriminal){
                document.getElementById("decision-message").innerHTML = `${speedingMessage}`;
            }
            else{
                document.getElementById("decision-message").innerHTML = `${criminalSpeedingMessage}`;
            }
        }
        else if (roadOutput == roadType.standard){
            if (speed <= speedLimit.standardSpeedLimit){
            document.getElementById("decision-message").innerHTML = `${legalSpeedMessage}`;
            }
            else if (speed > speedLimit.standardSpeedLimit && randomNum1 <= speedLimitTolerance.standardSpeedLimitTolerance){
            document.getElementById("decision-message").innerHTML = `${speedingMessage}`;
            }
            else if (speed > speedLimitTolerance.standardSpeedLimitTolerance && randomNum1 <= criminalSpeedingLimit.standardSpeedLimitCriminal){
                document.getElementById("decision-message").innerHTML = `${speedingMessage}`;
            }
            else{
                document.getElementById("decision-message").innerHTML = `${criminalSpeedingMessage}`;
            }
        }
        else if (roadOutput == roadType.national){
            if (speed <= speedLimit.nationalSpeedLimit){
            document.getElementById("decision-message").innerHTML = `${legalSpeedMessage}`;
            }
            else if (speed > speedLimit.nationalSpeedLimit && randomNum1 <= speedLimitTolerance.nationalSpeedLimitTolerance){
            document.getElementById("decision-message").innerHTML = `${speedingMessage}`;
            }
            else if (speed > speedLimitTolerance.nationalSpeedLimitTolerance && randomNum1 <= criminalSpeedingLimit.nationalSpeedLimitCriminal){
                document.getElementById("decision-message").innerHTML = `${speedingMessage}`;
            }
            else{
                document.getElementById("decision-message").innerHTML = `${criminalSpeedingMessage}`;
            }
        }
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


















