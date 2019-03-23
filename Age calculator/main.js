var button = document.getElementById('button');
button.addEventListener('click', check);

var main = document.getElementById('main');
main.addEventListener('input', validDates);

// Globals
var result;
var display = document.getElementById('result');
var notification = document.getElementById('notification');
var D = new Date();
var month = D.getMonth() + 1;
var year = D.getFullYear();
var date = D.getDate();
var yearValue = document.getElementById('yearValue');
var monthValue = document.getElementById('monthValue');
var dateValue = document.getElementById('dateValue');

function check(e) {
	var yearValue = document.getElementById('yearValue');
	var monthValue = document.getElementById('monthValue');
	var dateValue = document.getElementById('dateValue');

	if (yearValue.classList.contains('is-danger')) {
		alert("Invalid year");
	} else if (monthValue.classList.contains('is-danger')) {
		alert('Invalid month');
	} else if (dateValue.classList.contains('is-danger')) {
		alert('Invalid date');
	} else {
		var yearValue = document.getElementById('yearValue').value;
		var monthValue = document.getElementById('monthValue').value;
		var dateValue = document.getElementById('dateValue').value;

		notification.classList.add('notification');
		// Check if user's birth month is equal to today's month
		if (monthValue == month) {
			// Check if user's birth date is greater than today's date
			if (dateValue > date) {
				// If birth date is greater, it means his birthday did'nt come so  he is still the same age
				result = year - yearValue - 1;
				display.innerHTML = "You are " + result + " years old";
			} else {
				// If birth date is less, it means his birthday came so he is one year older
				result = year - yearValue;
				display.innerHTML = "You are " + result + " years old";
			}
			// if user's birth month is greater than today's month
		} else if (monthValue > month) {
			// it means his birthday did'nt come so  he is still the same age, no matter what the date is.
			result = year - yearValue - 1;
			display.innerHTML = "You are " + result + " years old";
			// if user's birth month is less than today's month
		} else{
			// it means his birthday came so he is one year older, no matter what the date is.
			result = year - yearValue;
			display.innerHTML = "You are " + result + " years old";
		}
	}
}

function validDates(){
	if (yearValue.value > year) {
		yearValue.classList.remove('is-warning');
		yearValue.classList.add('is-danger');
	} else {
		if (yearValue.classList.contains('is-danger')) {
			yearValue.classList.remove('is-danger');
			yearValue.classList.add('is-warning');
		}
	}

	if (monthValue.value > 12) {
		monthValue.classList.remove('is-warning');
		monthValue.classList.add('is-danger');
	} else {
		if (monthValue.classList.contains('is-danger')) {
			monthValue.classList.remove('is-danger');
			monthValue.classList.add('is-warning');
		}
	}

	if (dateValue.value > 31) {
		dateValue.classList.remove('is-warning');
		dateValue.classList.add('is-danger');
	} else {
		if (dateValue.classList.contains('is-danger')) {
			dateValue.classList.remove('is-danger');
			dateValue.classList.add('is-warning');
		}
	}
}