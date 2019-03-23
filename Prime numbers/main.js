function isPrime(n) {
    let res = document.getElementById('res');
	if (n<2) {
		res.innerHTML='Not prime';
	} else if(n == 2 || n == 3){
		res.innerHTML = 'Prime';
	} else if(n % 2 === 0){
		res.innerHTML='All even numbers other than 2 are not prime';
	} else{
		for (var i = 3; i < n; i++, i++) {
			if (n % i === 0) {
				res.innerHTML='Not prime';
				return
			}else{
				res.innerHTML='Prime';
			}
		}
	}
}