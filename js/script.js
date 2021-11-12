import { setTheme } from "./functions/theme.js";

const display = document.querySelector("[data-display]");
const keys = document.querySelectorAll("[data-button]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");

keys.forEach((key) => {
	key.addEventListener("click", () => {
		const keyValue = key.textContent;
		const displayValue = display.textContent;
		let equation = "";

		// is this an operator keyValue
		if (key.classList.contains("operator")) {
			const operationsValue = ["+", "-", "/", "x"];
			let length = displayValue.length;

			console.log(displayValue[2], displayValue.length);

			if (operationsValue.includes(displayValue[length - 1])) return;
		}

		// is this a number key?
		// if display is only 0 then replace
		if (
			key.classList.contains("number") ||
			key.classList.contains("operator")
		) {
			if (displayValue === "0") {
				display.textContent = keyValue;
				equation = keyValue;
				// else update display and add key value
			} else {
				display.textContent = displayValue + keyValue;
				if (keyValue === "x") {
					equation = displayValue + "*";
				} else {
					equation = displayValue + keyValue;
				}
			}
		}

		// clear display
		if (key.classList.contains("reset-btn")) {
			display.textContent = "0";
		}

		// delete string
		if (key.classList.contains("delete")) {
			console.log(display.textContent.length);
			if (display.textContent.length === 1) {
				display.textContent = "0";
			} else {
				display.textContent = display.textContent.toString().slice(0, -1);
			}
		}

		if (key.classList.contains("equals-btn")) {
			display.textContent = eval(equation);
		}
	});
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
