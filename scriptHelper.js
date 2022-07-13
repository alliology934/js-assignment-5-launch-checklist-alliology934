// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
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

    if (pilot === "" || 
        copilot === "" ||
        fuelLevel === "" ||
        cargoLevel === "") {
            alert("All fields are required!");
    };
    if (validateInput(pilot) === "Is a Number" ||
        validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
    };
    
    if (fuelLevel > 10000 &&
        cargoLevel < 10000) {
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch";

        const faultyItems = document.getElementById("faultyItems");
        faultyItems.style.visibility = "hidden" ;
    } else if (fuelLevel < 10000 &&
        cargoLevel > 10000) {
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";

        const faultyItems = document.getElementById("faultyItems");
        faultyItems.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
            </ol>` 
    } else if (fuelLevel < 10000) {
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";

        const faultyItems = document.getElementById("faultyItems");
        faultyItems.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>` 
    } else if (cargoLevel > 10000) {
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        faultyItems.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
            </ol>` 
    };
    


};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then( function(response) {  
            return response.json();       
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    const randomNumber = Math.random()*5;
    const roundedNumber = Math.round(randomNumber);
    return (planets[roundedNumber]);
};



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
