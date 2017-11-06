////////////////////////////////////////////////
// ------------ Class DIN99 ---------------//
////////////////////////////////////////////////

// DIN99 Version o

class classColorDIN99{
    
      constructor(lValue, aValue, bValue) {
        this.l99Value = lValue;
        this.a99Value = aValue;
        this.b99Value = bValue; 
        this.kE = 1;
        this.kCH = 1;
      }
    
      getL99Value() {
        return this.l99Value;
      }
    
      getA99Value() {
        return this.a99Value;
      }
    
      getB99Value() {
        return this.b99Value;
      }
    
      setL99Value(newLVal) {
        this.lValue = newLVal;
      }
    
      setA99Value(newAVal) {
        this.aValue = newAVal;
      }
    
      setB99Value(newBVal) {
        this.bValue = newBVal;
      }
    
      calcRGBColor(){           
            var tmpLAB = this.calcLABColor();
            return tmpLAB.calcRGB();
      }
    
      calcHSVColor(){
        return new classColor_HSV(0,0,0);
      }

      calcLABColor(){
        var angle =  2*Math.PI/360*26;
        var lScale = 100/Math.log(139/100.0); // = 303.67
        var value_L =  (Math.exp(this.l99Value*this.kE/lScale)-1.0)/0.0039;
        var hef = Math.atan2(this.b99Value,this.a99Value);
        var h99 = hef-angle; 
        var C99 = Math.sqrt(Math.pow(this.a99Value,2)+Math.pow(this.b99Value,2));   
        var G = (Math.exp(0.0435*C99*this.kCH*this.kE)-1)/0.075;
        var e = G*Math.cos(h99);
        var f = G*Math.sin(h99);
        
        var value_A = e*Math.cos(angle)-(f/0.83)*Math.sin(angle);
        var value_B = e*Math.sin(angle)+(f/0.83)*Math.cos(angle);

        return new classColorCIELab(value_L,value_A,value_B);
      }
    
    };