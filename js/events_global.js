function changeColorspace(type) {

  document.getElementById("button_RGB").style.border = "0.2vh solid white";
  document.getElementById("button_RGB").style.color = "white";
  document.getElementById("button_HSV").style.border = "0.2vh solid white";
  document.getElementById("button_HSV").style.color = "white";
  document.getElementById("button_LAB").style.border = "0.2vh solid white";
  document.getElementById("button_LAB").style.color = "white";
  document.getElementById("button_DIN99").style.border = "0.2vh solid white";
  document.getElementById("button_DIN99").style.color = "white";



  switch (type) {
    case 0:
      colorspaceModus = "rgb";
      document.getElementById("button_RGB").style.border = "0.2vh solid rgb(0,191,255)";
      document.getElementById("button_RGB").style.color = "rgb(0,191,255)";
      document.getElementById("id_color1_FirstLabel").innerHTML = "R:";
      document.getElementById("id_color1_SecondLabel").innerHTML = "G:";
      document.getElementById("id_color1_ThirdLabel").innerHTML = "B:";
      document.getElementById("id_table_Color1").innerHTML = "C1 (RGB)";
      document.getElementById("id_table_Color2").innerHTML = "C2 (RGB)";
      break;
    case 1:
      colorspaceModus = "hsv";
      document.getElementById("button_HSV").style.border = "0.2vh solid rgb(0,191,255)";
      document.getElementById("button_HSV").style.color = "rgb(0,191,255)";
      document.getElementById("id_color1_FirstLabel").innerHTML = "H:";
      document.getElementById("id_color1_SecondLabel").innerHTML = "S:";
      document.getElementById("id_color1_ThirdLabel").innerHTML = "V:";
      document.getElementById("id_table_Color1").innerHTML = "C1 (HSV)";
      document.getElementById("id_table_Color2").innerHTML = "C2 (HSV)";
      break;
    case 2:
      colorspaceModus = "lab";
      document.getElementById("button_LAB").style.border = "0.2vh solid rgb(0,191,255)";
      document.getElementById("button_LAB").style.color = "rgb(0,191,255)";
      document.getElementById("id_color1_FirstLabel").innerHTML = "L:";
      document.getElementById("id_color1_SecondLabel").innerHTML = "A:";
      document.getElementById("id_color1_ThirdLabel").innerHTML = "B:";
      document.getElementById("id_table_Color1").innerHTML = "C1 (LAB)";
      document.getElementById("id_table_Color2").innerHTML = "C2 (LAB)";
      break;
    case 3:
      colorspaceModus = "din99";
      document.getElementById("button_DIN99").style.border = "0.2vh solid rgb(0,191,255)";
      document.getElementById("button_DIN99").style.color = "rgb(0,191,255)";
      document.getElementById("id_color1_FirstLabel").innerHTML = "L99:";
      document.getElementById("id_color1_SecondLabel").innerHTML = "A99:";
      document.getElementById("id_color1_ThirdLabel").innerHTML = "B99:";
      document.getElementById("id_table_Color1").innerHTML = "C1 (DIN99)";
      document.getElementById("id_table_Color2").innerHTML = "C2 (DIN99)";
      break;
    default:
      return;
  }




  if (showSideID == 1) { // CREATE SIDE

    switch (type) {
      case 0:

        var tmpactivColorIndex = activColorIndex;

        activColorIndex = 0;
        var tmpRGB = getRGBColor();
        colorVal1_C1 = tmpRGB.getRValue() * 255;
        colorVal2_C1 = tmpRGB.getGValue() * 255;
        colorVal3_C1 = tmpRGB.getBValue() * 255;
        activColorIndex = 1;
        tmpRGB = getRGBColor();
        colorVal1_C2 = tmpRGB.getRValue() * 255;
        colorVal2_C2 = tmpRGB.getGValue() * 255;
        colorVal3_C2 = tmpRGB.getBValue() * 255;
        activColorIndex = 2;
        tmpRGB = getRGBColor();
        colorVal1_C3 = tmpRGB.getRValue() * 255;
        colorVal2_C3 = tmpRGB.getGValue() * 255;
        colorVal3_C3 = tmpRGB.getBValue() * 255;
        activColorIndex = 3;
        tmpRGB = getRGBColor();
        colorVal1_C4 = tmpRGB.getRValue() * 255;
        colorVal2_C4 = tmpRGB.getGValue() * 255;
        colorVal3_C4 = tmpRGB.getBValue() * 255;
        activColorIndex = 4;
        tmpRGB = getRGBColor();
        colorVal1_C5 = tmpRGB.getRValue() * 255;
        colorVal2_C5 = tmpRGB.getGValue() * 255;
        colorVal3_C5 = tmpRGB.getBValue() * 255;

        activColorIndex = tmpactivColorIndex;
        break;
      case 1:
        var tmpactivColorIndex = activColorIndex;

        activColorIndex = 0;
        var tmpHSV = getHSVColor();
        colorVal1_C1 = tmpHSV.getHValue();
        colorVal2_C1 = tmpHSV.getSValue();
        colorVal3_C1 = tmpHSV.getVValue();
        activColorIndex = 1;
        tmpHSV = getHSVColor();
        colorVal1_C2 = tmpHSV.getHValue();
        colorVal2_C2 = tmpHSV.getSValue();
        colorVal3_C2 = tmpHSV.getVValue();
        activColorIndex = 2;
        tmpHSV = getHSVColor();
        colorVal1_C3 = tmpHSV.getHValue();
        colorVal2_C3 = tmpHSV.getSValue();
        colorVal3_C3 = tmpHSV.getVValue();
        activColorIndex = 3;
        tmpHSV = getHSVColor();
        colorVal1_C4 = tmpHSV.getHValue();
        colorVal2_C4 = tmpHSV.getSValue();
        colorVal3_C4 = tmpHSV.getVValue();
        activColorIndex = 4;
        tmpHSV = getHSVColor();
        colorVal1_C5 = tmpHSV.getHValue();
        colorVal2_C5 = tmpHSV.getSValue();
        colorVal3_C5 = tmpHSV.getVValue();

        activColorIndex = tmpactivColorIndex;
        break;
      case 2:
        var tmpactivColorIndex = activColorIndex;
        activColorIndex = 0;
        var tmpLAB = getLABColor();
        colorVal1_C1 = tmpLAB.getLValue();
        colorVal2_C1 = tmpLAB.getAValue();
        colorVal3_C1 = tmpLAB.getBValue();
        activColorIndex = 1;
        tmpLAB = getLABColor();
        colorVal1_C2 = tmpLAB.getLValue();
        colorVal2_C2 = tmpLAB.getAValue();
        colorVal3_C2 = tmpLAB.getBValue();
        activColorIndex = 2;
        tmpLAB = getLABColor();
        colorVal1_C3 = tmpLAB.getLValue();
        colorVal2_C3 = tmpLAB.getAValue();
        colorVal3_C3 = tmpLAB.getBValue();
        activColorIndex = 3;
        tmpLAB = getLABColor();
        colorVal1_C4 = tmpLAB.getLValue();
        colorVal2_C4 = tmpLAB.getAValue();
        colorVal3_C4 = tmpLAB.getBValue();
        activColorIndex = 4;
        tmpLAB = getLABColor();
        colorVal1_C5 = tmpLAB.getLValue();
        colorVal2_C5 = tmpLAB.getAValue();
        colorVal3_C5 = tmpLAB.getBValue();
        activColorIndex = tmpactivColorIndex;

        break;
      case 3:
        var tmpactivColorIndex = activColorIndex;

        activColorIndex = 0;
        var tmpDIN99 = getDIN99Color();
        colorVal1_C1 = tmpDIN99.getL99Value();
        colorVal2_C1 = tmpDIN99.getA99Value();
        colorVal3_C1 = tmpDIN99.getB99Value();
        activColorIndex = 1;
        tmpDIN99 = getDIN99Color();
        colorVal1_C2 = tmpDIN99.getL99Value();
        colorVal2_C2 = tmpDIN99.getA99Value();
        colorVal3_C2 = tmpDIN99.getB99Value();
        activColorIndex = 2;
        tmpDIN99 = getDIN99Color();
        colorVal1_C3 = tmpDIN99.getL99Value();
        colorVal2_C3 = tmpDIN99.getA99Value();
        colorVal3_C3 = tmpDIN99.getB99Value();
        activColorIndex = 3;
        tmpDIN99 = getDIN99Color();
        colorVal1_C4 = tmpDIN99.getL99Value();
        colorVal2_C4 = tmpDIN99.getA99Value();
        colorVal3_C4 = tmpDIN99.getB99Value();
        activColorIndex = 4;
        tmpDIN99 = getDIN99Color();
        colorVal1_C5 = tmpDIN99.getL99Value();
        colorVal2_C5 = tmpDIN99.getA99Value();
        colorVal3_C5 = tmpDIN99.getB99Value();

        activColorIndex = tmpactivColorIndex;
        break;
      default:
        return;
    }

    switch (activColorIndex) {
      case 0:
        document.getElementById("id_color1_First").value = colorVal1_C1.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Second").value = colorVal2_C1.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Third").value = colorVal3_C1.toFixed(numDecimalPlaces);
        break;
      case 1:
        document.getElementById("id_color1_First").value = colorVal1_C2.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Second").value = colorVal2_C2.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Third").value = colorVal3_C2.toFixed(numDecimalPlaces);
        break;
      case 2:
        document.getElementById("id_color1_First").value = colorVal1_C3.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Second").value = colorVal2_C3.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Third").value = colorVal3_C3.toFixed(numDecimalPlaces);
        break;
      case 3:
        document.getElementById("id_color1_First").value = colorVal1_C4.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Second").value = colorVal2_C4.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Third").value = colorVal3_C4.toFixed(numDecimalPlaces);
        break;
      case 4:
        document.getElementById("id_color1_First").value = colorVal1_C5.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Second").value = colorVal2_C5.toFixed(numDecimalPlaces);
        document.getElementById("id_color1_Third").value = colorVal3_C5.toFixed(numDecimalPlaces);
        break;
      default:
        console.log("Error at the changeColorspace function");

    }
    drawPredefinedBands();
    updateCreatorBand();
    orderColorSketch();
  }
}


function showCreateSide() {


  if(myList.length<10){
    showSideID = 1;

    document.getElementById("id_myListPage").style.display = "none";

    document.getElementById("id_Create_Menue").style.display = "inline";
    document.getElementById("id_Create_Menue").style.marginLeft = "20px";

    document.getElementById("id_creatorPage").style.display = "inline";

    document.getElementById("id_SideLabel").innerHTML = "Create Colormap";
    changeColorspace(0);
  }
  else{
    alert("There are only ten colormaps inside the My Maps list allowed. Please delete a colormap for adding a new one");
  }
}


function showMyMapsSide(){

  if(showSideID = 1){

    var doIt = false;
    if(colormapBandSketchC1.length!=0){
      if (confirm("Do you really want to leave the create page and delete the colormap?") == true) {
        doIt = true;
      }
    }
    else{
        doIt = true;
    }

    if(doIt){
        clearCreateSide();
        showSideID = 0;

        document.getElementById("id_myListPage").style.display = "initial";

        document.getElementById("id_Create_Menue").style.display = "none";
        document.getElementById("id_creatorPage").style.display = "none";

        document.getElementById("id_SideLabel").innerHTML = "My Maps";

        drawMyList();
    }

  }
}
