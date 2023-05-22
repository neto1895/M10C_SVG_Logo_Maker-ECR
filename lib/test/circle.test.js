const Circle = require("../circle");
describe('Circle', () => {
  it('should render the correct SVG for the circle shape', () => {
    const shape = new Circle("ECR","red","blue");
    shape.setColor("red");
    shape.setText("ECR","blue")
    expect(shape.render()).toEqual(`<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="red"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="80">ECR</text></svg>`);
  });
});
