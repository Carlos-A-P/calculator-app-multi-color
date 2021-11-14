import { setTheme } from "./functions/theme.js";

class Calculator {
	constructor(displayTextElement, solved) {
		this.displayTextElement = displayTextElement;
		this.solved = solved;
		this.clear();
	}

	clear() {
		this.display = "0";
		this.equation = "0";
		this.operation = undefined;
		solved = false;
	}

	delete() {
		//from index 0 all the way to the second to last number
		//chopping off the last one
		if (this.display.length === 1) {
			this.display = "0";
		} else {
			this.display = this.display.toString().slice(0, -1);
		}
		solved = false;
	}

	appendNumber(number) {
		const operationsValue = ["+", "-", "/", "x"];
		let displayValue = this.display;
		let length = displayValue.length;

		// once solved if the number is a integer clear the ouput else continue to add either a decimal or operation value
		if (solved && (operationsValue.includes(number) || number === ".")) {
			solved = false;
		} else if (solved && !operationsValue.includes(number)) {
			this.display = "";
			solved = false;
		}

		//if the last character is an operator, return
		if (
			operationsValue.includes(number) &&
			operationsValue.includes(displayValue[length - 1])
		)
			return;

		//if the output has a zero as an only character, cannot put two zeros in a row
		if (this.display.length === 1 && this.display === "0" && number === "0")
			return;

		// the only input if output only has one zero is either an operator or a decimal
		if (
			this.display.length === 1 &&
			this.display === "0" &&
			number !== "." &&
			!operationsValue.includes(number)
		) {
			this.display = "";
		}

		// if we have a dot already this function will return
		if (number === "." && this.display.includes(".")) return;

		this.display = this.display.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.display === "") this.operation = operation;
	}

	compute() {
		let string = this.display;
		let newString = string.replace(/x/g, "*");
		let answer = math.evaluate(newString);
		let result = `${Math.round(answer * 100) / 100}`;
		this.display = result;
	}

	updateDisplay() {
		this.displayTextElement.innerText = this.display;
	}
}

const displayTextElement = document.querySelector("[data-display]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
let solved = false;

const calculator = new Calculator(displayTextElement, solved);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", (button) => {
	calculator.compute();
	calculator.updateDisplay();
	solved = true;
});

allClearButton.addEventListener("click", (button) => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
	calculator.delete();
	calculator.updateDisplay();
});

// ==========theme

const inputs = document.querySelectorAll('input[name="theme"]');

// default theme
setTheme("dark");

inputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		setTheme(e.target.value);
	});
});
