# Calculator app

- Live website -(https://cpwd-calculator-app.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

### The challenge

Your users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

## My process

### Screenshot

![desktop-design-theme-1](https://user-images.githubusercontent.com/85038929/140664834-b2c75af8-ae79-40e5-838d-2d27b1349b18.jpg)

![desktop-design-theme-2](https://user-images.githubusercontent.com/85038929/140664839-4707d915-a004-4293-a2a8-e543a3ebfa62.jpg)

![desktop-design-theme-3](https://user-images.githubusercontent.com/85038929/140664842-d124d9e4-8409-4f9d-a840-29855ea1db7e.jpg)

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- JavaScript

### What I learned

- This was a fun challenge and I learned a lot about styling with Sass. I also used Javascript classes to set up the calculator. I also separated the theme files into another folder in order to add some organization into my project. I then imported the theme file into my script file in order to reduce src links in my HTML. I also wanted to focus more on accessibility this challenge by using proper HTML5 markup. I also tried to implement a feature where the user can navigate the keypad with the W,A,S,D keys but was unable to finish. Overall this is still a functional and accessible calculator and I want to improve it's features later on.

- I wanted to use a class for my calculator becuase I learned that classes encapsulate data and functionality
- I learned that classes are like cookie cutters/ template
- 'this' is a key word in javascript that is used for a variety of different purposes but in this instance, the 'this' keyword is a reference to the current object instance 'this.property'
- To continue the 'this' functionality, from what I understand it's basically saying those variables don't technically exist but in theory if I were to use this template to make an actual instance of a calculator these variables will do certain tasks

```JavaScript
class Calculator {
  // this contructor takes inputs and output for this calculator
  // I passed these two variables because the calculator needs to know where to display the text and I figured it also needs to change if the equation was solved or not
	constructor(displayTextElement, solved) {
    //this is the theoretical object instance
		this.displayTextElement = displayTextElement;
		this.solved = solved;
		this.clear();
	}

 //code code for calculator functionality
}
```

- I then used the template of my calculator by declaring it in a variable
- This is the real object instance declared

```JavaScript
// new means to create an object
const calculator = new Calculator(displayTextElement, solved);

keyButtons.forEach((button) => {
	button.addEventListener("click", () => {
//EX: calculator.appendNumber() is a function of the object
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});
```

### Useful resources

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
