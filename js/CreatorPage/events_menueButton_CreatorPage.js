//////////////////////////////
///// Menue button Events /////
//////////////////////////////

function createSideExport(){
  if(bandSketch.getBandLength()!=0){
    document.getElementById("id_exportWindow").style.display = "initial";
    exportSideOpen = true;
    initExportWindow();
  }
}

function colormapNameChangeEnter(e){
   if (e.keyCode == 13 && globalColormap1!=undefined)
    globalColormap1.setColormapName(document.getElementById("id_InputMapName").value);
}

function colormapNameChange(e){
    if(globalColormap1!=undefined){
     globalColormap1.setColormapName(document.getElementById("id_InputMapName").value);
    }
}

function deleteCreatedColormap(){

  if (confirm("Do you really want to delete the colormap?") == true) {
      clearCreateSide();

      bandSketch.clearSketch();
      orderColorSketch();
  } else {
      // do nothing
  }

}

function createPage_showHelp(){

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // Sketch
  var workrect = document.getElementById("id_colormapSketch").getBoundingClientRect();
  var top = (workrect.top+workrect.height) + scrollTop - clientTop;
  var left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_sketchHelp").style.display="inline-block";
  document.getElementById("createSide_sketchHelp").style.left= left+"px";
  document.getElementById("createSide_sketchHelp").style.top= top+"px";

  // Colorspace
  workrect = document.getElementById("id_Colorspace_Menue").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_colorspaceHelp").style.display="inline-block";
  document.getElementById("createSide_colorspaceHelp").style.left= left+"px";
  document.getElementById("createSide_colorspaceHelp").style.top= top+"px";

  // Add band buttons
  workrect = document.getElementById("button_AddConstantBand").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_add1Help").style.display="inline-block";
  document.getElementById("createSide_add1Help").style.left= left+"px";
  document.getElementById("createSide_add1Help").style.top= top+"px";

  workrect = document.getElementById("button_AddScaleBand").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_add2Help").style.display="inline-block";
  document.getElementById("createSide_add2Help").style.left= left+"px";
  document.getElementById("createSide_add2Help").style.top= top+"px";

  workrect = document.getElementById("button_AddDoubleBands").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_add3Help").style.display="inline-block";
  document.getElementById("createSide_add3Help").style.left= left+"px";
  document.getElementById("createSide_add3Help").style.top= top+"px";

  workrect = document.getElementById("button_AddTripleBands").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_add4Help").style.display="inline-block";
  document.getElementById("createSide_add4Help").style.left= left+"px";
  document.getElementById("createSide_add4Help").style.top= top+"px";

  workrect = document.getElementById("button_AddQuadrupleBands").getBoundingClientRect();
  top = (workrect.top+workrect.height) + scrollTop - clientTop;
  left = workrect.left + scrollLeft - clientLeft;
  document.getElementById("createSide_add5Help").style.display="inline-block";
  document.getElementById("createSide_add5Help").style.left= left+"px";
  document.getElementById("createSide_add5Help").style.top= top+"px";






  if(bandSketch.getBandLength() != 0){

    if(tableIsExpand==false){
      workrect = document.getElementById("id_expandTablebutton").getBoundingClientRect();
      top = (workrect.top+(workrect.height/2)) + scrollTop - clientTop;
      left = workrect.left+workrect.width + scrollLeft - clientLeft;
      document.getElementById("createSide_expandtableHelp").style.display="inline-block";
      document.getElementById("createSide_expandtableHelp").style.left= left+"px";
      document.getElementById("createSide_expandtableHelp").style.top= top+"px";
    }
  }

}

function createPage_hideHelp(){

  document.getElementById("createSide_sketchHelp").style.display="none";
  document.getElementById("createSide_colorspaceHelp").style.display="none";
  document.getElementById("createSide_add1Help").style.display="none";
  document.getElementById("createSide_add2Help").style.display="none";
  document.getElementById("createSide_add3Help").style.display="none";
  document.getElementById("createSide_add4Help").style.display="none";
  document.getElementById("createSide_add5Help").style.display="none";
  document.getElementById("createSide_expandtableHelp").style.display="none";

}

function clearCreateSide(){
  colormapProcess = [];
  processPosition = -1;

  //bandSketch.clearSketch();
  //orderColorSketch(colorspaceModus);

  for(var i = refElementContainer.length-1; i>=0; i--){
    refElementContainer[i].remove();
    refElementContainer.pop();
  }
}

function backwardColormapProcess(){
  if(processPosition>0){
    processPosition--;
    globalColormap1 = colormapProcess[processPosition];
    colormap2Sketch(globalColormap1);
  }
}

function forwardColormapProcess(){
  if(processPosition<colormapProcess.length-1){
    processPosition++;
    globalColormap1 = colormapProcess[processPosition];
    colormap2Sketch(globalColormap1);
  }
}

function loadColormapCreateSide(){
  document.getElementById("id_inputData").click();
}
