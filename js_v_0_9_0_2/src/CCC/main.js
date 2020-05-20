
window.onbeforeunload = function() { return "Attention: Your work will be lost, if you will leave this page."; };

// main
window.onload = function() {

  includeHTML();


  if (typeof (Worker) === undefined){
    document.getElementById("id_PopUp_NoWorkerWindow").style.display="flex";
    return;
  }

  if (typeof OffscreenCanvas === 'function'){
    browserCanOffscreenCanvas = true;
  }
  else{
    browserCanOffscreenCanvas = false;
  }

  updateToolVersion();

  // init section object
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Welcome Section";
  welcomeSection = new class_Welcome_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: MyDesigns Section";
  myDesignsSection = new class_MyDesigns_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Gallery Section";
  gallerySection = new class_Gallery_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: New CMS Section";
  newSection = new class_NewCMS_Section();
  document.getElementById("id_WelcomePage_LoadingText").innerHTML = "Initialization: Auto Generator Section";
  autoGenSection = new class_AutoGen_Section();
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

  global_worker_3DSpaceGrids = new Worker("../../"+version_JS_FolderName+"/src/Global/worker/worker_calc3DSpaceModels.js");
  global_worker_3DSpaceGrids.addEventListener('message', updateSpaceGridInfo, false);
  global_worker_3DSpaceGrids.postMessage({'message':'init'});
  global_worker_3DSpaceGrids.postMessage(json_message_colorSettingsInfo());
  global_worker_3DSpaceGrids.postMessage({'message':'updateModels'});

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
