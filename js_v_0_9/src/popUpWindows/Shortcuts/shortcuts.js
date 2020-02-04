//////////////////////////////////////
/// Shortcuts  Window /////
///////////////////////////////////

var sc_label_arrayEdit = ["Undo","Redo","Save CMS","Save As New CMS","Scale CMS","Clear CMS","Export CMS","Change Interpolation Space"];
var sc_key_arrayEdit = ["z","y","s","d","x","c","e","i"];
var sc_keyNum_arrayEdit = [90,89,83,68,88,67,69,73];
var sc_function_arrayEdit = [
  // Undo
  function(){editSection.undo();},
  // Redo
  function(){editSection.redo();},
  // Save CMS
  function(){editSection.save();},
  // Save CMS as New
  function(){editSection.saveAsNew();},
  //Scale CMS
  function(){openScale();},
  //Clear CMS
  function(){clearColormap();},
  //Export CMS
  function(){exportEditCMS();},
  //Change Interpolation Space
  function(){
    console.log("Hello");
  }
];

var sc_label_arrayGlobal = ["Navigation"];
var sc_key_arrayGlobal = ["n"];
var sc_keyNum_arrayGlobal = [78];
var sc_function_arrayGlobal = [function(){
  if(document.getElementById('id_PopUp_navigationWindow').style.display!="none")
    closeNaviWindow();
  else
    openNaviWindow();
}];


document.onkeydown = keyDownDocumentHandler;

function keyDownDocumentHandler(event){


  if(event.ctrlKey){// && event.shiftKey){
    event.preventDefault();
    var keynum;
    if(window.event) { // IE
      keynum = event.keyCode;
    } else if(event.which){ // Netscape/Firefox/Opera
      keynum = event.which;
    }

    //console.log(keynum);

    //////////////////////////////////
    /// General

    for (var i = 0; i < sc_keyNum_arrayGlobal.length; i++) {
      if(keynum==sc_keyNum_arrayGlobal[i]){
        sc_function_arrayGlobal[i]();
        return;
      }
    }

    //////////////////////////////////
    /// Edit Page

  if(editSection.isSectionOpen()){
      for (var i = 0; i < sc_keyNum_arrayEdit.length; i++) {
        if(keynum==sc_keyNum_arrayEdit[i]){
          sc_function_arrayEdit[i]();
          return;
        }
      }
  }


  //////////////////////////////////
  /// Testing Page
  /*if(document.getElementById("id_TestingPage").style.display!="none"){
    var keynum;
    if(window.event) { // IE
      keynum = event.keyCode;
    } else if(event.which){ // Netscape/Firefox/Opera
      keynum = event.which;
    }

    switch (keynum) {

      case 37:
        // left arrow
        if(testingModus>0)
         switchToPreviousTest();
      return;
      case 38:
          // up arrow
          if(testingModus==2 && reportModus>0)
            switchToPreviousReport();
      return;
      case 39:
        // right arrow
        if(testingModus==1 && reportListTestField.length>0)
          switchToNextTest();
        else if(testingModus==0)
          switchToNextTest();
      return;
      case 40:
        // down arrow
        if(testingModus==2 && reportModus<3)
          switchToNextReport();
      return;
    }*/

    //console.log(keynum);
  }

}
