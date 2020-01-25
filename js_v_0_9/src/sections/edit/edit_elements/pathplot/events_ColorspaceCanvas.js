/////////////////////////////////////
// -------------Event COLORSPACE HUE---------------//
/////////////////////////////////////

function pp_2D_mouseEnter(event){
  if(editSection.isSectionOpen()){
    editSection.part_Pathplot.pp_setCanvasMode(event.target.id);
  }
  else if(optiSection.isSectionOpen()){
    optiSection.part_Pathplot.pp_setCanvasMode(event.target.id);
  }
}

function pp_2D_mouseLeave(event) {
  document.getElementById(event.target.id).style.cursor = "default";
  clearInterval(timer2DAnimation);

  if(editSection.isSectionOpen()){
    editSection.part_Pathplot.pp_CanvasMode = undefined;
    editSection.part_Pathplot.mouseGrappedKeyID=-1;
    if(editSection.part_Pathplot.mouseGrappedColorSide!=-1){
      editSection.part_Pathplot.mouseGrappedColorSide=-1;
      editSection.part_Pathplot.updatePart(true,true,true);
      editSection.saveCreateProcess();
    }
  }
  else if(optiSection.isSectionOpen()){
    editSection.part_Pathplot.pp_CanvasMode = undefined;
    optiSection.part_Pathplot.mouseGrappedKeyID=-1;
    if(optiSection.part_Pathplot.mouseGrappedColorSide!=-1){
      optiSection.part_Pathplot.mouseGrappedColorSide=-1;
      optiSection.part_Pathplot.updatePart(true,true,true);
      optiSection.saveCreateProcess();
    }
  }
}

function pathplot2DAnimation(){
  if(editSection.isSectionOpen()){
    editSection.updateSection();
  }
  else if(editSection.optiSection.isSectionOpen()){
    optiSection.updateSection();
  }
}

function getRGBXYPos(tmpColor,xWidth,yHeight,xStart,yStart,mode){

  var position = [0,0];
  switch (mode) {
    case "rg":
          position[0] = tmpColor.getGValue() * xWidth + xStart;
          position[1] = yStart - tmpColor.getRValue() * yHeight;
          break;
    case "rb":
          position[0] = tmpColor.getBValue() * xWidth + xStart;
          position[1] = yStart - tmpColor.getRValue() * yHeight;
          break;
    case "bg":
          position[0] = tmpColor.getGValue() * xWidth + xStart;
          position[1] = yStart - tmpColor.getBValue() * yHeight;
          break;
    default:
        return;

  }

  return position;

}

function pp_2D_mouseMove(event) {

  // calc mouse pos
  var rect = document.getElementById(event.target.id).getBoundingClientRect();
  var resolutionX = document.getElementById(event.target.id).width;
  var resolutionY = document.getElementById(event.target.id).height;

  var canvasPosX = event.clientX - rect.left;
  var canvasPosY = event.clientY - rect.top;

  if(editSection.isSectionOpen()){
    editSection.part_Pathplot.pp_mouseMove(event.target.id,canvasPosX,canvasPosY);
  }
  else if(optiSection.isSectionOpen()){
    optiSection.part_Pathplot.pp_mouseMove(event.target.id,canvasPosX,canvasPosY);
  }
}

function pp_2D_mouseDown(event) {

  if(editSection.isSectionOpen()){
    if(editSection.part_Pathplot.mouseAboveKeyID!=-1){
        timer2DAnimation = setInterval(pathplot2DAnimation, animationInterval);
        // Calc Band Index
        editSection.part_Pathplot.mouseGrappedKeyID = editSection.part_Pathplot.mouseAboveKeyID;
        editSection.part_Pathplot.updatePart(true,false,false);
    }
  }
  else if(optiSection.isSectionOpen()){
    optiSection.part_Pathplot.pp_mouseMove(event.target.id,canvasPosX,canvasPosY);
  }
}

function pp_2D_mouseUp() {
  optiSection.part_Pathplot.mouseGrappedKeyID=-1;
  optiSection.part_Pathplot.mouseGrappedColorSide=-1;
  clearInterval(timer2DAnimation);

  if(editSection.isSectionOpen()){
    editSection.part_Pathplot.mouseGrappedKeyID=-1;
    editSection.part_Pathplot.mouseGrappedColorSide=-1;
    editSection.part_Pathplot.updatePart(true,true,true);
    editSection.saveCreateProcess();
  }
  else if(optiSection.isSectionOpen()){
    optiSection.part_Pathplot.mouseGrappedKeyID=-1;
    optiSection.part_Pathplot.mouseGrappedColorSide=-1;
    optiSection.part_Pathplot.updatePart(true,true,true);
  }
}
