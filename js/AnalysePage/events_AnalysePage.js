function updateAnalyzePage(){

  if(document.getElementById("analyzeIntSpace").style.display!="none"){
    drawAnalyseMapPreviews();
    return;
  }

  if(document.getElementById("analyzeColormapPath").style.display!="none"){
    initRGB3D();
    changeCourseSpace();
    return;
  }

  if(document.getElementById("analyzeGlobalSpeed").style.display!="none"){
    var intervalColormap = globalColormap1.calcColorMap(intervalSize, colorspaceModus);
    calcGlobalSpeedPlot(intervalColormap, "analyze_GlobalSpeed_Canvas_Lab", 0, "analyze_GlobalSpeed_Label_Min_Lab", "analyze_GlobalSpeed_Label_Max_Lab", "analyze_GlobalSpeed_Label_Av_Lab", "analyze_GlobalSpeed_Label_Dev_Lab");
    calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_de94", 1, "analyze_GlobalSpeed_Label_Min_de94", "analyze_GlobalSpeed_Label_Max_de94", "analyze_GlobalSpeed_Label_Av_de94", "analyze_GlobalSpeed_Label_Dev_de94");
    calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_de2000", 2, "analyze_GlobalSpeed_Label_Min_de2000", "analyze_GlobalSpeed_Label_Max_de2000", "analyze_GlobalSpeed_Label_Av_de2000", "analyze_GlobalSpeed_Label_Dev_de2000");
    calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_din99", 3, "analyze_GlobalSpeed_Label_Min_din99", "analyze_GlobalSpeed_Label_Max_din99", "analyze_GlobalSpeed_Label_Av_din99", "analyze_GlobalSpeed_Label_Dev_din99");
    return;
  }

  if(document.getElementById("analyzeLocalBarSpeed").style.display!="none"){
    drawAnalyseDifferenceMaps();
    return;
  }

  if(document.getElementById("analyzeLocalLineSpeed").style.display!="none"){
    var intervalColormap = globalColormap1.calcColorMap(intervalSize, colorspaceModus);
    calcLocalSpeedPlot(intervalColormap, "analyze_LocalSpeed_Canvas_Lab", 0, "analyze_LocalSpeed_Label_Min_Lab", "analyze_LocalSpeed_Label_Max_Lab", "analyze_LocalSpeed_Label_Av_Lab", "analyze_LocalSpeed_Label_Dev_Lab");
    calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_de94", 1, "analyze_LocalSpeed_Label_Min_de94", "analyze_LocalSpeed_Label_Max_de94", "analyze_LocalSpeed_Label_Av_de94", "analyze_LocalSpeed_Label_Dev_de94");
    calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_de2000", 2, "analyze_LocalSpeed_Label_Min_de2000", "analyze_LocalSpeed_Label_Max_de2000", "analyze_LocalSpeed_Label_Av_de2000", "analyze_LocalSpeed_Label_Dev_de2000");
    calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_din99", 3, "analyze_LocalSpeed_Label_Min_din99", "analyze_LocalSpeed_Label_Max_din99", "analyze_LocalSpeed_Label_Av_din99", "analyze_LocalSpeed_Label_Dev_din99");
    return;
  }

  if(document.getElementById("analyzeOrder").style.display!="none"){

    return;
  }

}


