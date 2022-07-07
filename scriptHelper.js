// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
};

function validateInput(testInput) {
   
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    };

};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    // const faultyItems = document.getElementById("faultyItems");
    // return "TESTING!!!!!!";
    // if (fuelLevel < 10000) {
    //     faultyItems.visible = true;
    //     faultyItems.innerHTML = `
    //     <div  id="faultyItems" data-testid="faultyItems">
    //     <ol>
    //         <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
    //         <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
    //         <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
    //         <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
    //     </ol>
    // </div>
    //     `
    // };

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
