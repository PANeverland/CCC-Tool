function initMyDesignObj(){

  document.getElementById("id_myDesignsPage_colormap_container").innerHTML = "";


  for (var i = 0; i < numberOfMyDesignsObj; i++) {
    var divRow = document.createElement('div');
    divRow.className = 'row';
    divRow.style.width = '100%';

    var div1 = createMyDesignObject(i);
    divRow.appendChild(div1);

    if(i+1<numberOfMyDesignsObj){
      i++;
      var div2 = createMyDesignObject(i);
      divRow.appendChild(div2);
    }

    document.getElementById("id_myDesignsPage_colormap_container").appendChild(divRow);


  }


  if(anonymousMode==false){
    // load
    // draw
  }

}

function createMyDesignObject(id){

  var divRow = document.createElement('div');
  divRow.className = 'row class_MyDesignObjContainer';


  var tmpDiv = document.createElement('div');
  tmpDiv.className = 'class_MyDesignObjCMSDiv';



  var tmpLabelDiv = document.createElement('div');
  tmpLabelDiv.id="myDesignObj_Label_Div"+id;
  tmpLabelDiv.className = 'class_MyDesignObjCMSCanvas';
  tmpLabelDiv.style.display="flex";
  tmpLabelDiv.style.background="rgb(200, 200, 200)";
  tmpLabelDiv.style.border = "2px solid rgb(180,180,180)";
  tmpLabelDiv.style.borderBottom = "none";
  tmpLabelDiv.style.borderRadius = "0.5vh 0.5vh 0px 0px";

  var tmpLabel = document.createElement('div');
  tmpLabel.id="myDesignObj_Label_"+id;
  tmpLabel.style.width="auto";
  tmpLabel.style.maxWidth="90%";
  tmpLabel.style.marginRight="auto";
  tmpLabel.style.marginLeft="5%";
  tmpLabel.className = 'class_MyDesignObjCMSCanvas';
  tmpLabel.style.color="white";
  tmpLabel.innerHTML="Emty CMS:"


  var tmpCMSInfo = document.createElement('div');
  tmpCMSInfo.id="myDesignObj_Info_"+id;
  tmpCMSInfo.className = 'class_MyDesignObjCMSCanvas';
  tmpCMSInfo.style.width="5%";
  tmpCMSInfo.style.color="white";
  tmpCMSInfo.style.background="none";
  tmpCMSInfo.style.borderLeft = "2px solid rgb(180,180,180)";
  tmpCMSInfo.style.textAlign="center";
  tmpCMSInfo.style.cursor="not-allowed";
  tmpCMSInfo.style.float="right";
  tmpCMSInfo.innerHTML="i"
  tmpCMSInfo.style.color="rgb(180,180,180)";
  tmpCMSInfo.style.visibility="hidden";

  tmpCMSInfo.onmouseover = function() {
    this.style.background = "rgb(150, 150, 150)";
  }

  tmpCMSInfo.onmouseleave = function() {
    this.style.background = "none";
  }

  tmpLabelDiv.appendChild(tmpLabel);
  tmpLabelDiv.appendChild(tmpCMSInfo);
  tmpDiv.appendChild(tmpLabelDiv);

  var tmpCMSlinear = document.createElement('canvas');
  tmpCMSlinear.id="myDesignObj_CMSlinear_"+id;
  tmpCMSlinear.className = 'class_MyDesignObjCMSCanvas classColormapCanvas';
  tmpCMSlinear.style.background="rgb(220,220,220)";
  tmpCMSlinear.style.border = "2px solid rgb(180,180,180)";
  tmpCMSlinear.style.borderBottom = "none";
  tmpDiv.appendChild(tmpCMSlinear);

  var tmpCMSsketch = document.createElement('canvas');
  tmpCMSsketch.id="myDesignObj_CMSsketch_"+id;
  tmpCMSsketch.className = 'class_MyDesignObjCMSCanvas classColormapCanvas';
  tmpCMSsketch.style.background="rgb(220,220,220)";
  tmpCMSsketch.style.border = "2px solid rgb(180,180,180)";
  tmpCMSsketch.style.borderRadius = "0px 0px 0.5vh 0.5vh";
  tmpDiv.appendChild(tmpCMSsketch);

  divRow.appendChild(tmpDiv);


  var tmpDivButtons = document.createElement('div');
  tmpDivButtons.className = 'row class_MyDesignObjButtonsDiv';

  var tmpSubDiv1_Buttons = document.createElement('div');
  tmpSubDiv1_Buttons.style.width = "50%";

  var editButton = document.createElement("div");
  editButton.id="myDesignObj_editButton_"+id;
  editButton.className = "class_MyDesignButton";
  editButton.style.backgroundImage = "url(img/Buttons/editButton_grey.png)";
  editButton.style.cursor="not-allowed";


  editButton.onclick = (function(cmsID) {
  return function() {
     if(cmsID<=myDesignsList.length-1){
       indexActiveCMS=cmsID;
       showEditPage();
     }
  };
  })(id);
  tmpSubDiv1_Buttons.appendChild(editButton);

  var exportButton = document.createElement("div");
  exportButton.id="myDesignObj_exportButton_"+id;
  exportButton.className = "class_MyDesignButton";
  exportButton.style.backgroundImage = "url(img/Buttons/exportButton_grey.png)";
  exportButton.style.cursor="not-allowed";

  exportButton.onclick = (function(cmsID) {
  return function() {
     if(cmsID<=myDesignsList.length-1){
       globalCMS1=myDesignsList[cmsID];
       openExportWindow();
     }
  };
  })(id);
  tmpSubDiv1_Buttons.appendChild(exportButton);

  var tmpSubDiv2_Buttons = document.createElement('div');
  tmpSubDiv2_Buttons.style.width = "50%";

  var shareButton = document.createElement("div");
  shareButton.id="myDesignObj_shareButton_"+id;
  shareButton.className = "class_MyDesignButton";
  shareButton.style.backgroundImage = "url(img/Buttons/shareButton_grey.png)";
  shareButton.style.cursor="not-allowed";
  tmpSubDiv2_Buttons.appendChild(shareButton);

  var deleteButton = document.createElement("div");
  deleteButton.id="myDesignObj_deleteButton_"+id;
  deleteButton.className = "class_MyDesignButton";
  deleteButton.style.backgroundImage = "url(img/Buttons/trashButton_grey.png)";
  deleteButton.style.cursor="not-allowed";

  deleteButton.onclick = (function(cmsID) {
  return function() {
     if(cmsID<=myDesignsList.length-1){
       askType=3;
       askIndex=cmsID;
       openAskWindow();
     }
  };
  })(id);

  tmpSubDiv2_Buttons.appendChild(deleteButton);

  tmpDivButtons.appendChild(tmpSubDiv1_Buttons);
  tmpDivButtons.appendChild(tmpSubDiv2_Buttons);
  divRow.appendChild(tmpDivButtons);

  return divRow;

}
