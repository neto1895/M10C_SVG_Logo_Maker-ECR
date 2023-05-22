const shapes = require("./shapes");
class triangle extends shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.base = 200;
  }
    render() {return `<svg width="${this.base}" height="${this.base}" viewBox="0 0 ${this.base} ${this.base}" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="${this.base*0.5}, 0 ${this.base}, ${this.base} 0, ${this.base}" fill="${this.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`}
}
module.exports = triangle;