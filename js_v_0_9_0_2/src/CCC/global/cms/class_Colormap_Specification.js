class class_CMS {

  constructor() {
    this.name = "Customer Colormap";
    this.interpolationSpace = "lab";
    this.interpolationType = "linear"; // linear or spline or optimization

    this.colorNaN = new class_Color("rgb", 0, 0, 0);
    this.colorBelow = new class_Color("rgb", 0, 0, 0);
    this.colorAbove = new class_Color("rgb", 0, 0, 0);

    this.keyArray = [];
    this.intervalArray = [];
    this.spline_tArray = [0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25 // 0 till 0.25 fine
      , 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7,
      0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975
    ]; // 0.75 till 1.0 fine*/; //[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9];


    /// Probes
    this.probeSetArray = [];
  }

  deleteReferences() {
    delete this.name;
    delete this.interpolationSpace;
    delete this.interpolationType;

    this.colorNaN.deleteReferences();
    this.colorNaN = null;
    this.colorBelow.deleteReferences();
    this.colorBelow = null;
    this.colorAbove.deleteReferences();
    this.colorAbove = null;

    for (var i = this.keyArray.length - 1; i >= 0; i--) {
      this.keyArray[i].deleteReferences();
      this.keyArray[i] = null;
    }
    delete this.keyArray;

    for (var i = this.intervalArray.length - 1; i >= 0; i--) {
      for (var j = this.intervalArray[i].length - 1; j >= 0; j--) {
        this.intervalArray[i][j].deleteReferences();
        this.intervalArray[i][j] = null;
      }
    }
    delete this.intervalArray;


    for (var i = this.probeSetArray.length - 1; i >= 0; i--) {
      this.probeSetArray[i].deleteReferences();
      this.probeSetArray[i] = null;
    }
    delete this.probeSetArray;

  }

  clearIntervalColors() {
    for (var i = this.intervalArray.length - 1; i >= 0; i--) {
      for (var j = this.intervalArray[i].length - 1; j >= 0; j--) {
        this.intervalArray[i][j].deleteReferences();
        this.intervalArray[i][j] = null;
      }
    }
    this.intervalArray = [];

    for (var keyIndex = 0; keyIndex < this.keyArray.length - 1; keyIndex++) {
      this.intervalArray.push([]);
    }
  }

  clear() {
    for (var i = this.keyArray.length - 1; i >= 0; i--) {
      this.keyArray[i].deleteReferences();
      this.keyArray[i] = null;
    }
    this.keyArray = [];

    for (var i = this.intervalArray.length - 1; i >= 0; i--) {
      for (var j = this.intervalArray[i].length - 1; j >= 0; j--) {
        this.intervalArray[i][j].deleteReferences();
        this.intervalArray[i][j] = null;
      }
    }
    this.intervalArray = [];

    for (var i = this.probeSetArray.length - 1; i >= 0; i--) {
      this.probeSetArray[i].deleteReferences();
      this.probeSetArray[i] = null;
    }
    this.probeSetArray = [];

  }

  searchForContinuousSections(startKey, endKey) {

    var continuousSections = [];
    var beforeConstant = false;
    //var startKey = 0;
    if (this.getKeyType(startKey) === "twin key" || this.getKeyType(startKey) === "left key")
      beforeConstant = true;

    for (var i = startKey; i <= endKey; i++) {

      switch (this.getKeyType(i)) {
        case "nil key":
          beforeConstant = true;
          break;
        case "left key":
          if (!beforeConstant) {
            var tmpStart = startKey;
            var tmpEnd = i;
            continuousSections.push([tmpStart, tmpEnd])
          }
          startKey = i;
          beforeConstant = true;
          break;
        case "twin key":
          if (!beforeConstant) {
            var tmpStart = startKey;
            var tmpEnd = i;
            continuousSections.push([tmpStart, tmpEnd])
          }
          startKey = i;
          beforeConstant = false;
          break;
        default:
          if (beforeConstant) {
            startKey = i;
            beforeConstant = false;
          } else {
            if (i == endKey) {
              var tmpStart = startKey;
              var tmpEnd = i;
              continuousSections.push([tmpStart, tmpEnd])
            }
          }

      }

    }

    return continuousSections;
  }

  //********************************************************************************//
  //***************************   Interval functions   *****************************//
  //********************************************************************************//
  calcExportSampling(numberIntervals){

  }

  getIntervalLength(keyBandIndex){
    if(keyBandIndex<this.intervalArray.length)
      return this.intervalArray[keyBandIndex].length;
    else
      return 0;
  }

  getIntervalColor(keyBandIndex,index,colorspace){
        return this.intervalArray[keyBandIndex][index].getColor(colorspace);
    }

  getIntervalRef(keyBandIndex,index){
        return this.intervalArray[keyBandIndex][index].getRefPosition();
    }

  getSplineColors(keyIndex1, keyIndex2) {

    // no interpolation needed for constand bands
    if (this.getKeyType(keyIndex1) == "nil key" || this.getKeyType(keyIndex1) == "left key")
      return [undefined, undefined, undefined, undefined];

    if (this.interpolationSpace == "de94" || this.interpolationSpace == "de2000")
      return [undefined, undefined, undefined, undefined];

    var existingC1 = true;
    var existingC3 = true;

    if (this.getKeyType(keyIndex1) == "right key" || this.getKeyType(keyIndex1) == "twin key") {
      existingC1 = false;
    }

    if (this.getKeyType(keyIndex2) == "left key" || this.getKeyType(keyIndex2) == "twin key" || keyIndex2 == this.keyArray.length - 1) { // this.keyArray.length-1 is alwas a left key. For the push creation this don't have to be.
      existingC3 = false;
    }

    var c0 = undefined; //
    var c1 = undefined; //
    var c2 = undefined; //
    var c3 = undefined; //

    if (!existingC1)
      c0 = new class_Color_RGB(0, 0, 0); // every value is zero and has no influence
    else
      c0 = this.getRightKeyColor(keyIndex1 - 1, this.interpolationSpace);

    c1 = this.getRightKeyColor(keyIndex1, this.interpolationSpace);

    c2 = this.getLeftKeyColor(keyIndex2, this.interpolationSpace);

    if (!existingC3)
      c3 = new class_Color_RGB(0, 0, 0); // every value is zero and has no influence
    else {
      c3 = this.getLeftKeyColor(keyIndex2 + 1, this.interpolationSpace);
    }

    return [c0, c1, c2, c3];

  }

  //********************************************************************************//
  //***************************     Get functions      *****************************//
  //********************************************************************************//

  getInterpolationType() {
    return this.interpolationType;
  }

  getIntervalLength(keyBandIndex) {
    if (keyBandIndex < this.intervalArray.length)
      return this.intervalArray[keyBandIndex].length;
    else
      return 0;
  }

  getIntervalColor(keyBandIndex, index, colorspace) {
    return this.intervalArray[keyBandIndex][index].getColor(colorspace);
  }

  getIntervalRef(keyBandIndex, index) {
    return this.intervalArray[keyBandIndex][index].getRefPosition();
  }

  getRefRange() {
    if (this.keyArray.length > 1) {
      return (this.keyArray[this.keyArray.length - 1].getRefPosition() - this.keyArray[0].getRefPosition());
    } else {
      return 0;
    }
  }

  getRefPosition(index) {
    if (index < 0 || index >= this.keyArray.length)
      return undefined;

    return this.keyArray[index].getRefPosition();
  }

  getInterpolationSpace() {
    return this.interpolationSpace;
  }

  getColormapName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getNaNColor(colorspace) {
      return this.colorNaN.getColorInfo(colorspace);
  }

  getBelowColor(colorspace) {
      return this.colorBelow.getColorInfo(colorspace);
  }

  getAboveColor(colorspace) {
      return this.colorAbove.getColorInfo(colorspace);
  }

  getOpacityVal(index,side) {
      return this.keyArray[index].getOpacityVal(side);
  }

  //********************************************************************************//
  //***************************     Set functions      *****************************//
  //********************************************************************************//

  setInterpolationType(type) {
    this.interpolationType = type;
  }

  setRefPosition(index, ref) {
    this.keyArray[index].setRefPosition(ref);
  }

  setInterpolationSpace(space) {
    this.interpolationSpace = space;

  }

  setColormapName(newName) {
    this.name = newName;
  }

  setNaNColor(colorInfo) {

    if (colorInfo == undefined)
      return;

    this.colorNaN.updateColor(colorInfo);

  }

  setBelowColor(colorInfo) {
    if (colorInfo == undefined)
      return;

    this.colorBelow.updateColor(colorInfo);
  }

  setAboveColor(colorInfo) {

    if (colorInfo == undefined)
      return;

    this.colorAbove.updateColor(colorInfo);
  }

  setOpacityVal(index,val,side) {
    this.keyArray[index].setOpacityVal(val,side);
  }

  //********************************************************************************//
  //*****************************   Key Structure   ********************************//
  //********************************************************************************//

  deleteKey(index) {
    this.keyArray[index].deleteReferences();
    this.keyArray[index] = null;
    this.keyArray.splice(index, 1);
  }

  getKeyLength() {
    return this.keyArray.length;
  }

  getKey(index) {
    return this.keyArray[index];
  }

  getKeyClone(index) {
    var keypackage= this.keyArray[index].getKeyPackage();
    var newKey = new class_Key(keypackage[0], keypackage[1], keypackage[2], keypackage[3], keypackage[4]);
    return newKey;
  }

  setLeftKeyColor(index, color) {
    this.keyArray[index].setLeftKeyColor(color);
  }

  setRightKeyColor(index, color) {
    this.keyArray[index].setRightKeyColor(color);
  }

  getLeftKeyColor(index, colorspace) {
    return this.keyArray[index].getLeftKeyColor(colorspace);
  }

  getRightKeyColor(index, colorspace) {
    return this.keyArray[index].getRightKeyColor(colorspace);
  }

  getKeyType(index) {
    if (this.keyArray[index] == undefined) {
      return undefined;
    } else
      return this.keyArray[index].getKeyType();
  }

  getMoT(index) {
    return this.keyArray[index].getMoT();
  }

  setMoT(index, mot) {
    this.keyArray[index].setMoT(mot);
  }

  insertKey(index, key) {
    this.keyArray.splice(index, 0, key);
  }

  addKey(key) {
    // find position
    var index = undefined;
    var ref = key.getRefPosition();

    for (var i = 1; i < this.keyArray.length; i++) {
      if (ref > this.keyArray[i - 1].getRefPosition() && ref < this.keyArray[i].getRefPosition()) {
        index = i;
        break;
      }
    }

    if (index != undefined) {
      this.keyArray.splice(index, 0, key);
    }

  }

  pushKey(key) {
    this.keyArray.push(key);
  }

  getBur(index) {
    return this.keyArray[index].getBur();
  }

  setBur(index, newBurs) {
    this.keyArray[index].setBur(newBurs);
  }

  deleteBand(index) {
    var tmpRightColor = this.keyArray[index + 1].getRightKeyColor("lab");
    this.keyArray[index].setRightKeyColor(tmpRightColor);
    this.deleteKey(index + 1);
  }

  //********************************************************************************//

  calcReverse() {

    if (this.keyArray.length < 2)
      return;

    var tmpKeyArray = [];
    var startPos = this.keyArray[0].getRefPosition();
    var endPos = this.keyArray[this.keyArray.length - 1].getRefPosition();
    var dis = endPos - startPos;


    for (var i = 0; i < this.keyArray.length; i++) {

      //
      if ((this.keyArray[i].getKeyType() === "nil key" || this.keyArray[i].getKeyType() === "left key") && i != this.keyArray.length - 1) {
        this.keyArray[i].setRightKeyColor(this.keyArray[i + 1].getLeftKeyColor("lab"));
        this.keyArray[i + 1].setLeftKeyColor(undefined);
      }

      var newPos = startPos + (endPos - this.keyArray[i].getRefPosition());

      var tmpColor = this.keyArray[i].getLeftKeyColor("lab");
      this.keyArray[i].setLeftKeyColor(this.keyArray[i].getRightKeyColor("lab"));
      this.keyArray[i].setRightKeyColor(tmpColor);

      tmpKeyArray.splice(0, 0, this.getKeyClone(i));
      tmpKeyArray[0].setRefPosition(newPos);
    }

    for (var i = this.keyArray.length - 1; i >= 0; i--) {
      this.keyArray[i].deleteReferences();
      this.keyArray[i] = null;
    }
    this.keyArray = tmpKeyArray;

  }

  setAutoRange(newStart, newEnd) {

    var currentStart = this.keyArray[0].getRefPosition();
    var currentdistance = this.keyArray[this.keyArray.length - 1].getRefPosition() - currentStart;
    var newDistance = newEnd - newStart;

    for (var i = 0; i < this.keyArray.length; i++) {
      var ratio = (this.keyArray[i].getRefPosition() - currentStart) / currentdistance;
      var newPos = newStart + ratio * newDistance;
      this.keyArray[i].setRefPosition(newPos);
    }

  }

  equalKeyIntervals() {
    if (this.keyArray.length > 2) {
      var equalDis = Math.abs(this.keyArray[this.keyArray.length - 1].getRefPosition() - this.keyArray[0].getRefPosition()) / (this.keyArray.length - 1);
      for (var i = 1; i < this.keyArray.length - 1; i++) {
        this.keyArray[i].setRefPosition(this.keyArray[0].getRefPosition() + (i * equalDis));
      }
    }
  }

  calculateColor(val, space) {

    if (isNaN(val)) {
      return this.colorNaN.getColorInfo(space);
    }

    if (val < this.keyArray[0].getRefPosition()) {
      return this.colorBelow.getColorInfo(space);
    }

    if (val > this.keyArray[this.keyArray.length - 1].getRefPosition()) {
      return this.colorAbove.getColorInfo(space);
    }

    for (var i = 0; i < this.keyArray.length - 1; i++) {

      if (val > this.keyArray[i].getRefPosition() && val < this.keyArray[i + 1].getRefPosition()) {

        var color1 = this.keyArray[i].getRightKeyColor(this.interpolationSpace);
        var color2 = this.keyArray[i + 1].getLeftKeyColor(this.interpolationSpace);

        if (color1 == undefined) {
          gWorkColor1.updateColor(color2[0],color2[1],color2[2],color2[3]);
          return gWorkColor1.getColorInfo(space);
        }

        var newColorValues = undefined;
        if (this.getIntervalLength(i) > 0){
          if (val > this.keyArray[i].getRefPosition() && val <= this.getIntervalRef(i, 0)) {
            var leftRef = this.keyArray[i].getRefPosition();
            var rightRef = this.getIntervalRef(i, 0);
            var intervalColor2 = this.getIntervalColor(i, 0, this.interpolationSpace);
            var tmpRatio = (val - leftRef) / (rightRef - leftRef);
            newColorValues = calcGradientLinear(color1[1], color1[2], color1[3], intervalColor2[1], intervalColor2[2], intervalColor2[3], tmpRatio);
          } else if (val > this.getIntervalRef(i, this.getIntervalLength(i) - 1) && val < this.keyArray[i + 1].getRefPosition()) {
            var leftRef = this.getIntervalRef(i, this.getIntervalLength(i) - 1);
            var rightRef = this.keyArray[i + 1].getRefPosition();
            var intervalColor1 = this.getIntervalColor(i, this.getIntervalLength(i) - 1, this.interpolationSpace);
            var tmpRatio = (val - leftRef) / (rightRef - leftRef);
            newColorValues = calcGradientLinear(intervalColor1[1], intervalColor1[2], intervalColor1[3], color2[1], color2[2], color2[3], tmpRatio);
          } else {
            for (var j = 0; j < this.getIntervalLength(i) - 1; j++) {
              if (val > this.getIntervalRef(i, j) && val <= this.getIntervalRef(i, j + 1)) {
                var leftRef = this.getIntervalRef(i, j);
                var rightRef = this.getIntervalRef(i, j + 1);
                var intervalColor1 = this.getIntervalColor(i, j, this.interpolationSpace);
                var intervalColor2 = this.getIntervalColor(i, j + 1, this.interpolationSpace);
                var tmpRatio = (val - leftRef) / (rightRef - leftRef);
                newColorValues = calcGradientLinear(intervalColor1[1], intervalColor1[2], intervalColor1[3], intervalColor2[1], intervalColor2[2], intervalColor2[3], tmpRatio);
              }
            }
          }
        } else {
          var leftRef = this.keyArray[i].getRefPosition();
          var rightRef = this.keyArray[i + 1].getRefPosition();
          var tmpRatio = (val - leftRef) / (rightRef - leftRef);
          newColorValues = calcGradientLinear(color1[1], color1[2], color1[3], color2[1], color2[2], color2[3], tmpRatio);
        }

        gWorkColor1.updateColor(this.interpolationSpace,newColorValues[0], newColorValues[1], newColorValues[2]);
        return gWorkColor1.getColorInfo(space);
      }

      if (val == this.keyArray[i].getRefPosition()) {
        var color;

        if (i == 0) {
          if (this.keyArray[i].getKeyType() === "nil key")
            color = this.keyArray[i + 1].getLeftKeyColor(this.interpolationSpace);
          else
            color = this.keyArray[i].getRightKeyColor(this.interpolationSpace);
        } else {
          if (this.keyArray[i].getMoT()) {
            if (this.keyArray[i].getKeyType() === "left key") {
              color = this.keyArray[i + 1].getLeftKeyColor(this.interpolationSpace);
            } else {
              color = this.keyArray[i].getRightKeyColor(this.interpolationSpace);
            }
          } else {
            color = this.keyArray[i].getLeftKeyColor(this.interpolationSpace);
          }
        }

        gWorkColor1.updateColor(color[0],color[1],color[2],color[3]);
        return gWorkColor1.getColorInfo(space);
      }
    }

    if (val == this.keyArray[this.keyArray.length - 1].getRefPosition()) {
      return this.keyArray[this.keyArray.length - 1].getLeftKeyColor(space);
    }

    return this.colorNaN.getColorInfo(space);
  }


  createCMSInfoPackage(){ // we can use these packages to update the worker with a new CMS
    var tmpPack = [];

    tmpPack.push(this.name);
    tmpPack.push(this.interpolationSpace);
    tmpPack.push(this.interpolationType);

    tmpPack.push(this.colorNaN.getColorInfo("rgb"));
    tmpPack.push(this.colorBelow.getColorInfo("rgb"));
    tmpPack.push(this.colorAbove.getColorInfo("rgb"));

    var tmpKeysPack = [];
    for (var i = 0; i < this.getKeyLength(); i++) {
      tmpKeysPack.push(this.keyArray[i].getKeyPackage());
    }
    tmpPack.push(tmpKeysPack);
    var tmpProbePack = [];
    //////////////////////////////////
    ////// Probe is Missing //////////
    //////////////////////////////////
    tmpPack.push(tmpProbePack);

    return tmpPack;

  }

  setCMSFromPackage(cmsPackage){
    this.clear();
    this.name=cmsPackage[0];
    this.interpolationSpace=cmsPackage[1];
    this.interpolationType=cmsPackage[2];

    this.colorNaN.updateColor(cmsPackage[3]);
    this.colorBelow.updateColor(cmsPackage[4]);
    this.colorAbove.updateColor(cmsPackage[5]);

    /// Keys ///
    for (var i = 0; i < cmsPackage[6].length; i++) {
      this.keyArray.push(new class_Key(cmsPackage[6][i][0],cmsPackage[6][i][1],cmsPackage[6][i][2],cmsPackage[6][i][3],cmsPackage[6][i][4]));
    }

    //////////////////////////////////
    ////// Probe is Missing //////////
    //////////////////////////////////
  }

  insertCMS(cmsInfoPackage, insertIndex) {

    if (this.getKeyLength() == 0)
      return;

    var cmsDis = cmsInfoPackage[6][cmsInfoPackage[6].length-1][2]-cmsInfoPackage[6][0][2];

    switch (insertIndex) {
      case this.getKeyLength() - 1:
        // case scaled band
        var tmpVal = this.getRefPosition(insertIndex);
        var dist = Math.abs(tmpVal - this.getRefPosition(insertIndex - 1)) * 0.5;
        var startPos = tmpVal - dist;

        this.setRefPosition(insertIndex, startPos);
        this.setRightKeyColor(insertIndex, cmsInfoPackage[6][0][1]); // cmsInfoPackage[6][0][1] = right color of first key

        for (var i = 1; i < cmsInfoPackage[6].length; i++) {

          var ratio = (cms.getRefPosition(i) - cms.getRefPosition(i - 1)) / cmsDis;
          startPos = startPos + dist * ratio;

          if(i==cmsInfoPackage[6].length-1)
            this.keyArray.push(new class_Key(cmsPackage[6][i][0],cmsPackage[6][i][1],tmpVal,cmsPackage[6][i][3],cmsPackage[6][i][4]));
          else
            this.keyArray.push(new class_Key(cmsPackage[6][i][0],cmsPackage[6][i][1],startPos,cmsPackage[6][i][3],cmsPackage[6][i][4]));

        }
        break;

      default:

        var startPos = this.getRefPosition(insertIndex);
        var dist = Math.abs(this.getRefPosition(insertIndex + 1) - startPos) * 0.5;
        var endPos = (startPos + dist);

        this.setRefPosition(insertIndex, endPos);
        var oldColor = this.getLeftKeyColor(insertIndex, "lab");

        this.setLeftKeyColor(insertIndex, cmsPackage[6][cmsInfoPackage[6].length-1][2]); // left key color of the last key of the package
        this.setBur(insertIndex, true);

        for (var i = cmsInfoPackage[6].length-2; i >= 0; i--) {
          var ratio = (cmsPackage[6][i+1][2] - cmsPackage[6][i][2]) / cmsDis;
          endPos = endPos - dist * ratio;
          this.insertKey(insertIndex, new class_Key(cmsPackage[6][i][0],cmsPackage[6][i][1],endPos,cmsPackage[6][i][3],cmsPackage[6][i][4]));
        }

        this.setLeftKeyColor(insertIndex, oldColor);
        this.setBur(insertIndex, true);

    }

  }

  //********************************************************************************//
  //*********************************   Probes   ***********************************//
  //********************************************************************************//

  clearProbeSetList() {
    this.probeSetArray = [];
  }

  addProbeSet(probeSet) {
    this.probeSetArray.push(probeSet);
  }

  getProbeSetLength() {
    return this.probeSetArray.length;
  }

  deleteProbeSet(index) {
    this.probeSetArray[index].deleteReferences();
    this.probeSetArray[index] = null;
    this.probeSetArray.splice(index, 1);
  }

  deleteProbe(setindex, probeindex) {
    this.probeSetArray[setindex].deleteProbe(probeindex);
  }

  getProbeSet(index) {
    return this.probeSetArray[index];
  }

  getProbe(setindex, probeindex) {
    if (setindex < this.probeSetArray.length)
      return this.probeSetArray[setindex].getProbe(probeindex);
  }

  getProbeSetClone(index) {
    return cloneProbeSet(this.probeSetArray[index]);
  }

  setProbe(index, probeIndex, probe) {
    this.probeSetArray[index].setProbe(probeIndex, probe);
  }

  addProbe(index, probe) {
    this.probeSetArray[index].addProbe(probe);
  }

  changeProbeSetName(index, name) {
    this.probeSetArray[index].setProbeSetName(name);
  }

  insertProbe(index, probeIndex, probe) {
    this.probeSetArray[index].insertProbe(probeIndex, probe);
  }

  updateProbe(index, probeIndex, type, functionType, start, end, probeColor) {
    this.probeSetArray[index].updateProbe(probeIndex, type, functionType, start, end, probeColor);
  }


  //********************************************************************************//
  //*******************************   Draw Functions   *****************************//
  //********************************************************************************//

  drawCMS_Horizontal(canvasID, width, height) {

    // start
    var canvasObject = document.getElementById(canvasID);
    // check hight
    if (height != undefined)
      canvasObject.height = height;
    else {
      var canvasRect = canvasObject.getBoundingClientRect();
      if (canvasRect.height > 1)
        canvasObject.height = canvasRect.height;
      else
        canvasObject.height = 20;
    }
    // check width
    if (width != undefined)
      canvasObject.width = width;
    else {
      var canvasRect = canvasObject.getBoundingClientRect();
      if (canvasRect.width > 1)
        canvasObject.width = canvasRect.width;
      else
        canvasObject.width = 500;
    }

    var canvasContex = canvasObject.getContext("2d");

    var canvasData = canvasContex.getImageData(0, 0, canvasObject.width, canvasObject.height);

    /////////////////////////////////////////////////////////

    var xPos = 0;
    var yPos = 0;
    // draw colormap
    var disRef = this.getRefRange();
    for (var i = 0; i < this.getKeyLength() - 1; i++) {

      /*var pos1 = Math.round((this.getRefPosition(i) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength()-1) - this.getRefPosition(0)) * canvasObject.width);
      var pos2 = Math.round((this.getRefPosition(i+1) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength()-1) - this.getRefPosition(0)) * canvasObject.width);
      var elementwidth = pos2 - pos1;*/

      var linearKey_xPos = Math.round((this.getRefPosition(i) - this.getRefPosition(0)) / disRef * canvasObject.width);
      var elementwidth = Math.round((this.getRefPosition(i + 1) - this.getRefPosition(i)) / disRef * canvasObject.width) + 1; // plus 1 because sometimes a pixel column is empty

      switch (this.getKeyType(i)) {
        case "nil key":
        case "left key":
          canvasData = createConstantBand(canvasData, linearKey_xPos, 0, elementwidth, canvasObject.height, this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
          break;
        default:
          if ((this.getInterpolationSpace() === "de94-ds" || this.getInterpolationSpace() === "de2000-ds" || this.getInterpolationType() === "spline") && this.getIntervalLength(i) > 0) {

            var linearKey_Sub_xPos = linearKey_xPos;

            // from left key to first interval
            elementwidth = Math.round((this.getIntervalRef(i, 0) - this.getRefPosition(i)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.width);
            canvasData = createScaledBand(canvasData, linearKey_Sub_xPos, 0, elementwidth, canvasObject.height, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getIntervalColor(i, 0, this.getInterpolationSpace()), canvasObject.width);

            // between intervals
            for (var j = 0; j < this.getIntervalLength(i) - 1; j++) {
              linearKey_Sub_xPos += elementwidth;
              elementwidth = Math.round((this.getIntervalRef(i, j + 1) - this.getIntervalRef(i, j)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.width);
              canvasData = createScaledBand(canvasData, linearKey_Sub_xPos, 0, elementwidth, canvasObject.height, this.getIntervalColor(i, j, this.getInterpolationSpace()), this.getIntervalColor(i, j + 1, this.getInterpolationSpace()), canvasObject.width);
            }
            // from last interval to last key
            linearKey_Sub_xPos += elementwidth;
            var tmpEndPos = Math.round((this.getRefPosition(i + 1) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.width);
            elementwidth = (tmpEndPos - linearKey_Sub_xPos);
            canvasData = createScaledBand(canvasData, linearKey_Sub_xPos, 0, elementwidth, canvasObject.height, this.getIntervalColor(i, this.getIntervalLength(i) - 1, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
          } else
            canvasData = createScaledBand(canvasData, linearKey_xPos, 0, elementwidth, canvasObject.height, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);

      }

    }
    canvasContex.putImageData(canvasData, 0, 0);

  }

  drawCMS_Vertical(canvasID, width, height) {

    // start
    var canvasObject = document.getElementById(canvasID);
    // check hight
    if (height != undefined)
      canvasObject.height = height;
    else {
      var canvasRect = canvasObject.getBoundingClientRect();
      if (canvasRect.height > 1)
        canvasObject.height = canvasRect.height;
      else
        canvasObject.height = 500;
    }
    // check width
    if (width != undefined)
      canvasObject.width = width;
    else {
      var canvasRect = canvasObject.getBoundingClientRect();
      if (canvasRect.width > 1)
        canvasObject.width = canvasRect.width;
      else
        canvasObject.width = 500;
    }

    var canvasContex = canvasObject.getContext("2d");
    var canvasData = canvasContex.getImageData(0, 0, canvasObject.width, canvasObject.height);

    /////////////////////////////////////////////////////////
    // draw colormap
    var refDis = this.getRefRange();
    for (var i = 0; i < this.getKeyLength() - 1; i++) {

      /*var pos1 = Math.round((this.getRefPosition(i) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength()-1) - this.getRefPosition(0)) * canvasObject.height);
      var pos2 = Math.round((this.getRefPosition(i+1) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength()-1) - this.getRefPosition(0)) * canvasObject.height);
      var elementheight = pos2 - pos1;*/

      var linearKey_yPos = Math.round((this.getRefPosition(i) - this.getRefPosition(0)) / refDis * canvasObject.height);
      var elementheight = (Math.round((this.getRefPosition(i + 1) - this.getRefPosition(i)) / refDis * canvasObject.height)) + 1; // plus 1 because sometimes a pixel row is empty

      switch (this.getKeyType(i)) {
        case "nil key":
        case "left key":
          canvasData = createConstantBandVertical(canvasData, canvasObject.height - linearKey_yPos, canvasObject.width, elementheight, this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
          break;
        default:
          if ((this.getInterpolationSpace() === "de94-ds" || this.getInterpolationSpace() === "de2000-ds" || this.getInterpolationType() === "spline") && this.getIntervalLength(i) > 0) {

            var linearKey_Sub_yPos = linearKey_yPos;

            // from left key to first interval
            elementheight = Math.round((this.getIntervalRef(i, 0) - this.getRefPosition(i)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.height);
            canvasData = createScaledBandVertical(canvasData, canvasObject.height - linearKey_Sub_yPos, canvasObject.width, elementheight, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getIntervalColor(i, 0, this.getInterpolationSpace()), canvasObject.width);

            // between intervals
            for (var j = 0; j < this.getIntervalLength(i) - 1; j++) {
              linearKey_Sub_yPos += elementheight;
              elementheight = Math.round((this.getIntervalRef(i, j + 1) - this.getIntervalRef(i, j)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.height);
              canvasData = createScaledBandVertical(canvasData, canvasObject.height - linearKey_Sub_yPos, canvasObject.width, elementheight, this.getIntervalColor(i, j, this.getInterpolationSpace()), this.getIntervalColor(i, j + 1, this.getInterpolationSpace()), canvasObject.width);
            }
            // from last interval to last key
            linearKey_Sub_yPos += elementheight;
            var tmpEndPos = Math.round((this.getRefPosition(i + 1) - this.getRefPosition(0)) / (this.getRefPosition(this.getKeyLength() - 1) - this.getRefPosition(0)) * canvasObject.height);
            elementheight = (tmpEndPos - linearKey_Sub_yPos);
            canvasData = createScaledBandVertical(canvasData, canvasObject.height - linearKey_Sub_yPos, canvasObject.width, elementheight, this.getIntervalColor(i, this.getIntervalLength(i) - 1, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
          } else {
            canvasData = createScaledBandVertical(canvasData, canvasObject.height - linearKey_yPos, canvasObject.width, elementheight, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
          }
      }

    }
    canvasContex.putImageData(canvasData, 0, 0);

  }

  drawCMS_BandSketch(canvasID) {


    // start
    var canvasObject = document.getElementById(canvasID);
    var rect = canvasObject.getBoundingClientRect();

    var canvasContex = canvasObject.getContext("2d");

    var sketch_BandWidth; //= bandSketchObjLength;
    canvasObject.height = 1; //40;
    if (rect.width != 0)
      sketch_BandWidth = Math.round(rect.width / (this.getKeyLength() - 1 + this.getKeyLength()));
    else
      sketch_BandWidth = Math.round(500 / (this.getKeyLength() - 1 + this.getKeyLength()));


    //bandSketchObjLength=bandLength;

    if (this.getKeyLength() != 0) {

      if (document.getElementById("id_EditPage").display != "none")
        canvasObject.style.borderStyle = "solid";

      canvasObject.width = (this.getKeyLength() - 1) * sketch_BandWidth;

      var canvasData = canvasContex.getImageData(0, 0, canvasObject.width, canvasObject.height);
      var currentSktech_xPos = 0;

      ///////////////////////////////
      // draw bands
      for (var i = 0; i < this.getKeyLength() - 1; i++) {

        switch (this.getKeyType(i)) {
          case "nil key":
          case "left key":
            canvasData = createConstantBand(canvasData, currentSktech_xPos, 0, sketch_BandWidth, canvasObject.height, this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
            break;
          default:
            if ((this.getInterpolationSpace() === "de94-ds" || this.getInterpolationSpace() === "de2000-ds" || this.getInterpolationType() === "spline") && this.getIntervalLength(i) > 0) {
              var sketch_SubBandWidth = Math.round(sketch_BandWidth / (this.getIntervalLength(i) + 1));
              var currentSktech_SubxPos = currentSktech_xPos;

              // from left key to first interval
              canvasData = createScaledBand(canvasData, currentSktech_SubxPos, 0, sketch_SubBandWidth, canvasObject.height, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getIntervalColor(i, 0, this.getInterpolationSpace()), canvasObject.width);
              currentSktech_SubxPos += sketch_SubBandWidth;
              // between intervals
              for (var j = 0; j < this.getIntervalLength(i) - 1; j++) {
                canvasData = createScaledBand(canvasData, currentSktech_SubxPos, 0, sketch_SubBandWidth, canvasObject.height, this.getIntervalColor(i, j, this.getInterpolationSpace()), this.getIntervalColor(i, j + 1, this.getInterpolationSpace()), canvasObject.width);
                currentSktech_SubxPos += sketch_SubBandWidth;
              }
              // from last interval to last key
              sketch_SubBandWidth = (currentSktech_xPos + sketch_BandWidth - currentSktech_SubxPos);
              canvasData = createScaledBand(canvasData, currentSktech_SubxPos, 0, sketch_SubBandWidth, canvasObject.height, this.getIntervalColor(i, this.getIntervalLength(i) - 1, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
            } else {
              canvasData = createScaledBand(canvasData, currentSktech_xPos, 0, sketch_BandWidth, canvasObject.height, this.getRightKeyColor(i, this.getInterpolationSpace()), this.getLeftKeyColor(i + 1, this.getInterpolationSpace()), canvasObject.width);
            }
        }
        currentSktech_xPos += sketch_BandWidth;
      }

      canvasContex.putImageData(canvasData, 0, 0);

    }

  }


}


function createUnknownTypeBand(canvasData, xStart, yStart, bandWidth, bandHeight, colorInfo1, colorInfo2, canvasWidth) {

  if(equalColorInfo(colorInfo1,colorInfo2)){
    canvasData=createConstantBand(canvasData, xStart, yStart, bandWidth, bandHeight, colorInfo1, canvasWidth);
  }
  else{
    canvasData=createScaledBand(canvasData, xStart, yStart, bandWidth, bandHeight, colorInfo1, colorInfo2, canvasWidth);
  }

  return canvasData;

}

function createScaledBand(canvasData, xStart, yStart, bandWidth, bandHeight, colorInfo1, colorInfo2, canvasWidth) {

  xStart = Math.round(xStart);
  bandWidth = Math.round(bandWidth);
  bandHeight = Math.round(bandHeight);

  if(colorInfo1==undefined || colorInfo2==undefined)
    return;

      if(colorInfo1[0]!=colorInfo2[0]){
        gWorkColor1.updateColor(colorInfo2);
        colorInfo2 = gWorkColor1.getColorInfo(colorInfo1[0]);
      }

      for (var x = xStart; x < xStart + bandWidth; x++) {
       var tmpRatio = (x - xStart) / bandWidth;

        var val1 = colorInfo1[1] + (colorInfo2[1] - colorInfo1[1]) * tmpRatio;
        var val2 = colorInfo1[2] + (colorInfo2[2] - colorInfo1[2]) * tmpRatio;
        var val3 = colorInfo1[3] + (colorInfo2[3] - colorInfo1[3]) * tmpRatio;
        gWorkColor1.updateColor(colorInfo1[0],val1,val2,val3);

        var colorInfo = gWorkColor1.getColorInfo("rgb");
        if(this.doColorblindnessSim)
          colorInfo = gWorkColor1.getColorInfo("rgb_cb");

        for (var y = 0; y < bandHeight; y++) {
          var index = (x + (y+yStart) * canvasWidth) * 4;
          //var index = ((xStart+x) + y * canvasWidth) * 4;
          canvasData.data[index + 0] = Math.round(colorInfo[1] * 255); // r
          canvasData.data[index + 1] = Math.round(colorInfo[2] * 255); // g
          canvasData.data[index + 2] = Math.round(colorInfo[3] * 255); // b
          canvasData.data[index + 3] = 255; //a
        }

      }

      return canvasData;
}

function createConstantBand(canvasData, xStart, yStart, bandWidth, bandHeight, colorInfo1, canvasWidth) {

  xStart = Math.round(xStart);
  bandWidth = Math.round(bandWidth);
  bandHeight = Math.round(bandHeight);

      gWorkColor1.updateColor(colorInfo1);

      var colorInfo = gWorkColor1.getColorInfo("rgb");
      if(this.doColorblindnessSim)
        colorInfo = gWorkColor1.getColorInfo("rgb_cb");

      for (var x = xStart; x <= xStart + bandWidth; x++) {

        for (var y = 0; y < bandHeight; y++) {
          var index = (x + (y+yStart) * canvasWidth) * 4;
          canvasData.data[index + 0] = Math.round(colorInfo[1] * 255); // r
          canvasData.data[index + 1] = Math.round(colorInfo[2] * 255); // g
          canvasData.data[index + 2] = Math.round(colorInfo[3] * 255); // b
          canvasData.data[index + 3] = 255; //a
        }

      }
  return canvasData;
}

function createScaledBandVertical(canvasData, yStart, bandWidth, bandHeight, colorInfo1, colorInfo2, canvasWidth) {

  yStart = Math.round(yStart);
  bandWidth = Math.round(bandWidth);
  bandHeight = Math.round(bandHeight);

  if(colorInfo1[0]!=colorInfo2[0]){
    gWorkColor1.updateColor(colorInfo2);
    colorInfo2 = gWorkColor1.getColorInfo(colorInfo1[0]);
  }

      for (var y = yStart; y >= yStart - bandHeight; y--) {

        if(yStart - y<0)
          break;

       var tmpRatio = (yStart - y) / bandHeight;

        var val1 = colorInfo1[1] + (colorInfo2[1] - colorInfo1[1]) * tmpRatio;
        var val2 = colorInfo1[2] + (colorInfo2[2] - colorInfo1[2]) * tmpRatio;
        var val3 = colorInfo1[3] + (colorInfo2[3] - colorInfo1[3]) * tmpRatio;
        gWorkColor1.updateColor(colorInfo1[0],val1,val2,val3);

        var colorInfo = gWorkColor1.getColorInfo("rgb");
        if(this.doColorblindnessSim)
          colorInfo = gWorkColor1.getColorInfo("rgb_cb");

        for (var x = 0; x < bandWidth; x++) {
          var index = (x + (yStart-(yStart-y)) * canvasWidth) * 4;
          canvasData.data[index + 0] = Math.round(colorInfo[1] * 255); // r
          canvasData.data[index + 1] = Math.round(colorInfo[2] * 255); // g
          canvasData.data[index + 2] = Math.round(colorInfo[3] * 255); // b
          canvasData.data[index + 3] = 255; //a
        }
      }

  return canvasData;
}

function createConstantBandVertical(canvasData, yStart, bandWidth, bandHeight, colorInfo1, canvasWidth) {

  yStart = Math.round(yStart);
  bandWidth = Math.round(bandWidth);
  bandHeight = Math.round(bandHeight);

      gWorkColor1.updateColor(colorInfo1);

      var colorInfo = gWorkColor1.getColorInfo("rgb");
      if(this.doColorblindnessSim)
        colorInfo = gWorkColor1.getColorInfo("rgb_cb");

      for (var y = yStart; y >= yStart - bandHeight; y--) {

        for (var x = 0; x < bandWidth; x++) {
          var index = (x + (yStart-(yStart-y)) * canvasWidth) * 4;
          canvasData.data[index + 0] = Math.round(colorInfo[1] * 255); // r
          canvasData.data[index + 1] = Math.round(colorInfo[2] * 255); // g
          canvasData.data[index + 2] = Math.round(colorInfo[3] * 255); // b
          canvasData.data[index + 3] = 255; //a
        }

      }
  return canvasData;
}
