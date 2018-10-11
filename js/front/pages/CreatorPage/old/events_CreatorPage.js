
/////////////
////  Save Band Process

function saveCreateProcess(){

      if(processPosition<colormapProcess.length-1){

          colormapProcess = colormapProcess.slice(0, processPosition+1);
          colormapProcess.push(cloneCMS(globalCMS1));
          processPosition = colormapProcess.length-1
      }
      else{
        if(colormapProcess.length <= processLimitation){
          colormapProcess.push(cloneCMS(globalCMS1));
          processPosition = colormapProcess.length-1
        }
        else{
          colormapProcess.shift();
          colormapProcess.push(cloneCMS(globalCMS1));
          processPosition = colormapProcess.length-1
        }
      }
}

//////////////////////////////////////////

///////////////////////////////
//// switch modify //////
///////////////////////////////


function switchTableTestFunction(type){

  switch (type) {
    case 0:
      document.getElementById("id_selectShowTestFunction").style.background=styleInactiveColor;
      document.getElementById("id_selectShowCMSTable").style.background=styleActiveColor;

      document.getElementById("id_mapping_Div").style.display="none";
      document.getElementById("id_table_Div").style.display="block";

      stopAnimationMapping();

    break;
    case 1:

      //openAlert("Sorry. The mapping of uploaded data or test functions is not available at the moment. It will come with one of the next updates.");
      //break;
      document.getElementById("id_selectShowTestFunction").style.background=styleActiveColor;
      document.getElementById("id_selectShowCMSTable").style.background=styleInactiveColor;

      document.getElementById("id_mapping_Div").style.display="block";
      document.getElementById("id_table_Div").style.display="none";

      animateMapping();
      updateMappingSize(2);

      break;
    default:

  }

  // update the positions of the input fields
  orderColorSketch(colorspaceModus);


}



function deleteBand(index){

  if (confirm("Do you really want to delete the band?") == true) {

      globalCMS1.deleteBand(index);
      orderColorSketch();

      if(document.getElementById("id_DivModifyKeys").style.display=="inline-block")
      addKeyButtons();

      if(document.getElementById("modifyColormapPath").style.display=="inline-block")
      drawPathEditPath();

  }

}





//////////////////////////////
///// Band Creator /////
//////////////////////////////


function saveBandCreator(){

  if(createBandType==0){
    var tmp = tmpBandArray[0];
    constBands.push(tmp);
    drawConstantBands();
  }
  else{

    var newArray = [];

    for (var i = 0; i < tmpBandArray.length; i++) {
      var tmp = tmpBandArray[i];
      newArray.push(tmp);
    }

    switch (createBandType) {
        case 1:
          scaleBands.push(newArray);
          drawScaledBands();
          break;
          case 2:
            doubleBands.push(newArray);
            drawDoubleBands();
            break;
            case 3:
              tribleBands.push(newArray);
              drawTripleBands();
              break;
              case 4:
                quadBands.push(newArray);
                drawQuadrupleBands();
                break;
        default:

      }
  }

    bandCreatorOpen=false;
    document.getElementById("bandCreatorWindow").style.display="none";
}

function cancelBandCreator(){
    bandCreatorOpen=false;
    document.getElementById("bandCreatorWindow").style.display="none";
}

function openBandCreator(type){
  bandCreatorOpen=true;
  createBandType=type;
switch (createBandType) {
    case 0:
      tmpBandArray=[new classColor_RGB(1,0,0)];
      break;
    case 1:
      tmpBandArray=[new classColor_RGB(1,1,1), new classColor_RGB(0, 0, 0)];
      break;
      case 2:
        tmpBandArray=[new classColor_RGB(0,0,0), new classColor_RGB(1,1,1), new classColor_RGB(1, 1, 0), new classColor_RGB(1, 0, 0)];
        break;
        case 3:
          tmpBandArray=[new classColor_RGB(0,0,0), new classColor_RGB(1,1,1), new classColor_RGB(1, 1, 0), new classColor_RGB(1, 0, 0), new classColor_RGB(0, 0.5, 0.5), new classColor_RGB(0, 0, 1)];
          break;
          case 4:
            tmpBandArray=[new classColor_RGB(0,0,0), new classColor_RGB(1,1,1), new classColor_RGB(1, 1, 0), new classColor_RGB(1, 0, 0), new classColor_RGB(0, 0.5, 0.5), new classColor_RGB(0, 0, 1), new classColor_RGB(1, 0, 1), new classColor_RGB(0, 1, 0)];
            break;
    default:

  }

switch (createBandType) {
    case 0:
      editColor1=tmpBandArray[0];
      editColor2=tmpBandArray[0];
      break;
  default:
      editColor1=tmpBandArray[selectedBand*2];
      editColor2=tmpBandArray[selectedBand*2+1];
  }

  document.getElementById("bandCreatorWindow").style.display="block";
  document.getElementById("bandCreator_Radiobutton_SelectColor1").checked=true;
  selectedColor=0;
  addBandButtons();
}

