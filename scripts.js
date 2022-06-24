// Write your JavaScript code here.
// Remember to pay attention to page loading!
function whenPageLoads () {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttlebackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const upButton = document.getElementById("Up");
    const downButton = document.getElementById("Down");
    const rightButton = document.getElementById("Right");
    const leftButton = document.getElementById("Left");
    const rocket = document.getElementById("rocket");

    takeoff.addEventListener("click", event =>{
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttlebackground.style.background = "blue";
            spaceShuttleHeight.innerHTML += 10000;
          }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttlebackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", event =>{
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttlebackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener("click", event =>{
        // rocket.shuttlebackground.position = absolute;
        rocket.shuttlebackground['top'] = 10px;
        rocket.shuttlebackground['right'] = 10px;
        }
    });
};

window.addEventListener("load", whenPageLoads);