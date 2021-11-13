import { setTheme } from "./functions/theme.js";

class Calculator {
	constructor(displayTextElement) {
		this.displayTextElement = displayTextElement;
		this.equationElement = equationElement;
		this.clear();
	}

	clear() {
		this.display = "0";
		this.equation = "0";
		this.operation = undefined;
	}

	delete() {
		//from index 0 all the way to the second to last number
		//chopping off the last one
		if (this.display.length === 1) {
			this.display = "0";
		} else {
			this.display = this.display.toString().slice(0, -1);
		}
	}

	appendNumber(number) {
		const operationsValue = ["+", "-", "/", "x"];
		let displayValue = this.display;
		let length = displayValue.length;
		if (
			operationsValue.includes(number) &&
			operationsValue.includes(displayValue[length - 1])
		)
			return;
		if (this.display.length === 1 && this.display === "0" && number === "0")
			return;
		if (this.display.length === 1 && this.display === "0" && number !== ".") {
			this.display = "";
		}
		// if we have a dot already this function will return
		if (number === "." && this.display.includes(".")) return;
		this.display = this.display.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.display === "") this.operation = operation;
		this.equationElement = this.display;
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
let equationElement;
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

const calculator = new Calculator(displayTextElement, equationElement);

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
