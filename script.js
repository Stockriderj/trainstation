function getRandomNumber(min, max) {
	var num = null;
	while (num < min) {
		num = Math.round(Math.random() * max);
	}
	return num;
}

const passengerTrain = document.querySelector("#passenger-train");
const cargoTrain = document.querySelector("#cargo-train");

const passengerTrainSound = new Audio("sounds/passenger-train-1.wav");
const cargoTrainSound = new Audio("sounds/cargo-train-1.wav")

const vehicle1 = document.querySelector("#vehicle-1");

const busSound = new Audio("sounds/bus.wav");
const carSound1 = new Audio("sounds/car1.wav");

setInterval(() => {
    console.log("Passenger train is coming get off the trax");
    passengerTrainSound.play();

	passengerTrain.style.backgroundImage = "url('https://pluspng.com/img-png/trains-png-side-view-download-1000.png')";
	passengerTrain.style.right = "-100%";
	setTimeout(() => {
		passengerTrain.style.backgroundImage = "none";
		passengerTrain.style.right = "100%";
	}, 1400);
}, getRandomNumber(5000, 10000));

setInterval(() => {
    console.log("Vehicle 1 is coming get off the road");

    // Generate skin and sound
    const vehicleID = getRandomNumber(1, 3);
    console.log(`Vehicle 1 ID: {vehicleID}`);

    // Generate Sound
    switch (vehicleID) {
        case 1:
        case 2:
            busSound.play();
            break;
        case 3:
            carSound1.play();
            break;
    }

    // Generate Skin
    switch(vehicleID) {
        case 1:
            vehicle1.style.backgroundImage = "url('https://pluspng.com/img-png/bus-png-side-view-bus-png-800.png')";
            break;
        case 2:
            vehicle1.style.backgroundImage = "url('http://pngimg.com/uploads/bus/bus_PNG8608.png')";
            break;
        case 3:
            vehicle1.style.backgroundImage = "url('https://www.dlf.pt/dfpng/maxpng/80-809472_car-elevation-png.png')";
    }

	vehicle1.style.right = "100%";
	setTimeout(() => {
		vehicle1.style.backgroundImage = "none";
		vehicle1.style.right = "-100%";
	}, 10000);
}, getRandomNumber(15000, 20000));

setInterval(() => {
    console.log("Cargo train is coming get off the trax");
    cargoTrainSound.play();

    // Generate skin
    const cargoTrainID = getRandomNumber(1, 2);
    cargoTrain.style.backgroundSize = "contain";

    switch (cargoTrainID) {
        case 1:
            cargoTrain.style.backgroundImage = "url('images/cargo-train.png')";
            cargoTrain.style.backgroundSize = "cover";
            break;
        case 2:
            cargoTrain.style.backgroundImage = "url('http://pngimg.com/uploads/trian/trian_PNG16644.png')";
            break;
    }

	cargoTrain.style.right = "-100%";
	setTimeout(() => {
		cargoTrain.style.backgroundImage = "none";
		cargoTrain.style.right = "100%";
	}, 1000);
}, getRandomNumber(10000, 20000));