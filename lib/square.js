const shapes = require("./shapes");
class square extends shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.side = 200;
  }
    render() {return `<svg width="${this.side*1.5}" height="${this.side}" viewBox="0 0 ${this.side} ${this.side}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="${this.side}" height="${this.side}" fill="${this.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text} </text></svg>`
    }
}
module.exports = square;