function changeAnalyzePage(type){


  document.getElementById("id_selectAnalyzeSpace").style.background=styleInactiveColor;
  document.getElementById("id_selectAnalyzePath").style.background=styleInactiveColor;
  document.getElementById("id_selectAnalyzeMatrix").style.background=styleInactiveColor;
  document.getElementById("id_selectAnalyzeBar").style.background=styleInactiveColor;
  document.getElementById("id_selectAnalyzeLine").style.background=styleInactiveColor;
  document.getElementById("id_selectAnalyzeOrder").style.background=styleInactiveColor;


  document.getElementById("analyzeColormapPath").style.display="none";
  document.getElementById("analyzeGlobalSpeed").style.display="none";
  document.getElementById("analyzeLocalLineSpeed").style.display="none";
  document.getElementById("analyzeLocalBarSpeed").style.display="none";
  document.getElementById("analyzeOrder").style.display="none";
  document.getElementById("analyzeIntSpace").style.display="none";



  switch (type) {
    case 0:
        document.getElementById("id_selectAnalyzeSpace").style.background=styleActiveColor;
        document.getElementById("analyzeIntSpace").style.display="inline-block";
        drawAnalyseMapPreviews();
      break;
      case 1:
          document.getElementById("id_selectAnalyzePath").style.background=styleActiveColor;
          document.getElementById("analyzeColormapPath").style.display="inline-block";
          initRGB3D();
          changeCourseSpace();
        break;
        case 2:
            document.getElementById("id_selectAnalyzeMatrix").style.background=styleActiveColor;
            document.getElementById("analyzeGlobalSpeed").style.display="inline-block";
            var intervalColormap = globalColormap1.calcColorMap(intervalSize, colorspaceModus);
            calcGlobalSpeedPlot(intervalColormap, "analyze_GlobalSpeed_Canvas_Lab", 0, "analyze_GlobalSpeed_Label_Min_Lab", "analyze_GlobalSpeed_Label_Max_Lab", "analyze_GlobalSpeed_Label_Av_Lab", "analyze_GlobalSpeed_Label_Dev_Lab");
            calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_de94", 1, "analyze_GlobalSpeed_Label_Min_de94", "analyze_GlobalSpeed_Label_Max_de94", "analyze_GlobalSpeed_Label_Av_de94", "analyze_GlobalSpeed_Label_Dev_de94");
            calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_de2000", 2, "analyze_GlobalSpeed_Label_Min_de2000", "analyze_GlobalSpeed_Label_Max_de2000", "analyze_GlobalSpeed_Label_Av_de2000", "analyze_GlobalSpeed_Label_Dev_de2000");
            calcGlobalSpeedPlot(intervalColormap,"analyze_GlobalSpeed_Canvas_din99", 3, "analyze_GlobalSpeed_Label_Min_din99", "analyze_GlobalSpeed_Label_Max_din99", "analyze_GlobalSpeed_Label_Av_din99", "analyze_GlobalSpeed_Label_Dev_din99");
          break;
          case 3:
              document.getElementById("id_selectAnalyzeBar").style.background=styleActiveColor;
              document.getElementById("analyzeLocalBarSpeed").style.display="inline-block";
              drawAnalyseDifferenceMaps();
            break;
            case 4:
                document.getElementById("id_selectAnalyzeLine").style.background=styleActiveColor;
                document.getElementById("analyzeLocalLineSpeed").style.display="inline-block";
                var intervalColormap = globalColormap1.calcColorMap(intervalSize, colorspaceModus);
                calcLocalSpeedPlot(intervalColormap, "analyze_LocalSpeed_Canvas_Lab", 0, "analyze_LocalSpeed_Label_Min_Lab", "analyze_LocalSpeed_Label_Max_Lab", "analyze_LocalSpeed_Label_Av_Lab", "analyze_LocalSpeed_Label_Dev_Lab");
                calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_de94", 1, "analyze_LocalSpeed_Label_Min_de94", "analyze_LocalSpeed_Label_Max_de94", "analyze_LocalSpeed_Label_Av_de94", "analyze_LocalSpeed_Label_Dev_de94");
                calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_de2000", 2, "analyze_LocalSpeed_Label_Min_de2000", "analyze_LocalSpeed_Label_Max_de2000", "analyze_LocalSpeed_Label_Av_de2000", "analyze_LocalSpeed_Label_Dev_de2000");
                calcLocalSpeedPlot(intervalColormap,"analyze_LocalSpeed_Canvas_din99", 3, "analyze_LocalSpeed_Label_Min_din99", "analyze_LocalSpeed_Label_Max_din99", "analyze_LocalSpeed_Label_Av_din99", "analyze_LocalSpeed_Label_Dev_din99");
              break;
              case 5:
                  document.getElementById("id_selectAnalyzeOrder").style.background=styleActiveColor;
                  document.getElementById("analyzeOrder").style.display="inline-block";
                break;
    default:

  }




}




function increaseAnalyse3DDiv(){
    if(size3D<100){

      size3D+=5;
      document.getElementById("id_rgb3D").style.height = size3D+"vh";

      var canvasObj = document.getElementById("id_rgb3D");
      canvasObj.innerHTML="";
      var box = canvasObj.getBoundingClientRect();
      var drawWidth = box.width; //window.innerWidth;
      var drawHeight =box.height; // window.innerHeight;
      camera.aspect = drawWidth/drawHeight;
    	camera.updateProjectionMatrix();
      renderer.setSize(drawWidth,drawHeight);//(window.innerWidth, window.innerHeight);
      canvasObj.appendChild( renderer.domElement );

      if(size3D==100){
        document.getElementById("increaseAnalyse3D").style.color = "grey";
      }
      else{
        document.getElementById("increaseAnalyse3D").style.color = "black";
      }

      if(size3D==50){
        document.getElementById("decreaseAnalyse3D").style.color = "grey";
      }
      else{
        document.getElementById("decreaseAnalyse3D").style.color = "black";
      }

    }

}

function decreaseAnalyse3DDiv(){
  if(size3D>50){

    size3D-=5;
    document.getElementById("id_rgb3D").style.height = size3D+"vh";

    var canvasObj = document.getElementById("id_rgb3D");
    canvasObj.innerHTML="";
    var box = canvasObj.getBoundingClientRect();
    var drawWidth = box.width; //window.innerWidth;
    var drawHeight =box.height; // window.innerHeight;
    camera.aspect = drawWidth/drawHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(drawWidth,drawHeight);//(window.innerWidth, window.innerHeight);
    canvasObj.appendChild( renderer.domElement );


    if(size3D==100){
      document.getElementById("increaseAnalyse3D").style.color = "grey";
    }
    else{
      document.getElementById("increaseAnalyse3D").style.color = "black";
    }

    if(size3D==50){
      document.getElementById("decreaseAnalyse3D").style.color = "grey";
    }
    else{
      document.getElementById("decreaseAnalyse3D").style.color = "black";
    }

  }
}


function initAnalysePage(){

    bandSketch.colormap2Sketch(globalColormap1);
    orderColorSketch(colorspaceModus);

    changeAnalyzePage(1);
    //drawRGBSpace();
}

