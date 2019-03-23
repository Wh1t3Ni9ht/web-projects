var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;
var bmiRes = document.getElementById('bmiRes');
var bmrRes = document.getElementById('bmrRes');
var bfRes = document.getElementById('bfRes');
var male = document.getElementById('male');
var calcBtn = document.getElementById('calculate');
window.addEventListener('load', selectAgeList);
function selectAgeList() {
	var selectElement = document.getElementById('select');
	for(var i = 1; i <= 100; i++) {
		var optionElement = document.createElement("option");
		optionElement.innerHTML = i;
		selectElement.appendChild(optionElement);
		optionElement.setAttribute('value', i);
	}
}

calcBtn.addEventListener('click', init);

function init() {
	bmi();
	bmr();
}

function bmi() {
	weight = document.getElementById('weight').value;
	height = document.getElementById('height').value;
	bmiRes.innerHTML = "";
	var bmi = weight / height / height;
	bmiRes.innerHTML = ": " + bmi.toPrecision(3);
}

function bmr() {
	var e = document.getElementById('select');
	var age = e.options[e.selectedIndex].value;
	if (male.checked) {
		var bmr =  66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
		bmrRes.innerHTML = ': ' + bmr.toPrecision(4);
	}else {
		var bmr = 655 + 9.6 * weight + 1.8 * height * 100 - 4.7 * age;
		bmrRes.innerHTML = ': ' + bmr.toPrecision(4);
	}
}