class shapes {
    constructor(text, textColor, shapeColor) {
      if (text.length > 3){
        throw new Error("'text' must contain maximum 3 characters.");
      }
      if (!(this.isValidColor(textColor))){
        throw new Error("'textColor' is not a valid color string, please enter a string or an hexadecimal value (e.g. #0b0013) ");
      }
      if (!(this.isValidColor(shapeColor))){
        throw new Error("'textColor' is not a valid color string, please enter a string or an hexadecimal value (e.g. #0b0013) ");
      }
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
    isValidColor(color) {
      // List of valid color strings.
      const validColorNames=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
      const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/; // Regular expression to validate color hex format (#RRGGBB or #RGB)
      if (hexColorRegex.test(color)) { // Check if color is a valid hex color
        return true;
      }    
      return validColorNames.includes(color.toLowerCase()); // Check if color is a valid named color
    }
    setColor(color){
      this.shapeColor = color;
    }
    setText(text, textColor){
      this.text = text;
      this.textColor = textColor;
    }
    render() {
      return "";
    }
  }
  module.exports = shapes;