function changeCourseSpace(){
  document.getElementById("id_containerHueCourse").style.display = "none";
  document.getElementById("id_anaylseValue").style.display = "none";
  document.getElementById("id_hueValueOptions").style.display = "none";
  document.getElementById("id_RGBCourseDiv").style.display = "none";

  switch(analyzeColorspaceModus){
      case "rgb":;
        document.getElementById("id_RGBCourseDiv").style.display = "initial";
        //rgbInit("id_canvasRG","id_canvasRB","id_canvasBG", true);
        drawcolormap_RGBSpace(globalColormap1, "id_canvasRG","id_canvasRB","id_canvasBG", true, true);
        animate();
      break;
      case "hsv":
        stopAnimation();
        document.getElementById("id_containerHueCourse").style.display = "initial";
        document.getElementById("id_anaylseValue").style.display = "initial";
        document.getElementById("id_hueValueOptions").style.display = "initial";
        hueInit("id_anaylseCourseHueBackground");
        document.getElementById("id_setValueRange").value = 100;

        hueInit("id_anaylseCourseHueBackground");
        drawcolormap_hueSpace(globalColormap1, "id_anaylseCourseHueBackground",true, true); //drawcolormap_hueSpace(globalColormap1, "id_workcanvasAnalyseHue");
      break;
      case "lab": case "din99":
        stopAnimation();
        document.getElementById("id_containerHueCourse").style.display = "initial";
        document.getElementById("id_anaylseValue").style.display = "initial";
        document.getElementById("id_hueValueOptions").style.display = "initial";
        hueInit("id_anaylseCourseHueBackground");
        document.getElementById("id_setValueRange").value = 65;
        hueInit("id_anaylseCourseHueBackground");
        drawcolormap_hueSpace(globalColormap1, "id_anaylseCourseHueBackground",true, true); //drawcolormap_hueSpace(globalColormap1, "id_workcanvasAnalyseHue");

      break;
      default:
      console.log("Error at the changeColorspace function");
      return;
  }//*/


}

function changeValueRange(){

      if(parseFloat(document.getElementById('id_setValueRange'))<0){
        document.getElementById('id_setValueRange').value = 0;
      }

      if(parseFloat(document.getElementById('id_setValueRange'))>100){
        document.getElementById('id_setValueRange').value = 100;
      }

      hueInit("id_anaylseCourseHueBackground");
      drawcolormap_hueSpace(globalColormap1, "id_anaylseCourseHueBackground",true, true);
}

function analyseColormapRGBPossible(){
  if(document.getElementById("id_checkboxRGB").checked==true){
    orderColorSketch('rgb');
    bandSketch.colormap2Sketch(globalColormap1);
    drawcolormap_hueSpace(globalColormap1, "id_anaylseCourseHueBackground",true, true);
  }
}

function drawAnalyseMapPreviews(){

  var oldColorspace = colorspaceModus;

  colorspaceModus="rgb";
      drawCanvasColormap("id_anaylseRGB_Preview",analysePreviewMap_resolution_X, analysePreviewMap_resolution_Y, globalColormap1);
  colorspaceModus="hsv";
      drawCanvasColormap("id_anaylseHSV_Preview",analysePreviewMap_resolution_X, analysePreviewMap_resolution_Y, globalColormap1);
  colorspaceModus="lab";
      drawCanvasColormap("id_anaylseLAB_Preview",analysePreviewMap_resolution_X, analysePreviewMap_resolution_Y, globalColormap1);
  colorspaceModus="din99";
      drawCanvasColormap("id_anaylseDIN99_Preview",analysePreviewMap_resolution_X, analysePreviewMap_resolution_Y, globalColormap1);
  colorspaceModus = oldColorspace;
}



function calcOrderPlot(intervalColormap, plotid, type, minId, maxId, avId, devId){

      var canvasPlot = document.getElementById(plotid);


      canvasPlot.width = intervalColormap.getIntervalLength();
      canvasPlot.height = intervalColormap.getIntervalLength();

      var canvasCtx = canvasPlot.getContext("2d");
      canvasCtx.webkitImageSmoothingEnabled = false;
      canvasCtx.mozImageSmoothingEnabled = false;
      canvasCtx.imageSmoothingEnabled = false;
      var canvasData = canvasCtx.createImageData(canvasPlot.width, canvasPlot.height); //getImageData(0, 0, canvasPlot.width, canvasPlot.height);
      var sumForAverage = 0;
      var min = 1000000;
      var max = 0;

      var globalOrderMinValues = [];
      var globalOrderIntervalIndex = [];
      var globalOrderMinValues = [];

      for(var x=0; x<intervalColormap.getIntervalLength(); x++){

        var column = [];
        for(var y=0; y<intervalColormap.getIntervalLength(); y++){

            var deltaE=0;
            if(x!=y){
              switch (type) {
                case 0:

                deltaE = intervalColormap.calcDeltaE_Interval_Lab(x,y);
                  break;

                  case 1:
                    deltaE = intervalColormap.calcDeltaE_Interval_De94(x,y);
                    break;

                    case 2:
                      deltaE = intervalColormap.calcDeltaE_Interval_De2000(x,y);
                      break;

                      case 3:
                      deltaE = intervalColormap.calcDeltaE_Interval_DIN99(x,y);
                        break;
                default:

              }

              min = Math.min(min,deltaE);
              max = Math.max(max,deltaE);
              sumForAverage += deltaE;
            }



            column.push(deltaE);
        }
        matrix.push(column);
      }


      var average=sumForAverage/(intervalColormap.getIntervalLength()*intervalColormap.getIntervalLength()-intervalColormap.getIntervalLength());
      var sumForVariance = 0;

      //////////////////////////////////////////////////////////////////////////////////
      // calc variance
      ////////////////////////////////////////////////////////////////////////////////////

      for(var x=0; x<intervalColormap.getIntervalLength(); x++){

        for(var y=0; y<intervalColormap.getIntervalLength(); y++){

            var colorRef = new classColor_RGB(0,0,0);
            if(x==y){
              colorRef = intervalColormap.getIntervalColor(x,"rgb")
            }
            else{

              var deltaE= matrix[x][y];

              var val = deltaE/max;

              colorRef = new classColor_RGB(val,val,val);

              sumForVariance += Math.pow(matrix[x][y]-average,2);

            }
            var index = (x + y * canvasPlot.width) * 4;
            canvasData.data[index + 0] = Math.round(colorRef.getRValue() * 255); // r
            canvasData.data[index + 1] = Math.round(colorRef.getGValue() * 255); // g
            canvasData.data[index + 2] = Math.round(colorRef.getBValue() * 255); // b
            canvasData.data[index + 3] = 255; //a




        }
      }


      canvasCtx.putImageData(canvasData, 0, 0);

      var variance = sumForVariance/(intervalColormap.getIntervalLength()*intervalColormap.getIntervalLength()-intervalColormap.getIntervalLength());
      var deviation = Math.sqrt(variance);


      document.getElementById(minId).innerHTML = "Global Minimum = "+ min.toFixed(numDecimalPlaces);

      if(min==0)
      document.getElementById(minId).style.color = "red";
      else
      document.getElementById(minId).style.color = "black";

      document.getElementById(maxId).innerHTML = "Global Maximum = "+ max.toFixed(numDecimalPlaces);
      document.getElementById(avId).innerHTML = "Global Average = "+ average.toFixed(numDecimalPlaces);
      document.getElementById(devId).innerHTML = "Global Deviation = "+ deviation.toFixed(numDecimalPlaces);


}



