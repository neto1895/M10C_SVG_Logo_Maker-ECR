// Triangle.test.js
const Triangle = require("../triangle");

describe('Triangle', () => {
  it('should render the correct SVG for the triangle shape', () => {
    const shape = new Triangle();
    shape.setColor("red");
    shape.setText("ECR","blue")
    expect(shape.render()).toEqual(`<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 0 200, 200 0, 200" fill="red"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="80">ECR</text></svg>`);
  });
});
