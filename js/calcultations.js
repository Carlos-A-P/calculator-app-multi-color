class Calculator {
	//where to display our display text
	constructor(displayTextElement) {
		this.displayTextElement = displayTextElement;
		// call function as soon as we clear to set default values
		this.clear();
	}

	// clearing all of the numbers
	clear() {
		this.display = "0";
	}

	// delete the number
	delete() {
		//from index 0 all the way to the second to last number
		//chopping off the last one
		if (this.display.length === 1) {
			this.display = "0";
		} else {
			this.display = this.display.toString().slice(0, -1);
		}
	}

	// add clicked number to the screen
	appendNumber(number) {
		if (this.display.length === 1 && this.display === "0" && number === "0")
			return;
		if (this.display.length === 1 && this.display === "0" && number !== ".") {
			this.display = "";
		}
		// if we have a dot already this function will return
		if (number === "." && this.display.includes(".")) return;
		// adds more numbers to the current operand
		this.display = this.display.toString() + number.toString();
	}

	// this is what is going to happen every time the user clicks on a operation
	chooseOperation(operation) {
		//if the current operand is empty don't return any further code
		// if (this.display !== "0") {
		// 	this.compute();
		// } else {
		// 	return;
		// }

		//set the operation
		this.operation = operation;
		//cycle
		// this.previousOperand = this.display;
		// this.display = "";
	}

	compute() {
		let computation;
		// const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.display);
		//if there is no number just cancel the function
		if (isNaN(current)) return;
		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "÷":
				computation = prev / current;
				break;
			//"if else" none of these are valid just return the function
			default:
				return;
		}
		//display equals the result of our computation
		this.display = computation;
		this.operation = undefined;
	}

	//properly display number with commas, any changes here will be displays in
	//current and previous operand
	// getDisplayNumber(number) {
	// 	//we want to be able to split that string the decimal character
	// 	const stringNumber = number.toString();
	// 	// get the integer numbers
	// 	const integerDigits = parseFloat(stringNumber.split(".")[0]);
	// 	const decimalDigits = stringNumber.split(".")[1];
	// 	let integerDisplay;
	// 	//if user input nothing or just decimal place
	// 	if (isNaN(integerDigits)) {
	// 		integerDisplay = "";
	// 	} else {
	// 		//never can be decimal places after this
	// 		integerDisplay = integerDigits.toLocaleString("en", {
	// 			maximumFractionDigits: 0,
	// 		});
	// 	}
	// 	if (decimalDigits != null) {
	// 		return `${integerDisplay}.${decimalDigits}`;
	// 	} else {
	// 		return integerDisplay;
	// 	}
	// }

	updateDisplay() {
		this.displayTextElement.innerText = this.display;
	}
}

const calculator = new Calculator(displayTextElement);

// adding event listener to all of our buttons
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log(button.innerHTML);
		//append number within the text of button to use it
		calculator.appendNumber(button.innerText);
		// update our display every time we click on a button
		calculator.updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		//append number within the text of button to use it
		calculator.appendNumber(button.innerText);
		//choose operation within the text of button to use it
		calculator.chooseOperation(button.innerText);
		// update our display every time we click on a button
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", (button) => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
	calculator.delete();
	calculator.updateDisplay();
});