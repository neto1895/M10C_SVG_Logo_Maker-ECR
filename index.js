// Packages needed for this application
const inquirer = require('inquirer'); // Package for prompting user input
const fs = require('fs'); // File system module
const colors = [
    { name: "red",  value: "red"},
    { name: "blueeee", value: "blueeee"},
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
        { type: "input", name: "textColor", message: "Select the text's color for your logo",},
        { type: "list",  name: "shape",     message: "Select the shape for your logo",        choices: shapes,},
        { type: "input", name: "shapeColor",message: "Select the shape's color for your logo",},
])}
const svgContent = ({text, textColor, shape, shapeColor}) =>{
    const userShape = require("./lib/"+shape);
    const logoElements = new userShape(text, textColor, shapeColor)
    const svgContent = logoElements.render();
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