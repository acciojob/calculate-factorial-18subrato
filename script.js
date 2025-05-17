let value = parseInt(prompt('Enter a number'))

function factorial(value) {
	let fact = 1;
	for(let i=1;i<=value;i++){
	fact = fact * i;
	}
	alert(`The factorial of ${value} is ${fact}`);
} 

factorial(value);

