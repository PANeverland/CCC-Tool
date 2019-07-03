//////////////////////////////////////
/// Wait /////
///////////////////////////////////


function openTestSection(){

  updateTestMappingCanvas(false); // updateSize
  document.getElementById("id_Test_ScaleFactor").value = scalefactor3DTest;


  var selectobject=document.getElementById("id_TestSection_CMS_Select")
  for (var i=selectobject.length-1; i>=0; i--){
     selectobject.remove(i);
  }

  for (var i = 0; i < myDesignsList.length; i++) {
    var optionCMS = document.createElement("option");
    optionCMS.innerHTML = myDesignsList[i].getColormapName();

    selectobject.add(optionCMS);
  }
  selectobject.selectedIndex = 0;

  document.getElementById("id_TestVisualization_Pixel").checked = true;
  updateTestVis();

  testingModus=0;
  document.getElementById("id_Test_FunctionCollection").style.width = "100vw";
  document.getElementById("id_Test_TestDiv").style.width = "0vw";
  document.getElementById("id_Test_ReportDiv").style.width = "0vw";
  document.getElementById("id_Test_pageSwitchRight").style.visibility = "visible";
  document.getElementById("id_Test_pageSwitchLeft").style.visibility = "hidden";

  if(reportListTestField.length==0)
    document.getElementById("id_Test_pageSwitchStatus2").style.visibility = "hidden";

  document.getElementById("id_Test_pageSwitchStatus0").innerHTML = "&#x25C9;";
  document.getElementById("id_Test_pageSwitchStatus1").innerHTML = "&#x25CE;";
  document.getElementById("id_Test_pageSwitchStatus2").innerHTML = "&#x25CE;";
  selectTestCMS();

}

function switchTestDisplay(type) {

  if(testingModus!=type){
    testingModus=type;
    slideTestDisplayDivs();
  }

}

function switchToPreviousTest() {
    testingModus--;
    slideTestDisplayDivs();
}

function switchToNextTest() {
  testingModus++;
  slideTestDisplayDivs();
}

function slideTestDisplayDivs(){

  document.getElementById("id_Test_pageSwitchRight").style.visibility = "hidden";
  document.getElementById("id_Test_pageSwitchLeft").style.visibility = "hidden";

  document.getElementById("id_Test_pageSwitchStatus0").innerHTML = "&#x25CE;";
  document.getElementById("id_Test_pageSwitchStatus1").innerHTML = "&#x25CE;";
  document.getElementById("id_Test_pageSwitchStatus2").innerHTML = "&#x25CE;";

  switch (testingModus) {
    case 0:
    document.getElementById("id_Test_FunctionCollection").style.width = "100vw";
    document.getElementById("id_Test_TestDiv").style.width = "0vw";
    document.getElementById("id_Test_ReportDiv").style.width = "0vw";
    document.getElementById("id_Test_pageSwitchRight").style.visibility = "visible";
    document.getElementById("id_Test_pageSwitchStatus0").innerHTML = "&#x25C9;";
    drawTestCollection();
    break;
    case 1:
      document.getElementById("id_Test_FunctionCollection").style.width = "0vw";
      document.getElementById("id_Test_TestDiv").style.width = "100vw";
      document.getElementById("id_Test_ReportDiv").style.width = "0vw";
      document.getElementById("id_Test_pageSwitchStatus1").innerHTML = "&#x25C9;";
      document.getElementById("id_Test_pageSwitchLeft").style.visibility = "visible";

      if(reportListTestField.length>0)
        document.getElementById("id_Test_pageSwitchRight").style.visibility = "visible";

      selectNewTestType();
    break;
    case 2:
      document.getElementById("id_Test_FunctionCollection").style.width = "0vw";
      document.getElementById("id_Test_TestDiv").style.width = "0vw";
      document.getElementById("id_Test_ReportDiv").style.width = "100vw";
      document.getElementById("id_Test_pageSwitchStatus2").innerHTML = "&#x25C9;";
      document.getElementById("id_Test_pageSwitchLeft").style.visibility = "visible";
      calc_Report();
    break;
  }

}


function selectTestCMS(){

  globalCMS1 = cloneCMS(myDesignsList[document.getElementById("id_TestSection_CMS_Select").selectedIndex]);
  globalCMS1JSON=inform_Worker_GlobalCMS();

  drawCanvasColormap("id_TestPage_CMS_VIS_ColormapLinear", globalCMS1);

  testpreviewWorker_CCCTest.postMessage(globalCMS1JSON);
  testpreviewWorker_Collection.postMessage(globalCMS1JSON);
  testpreviewWorker_RealWorldData.postMessage(globalCMS1JSON);
  testfunctionWorker_InteractiveTest.postMessage(globalCMS1JSON);
  testfunctionWorker_Report0.postMessage(globalCMS1JSON);

  switch (testingModus) {
    case 0:
      drawTestCollection();
    break;
    case 1:
      selectNewTestType();
    break;
    case 2:
      calc_Report();
    break;
  }

}
