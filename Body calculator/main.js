'use strict';
//  Create age list (1-100) for select element
(function() {
  for (let i = 1; i <= 100; ++i) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    const text = document.createTextNode(i);
    option.appendChild(text);
    document.getElementById('form-select').appendChild(option);
	}
	
	document.getElementById('weight-input').value = ''
	document.getElementById('height-input').value = ''
})();

const calculate = function calculate(e) {
	e.preventDefault();
	// constants
	const
	weight = Number(document.getElementById('weight-input').value),
	height = Number(document.getElementById('height-input').value),
	age = document.getElementById('form-select').value,
	radioContainer = document.getElementById('radio-container');
	const bmiRes = document.getElementById('bmi-result');
	const bmrRes = document.getElementById('bmr-result');
	// Variables
	let
	gender,
	bmi = weight / height / height,
	bmr;
  // Set 'gender' to gender variable if it's checked
  for (let i = 0; i < radioContainer.children.length; i++) {
    const element = radioContainer.children[i];
    if (element.type === 'radio' && element.checked === true) {
      gender = element.value;
    }
  }

  if (gender === 'male') {
		bmr = 66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
  } else if (gender === 'female') {
		bmr = 655 + 9.6 * weight + 1.8 * height * 100 - 4.7 * age;
	}

	bmiRes.innerHTML = `Your BMI is ${Math.round(bmi)}`;
	bmrRes.innerHTML = `Your BMR is ${Math.round(bmr)}`
};
document.querySelector('form').addEventListener('submit', calculate);
