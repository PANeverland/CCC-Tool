function drawPathEditPath(){


  document.getElementById("id_hueValueOptions").style.display = "none";
  document.getElementById("id_RGBCourseDivModiy").style.display = "none";

  switch(analyzeColorspaceModus){
      case "rgb":
        stopAnimation();
        document.getElementById("id_RGBCourseDivModiy").style.display = "initial";
        initRGB3D();
        animate();
        intervalSize=50;
        drawcolormap_RGBSpace(true,true);
      break;
      case "hsv":
        stopAnimation();

        document.getElementById("id_hueValueOptions").style.display = "initial";
        //hueInit("id_ModiyCourseHueBackground");
        document.getElementById("id_setValueRange").value = 100;

        drawcolormap_hueSpace(true, true, true);

      break;
      case "lab": case "din99":
        stopAnimation();

        document.getElementById("id_hueValueOptions").style.display = "initial";
        document.getElementById("id_setValueRange").value = 65;

        drawcolormap_hueSpace(true, true, true);

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

      drawcolormap_hueSpace(true, true, true);
}

function modifyColormapRGBPossible(){
  if(document.getElementById("id_checkboxRGB").checked==true){
    orderColorSketch('rgb');
    drawcolormap_hueSpace(true, true, true);
  }
}

function increaseModify3DDiv(){
    if(size3D<100){

      size3D+=5;
      document.getElementById("id_rgb3DModiy").style.height = size3D+"vh";

      var canvasObj = document.getElementById("id_rgb3DModiy");
      canvasObj.innerHTML="";
      var box = canvasObj.getBoundingClientRect();
      var drawWidth = box.width; //window.innerWidth;
      var drawHeight =box.height; // window.innerHeight;
      camera.aspect = drawWidth/drawHeight;
    	camera.updateProjectionMatrix();
      renderer.setSize(drawWidth,drawHeight);//(window.innerWidth, window.innerHeight);
      canvasObj.appendChild( renderer.domElement );

      if(size3D==100){
        document.getElementById("decreaseModiy3D").style.color = "grey";
      }
      else{
        document.getElementById("decreaseModiy3D").style.color = "black";
      }

      if(size3D==50){
        document.getElementById("decreaseAnalyse3D").style.color = "grey";
      }
      else{
        document.getElementById("decreaseAnalyse3D").style.color = "black";
      }

    }

}

function decreaseModify3DDiv(){
  if(size3D>50){

    size3D-=5;
    document.getElementById("id_rgb3DModiy").style.height = size3D+"vh";

    var canvasObj = document.getElementById("id_rgb3DModiy");
    canvasObj.innerHTML="";
    var box = canvasObj.getBoundingClientRect();
    var drawWidth = box.width; //window.innerWidth;
    var drawHeight =box.height; // window.innerHeight;
    camera.aspect = drawWidth/drawHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(drawWidth,drawHeight);//(window.innerWidth, window.innerHeight);
    canvasObj.appendChild( renderer.domElement );


    if(size3D==100){
      document.getElementById("decreaseModiy3D").style.color = "grey";
    }
    else{
      document.getElementById("decreaseModiy3D").style.color = "black";
    }

    if(size3D==50){
      document.getElementById("decreaseAnalyse3D").style.color = "grey";
    }
    else{
      document.getElementById("decreaseAnalyse3D").style.color = "black";
    }

  }
}