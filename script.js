// Write your JavaScript code here!

window.addEventListener("load", function() {

    
    // const faultyItems = document.getElementById("faultyItems");
    // faultyItems.style.visibility = "visible";

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {  
        event.preventDefault();       

        const pilotInput = document.querySelector("input[name=pilotName]");
        const copilotInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");

        formSubmission(document, [], pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value);
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
    //    console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name , planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   
});