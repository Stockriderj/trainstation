function getRandomNumber(min, max) {
	var num = null;
	while (num < min) {
		num = Math.round(Math.random() * max);
	}
	return num;
}

const passengerTrain = document.querySelector("#passenger-train");
const cargoTrain = document.querySelector("#cargo-train");

const trainSound1 = new Audio("sounds/train-1.wav");

const vehicle1 = document.querySelector("#vehicle-1");

// const busSound1 = new Audio("");

setInterval(() => {
    console.log("Passenger train is coming get off the trax");
    trainSound1.play();

	passengerTrain.style.background = "url('https://pluspng.com/img-png/trains-png-side-view-download-1000.png') center / contain no-repeat";
	passengerTrain.style.right = "-100%";
	setTimeout(() => {
		passengerTrain.style.background = "none";
		passengerTrain.style.right = "100%";
	}, 1400);
}, getRandomNumber(5000, 10000));

setInterval(() => {
    console.log("Vehicle 1 is coming get off the road");
    // busSound1.play();

	vehicle1.style.background = "url('https://pluspng.com/img-png/bus-png-side-view-bus-png-800.png') center / contain no-repeat";
	vehicle1.style.right = "100%";
	setTimeout(() => {
		vehicle1.style.background = "none";
		vehicle1.style.right = "-100%";
	}, 10000);
}, getRandomNumber(10000, 30000));

setInterval(() => {
    console.log("Cargo train is coming get off the trax");
    trainSound1.play();

	cargoTrain.style.background = "url('images/cargo-train.png') center / cover no-repeat";
	cargoTrain.style.right = "-100%";
	setTimeout(() => {
		cargoTrain.style.background = "none";
		cargoTrain.style.right = "100%";
	}, 1000);
}, getRandomNumber(5000, 20000));