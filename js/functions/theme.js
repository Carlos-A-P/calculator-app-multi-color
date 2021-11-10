function setTheme(theme) {
	const body = document.querySelector("body");
	body.classList = theme;
}

// function setInitialTheme() {
// 	const darkInput = document.getElementById("dark");
// 	const lightInput = document.getElementById("light");

// 	const userPrefersDark =
// 		window.matchMedia &&
// 		window.matchMedia("(prefers-color-scheme: dark)").matches;
// 	const userPrefersLight =
// 		window.matchMedia &&
// 		window.matchMedia("(prefers-color-scheme: light)").matches;

// 	if (userPrefersLight) {
// 		lightInput.setAttribute("checked", "");
// 		setTheme("light");
// 	} else {
// 		darkInput.setAttribute("checked", "");
// 		setTheme("dark");
// 	}
// }

export { setTheme };
