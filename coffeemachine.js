// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const espressoWater = 250;
const espressoMilk = 0;
const espressoBeans = 16;
const espressoMoney = 4;

const latteWater = 350;
const latteMilk = 75;
const latteBeans = 20;
const latteMoney = 7;

const cappuccinoWater = 200;
const cappuccinoMilk = 100;
const cappuccinoBeans = 12;
const cappuccinoMoney = 6;

let money = 550;
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let condition = true;

function printState() {
    console.log(`The coffee machine has:\n${water} ml of water
${milk} ml of milk\n${beans} g of coffee beans
${cups} disposable cups\n$${money} of money`);
    console.log();
}


while (true) {
    let action = input("Write action (buy, fill, take, remaining, exit):")

    if (action === "exit") {
        condition = false;
        break;
    }

    switch (action) {
        case "remaining":
            printState();
            break;
        case "buy":
            let typeCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
            switch (typeCoffee) {
                case "1":
                    if (cups - 1 < 0) {
                        console.log("Sorry, not enough cups!");
                        break;
                    } else if (water - espressoWater < 0) {
                        console.log("Sorry, not enough water!");
                        break;
                    } else if (milk - espressoMilk < 0) {
                        console.log("Sorry, not enough milk!");
                        break;
                    } else if (beans - espressoBeans < 0) {
                        console.log("Sorry, not enough coffee!");
                        break;
                    } else {
                        money += espressoMoney;
                        water -= espressoWater;
                        milk -= espressoMilk;
                        beans -= espressoBeans;
                        cups--;
                        console.log("I have enough resources, making you a coffee!");
                        break;
                    }
                case "2":
                    if (cups - 1 < 0) {
                        console.log("Sorry, not enough cups!");
                        break;
                    } else if (water - latteWater < 0) {
                        console.log("Sorry, not enough water!");
                        break;
                    } else if (milk - latteMilk < 0) {
                        console.log("Sorry, not enough milk!");
                        break;
                    } else if (beans - latteBeans < 0) {
                        console.log("Sorry, not enough coffee!");
                        break;
                    } else {
                        money += latteMoney;
                        water -= latteWater;
                        milk -= latteMilk;
                        beans -= latteBeans;
                        cups--;
                        console.log("I have enough resources, making you a coffee!");
                        break;
                    }
                case "3":
                    if (cups - 1 < 0) {
                        console.log("Sorry, not enough cups!");
                        break;
                    } else if (water - cappuccinoWater < 0) {
                        console.log("Sorry, not enough water!");
                        break;
                    } else if (milk - cappuccinoMilk < 0) {
                        console.log("Sorry, not enough milk!");
                        break;
                    } else if (beans - cappuccinoBeans < 0) {
                        console.log("Sorry, not enough coffee!");
                        break;
                    } else {
                        money += cappuccinoMoney;
                        water -= cappuccinoWater;
                        milk -= cappuccinoMilk;
                        beans -= cappuccinoBeans;
                        cups--;
                        console.log("I have enough resources, making you a coffee!");
                        break;
                    }
                case "back":
                    break;
                default:
                    console.log("Mistaken choice");
                    break;
            }
            break;
        case "fill":
            water += Number(input("Write how many ml of water you want to add:"));
            milk += Number(input("Write how many ml of milk you want to add:"));
            beans += Number(input("Write how many grams of coffee beans you want to add:"));
            cups += Number(input("Write how many disposable coffee cups you want to add:"));
            break;
        case "take":
            console.log(`I gave you $${money}`)
            console.log();
            money = 0;
            break;
        default:
            console.log("Mistaken choice");
            break;
    }
}