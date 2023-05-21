// const renderSquare =({text, textColor, shape, shapeColor}) =>
// `
// <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="200" height="200" fill="${shapeColor}"/>
//     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80">${text} </text>
// </svg>
// `

// const renderCircle =({text, textColor, shape, shapeColor}) =>
// `
// <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="100" cy="100" r="100" fill="${shapeColor}"/>
//     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80">${text}</text>
// </svg>
// `

// const renderTriangle =({text, textColor, shape, shapeColor}) =>
// `
// <svg width="197" height="200" viewBox="0 0 197 200" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M98.5 0L196.794 199.5H0.206116L98.5 0Z" fill="${shapeColor}"/>
// <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80">${text}</text>
// </svg>
// `
// module.exports = {
//     renderSquare,
//     renderCircle,
//     renderTriangle
// }

class shapes {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
    setColor(color){
      this.shapeColor = color;
    }
    setText(text, textColor){
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
        return console.log("holi");
      }
    // printMetaData() {
    //   return `Created by ${this.authorName} on ${this.createdOn}`;
    // }
  }
  
  module.exports = shapes;