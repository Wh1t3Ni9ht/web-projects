'use strict'
// Globals
const chkBtn = document.getElementById('chk-btn');
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const date = new Date().getDate();
// Result container element
const result = document.getElementById('result-container');
// Input fields
let userDate = document.getElementById('date-input'),
userMonth = document.getElementById('month-input'),
userYear = document.getElementById('year-input');

// Epmty input fields
userDate.value = '';
userMonth.value = '';
userYear.value = '';

function validateDates(e) {
    e.preventDefault();
    // Remove border color when input is empty
    userDate.style = 'border-color: none';
    userMonth.style = 'border-color: none';
    userYear.style = 'border-color: none';
    // Hide result element when input is empty
    result.setAttribute('hidden', '');
    // Remove result element red border
    result.classList.remove('result-container-error')
    
    // If invalid date
    if ( userDate.value !== '' && (userDate.value > 31 || userDate.value < 1)) {
        // Add red border
        userDate.style = 'border: 3px solid #fa4343;';
        // Add error msg
        result.innerHTML = 'Invalid date';
        // Show hidden result element with err msg
        result.removeAttribute('hidden', '');
        // Add red border to err msg
        result.classList.add('result-container-error');
        // Stop function after disabling check age btn
        return chkBtn.setAttribute('disabled', '');
    // If valid date
    } else if ( userDate.value < 32 && userDate.value > 0 ) {
        // Add green border to input field
        userDate.style = 'border: 3px solid #0ec708;';
        // Enable check age btn
        chkBtn.removeAttribute('disabled', '');
    }

    // If invalid month
    if ( userMonth.value !== '' && (userMonth.value > 12 || userMonth.value < 1)) {
        // Add red border
        userMonth.style = 'border: 3px solid #fa4343;';
        // Add error msg
        result.innerHTML = 'Invalid month';
        // Show hidden result element with err msg
        result.removeAttribute('hidden', '');
        // Add red border to err msg
        result.classList.add('result-container-error');
        // Stop function after disabling check age btn
        return chkBtn.setAttribute('disabled', '');
    // If valid month
    } else if ( userMonth.value < 13 && userMonth.value > 0 ) {
        // Add green border to input field
        userMonth.style = 'border: 3px solid #0ec708;';
        // Enable check age btn
        chkBtn.removeAttribute('disabled', '');
    }  

    // If invalid year
    if ( userYear.value !== '' && (userYear.value > year || userYear.value < 1850)) {
        // Add red border
        userYear.style = 'border: 3px solid #fa4343;';
        // Add error msg
        result.innerHTML = 'Invalid year';
        // Show hidden result element with err msg
        result.removeAttribute('hidden', '');
        // Add red border to err msg
        result.classList.add('result-container-error');
        // Stop function after disabling check age btn
        return chkBtn.setAttribute('disabled', '');
    // If valid year
    } else if ( userYear.value <= year && userYear.value > 0 ) {
        // Add green border to input field
        userYear.style = 'border: 3px solid #0ec708;';
        // Enable check age btn
        chkBtn.removeAttribute('disabled', '');
    }
}
document.getElementById('form-input').addEventListener('input', validateDates);

const checkAge = function checkAge(e) {
    e.preventDefault()
    let age = 0;
    // If any input field is empty
    if (!userYear.value || !userMonth.value || !userDate.value) {
        // Stop function and alert user
        return alert('Please, fill in all the fields to continue.');
    }
    // if user's birth month is greater than today's month
	if (userMonth.value > month) {
		// it means his birthday did'nt come so  he is still the same age, no matter what the date is.
		age = year - userYear.value- 1;
		result.innerHTML = `You are ${age} years old`;
		// if user's birth month is less than today's month
	} else if (userMonth.value < month) {
		// it means his birthday came so he is one year older, no matter what the date is.
		age = year - userYear.value;
		result.innerHTML = `You are ${age} years old`;
	} else {
        // Check if user's birth date is greater than today's date
        if (userDate.value > date) {
			// If birth date is greater, it means his birthday did not come so  he is still the same age
			age = year - userYear.value - 1;
			result.innerHTML = `You are ${age} years old`;
		} else if (userDate.value < date) {
			// If birth date is less, it means his birthday came so he is one year older
			age = year - userYear.value;
			result.innerHTML = `You are ${age} years old`;
		} else {
			age = year - userYear.value;
			result.innerHTML = `Happy Birthday!!! <br /> You are ${age} years old` ;
		}
    }
    // Show result element with user's age
    result.removeAttribute('hidden', '');
}
chkBtn.addEventListener('click', checkAge);