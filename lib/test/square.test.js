const Square = require("../square");
describe('Circle', () => {
  it('should render the correct SVG for the square shape', () => {
    const shape = new Square("ECR","red","blue");
    shape.setColor("red");
    shape.setText("ECR","blue")
    expect(shape.render()).toEqual(`<svg width="300" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="red"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="80">ECR </text></svg>`);
  });
});