function addBandButtons(){
  var container = document.getElementById("bandCreator_BandDiv");

  for(var i = bandDivArray.length-1; i>=0; i--){
    bandDivArray[i].remove();
    bandDivArray.pop();
  }

  container.innerHTML = "";

  var tmpVal = createBandType;
  if(tmpVal==0)
  tmpVal=1;
  for (var i = 0; i < tmpVal; i++) {

    var selectButton = document.createElement("div");
    selectButton.className = "class_keybuttonBandCreatorPage classButtonWhite";
    selectButton.innerHTML = ""+(i+1);
    selectButton.style.cursor = "pointer";

    selectButton.onclick = (function(tmpIndex) {
    return function() {

        bandDivArray[selectedBand].style.borderColor = "black";
        bandDivArray[selectedBand].style.color = "black";
        selectedBand = tmpIndex;
        bandDivArray[selectedBand].style.borderColor = styleActiveColor;
        bandDivArray[selectedBand].style.color = styleActiveColor;
        selectBand();

    };
    })(i);


    container.appendChild(selectButton);
    bandDivArray.push(selectButton);

  }


  selectedBand=0;
  selectedColor=0;
  bandDivArray[selectedBand].style.borderColor = styleActiveColor;
  bandDivArray[selectedBand].style.color = styleActiveColor;
  selectBand();
}

function selectBand(){

  switch (createBandType) {
      case 0:
        editColor1=tmpBandArray[0];
        editColor2=tmpBandArray[0];
        break;
    default:
        editColor1=tmpBandArray[selectedBand*2];
        editColor2=tmpBandArray[selectedBand*2+1];
    }


  fillBandCreatorColorInputFields();
  drawCurrentBandColor();
  initColorpickerBackground("bandCreator_canvasPicker", colorpickerType);
  drawEditPageColorCircles("bandCreator_canvasPicker","bandCreator_canvasPicker2", colorpickerType);
}


function drawCurrentBandColor(){

    var tmpColor1, tmpColor2;

    switch (createBandType) {
      case 0:
        tmpColor1=tmpBandArray[0];
        tmpColor2=tmpBandArray[0];
        break;
    default:
        tmpColor1=tmpBandArray[selectedBand*2];
        tmpColor2=tmpBandArray[selectedBand*2+1];
    }

    if(document.getElementById("bandCreator_Radiobutton_SelectColor1").checked){
      document.getElementById("bandCreator_currentColor").style.background=tmpColor1.getRGBString();
      document.getElementById("bandCreator_SetColor").style.background=editColor1.getRGBString();
    }
    else{
      document.getElementById("bandCreator_currentColor").style.background=tmpColor2.getRGBString();
      document.getElementById("bandCreator_SetColor").style.background=editColor2.getRGBString();
    }

    drawCreatedBand();
}

function confirmCreateBand(){
  switch (createBandType) {
      case 0:
        tmpBandArray[0]=editColor1;
        break;
    default:
    tmpBandArray[selectedBand*2]=editColor1;
    tmpBandArray[selectedBand*2+1]=editColor2;
  }
  drawCurrentBandColor();
}

