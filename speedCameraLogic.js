



// JavaScript test - SPEED CAMERA
// I want the camera to be able to check the speed + 10% to allow for human error, so I need to calculate the speed limit + 10%
//alert("This is a page alert, please close to continue.");





const speedLimit = {
    nationalSpeedLimit: 70,
    standardSpeedLimit: 30,
    schoolSpeedLimit: 20
}
const roadType = {
    school: "school",
    standard: "standard",
    national: "national"
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

const roadRules = {
    school: {
        tolerance: speedLimit.schoolSpeedLimit * 1.1,
        criminal: speedLimit.schoolSpeedLimit * 1.3,
    },
    standard: {
        tolerance: speedLimit.standardSpeedLimit * 1.1,
        criminal: speedLimit.standardSpeedLimit * 1.3,
    },
    national: {
        tolerance: speedLimit.nationalSpeedLimit * 1.1,
        criminal: speedLimit.nationalSpeedLimit * 1.3,
    }
};

// WEBSITE LOGIC BELOW

/*
This adds an Event Listener to the button, which, on click, removes the class of hidden from the form.
I created the button as a constant above, then referenced it below, with the . notation. Rather than having to use the 
document.getElementById.
It now also changes the text to - This has changed!
*/
const button = document.getElementById("registration-button");
const form = document.getElementById("registration-form");
button.addEventListener("click", () => {
        form.classList.toggle("hidden");
        //document.getElementById("main-heading").innerHTML = "This has changed!";
        //console.log("The H1 text has now changed, and the REG entry field has become visible. If the REG entry box is not visibile, this button has been clicked multiple times.");
    }
);

    //SUBMIT Button + Random Number Logic & Output

    let randomNum1;
    let randomNum2;
    let roadOutput;


    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", (event) => {
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
        
        if(randomNum2 >= 0 && randomNum2 <= roadRules.school.tolerance){
            roadOutput = roadType.school;
        }
        else if(randomNum2 >= speedLimit.schoolSpeedLimit + 1 && randomNum2 <= roadRules.standard.tolerance){
            roadOutput = roadType.standard;
        }
        else{
            roadOutput = roadType.national;
        }
            document.getElementById("speeding-message").innerHTML = `Your speed was ${randomNum1} in a ${roadOutput} zone.`; 
        }
        );
        
    const decisionButton = document.getElementById("decision")
    decisionButton.addEventListener("click",(event) => {
            
           //Decides output to user
           event.preventDefault();

        let legalSpeedMessage = `You are not breaking any speed limits, keep driving safely!`;
        let toleranceSpeedMessage = `You are breaking the ${roadOutput} speed limit! Please slow down!`;
        let speedingMessage = `You are above the ${roadOutput} speed limit threshold. You will be receiving a fine through the post in due course. Please slow down and drive safely!`;
        let criminalSpeedingMessage = `You are now travelling at ${randomNum1} mph, which is within the criminal threshold for ${roadOutput} roads. You should expect a fine and possibly a driving ban. Please slow down and drive safely!`;

        function speedMessageFunction(n) {
            document.getElementById("decision-message").innerHTML = `${n}`;
        }


        if (roadOutput == roadType.school){
            if (randomNum1 <= speedLimit.schoolSpeedLimit){
                speedMessageFunction(legalSpeedMessage);
            }
            else if (randomNum1 > speedLimit.schoolSpeedLimit && randomNum1 <= roadRules.school.tolerance){
                speedMessageFunction(toleranceSpeedMessage);
            }
            else if (randomNum1 > roadRules.school.tolerance && randomNum1 <= roadRules.school.criminal){
                speedMessageFunction(speedingMessage);
            }
            else{
                speedMessageFunction(criminalSpeedingMessage);
            }
        }
        else if (roadOutput == roadType.standard){
            if (randomNum1 <= speedLimit.standardSpeedLimit){
                speedMessageFunction(legalSpeedMessage);    
            }
            else if (randomNum1 > speedLimit.standardSpeedLimit && randomNum1 <= roadRules.standard.tolerance){
                speedMessageFunction(toleranceSpeedMessage);
            }
            else if (randomNum1 > speedLimitTolerance.standardSpeedLimitTolerance && randomNum1 <= roadRules.standard.criminal){
                speedMessageFunction(speedingMessage);
            }
            else{
                speedMessageFunction(criminalSpeedingMessage);
            }
        }
        else if (roadOutput == roadType.national){
            if (randomNum1 <= speedLimit.nationalSpeedLimit){
                speedMessageFunction(legalSpeedMessage);
            }
            else if (randomNum1 > speedLimit.nationalSpeedLimit && randomNum1 <= roadRules.standard.tolerance){
                speedMessageFunction(toleranceSpeedMessage);
            }
            else if (randomNum1 > roadRules.standard.tolerance && randomNum1 <= roadRules.national.criminal){
                speedMessageFunction(speedingMessage);
            }
            else{
                speedMessageFunction(criminalSpeedingMessage);
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


















