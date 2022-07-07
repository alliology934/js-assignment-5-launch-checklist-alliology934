// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const pilotInput = document.querySelector("input[name=pilotName]");
        const copilotInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotInput.value === "" || 
            copilotInput.value === "" ||
            fuelLevelInput.value === "" ||
            cargoMassInput.value === "") {
            alert("All fields are required!");
        };
        if (validateInput(pilotInput.value) === "Is a Number" ||
            validateInput(copilotInput.value) === "Is a Number") {
                alert("Pilot Name and Co-pilot Name cannot be numbers.");
        };
        if (validateInput(fuelLevelInput.value) === "Not a Number" ||
            validateInput(cargoMassInput.value) === "Not a Number") {
                alert("Fuel Level and Cargo Mass must be numbers.");
            };
        // console.log(formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value));
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});