function calcGlobalSpeedPlot(intervalColormap, plotid, type, minId, maxId, avId, devId){

      var canvasPlot = document.getElementById(plotid);


      canvasPlot.width = intervalColormap.getIntervalLength();
      canvasPlot.height = intervalColormap.getIntervalLength();

      var canvasCtx = canvasPlot.getContext("2d");
      canvasCtx.webkitImageSmoothingEnabled = false;
      canvasCtx.mozImageSmoothingEnabled = false;
      canvasCtx.imageSmoothingEnabled = false;
      var canvasData = canvasCtx.createImageData(canvasPlot.width, canvasPlot.height); //getImageData(0, 0, canvasPlot.width, canvasPlot.height);
      var sumForAverage = 0;
      var min = 1000000;
      var max = 0;

      var matrix = [];

      for(var x=0; x<intervalColormap.getIntervalLength(); x++){

        var column = [];
        for(var y=0; y<intervalColormap.getIntervalLength(); y++){

            var deltaE=0;
            if(x!=y){
              switch (type) {
                case 0:

                deltaE = intervalColormap.calcDeltaE_Interval_Lab(x,y);
                  break;

                  case 1:
                    deltaE = intervalColormap.calcDeltaE_Interval_De94(x,y);
                    break;

                    case 2:
                      deltaE = intervalColormap.calcDeltaE_Interval_De2000(x,y);
                      break;

                      case 3:
                      deltaE = intervalColormap.calcDeltaE_Interval_DIN99(x,y);
                        break;
                default:

              }

              min = Math.min(min,deltaE);
              max = Math.max(max,deltaE);
              sumForAverage += deltaE;
            }



            column.push(deltaE);
        }
        matrix.push(column);
      }


      var average=sumForAverage/(intervalColormap.getIntervalLength()*intervalColormap.getIntervalLength()-intervalColormap.getIntervalLength());
      var sumForVariance = 0;

      //////////////////////////////////////////////////////////////////////////////////
      // calc variance
      ////////////////////////////////////////////////////////////////////////////////////

      for(var x=0; x<intervalColormap.getIntervalLength(); x++){

        for(var y=0; y<intervalColormap.getIntervalLength(); y++){

            var colorRef = new classColor_RGB(0,0,0);
            if(x==y){
              colorRef = intervalColormap.getIntervalColor(x,"rgb")
            }
            else{

              var deltaE= matrix[x][y];

              var val = deltaE/max;

              colorRef = new classColor_RGB(val,val,val);

              sumForVariance += Math.pow(matrix[x][y]-average,2);

            }
            var index = (x + y * canvasPlot.width) * 4;
            canvasData.data[index + 0] = Math.round(colorRef.getRValue() * 255); // r
            canvasData.data[index + 1] = Math.round(colorRef.getGValue() * 255); // g
            canvasData.data[index + 2] = Math.round(colorRef.getBValue() * 255); // b
            canvasData.data[index + 3] = 255; //a




        }
      }


      canvasCtx.putImageData(canvasData, 0, 0);

      var variance = sumForVariance/(intervalColormap.getIntervalLength()*intervalColormap.getIntervalLength()-intervalColormap.getIntervalLength());
      var deviation = Math.sqrt(variance);


      document.getElementById(minId).innerHTML = "Global Minimum = "+ min.toFixed(numDecimalPlaces);

      if(min==0)
      document.getElementById(minId).style.color = "red";
      else
      document.getElementById(minId).style.color = "black";

      document.getElementById(maxId).innerHTML = "Global Maximum = "+ max.toFixed(numDecimalPlaces);
      document.getElementById(avId).innerHTML = "Global Average = "+ average.toFixed(numDecimalPlaces);
      document.getElementById(devId).innerHTML = "Global Deviation = "+ deviation.toFixed(numDecimalPlaces);


}


