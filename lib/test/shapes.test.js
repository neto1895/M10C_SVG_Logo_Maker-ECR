const Shapes = require("../shapes.js");
describe('Shapes', () => {
  // Test to verify that the Shapes class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Shapes class', () => {
      const shapes = new Shapes("ECR","red","blue");
      expect(shapes).toBeInstanceOf(Shapes);
    });
  });
  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = "ECR";
      const shapes = new Shapes("ECR","red","blue");
      expect(shapes.text).toBe(text);
    });
  });
  // Test to verify that printMetaData() returns the correct data.
  describe('render() method', () => {
    it('should return an empty string', () => {
      const shapes = new Shapes("ECR","red","blue");
      expect(shapes.render()).toBe("");
    });
  });
});