function drawCreatedBand(){

  var originalObj = document.getElementById("bandCreator_Original");
  var previewObj = document.getElementById("bandCreator_Preview");

  var previewArray=[];

  for (var i = 0; i < tmpBandArray.length; i++) {
    var tmp = tmpBandArray[i];
    previewArray.push(tmp);
  }

  switch (createBandType) {
      case 0:
        previewArray[0]=editColor1;
        break;
    default:
    previewArray[selectedBand*2]=editColor1;
    previewArray[selectedBand*2+1]=editColor2;
  }

  var resolutionX = 500;
  var resolutionY =1;
  originalObj.height=resolutionY;
  originalObj.width=resolutionX;
  previewObj.height=resolutionY;
  previewObj.width=resolutionX;

  var canvasContex = originalObj.getContext("2d");
  var canvasData = canvasContex.getImageData(0, 0, originalObj.width, originalObj.height);

  var canvasContex2 = previewObj.getContext("2d");
  var canvasData2 = canvasContex.getImageData(0, 0, previewObj.width, previewObj.height);



  switch (createBandType) {
      case 0:
        drawCanvasBand(originalObj, tmpBandArray[0], tmpBandArray[0],resolutionX);
        drawCanvasBand(previewObj, previewArray[0], previewArray[0],resolutionX);
        break;
      case 1:
        drawCanvasBand(originalObj, tmpBandArray[0], tmpBandArray[1],resolutionX);
        drawCanvasBand(previewObj, previewArray[0], previewArray[1],resolutionX);
        break;
      case 2:


        var bandWidth = Math.round(resolutionX/2);

        switch(colorspaceModus){
                    case "rgb":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0], tmpBandArray[1], resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2], tmpBandArray[3], resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0], previewArray[1], resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2], previewArray[3], resolutionX);
                    break;
                    case "hsv":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcHSVColor(), tmpBandArray[1].calcHSVColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcHSVColor(), tmpBandArray[3].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcHSVColor(), previewArray[1].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcHSVColor(), previewArray[3].calcHSVColor(), resolutionX);
                    break;
                    case "lab":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcLABColor(), tmpBandArray[1].calcLABColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcLABColor(), tmpBandArray[3].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcLABColor(), previewArray[1].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcLABColor(), previewArray[3].calcLABColor(), resolutionX);
                    break;
                    case "din99":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcDIN99Color(), tmpBandArray[1].calcDIN99Color(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcDIN99Color(), tmpBandArray[3].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcDIN99Color(), previewArray[1].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcDIN99Color(), previewArray[3].calcDIN99Color(), resolutionX);
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");
        }


        break;
      case 3:
          var bandWidth = Math.round(resolutionX/3);

          switch(colorspaceModus){
                      case "rgb":
                          canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0], tmpBandArray[1], resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2], tmpBandArray[3], resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4], tmpBandArray[5], resolutionX);
                          canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0], previewArray[1], resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2], previewArray[3], resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4], previewArray[5], resolutionX);
                      break;
                      case "hsv":
                          canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcHSVColor(), tmpBandArray[1].calcHSVColor(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcHSVColor(), tmpBandArray[3].calcHSVColor(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcHSVColor(), tmpBandArray[5].calcHSVColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcHSVColor(), previewArray[1].calcHSVColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcHSVColor(), previewArray[3].calcHSVColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcHSVColor(), previewArray[5].calcHSVColor(), resolutionX);
                      break;
                      case "lab":
                          canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcLABColor(), tmpBandArray[1].calcLABColor(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcLABColor(), tmpBandArray[3].calcLABColor(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcLABColor(), tmpBandArray[5].calcLABColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcLABColor(), previewArray[1].calcLABColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcLABColor(), previewArray[3].calcLABColor(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcLABColor(), previewArray[5].calcLABColor(), resolutionX);
                      break;
                      case "din99":
                          canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcDIN99Color(), tmpBandArray[1].calcDIN99Color(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcDIN99Color(), tmpBandArray[3].calcDIN99Color(), resolutionX);
                          canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcDIN99Color(), tmpBandArray[5].calcDIN99Color(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcDIN99Color(), previewArray[1].calcDIN99Color(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcDIN99Color(), previewArray[3].calcDIN99Color(), resolutionX);
                          canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcDIN99Color(), previewArray[5].calcDIN99Color(), resolutionX);
                      break;
                      default:
                          console.log("Error at the updateCreatorBand function");
          }
        break;
      case 4:
        var bandWidth = Math.round(resolutionX/4);

        switch(colorspaceModus){
                    case "rgb":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0], tmpBandArray[1], resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2], tmpBandArray[3], resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4], tmpBandArray[5], resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*3, bandWidth, resolutionY, tmpBandArray[6], tmpBandArray[7], resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0], previewArray[1], resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2], previewArray[3], resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4], previewArray[5], resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*3, bandWidth, resolutionY, previewArray[6], previewArray[7], resolutionX);
                    break;
                    case "hsv":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcHSVColor(), tmpBandArray[1].calcHSVColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcHSVColor(), tmpBandArray[3].calcHSVColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcHSVColor(), tmpBandArray[5].calcHSVColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*3, bandWidth, resolutionY, tmpBandArray[6].calcHSVColor(), tmpBandArray[7].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcHSVColor(), previewArray[1].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcHSVColor(), previewArray[3].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcHSVColor(), previewArray[5].calcHSVColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*3, bandWidth, resolutionY, previewArray[6].calcHSVColor(), previewArray[7].calcHSVColor(), resolutionX);
                    break;
                    case "lab":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcLABColor(), tmpBandArray[1].calcLABColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcLABColor(), tmpBandArray[3].calcLABColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcLABColor(), tmpBandArray[5].calcLABColor(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*3, bandWidth, resolutionY, tmpBandArray[6].calcLABColor(), tmpBandArray[7].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcLABColor(), previewArray[1].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcLABColor(), previewArray[3].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcLABColor(), previewArray[5].calcLABColor(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*3, bandWidth, resolutionY, previewArray[6].calcLABColor(), previewArray[7].calcLABColor(), resolutionX);
                    break;
                    case "din99":
                        canvasData=createScaledBand(canvasData, 0, bandWidth, resolutionY, tmpBandArray[0].calcDIN99Color(), tmpBandArray[1].calcDIN99Color(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth, bandWidth, resolutionY, tmpBandArray[2].calcDIN99Color(), tmpBandArray[3].calcDIN99Color(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*2, bandWidth, resolutionY, tmpBandArray[4].calcDIN99Color(), tmpBandArray[5].calcDIN99Color(), resolutionX);
                        canvasData=createScaledBand(canvasData, bandWidth*3, bandWidth, resolutionY, tmpBandArray[6].calcDIN99Color(), tmpBandArray[7].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, 0, bandWidth, resolutionY, previewArray[0].calcDIN99Color(), previewArray[1].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth, bandWidth, resolutionY, previewArray[2].calcDIN99Color(), previewArray[3].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*2, bandWidth, resolutionY, previewArray[4].calcDIN99Color(), previewArray[5].calcDIN99Color(), resolutionX);
                        canvasData2=createScaledBand(canvasData2, bandWidth*3, bandWidth, resolutionY, previewArray[6].calcDIN99Color(), previewArray[7].calcDIN99Color(), resolutionX);
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");
        }
        break;
      default:

    }

    if(createBandType>1){
      canvasContex.putImageData(canvasData, 0, 0);
      canvasContex2.putImageData(canvasData2, 0, 0);
    }

}


