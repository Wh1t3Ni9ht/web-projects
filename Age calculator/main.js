'use strict'

const chkBtn = document.getElementById('check-age-btn');
chkBtn.addEventListener('click', checkAge);

const inputValidation = document.getElementById('main');
inputValidation.addEventListener('input', validateDates);

// Globals
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const date = new Date().getDate();
let userYear = document.getElementById('year-input');
let userMonth = document.getElementById('month-input');
let userDate = document.getElementById('date-input');

function checkAge() {
	let result;
	const display = document.getElementById('result');
	// Notification css style
	const notification = document.getElementById('notification');
	notification.classList.add('notification');

	// Check if user's birth month is equal to current month
	if (userMonth.value == month) {
		// Check if user's birth date is greater than today's date
		if (userDate.value > date) {
			// If birth date is greater, it means his birthday did not come so  he is still the same age
			result = year - userYear.value - 1;
			display.innerHTML = "You are " + result + " years old";
		} else if (userDate.value < date) {
			// If birth date is less, it means his birthday came so he is one year older
			result = year - userYear.value;
			display.innerHTML = "You are " + result + " years old";
		} else {
			result = year - userYear.value;
			display.innerHTML = 'Happy Birthday!!!' + '<br />' + "You are " + result + " years old" ;
		}
	// if user's birth month is greater than today's month
	} else if (userMonth.value > month) {
		// it means his birthday did'nt come so  he is still the same age, no matter what the date is.
		result = year - userYear.value - 1;
		display.innerHTML = "You are " + result + " years old";
		// if user's birth month is less than today's month
	} else {
		// it means his birthday came so he is one year older, no matter what the date is.
		result = year - userYear.value;
		display.innerHTML = "You are " + result + " years old";
	}
}

function validateDates(){
	let errMsg = document.getElementById('error-msg');

	if (userYear.value > year || userYear.value < 1) {
		userYear.classList.remove('is-warning');
		userYear.classList.add('is-danger');
		errMsg.innerHTML = '<div class="column is-one-quarter is-offset-5 has-text-centered has-background-danger has-text-white">'+'Invalid year'+'</div>';
		chkBtn.setAttribute('disabled', '');
		return false
	}
	
	if (userMonth.value > 12 || userMonth.value < 1) {
		userMonth.classList.remove('is-warning');
		userMonth.classList.add('is-danger');
		errMsg.innerHTML = 'Invalid month';
		errMsg.innerHTML = '<div class="column is-one-quarter is-offset-5 has-text-centered has-background-danger has-text-white">'+'Invalid month'+'</div>';
		chkBtn.setAttribute('disabled', '');
		return false
	}

	if (userDate.value > 31 || userDate.value < 1) {
		userDate.classList.remove('is-warning');
		userDate.classList.add('is-danger');
		errMsg.innerHTML = 'Invalid date';
		errMsg.innerHTML = '<div class="column is-one-quarter is-offset-5 has-text-centered has-background-danger has-text-white">'+'Invalid date'+'</div>';
		chkBtn.setAttribute('disabled', '');
		return false
	}

	
	// Year css style
	userYear.classList.remove('is-danger');
	userYear.classList.add('is-warning');
	// Month css style
	userMonth.classList.remove('is-danger');
	userMonth.classList.add('is-warning');
	// Date css style
	userDate.classList.remove('is-danger');
	userDate.classList.add('is-warning');
	
	errMsg.innerHTML = '';
	
	chkBtn.removeAttribute('disabled', '')
	return true
}