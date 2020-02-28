
window.onbeforeunload = function() { return "Attention: Your work will be lost, if you will leave this page."; };

// main
window.onload = function() {

  includeHTML();

    if (doWorker && window.Worker) {
      var script = document.createElement('script');
      script.onload = function () {
        finishedLoadingScripts();
      };
      script.src = "js_v_0_9/src/sections/edit/edit_elements/pathplot/worker/mainThread_listenerEvent_pathplot.js";
      document.head.appendChild(script);

    }
    else {
      var script = document.createElement('script');
      script.onload = function () {
        finishedLoadingScripts();
      };
      script.src = "js_v_0_9/src/sections/edit/edit_elements/pathplot/pp_background.js";
      document.head.appendChild(script);
    }

}

function finishedLoadingScripts(){
  // init section object
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Welcome Section";
  welcomeSection = new class_Welcome_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: MyDesigns Section";
  myDesignsSection = new class_MyDesigns_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Gallery Section";
  gallerySection = new class_Gallery_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: New CMS Section";
  newSection = new class_NewCMS_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Edit Section";
  editSection = new class_Edit_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Edit (Probe) Section";
  probeSection = new class_Edit_Probe_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Edit (Optimization) Section";
  optiSection = new class_Edit_Optimization_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Test-Function Section";
  testingSection = new class_TestFunction_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Export Section";
  exportSection = new class_Export_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Tutorial Section";
  tutorialSection = new class_Tutorials_Section();

  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Events";
  document.getElementById('id_inputCMSData').addEventListener("change", myDesignsSection.readCMSFile);
  document.getElementById('id_inputSessionData').addEventListener("change", myDesignsSection.readSessionFile);
  document.getElementById('id_inputData').addEventListener("change", editSection.readDataFile);
  initColorPicker();
  initDropDowns();

  if (doWorker && window.Worker){
    global_worker_3DSpaceGrids = new Worker(version_JS_FolderName+"/src/global/worker/worker_calc3DSpaceModels.js");
    global_worker_3DSpaceGrids.addEventListener('message', updateSpaceGridInfo, false);
    global_worker_3DSpaceGrids.postMessage({'message':'init'});
    global_worker_3DSpaceGrids.postMessage(json_message_colorSettingsInfo());
    global_worker_3DSpaceGrids.postMessage({'message':'updateModels'});
  }
  else {
    document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Calculation: 3D LAB Grid";
    calcSpaceGridLAB();
    document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Calculation: 3D DIN99 Grid";
    calcSpaceGridDIN99();
    document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Calculation: 3D LMS Grid";
    calcSpaceGridLMS();
  }

  checkLandscapeWindow();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Loading Finished";
  welcomeSection.updateSection();
}


window.onresize = function(event) {

    // if Edit Page is visible
    checkLandscapeWindow();
    editSection.resize();
    optiSection.resize();
    probeSection.resize();

    testingSection.resize();



    /*if(document.getElementById("id_EditPage").style.display!="none"){
      updateEditPage();

      if(mapping_doAnimation){
        updateMappingSize();
      }

      if(pathplot_doAnimation){
        pathPlot3D_Resize();
      }
    }
    else {
      // if Test Page is visible
      if(testmapping_doAnimation){
        updateTestMappingCanvas();
      }
    }

    if(metricInt_Graph_doAnimation){
      update_MetricInt_RenderSize();
    }*/

};


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, false); // true); //
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };

  function checkLandscapeWindow(){

    var ratio = window.innerWidth/window.innerHeight;
    //console.log(ratio);
    if(ratio <4/3){
      document.getElementById("id_PopUp_LandscapeWindow").style.display = "flex";
    }
    else{
      document.getElementById("id_PopUp_LandscapeWindow").style.display = "none";
    }
  }
