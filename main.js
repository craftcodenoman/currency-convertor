#! /usr/bin/env node    
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //BASE CURRENCY
    EURO: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.redBright("Enter from Currency"),
        choices: ["USD", "EURO", "GBP", "IND", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.redBright("Enter to Currency"),
        choices: ["USD", "EURO", "GBP", "IND", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.redBright("Enter your amount"),
    },
]);
let fromAmount = currency[answer.from]; // Exchange rate for the 'from' currency
let toAmount = currency[answer.to]; // Exchange rate for the 'to' currency
let amount = answer.amount;
let baseAmount = amount / fromAmount; // Convert the amount to USD (base currency)
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(convertedAmount));
