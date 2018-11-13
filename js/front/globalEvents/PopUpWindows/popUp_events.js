

//////////////////////////////////////
/// Shortcuts  Window /////
///////////////////////////////////


function closeShortcutsWindow(){
  document.getElementById("id_PopUp_ShortcutsWindow").style.display="none";
}

function openShortcutsWindow(){
  document.getElementById("id_PopUp_ShortcutsWindow").style.display="block";
  document.getElementById("id_dropDownContainer").style.display="none";
}

//////////////////////////////////////
/// Filter Window /////
///////////////////////////////////

function closeFilterWindow(){
  document.getElementById("id_PopUp_FilterWindow").style.display="none";
}

function openFilterWindow(){
  document.getElementById("id_PopUp_FilterWindow").style.display="block";
}


//////////////////////////////////////
/// Impressum Window /////
///////////////////////////////////


function closeImpressum(){
  document.getElementById("id_PopUp_ImpessumWindow").style.display="none";
}

function openImpressum(){
  document.getElementById("id_PopUp_ImpessumWindow").style.display="block";
  document.getElementById("id_dropDownContainer").style.display="none";
}

//////////////////////////////////////
/// Alert Window /////
///////////////////////////////////


function closeAlert(){
  document.getElementById("id_PopUp_AlertWindow").style.display="none";
}

function openAlert(txt){
  document.getElementById("id_PopUp_AlertWindow").style.display="block";
  document.getElementById("id_alertText").innerHTML=txt;
}


//////////////////////////////////////
/// Ask Window /////
///////////////////////////////////

function openScale(){

  if(globalCMS1.getKeyLength()>0){
    document.getElementById("id_PopUp_ScaleWindow").style.display="block";
    document.getElementById("id_popupWindow_ScaleInfoText").style.display="none";
    updateAutoRangeInput();
  }
  document.getElementById("id_dropDownContainer").style.display="none";
}

function checkScale(){

  var start = parseFloat(document.getElementById("id_inputAutoRangeStart").value);
  var end = parseFloat(document.getElementById("id_inputAutoRangeEnd").value);

  if(start>=end){
    //document.getElementById("id_PopUp_ScaleWindow").style.display="none";
    document.getElementById("id_popupWindow_ScaleInfoText").style.display="block";
  }
  else{
    globalCMS1.setAutoRange(start,end);
    updateEditPage();
    document.getElementById("id_PopUp_ScaleWindow").style.display="none";
    document.getElementById("id_popupWindow_ScaleInfoText").style.display="none";
  }

}


function closeScale(){
  document.getElementById("id_PopUp_ScaleWindow").style.display="none";
}




//////////////////////////////////////
/// Ask Window /////
///////////////////////////////////

function openAskWindow(){
    document.getElementById("popupAskWindow").style.display="inline";
    switch (askType) {
      case 0:
      //delete CMS
        document.getElementById("id_askText").innerHTML="Do you really want to clear the CMS?";
        break;
      case 1:
        //delete Band
        document.getElementById("id_askText").innerHTML="Do you really want to delete the Band?";
        break;
        case 2:
          //load Session
          document.getElementById("id_askText").innerHTML="Do you really want to load a session and reject the current session?";
          break;
          case 3:
            //load Session
            document.getElementById("id_askText").innerHTML="Do you really want to delete the colormap?";
            break;

            case 4:
              // leave edit page
              document.getElementById("id_askText").innerHTML="Do you really want to leave the edit page and reject unsaved content?";
              break;
      default:

    }
}

function checkAsk(){
  document.getElementById("popupAskWindow").style.display="none";

  switch (askType) {
    case 0:
      //delete CMS
      globalCMS1.clear();
      switchModifyModus(0);
      updateEditPage();
      break;
    /*case 1:
      //delete Band
      globalCMS1.deleteBand(askIndex);
      orderColorSketch();
      somethingChanged = true;
      saveCreateProcess();
      break;

      case 2:
        //load Session
        document.getElementById("id_inputSessionData").click();
        break;
        */
        case 3:

          myDesignsList.splice(askIndex, 1);

          drawMyDesigns();
        break;

        case 4:
          //leave edit page
          showMyDesignsPage();
          break;

    default:

  }
}


function closeAsk(){
  document.getElementById("popupAskWindow").style.display="none";
}