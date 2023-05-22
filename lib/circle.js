const shapes = require("./shapes");
class circle extends shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.radious = 100;
  }
    render() {return `<svg width="${this.radious*3}" height="${this.radious*2}" viewBox="0 0 ${this.radious*2} ${this.radious*2}" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="${this.radious}" cy="${this.radious}" r="${this.radious}" fill="${this.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`}
}
module.exports = circle;