function calcLocalSpeedPlot(intervalColormap, plotid, type, minId, maxId, avId, devId){

      var canvasPlot = document.getElementById(plotid);

      canvasPlot.width = 500;
      canvasPlot.height = 500;

      var canvasCtx = canvasPlot.getContext("2d");
      canvasCtx.webkitImageSmoothingEnabled = false;
      canvasCtx.mozImageSmoothingEnabled = false;
      canvasCtx.imageSmoothingEnabled = false;
      canvasCtx.clearRect(0, 0, canvasPlot.width, canvasPlot.height);
      var canvasData = canvasCtx.createImageData(canvasPlot.width, canvasPlot.height); //getImageData(0, 0, canvasPlot.width, canvasPlot.height);
      var sumForAverage = 0;
      var min = 1000000;
      var max = 0;

      var bandWidth = canvasPlot.width/(intervalColormap.getIntervalLength()-1);

      var vector = [];

      var colorRef = new classColor_RGB(0,0,0);
      var tmpColor = new classColor_RGB(1,1,1);
      var counter =0;

    /*  for(var x=0; x<canvasPlot.width; x++){

        for(var y=0; y<canvasPlot.height; y++){

            var index = (x + y * canvasPlot.width) * 4;
            canvasData.data[index + 0] = Math.round(colorRef.getRValue() * 255); // r
            canvasData.data[index + 1] = Math.round(colorRef.getGValue() * 255); // g
            canvasData.data[index + 2] = Math.round(colorRef.getBValue() * 255); // b
            canvasData.data[index + 3] = 255; //a

        }

        counter++;
        if(counter==1){
          var change = colorRef;
          colorRef = tmpColor;
          tmpColor = change;
          counter=0;
        }

      }
      canvasCtx.putImageData(canvasData, 0, 0);//*/

      for(var x=0; x<intervalColormap.getIntervalLength()-1; x++){

            var deltaE=0;
            if(x!=y){

              switch (type) {
                case 0:

                deltaE = intervalColormap.calcDeltaE_Interval_Lab(x,x+1);
                  break;

                  case 1:
                    deltaE = intervalColormap.calcDeltaE_Interval_De94(x,x+1);
                    break;

                    case 2:
                      deltaE = intervalColormap.calcDeltaE_Interval_De2000(x,x+1);
                      break;

                      case 3:
                      deltaE = intervalColormap.calcDeltaE_Interval_DIN99(x,x+1);
                        break;
                default:

              }

              min = Math.min(min,deltaE);
              max = Math.max(max,deltaE);
              sumForAverage += deltaE;
            }

            vector.push(deltaE);
      }


      var average=sumForAverage/vector.length;
      var sumForVariance = 0;

      //////////////////////////////////////////////////////////////////////////////////
      // calc variance
      ////////////////////////////////////////////////////////////////////////////////////

      var currentXPos = 0;
      for(var y=0; y<vector.length; y++){

            var colorRef = intervalColormap.getIntervalColor(y,"rgb");
            var colorRef2 = intervalColormap.getIntervalColor(y+1,"rgb");

            var deltaHeight = canvasPlot.height*(vector[y]/max);
            var yPos= canvasPlot.height-deltaHeight;


            var gradient=canvasCtx.createLinearGradient(0,0,0,canvasPlot.height);
            gradient.addColorStop(0,colorRef2.getRGBString());
            gradient.addColorStop(1,colorRef.getRGBString());
            canvasCtx.fillStyle=gradient;
            canvasCtx.fillRect(currentXPos,yPos,bandWidth,deltaHeight);

            //canvasCtx.strokeStyle = "rgb(0,0,0)";
            //canvasCtx.rect(currentXPos,yPos,bandWidth,deltaHeight);
            //canvasCtx.stroke();

            sumForVariance += Math.pow(vector[y]-average,2);

            currentXPos+=bandWidth;

      }

      //canvasCtx.putImageData(canvasData, 0, 0);

      var variance = sumForVariance/vector.length;
      var deviation = Math.sqrt(variance);


      document.getElementById(minId).innerHTML = "Local Minimum = "+ min.toFixed(numDecimalPlaces);

      if(min==0)
      document.getElementById(minId).style.color = "red";
      else
      document.getElementById(minId).style.color = "black";

      document.getElementById(maxId).innerHTML = "Local Maximum = "+ max.toFixed(numDecimalPlaces);
      document.getElementById(avId).innerHTML = "Local Average = "+ average.toFixed(numDecimalPlaces);
      document.getElementById(devId).innerHTML = "Local Deviation = "+ deviation.toFixed(numDecimalPlaces);


}



