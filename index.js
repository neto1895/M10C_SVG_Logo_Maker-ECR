// Packages needed for this application
const inquirer = require('inquirer'); // Package for prompting user input
const fs = require('fs'); // File system module


const colors = [
    { name: "red",  value: "red"},
    { name: "blue", value: "blue"},
    { name: "green", value: "green"},
];

const questions = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            name: "text",
            message: "Enter text for the logo (must not be more than 3 characters)."
        },
        {
            type: "list",
            name: "textColor",
            message: "Select the text's color for your logo",
            choices: colors,

        },
        {
            type: "list",
            name: "shape",
            message: "Select the shape for your logo",
            choices: [
                {
                    name: "circle", 
                    value: "cirlce"
                },
                {
                    name: "square", 
                    value: "square"
                },
                {
                    name: "triangle", 
                    value: "triangle"
                },
                ],
        },
        {
            type: "list",
            name: "shapeColor",
            message: "Select the shape's color for your logo",
            choices: colors,
        },

    ])
}