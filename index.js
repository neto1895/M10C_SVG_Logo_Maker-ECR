// Packages needed for this application
const inquirer = require('inquirer'); // Package for prompting user input
const fs = require('fs'); // File system module
const { Console } = require('console');
const circle = require('./lib/circle');
const square = require('./lib/square');
const triangle = require('./lib/triangle');
const colors = [
    { name: "red",  value: "red"},
    { name: "blue", value: "blue"},
    { name: "green",value: "green"},
];
const shapes = [
    {name:"circle",  value:"circle"},
    {name:"square",  value:"square"},
    {name:"triangle",value:"triangle"},
]
const questions = () => {
    return inquirer.prompt([
        { type: "input", name: "text",      message: "Enter text for the logo (must not be more than 3 characters)."},
        { type: "list",  name: "textColor", message: "Select the text's color for your logo", choices: colors,},
        { type: "list",  name: "shape",     message: "Select the shape for your logo",        choices: shapes,},
        { type: "list",  name: "shapeColor",message: "Select the shape's color for your logo",choices: colors,},
])}
const svgContent = ({text, textColor, shape, shapeColor}) =>{
    const userShape = require("./lib/"+shape);
    let logoElements;
    switch(shape){
        case "circle":  logoElements = new userShape(text, textColor, shapeColor);   break;
        case "square":  logoElements = new userShape(text, textColor, shapeColor);   break;
        case "triangle":logoElements = new userShape(text, textColor, shapeColor); break;
        default:console.log("Something went wrong! Please try again.");
    }
    console.log(logoElements);
    const svgContent = logoElements.render();
    console.log(svgContent);
    
    writeToFile(svgContent);
}
function writeToFile(svgContent) {
    fs.writeFile("userLogo.svg",svgContent,(err) =>
    err ? console.log(err): console.log("Successfully created userLogo.svg")  
)}
function init(){
    questions()
    .then((answers) => {
        svgContent(answers);
    })
}
init(); // Function call to initialize app