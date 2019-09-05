////////////////////////////////////////////////
// ------------ Class Intervall ---------------//
////////////////////////////////////////////////

class class_Interval{
    constructor(color, refPos) {
        this.iColor= undefined;
        this.ref = refPos;
        this.setColor(color);
    }

    setColor(color) {
        if(color != undefined) // should never happen
          this.iColor=color.calcLABColor();
    }

    getColor(colorspace) {

      if(this.iColor==undefined)
      return undefined;

        switch (colorspace) {
          case "rgb":
          return this.iColor.calcRGBColor();
          break;
          case "hsv":
          return this.iColor.calcHSVColor();
          break;
          case "lab":
          case "de94":
          case "de94-ds":
          case "de2000":
          case "de2000-ds":
          return this.iColor.calcLABColor();
          break;
          case "din99":
          return this.iColor.calcDIN99Color();
          break;
          case "lab_rgb_possible":
          var ncolor = this.iColor.calcRGBColor();
          return ncolor.calcLABColor();
          break;
          case "din99_rgb_possible":
          var ncolor = this.iColor.calcRGBColor();
          return ncolor.calcDIN99Color();
          break;
          case "lch":
          return this.iColor.calcLCHColor();
          break;
          case "lch_rgb_possible":
          var ncolor = this.iColor.calcRGBColor();
          return ncolor.calcLCHColor();
          break;
        }
    }

    setRefPosition(pos) {
        this.ref = pos;
    }

    getRefPosition() {
      return this.ref;
    }

}
