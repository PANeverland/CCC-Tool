function switchSection(type){

  switch (type) {
    case 0:
      welcomeSection.showSection();
    break;
    case 1:
      myDesignsSection.showSection();
    break;
    case 2:
      gallerySection.showSection();
    break;
    case 3:
      if(myDesignsSection.checkMyDesignLimit()){
          openAlert("You already used the full CMS-storage!");
          return;
      }
      newSection.showSection();
    break;
    case 4:
      editSection.showSection();
    break;
    case 5:
      testingSection.showSection();
    break;
  }
}



function startLeaveEditPage(){

  if(document.getElementById("id_EditPage").display!="none"){

    if(somethingChanged){
      askType=4;
      openAskWindow();
    }
    else{

      if(editPage_optimizationMode){
        changeOpimizationMode();
      }

      showMyDesignsPage();
    }

  }
  else{
    showMyDesignsPage();
  }

}

function showWelcomePage(){
  switchSection(0);
}

function showTestPage(){
  switchSection(5);
}

function showMyDesignsPage(){
  switchSection(1);
}

function showEditPage(){
switchSection(4);
}

function showGallery(){
switchSection(2);
}

function showNewCMSPage(){
switchSection(3);
}


function showTesting(){
  switch (true) {
    case editSection.isSectionOpen():
        var clone = cloneCMS(editSection.editCMS);
        if(clone.getKeyLength()==0){
          openAlert("Your CMS is empty. Please create first a colormap before visiting the testing section.");
          clone.deleteReferences();
          return;
        }
        testingSection.setCMS(clone);
        testingSection.backSection="edit";
      break;
    case myDesignsSection.isSectionOpen():
         if(myDesignsSection.getMyDesignLength()==0){
           openAlert("Your MyDesigns list is empty. Please create first a colormap before visiting the testing section.");
           return;
         }
         testingSection.backSection="myDesigns";
      break;
    default:
      return;
  }
  testingSection.showSection();
}