function drawAnalyseDifferenceMaps(){

  var old_tbody = document.getElementById("id_analyseTableBody");
  var new_tbody = document.createElement('tbody');


  var canvasREF = document.getElementById("id_anaylseRatioRef");
  var canvasRGB = document.getElementById("id_anaylseRatioRGB");
  var canvasHSV = document.getElementById("id_anaylseRatioHSV");
  var canvasLAB = document.getElementById("id_anaylseRatioLAB");
  var canvasCIEDE2000 = document.getElementById("id_anaylseRatioDe2000");
  var canvasDE94 = document.getElementById("id_anaylseRatioDE94");
  var canvasDIN99 = document.getElementById("id_anaylseRatioDIN99");

  canvasREF.width = resolutionX_differenceMetrics;
  canvasREF.height = 1;
  canvasRGB.width = resolutionX_differenceMetrics;
  canvasRGB.height = 1;
  canvasHSV.width = resolutionX_differenceMetrics;
  canvasHSV.height = 1;
  canvasLAB.width = resolutionX_differenceMetrics;
  canvasLAB.height = 1;
  canvasCIEDE2000.width = resolutionX_differenceMetrics;
  canvasCIEDE2000.height = 1;
  canvasDE94.width = resolutionX_differenceMetrics;
  canvasDE94.height = 1;
  canvasDIN99.width = resolutionX_differenceMetrics;
  canvasDIN99.height = 1;

  var refCtx = canvasREF.getContext("2d");
  var refData = refCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var rgbCtx = canvasRGB.getContext("2d");
  var rgbData = rgbCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var hsvCtx = canvasHSV.getContext("2d");
  var hsvData = hsvCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var labCtx = canvasLAB.getContext("2d");
  var labData = labCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var de94Ctx = canvasDE94.getContext("2d");
  var de94Data = de94Ctx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var de2000Ctx = canvasCIEDE2000.getContext("2d");
  var de2000Data = de2000Ctx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var din99Ctx = canvasDIN99.getContext("2d");
  var din99Data = din99Ctx.getImageData(0, 0, resolutionX_differenceMetrics, 1);

  // for Preview
  //var canvasPreviewREF = document.getElementById("id_anaylsePreviewRef");
  //var canvasPreviewC1 = document.getElementById("id_anaylsePreviewC");

  /*canvasPreviewREF.width = resolutionX_differenceMetrics;
  canvasPreviewREF.height = 1;
  canvasPreviewC1.width = resolutionX_differenceMetrics;
  canvasPreviewC1.height = 1;
  var ref1PreviewCtx = canvasPreviewREF.getContext("2d");
  var ref1PreviewData = ref1PreviewCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);
  var c1PreviewCtx = canvasPreviewC1.getContext("2d");
  var c1PreviewData = c1PreviewCtx.getImageData(0, 0, resolutionX_differenceMetrics, 1);*/

  bandSketch.calcNewDistances();

  var currentPos = [0,0,0,0,0,0,0];
  var currentWidth = [0,0,0,0,0,0,0];
  var colorRef = new classColor_RGB(0.5,0.5,0.5);

  var borderWidth = 2; //px

  var restWidth = resolutionX_differenceMetrics-(bandSketch.getBandLenght()-bandSketch.getNumConstBands()-1)*borderWidth;

  for (var i = 0; i < bandSketch.getBandLenght(); i++) {

    var tr = document.createElement('tr');

    if(bandSketch.getRefDistance(i)==0){
      var td = document.createElement('td');
      td.className = "class_tableInput";
      var tmpVal = i+1;
      td.appendChild(document.createTextNode("constant "+tmpVal));
      tr.appendChild(td);
      // ref
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // rgb
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // hsv
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // lab
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // DE94
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // DE00
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      // DIN99
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      td = document.createElement('td');
      td.className = "class_tableInput";
      td.appendChild(document.createTextNode("/"));
      tr.appendChild(td);
      new_tbody.appendChild(tr);
      continue;
    }

    var td = document.createElement('td')
    td.className = "class_tableInput";
    var tmpVal = i+1;
    td.appendChild(document.createTextNode("scaled "+tmpVal));
    tr.appendChild(td);

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// REF

    var tmpRatio = bandSketch.getRefDistance(i)/bandSketch.getDistanceSumRef();
    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getRefDistance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[0] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[0]; x++){
      var index = (currentPos[0]+x) * 4;
      refData.data[index + 0] = Math.round(colorRef.getRValue() * 255); // r
      refData.data[index + 1] = Math.round(colorRef.getGValue() * 255); // g
      refData.data[index + 2] = Math.round(colorRef.getBValue() * 255); // b
      refData.data[index + 3] = 255; //a

      /*ref1PreviewData.data[index + 0] = Math.round(colorRef.getRValue() * 255); // r
      ref1PreviewData.data[index + 1] = Math.round(colorRef.getGValue() * 255); // g
      ref1PreviewData.data[index + 2] = Math.round(colorRef.getBValue() * 255); // b
      ref1PreviewData.data[index + 3] = 255; //a*/
    }
    currentPos[0]=currentPos[0]+currentWidth[0];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[0]+x) * 4;
        refData.data[index + 0] = Math.round(0); // r
        refData.data[index + 1] = Math.round(0); // g
        refData.data[index + 2] = Math.round(0); // b
        refData.data[index + 3] = 255; //a

        /*ref1PreviewData.data[index + 0] = Math.round(0); // r
        ref1PreviewData.data[index + 1] = Math.round(0); // g
        ref1PreviewData.data[index + 2] = Math.round(0); // b
        ref1PreviewData.data[index + 3] = 255; //a*/
      }
      currentPos[0]=currentPos[0]+borderWidth;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// RGB

    var color1 = bandSketch.getC1Color(i,"rgb");
    var color2 = bandSketch.getC2Color(i,"rgb");


    tmpRatio = bandSketch.getRGBDistance(i)/bandSketch.getDistanceSumRGB();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getRGBDistance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[1] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[1]; x++){
      var index = (currentPos[1]+x) * 4;

      var tmpRatio = x/currentWidth[1];

      var rValue = color1.getRValue() + (color2.getRValue() - color1.getRValue()) * tmpRatio;
      var gValue = color1.getGValue() + (color2.getGValue() - color1.getGValue()) * tmpRatio;
      var bValue = color1.getBValue() + (color2.getBValue() - color1.getBValue()) * tmpRatio;

      rgbData.data[index + 0] = Math.round(rValue * 255); // r
      rgbData.data[index + 1] = Math.round(gValue * 255); // g
      rgbData.data[index + 2] = Math.round(bValue * 255); // b
      rgbData.data[index + 3] = 255; //a
    }
    currentPos[1]=currentPos[1]+currentWidth[1];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[1]+x) * 4;
        rgbData.data[index + 0] = Math.round(0); // r
        rgbData.data[index + 1] = Math.round(0); // g
        rgbData.data[index + 2] = Math.round(0); // b
        rgbData.data[index + 3] = 255; //a
      }

    currentPos[1]=currentPos[1]+borderWidth;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// hsv

    color1 = bandSketch.getC1Color(i,"hsv");
    color2 = bandSketch.getC2Color(i,"hsv");

    var tmpDis = color1.getSValue() * 50; // radius 50; center(0,0,0);
    var tmpRad = (color1.getHValue() * Math.PI * 2) - Math.PI;
    var xPos = tmpDis * Math.cos(tmpRad);
    var yPos = tmpDis * Math.sin(tmpRad);
    var zPos = color1.getVValue() - 50;

    var tmpDis2 = color2.getSValue() * 50;
    var tmpRad2 = (color2.getHValue() * Math.PI * 2) - Math.PI;
    var xPos2 = tmpDis2 * Math.cos(tmpRad2);
    var yPos2 = tmpDis2 * Math.sin(tmpRad2);
    var zPos2 = color2.getVValue() - 50;

    tmpRatio = bandSketch.getHSVDistance(i)/bandSketch.getDistanceSumHSV();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getHSVDistance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[2] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[2]; x++){
      var index = (currentPos[2]+x) * 4;

      var tmpRatio = x/currentWidth[2];

      var tmpX = xPos + (xPos2 - xPos) * tmpRatio;
      var tmpY = yPos + (yPos2 - yPos) * tmpRatio;
      var tmpZ = zPos + (zPos2 - zPos) * tmpRatio;

      var tmpH = (Math.atan2(tmpY, tmpX) + Math.PI) / (Math.PI * 2);
      var tmpS = Math.sqrt(Math.pow(tmpX, 2) + Math.pow(tmpY, 2)) / 50;
      var tmpV = tmpZ + 50;
      var tmpCurrentHSVColor = new classColor_HSV(tmpH, tmpS, tmpV);

      var tmpCurrentColor = tmpCurrentHSVColor.calcRGBColor();

      hsvData.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
      hsvData.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
      hsvData.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
      hsvData.data[index + 3] = 255; //a
    }
    currentPos[2]=currentPos[2]+currentWidth[2];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[2]+x) * 4;
        hsvData.data[index + 0] = Math.round(0); // r
        hsvData.data[index + 1] = Math.round(0); // g
        hsvData.data[index + 2] = Math.round(0); // b
        hsvData.data[index + 3] = 255; //a
      }

    currentPos[2]=currentPos[2]+borderWidth;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// lab
    color1 = bandSketch.getC1Color(i,"lab");
    color2 = bandSketch.getC2Color(i,"lab");

    tmpRatio = bandSketch.getLABDistance(i)/bandSketch.getDistanceSumLAB();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getLABDistance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[3] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[3]; x++){
      var index = (currentPos[3]+x) * 4;

      var tmpRatio = x/currentWidth[3];

      var lValue = color1.get1Value() + (color2.get1Value() - color1.get1Value()) * tmpRatio;
      var aValue = color1.get2Value() + (color2.get2Value() - color1.get2Value()) * tmpRatio;
      var bValue = color1.get3Value() + (color2.get3Value() - color1.get3Value()) * tmpRatio;

      var tmpCurrentLABColor = new classColor_LAB(lValue,aValue,bValue);
      var tmpCurrentColor = tmpCurrentLABColor.calcRGBColor();

      labData.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
      labData.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
      labData.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
      labData.data[index + 3] = 255; //a
    }
    currentPos[3]=currentPos[3]+currentWidth[3];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[3]+x) * 4;
        labData.data[index + 0] = Math.round(0); // r
        labData.data[index + 1] = Math.round(0); // g
        labData.data[index + 2] = Math.round(0); // b
        labData.data[index + 3] = 255; //a
      }

    currentPos[3]=currentPos[3]+borderWidth;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// de94
    tmpRatio = bandSketch.getDE94Distance(i)/bandSketch.getDistanceSumDE94();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getDE94Distance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[4] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[4]; x++){
      var index = (currentPos[4]+x) * 4;

      var tmpRatio = x/currentWidth[4];

      var lValue = color1.get1Value() + (color2.get1Value() - color1.get1Value()) * tmpRatio;
      var aValue = color1.get2Value() + (color2.get2Value() - color1.get2Value()) * tmpRatio;
      var bValue = color1.get3Value() + (color2.get3Value() - color1.get3Value()) * tmpRatio;

      var tmpCurrentLABColor = new classColor_LAB(lValue,aValue,bValue);
      var tmpCurrentColor = tmpCurrentLABColor.calcRGBColor();

      de94Data.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
      de94Data.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
      de94Data.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
      de94Data.data[index + 3] = 255; //a

      /*if(document.getElementById("analyse_SelectMetric").value==0){
        c1PreviewData.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
        c1PreviewData.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
        c1PreviewData.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
        c1PreviewData.data[index + 3] = 255; //a
      }*/
    }
    currentPos[4]=currentPos[4]+currentWidth[4];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[4]+x) * 4;
        de94Data.data[index + 0] = Math.round(0); // r
        de94Data.data[index + 1] = Math.round(0); // g
        de94Data.data[index + 2] = Math.round(0); // b
        de94Data.data[index + 3] = 255; //a

        /*if(document.getElementById("analyse_SelectMetric").value==0){
          c1PreviewData.data[index + 0] = Math.round(0); // r
          c1PreviewData.data[index + 1] = Math.round(0); // g
          c1PreviewData.data[index + 2] = Math.round(0); // b
          c1PreviewData.data[index + 3] = 255; //a
        }*/
      }

    currentPos[4]=currentPos[4]+borderWidth;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// de2000
    tmpRatio = bandSketch.getCIEDE2000Distance(i)/bandSketch.getDistanceSumCIEDE2000();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getCIEDE2000Distance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[5] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[5]; x++){
      var index = (currentPos[5]+x) * 4;

      var tmpRatio = x/currentWidth[5];

      var lValue = color1.get1Value() + (color2.get1Value() - color1.get1Value()) * tmpRatio;
      var aValue = color1.get2Value() + (color2.get2Value() - color1.get2Value()) * tmpRatio;
      var bValue = color1.get3Value() + (color2.get3Value() - color1.get3Value()) * tmpRatio;

      var tmpCurrentLABColor = new classColor_LAB(lValue,aValue,bValue);
      var tmpCurrentColor = tmpCurrentLABColor.calcRGBColor();

      de2000Data.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
      de2000Data.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
      de2000Data.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
      de2000Data.data[index + 3] = 255; //a

      /*if(document.getElementById("analyse_SelectMetric").value==1){
        c1PreviewData.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
        c1PreviewData.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
        c1PreviewData.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
        c1PreviewData.data[index + 3] = 255; //a
      }*/
    }
    currentPos[5]=currentPos[5]+currentWidth[5];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[5]+x) * 4;
        de2000Data.data[index + 0] = Math.round(0); // r
        de2000Data.data[index + 1] = Math.round(0); // g
        de2000Data.data[index + 2] = Math.round(0); // b
        de2000Data.data[index + 3] = 255; //a

        /*if(document.getElementById("analyse_SelectMetric").value==1){
          c1PreviewData.data[index + 0] = Math.round(0); // r
          c1PreviewData.data[index + 1] = Math.round(0); // g
          c1PreviewData.data[index + 2] = Math.round(0); // b
          c1PreviewData.data[index + 3] = 255; //a
        }*/
      }

    currentPos[5]=currentPos[5]+borderWidth;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////
    //// din99
    color1 = bandSketch.getC1Color(i,"din99");
    color2 = bandSketch.getC2Color(i,"din99");
    tmpRatio = bandSketch.getDIN99Distance(i)/bandSketch.getDistanceSumDIN99();

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode(bandSketch.getDIN99Distance(i).toFixed(numDecimalPlaces)));
    tr.appendChild(td);

    td = document.createElement('td')
    td.className = "class_tableInput";
    td.appendChild(document.createTextNode((tmpRatio*100).toFixed(numDecimalPlaces)+"%"));
    tr.appendChild(td);

    currentWidth[6] = Math.ceil(restWidth*tmpRatio);

    for(var x=0; x<currentWidth[6]; x++){
      var index = (currentPos[6]+x) * 4;

      var tmpRatio = x/currentWidth[6];

      var l99Value = color1.get1Value() + (color2.get1Value() - color1.get1Value()) * tmpRatio;
      var a99Value = color1.get2Value() + (color2.get2Value() - color1.get2Value()) * tmpRatio;
      var b99Value = color1.get3Value() + (color2.get3Value() - color1.get3Value()) * tmpRatio;

      var tmpCurrentDIN99Color = new classColorDIN99(l99Value,a99Value,b99Value);
      var tmpCurrentColor = tmpCurrentDIN99Color.calcRGBColor();

      din99Data.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
      din99Data.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
      din99Data.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
      din99Data.data[index + 3] = 255; //a

      /*if(document.getElementById("analyse_SelectMetric").value==2){
        c1PreviewData.data[index + 0] = Math.round(tmpCurrentColor.getRValue() * 255); // r
        c1PreviewData.data[index + 1] = Math.round(tmpCurrentColor.getGValue() * 255); // g
        c1PreviewData.data[index + 2] = Math.round(tmpCurrentColor.getBValue() * 255); // b
        c1PreviewData.data[index + 3] = 255; //a
      }*/
    }
    currentPos[6]=currentPos[6]+currentWidth[6];

    if(i != bandSketch.getBandLenght()-1){
      for(var x=0; x<borderWidth; x++){
        var index = (currentPos[6]+x) * 4;
        din99Data.data[index + 0] = Math.round(0); // r
        din99Data.data[index + 1] = Math.round(0); // g
        din99Data.data[index + 2] = Math.round(0); // b
        din99Data.data[index + 3] = 255; //a

        /*if(document.getElementById("analyse_SelectMetric").value==2){
          c1PreviewData.data[index + 0] = Math.round(0); // r
          c1PreviewData.data[index + 1] = Math.round(0); // g
          c1PreviewData.data[index + 2] = Math.round(0); // b
          c1PreviewData.data[index + 3] = 255; //a
        }*/
      }

    currentPos[6]=currentPos[6]+borderWidth;
    }


    new_tbody.appendChild(tr);

  }

  refCtx.putImageData(refData, 0, 0); // update ColorspaceCanvas;
  rgbCtx.putImageData(rgbData, 0, 0); // update ColorspaceCanvas;
  hsvCtx.putImageData(hsvData, 0, 0); // update ColorspaceCanvas;
  labCtx.putImageData(labData, 0, 0); // update ColorspaceCanvas;
  de94Ctx.putImageData(de94Data, 0, 0); // update ColorspaceCanvas;
  de2000Ctx.putImageData(de2000Data, 0, 0); // update ColorspaceCanvas;
  din99Ctx.putImageData(din99Data, 0, 0); // update ColorspaceCanvas;

  //.putImageData(ref1PreviewData, 0, 0); // update ColorspaceCanvas;
  //c1PreviewCtx.putImageData(c1PreviewData, 0, 0); // update ColorspaceCanvas;

  old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
  new_tbody.id="id_analyseTableBody";


}
