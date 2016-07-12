var heatOn = false;
var airOn = false;

var currentTemp;
var targetTemp;

currentTemp = getCurrentTemp();
targetTemp = getTargetTemp();

setInterval(runTemp, 5000);

function runTemp() {
	if (currentTemp < targetTemp) {
		turnOnHeat();
	}
	else if (currentTemp == targetTemp){
		turnOffHeat();
		turnOffAir();
	}
	else if(currentTemp > targetTemp ){
		turnOnAir();
	}
	runHVAC();
}

document.getElementById("lowerTemp").onclick = lowerTemp;
document.getElementById("raiseTemp").onclick = raiseTemp;

function lowerTemp() {
	targetTemp = targetTemp - 1;
	document.getElementById("targetTemp").innerHTML = targetTemp;
}

function raiseTemp() {
	targetTemp = targetTemp + 1;
	document.getElementById("targetTemp").innerHTML = targetTemp;
}

function turnOnHeat(){
	document.body.style.backgroundColor = "red";
	document.getElementById("label").innerHTML = "Heat is on.";
	heatOn = true;
	airOn = false;
}

function turnOnAir(){
	document.body.style.backgroundColor = "blue";
	document.getElementById("label").innerHTML = "Air is on.";
	heatOn = false;
	airOn = true;
}

function turnOffHeat(){
	document.body.style.backgroundColor = "black";
	document.getElementById("label").innerHTML = "Nothing is on.";
	heatOn = false;
}

function turnOffAir(){
	document.body.style.backgroundColor = "black";
	document.getElementById("label").innerHTML = "Nothing is on.";
	airOn = false;
}


function getCurrentTemp(){
	return parseInt(document.getElementById("currentTemp").innerHTML);
}

function getTargetTemp() {
	return parseInt(document.getElementById("targetTemp").innerHTML);
}

function runHVAC() {
	if (heatOn) {
		currentTemp = currentTemp + 1;
	}
	else if(airOn) {
		currentTemp = currentTemp - 1;			
	}
	document.getElementById("currentTemp").innerHTML = currentTemp;			
}