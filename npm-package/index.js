var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(`${chalk.white.bgBlue.bold("Bold white text on a blue background")}`)
console.log(`${chalk.red.bgBlack.underline("Underlined red text on a black background")}`)
