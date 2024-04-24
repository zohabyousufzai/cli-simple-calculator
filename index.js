import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Percentage"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(+answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(+answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(+answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(+answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(+answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(+answer.firstNumber * 100 / answer.secondNumber);
}
else {
    console.log("Plese select a valid operator");
}
