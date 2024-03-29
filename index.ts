import inquirer from "inquirer";


let answers = await inquirer.prompt([
    {
        type : "number",
        name : "firstNumber",
        message : "Enter Your First Nubmer",
    },
    {
        type : "number",
        name : "secondNumber",
        message : "Enter Your Second Nubmer",
    },
    {
        type : "list",
        name : "operator",
        choices : ["+","-", "*", "/"],
        message : "Select The Operator",
    },

]);

if (answers.operator === "+") {
    console.log(answers.firstNumber + answers.secondNumber);
}else if (answers.operator === "-") {
    console.log(answers.firstNumber - answers.secondNumber);
}else if (answers.operator === "*") {
    console.log(answers.firstNumber * answers.secondNumber);
}else if (answers.operator === "/") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else{
    console.log("you have Enter Invaild operator")
}