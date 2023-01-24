const π = 3.141592;
const e = 2.718281;
let display = document.getElementById("display-value");
let solution = document.getElementById("solution-value");
let store = 0;

function Numbers(value) {
	if(solution.innerHTML != "")
	{
		display.innerHTML = solution.innerHTML + value;
		solution.innerHTML = "";
	}
	else {
		display.innerHTML += value;
	}
}

function Remove() {
	document.getElementById("equal").disabled = false;
	document.getElementById("trigo").selected = true;
	document.getElementById("fun").selected = true;
	display.innerHTML = "";
	solution.innerHTML = "";
}

function Equal() {
	solution.innerHTML = eval(display.innerHTML).toFixed(2);
}

function Backspace() {
	display.innerHTML = (display.innerHTML).substr(0, (display.innerHTML).length - 1);
}

function plus_Minus(value) {
	if (value == "modeX") {
		let a = (display.innerHTML).substr(0, 1);
		if (a == "-") {
			let mode = display.innerHTML;
			display.innerHTML = `|${mode}|`;
			solution.innerHTML = 0 - mode;
		}
		else {
			let mode = display.innerHTML;
			display.innerHTML = `|${display.innerHTML}|`;
			solution.innerHTML = mode;
		}
	}
	else {
		display.innerHTML = 0 - display.innerHTML;
	}
}

// Trigonometry Function
function Trigonometry() {
	let x = document.getElementById("Trigonometry").value;
	switch (x) {
		case "sin":
			if (document.getElementById('degtorad').innerText == 'DEG') {
				let rad1 = display.innerHTML;
				display.innerHTML = `sin (${rad1})`;
				solution.innerHTML = Math.sin(rad1 * (π / 180));
			}
			else {
				let rad1 = display.innerHTML;
				display.innerHTML = `sin (${rad1})`;
				console.log(rad1);
				solution.innerHTML = Math.sin(eval(rad1));
			}
			break;
		case "cos":
			if (document.getElementById('degtorad').innerText == 'DEG') {
				let rad2 = display.innerHTML;
				display.innerHTML = `cos (${rad2})`;
				solution.innerHTML = Math.cos(rad2 * (π / 180));
			}
			else {
				let rad2 = display.innerHTML;
				display.innerHTML = `cos (${rad2})`;
				solution.innerHTML = Math.cos(eval(rad2));
			}
			break;
		case "tan":
			if (document.getElementById('degtorad').innerText == 'DEG') {
				let rad3 = display.innerHTML;
				display.innerHTML = `tan (${rad3})`;
				solution.innerHTML = Math.tan(rad3 * (π / 180));
			}
			else {
				let rad3 = display.innerHTML;
				display.innerHTML = `tan (${rad3})`;
				solution.innerHTML = Math.tan(eval(rad3));
			}
			break;
		default:
			alert("Please Select any Trigonomerty Functions !! ");
	}
}


// Factorial Function
Factorial = (value) => {
	let num = display.innerHTML;
	let fact = 1;
	display.innerHTML += value;
	for (let i = 2; i <= num; i++) {
		fact = fact * i;
	}
	solution.innerHTML = fact;
}

// F - E Function
toExp = () => {
	let number = Number(display.innerHTML);
	solution.innerHTML = number.toExponential();
}

// Log Function
Log = (value) => {
	let log = display.innerHTML;
	if (value == "log") {
		display.innerHTML = `log ${log}`;
		solution.innerHTML = Math.log10(log);
	}
	else {
		display.innerHTML = `ln<sub>e</sub> ${log}`;
		solution.innerHTML = Math.log(log);
	}

}

// Function for MS Button
Memory = () => {
	document.getElementById('mr').disabled = false;
	document.getElementById('mc').disabled = false;
	if (solution.innerText == "") {
		store = eval(display.innerText);
	}
	else {
		store = eval(solution.innerText);
	}
}

// Function for MR Button
MemoryRead = () => {
	display.innerHTML = "";
	solution.innerHTML = "";
	display.innerText = store;
}

// Function for MC Button
MemoryClear = () => {
	display.innerHTML = "";
	solution.innerHTML = "";
	store = 0;
}

// Function for M+ Button
MemoryPlus = () => {
	if (solution.innerText == "") {
		store += eval(display.innerText);
	}
	else {
		store += eval(solution.innerText);
	}
}

// Function for M- Button
MemoryMinus = () => {
	if (solution.innerText == "") {
		store -= eval(display.innerText);
	}
	else {
		store -= eval(solution.innerText);
	}
}
// Deg to Rad Button Function
DegtoRad = () => {
	if (document.getElementById('degtorad').innerText == 'DEG') {
		document.getElementById('degtorad').innerText = 'RAD';
		document.getElementById('degtorad').value = 'RAD';
	}
	else {
		document.getElementById('degtorad').innerText = 'DEG';
		document.getElementById('degtorad').value = 'DEG';
	}

}

Pow = (value) => {
	if (value == "x^2") {
		solution.innerHTML = Math.pow(display.innerHTML, 2);
		display.innerHTML = `${display.innerHTML}<sup>2</sup>`;
	}
	else if (value == "10^x") {
		solution.innerHTML = Math.pow(10, display.innerHTML);
		display.innerHTML = `10<sup>${display.innerHTML}</sup>`;
	}
	else if (value == "x^0.5") {
		solution.innerHTML = Math.pow(display.innerHTML, 0.5);
		display.innerHTML = `<sup>2</sup>√${display.innerHTML}`;
	}
	else if (value == "e^x") {
		solution.innerHTML = Math.pow(e, display.innerHTML);
		display.innerHTML = `e<sup>${display.innerHTML}</sup>`;
	}
	else {
		solution.innerHTML = Math.pow(display.innerHTML, -1);
		display.innerHTML = `1/${display.innerHTML}`;
	}
}