function fillBandCreatorColorInputFields(){

    var tmpVal =editColor1.get1Value()*255;
    document.getElementById("id_bandCreatorC1RInput").value=tmpVal.toFixed(numDecimalPlaces);
    tmpVal =editColor1.get2Value()*255;
    document.getElementById("id_bandCreatorC1GInput").value=tmpVal.toFixed(numDecimalPlaces);
    tmpVal =editColor1.get3Value()*255;
    document.getElementById("id_bandCreatorC1BInput").value=tmpVal.toFixed(numDecimalPlaces);
     var tmpHSV = editColor1.calcHSVColor();
     tmpVal =tmpHSV.get1Value()*360;
     document.getElementById("id_bandCreatorC1HInput").value=tmpVal.toFixed(numDecimalPlaces);
     tmpVal =tmpHSV.get2Value()*100;
     document.getElementById("id_bandCreatorC1SInput").value=tmpVal.toFixed(numDecimalPlaces);
     tmpVal =tmpHSV.get3Value()*100;
     document.getElementById("id_bandCreatorC1VInput").value=tmpVal.toFixed(numDecimalPlaces);

    tmpVal =editColor2.get1Value()*255;
    document.getElementById("id_bandCreatorC2RInput").value=tmpVal.toFixed(numDecimalPlaces);
    tmpVal =editColor2.get2Value()*255;
    document.getElementById("id_bandCreatorC2GInput").value=tmpVal.toFixed(numDecimalPlaces);
    tmpVal =editColor2.get3Value()*255;
    document.getElementById("id_bandCreatorC2BInput").value=tmpVal.toFixed(numDecimalPlaces);
    tmpHSV = editColor2.calcHSVColor();
     tmpVal =tmpHSV.get1Value()*360;
     document.getElementById("id_bandCreatorC2HInput").value=tmpVal.toFixed(numDecimalPlaces);
     tmpVal =tmpHSV.get2Value()*100;
     document.getElementById("id_bandCreatorC2SInput").value=tmpVal.toFixed(numDecimalPlaces);
     tmpVal =tmpHSV.get3Value()*100;
     document.getElementById("id_bandCreatorC2VInput").value=tmpVal.toFixed(numDecimalPlaces);


}
