function expandTable(){

    if(tableIsExpand){
        document.getElementById("id_table_workwindow").style.width = 0+"%";
        document.getElementById("id_table_workwindow").style.display = "none";
        tableIsExpand=false;
    }
    else{
        document.getElementById("id_table_workwindow").style.width = 27+"cm";
        document.getElementById("id_table_workwindow").style.display = "initial";
        tableIsExpand=true;
    }

    drawColorCircles();
}

///////////////////////////////
//// switch band type //////
///////////////////////////////

/*function changeBandType(){
    
   if(document.getElementById("radiobutton_ScaledBand").checked == false){

            colorVal1_C2= parseFloat(document.getElementById("id_color1_First").value);
            document.getElementById("id_color2_First").value= document.getElementById("id_color1_First").value;
            
            colorVal2_C2= parseFloat(document.getElementById("id_color1_Second").value);
            document.getElementById("id_color2_Second").value= document.getElementById("id_color1_Second").value;
               
            colorVal3_C2= parseFloat(document.getElementById("id_color1_Third").value);
            document.getElementById("id_color2_Third").value= document.getElementById("id_color1_Third").value;
              
            colorVal1_C1= parseFloat(document.getElementById("id_color2_First").value);
            document.getElementById("id_color1_First").value= document.getElementById("id_color2_First").value;
               
            colorVal2_C1= parseFloat(document.getElementById("id_color2_Second").value);
            document.getElementById("id_color1_Second").value= document.getElementById("id_color2_Second").value;
               
            colorVal3_C1= parseFloat(document.getElementById("id_color2_Third").value);
            document.getElementById("id_color1_Third").value= document.getElementById("id_color2_Third").value;
            
      
    }
    
    if(){

    }

    drawColorCircles();
    updateCreatorBand();
}*/


///////////////////////////////
//// switch colorspace //////
///////////////////////////////

function changeColorspace(type){

    document.getElementById("button_RGB").style.border = "2px solid white";
    document.getElementById("button_RGB").style.color = "white";
    document.getElementById("button_HSV").style.border = "2px solid white";
    document.getElementById("button_HSV").style.color = "white";
    document.getElementById("button_LAB").style.border = "2px solid white";
    document.getElementById("button_LAB").style.color = "white";
    document.getElementById("button_DIN99").style.border = "2px solid white";
    document.getElementById("button_DIN99").style.color = "white";


            
    switch(type){
        case 0:
             
             var tmpactivColorIndex = activColorIndex;

                   activColorIndex = 0; 
                   var tmpRGB = getRGBColor();
                        colorVal1_C1 = tmpRGB.getRValue()*255;
                        colorVal2_C1 = tmpRGB.getGValue()*255;
                        colorVal3_C1 = tmpRGB.getBValue()*255;
                   activColorIndex = 1; 
                   tmpRGB = getRGBColor();
                        colorVal1_C2 = tmpRGB.getRValue()*255;
                        colorVal2_C2 = tmpRGB.getGValue()*255;
                        colorVal3_C2 = tmpRGB.getBValue()*255;
                    activColorIndex = 2; 
                    tmpRGB = getRGBColor();
                        colorVal1_C3 = tmpRGB.getRValue()*255;
                        colorVal2_C3 = tmpRGB.getGValue()*255;
                        colorVal3_C3 = tmpRGB.getBValue()*255;  
                    activColorIndex = 3; 
                    tmpRGB = getRGBColor();
                        colorVal1_C4 = tmpRGB.getRValue()*255;
                        colorVal2_C4 = tmpRGB.getGValue()*255;
                        colorVal3_C4 = tmpRGB.getBValue()*255;  
                    activColorIndex = 4; 
                    tmpRGB = getRGBColor();
                        colorVal1_C5 = tmpRGB.getRValue()*255;
                        colorVal2_C5 = tmpRGB.getGValue()*255;
                        colorVal3_C5 = tmpRGB.getBValue()*255;  
                   
                activColorIndex=tmpactivColorIndex;
                colorspaceModus="rgb";
                document.getElementById("button_RGB").style.border = "2px solid yellow";
                document.getElementById("button_RGB").style.color = "yellow";
                document.getElementById("id_color1_FirstLabel").innerHTML = "R:";
                document.getElementById("id_color1_SecondLabel").innerHTML = "G:";
                document.getElementById("id_color1_ThirdLabel").innerHTML = "B:";
                break;
        case 1:
            var tmpactivColorIndex = activColorIndex;
             
                activColorIndex = 0;
                var tmpHSV = getHSVColor();
                        colorVal1_C1 = tmpHSV.getHValue();
                        colorVal2_C1 = tmpHSV.getSValue();
                        colorVal3_C1 = tmpHSV.getVValue();
                activColorIndex = 1;
                tmpHSV = getHSVColor();
                        colorVal1_C2 = tmpHSV.getHValue();
                        colorVal2_C2 = tmpHSV.getSValue();
                        colorVal3_C2 = tmpHSV.getVValue();
                activColorIndex = 2;
                tmpHSV = getHSVColor();
                       colorVal1_C3 = tmpHSV.getHValue();
                        colorVal2_C3 = tmpHSV.getSValue();
                        colorVal3_C3 = tmpHSV.getVValue();
                activColorIndex = 3;
                tmpHSV = getHSVColor();
                        colorVal1_C4 = tmpHSV.getHValue();
                        colorVal2_C4 = tmpHSV.getSValue();
                        colorVal3_C4 = tmpHSV.getVValue();  
                activColorIndex = 4;
                tmpHSV = getHSVColor();
                        colorVal1_C5 = tmpHSV.getHValue();
                        colorVal2_C5 = tmpHSV.getSValue();
                        colorVal3_C5 = tmpHSV.getVValue();

                activColorIndex=tmpactivColorIndex;
                colorspaceModus="hsv";
                document.getElementById("button_HSV").style.border = "2px solid yellow";
                document.getElementById("button_HSV").style.color = "yellow";
                document.getElementById("id_color1_FirstLabel").innerHTML = "H:";
                document.getElementById("id_color1_SecondLabel").innerHTML = "S:";
                document.getElementById("id_color1_ThirdLabel").innerHTML = "V:";
                break;
        case 2:
         var tmpactivColorIndex = activColorIndex;
                activColorIndex = 0;
                var tmpLAB = getLABColor();
                        colorVal1_C1 = tmpLAB.getLValue();
                        colorVal2_C1 = tmpLAB.getAValue();
                        colorVal3_C1 = tmpLAB.getBValue();
                activColorIndex = 1;
                tmpLAB = getLABColor();
                        colorVal1_C2 = tmpLAB.getLValue();
                        colorVal2_C2 = tmpLAB.getAValue();
                        colorVal3_C2 = tmpLAB.getBValue();
                activColorIndex = 2;
                tmpLAB = getLABColor();
                        colorVal1_C3 = tmpLAB.getLValue();
                        colorVal2_C3 = tmpLAB.getAValue();
                        colorVal3_C3 = tmpLAB.getBValue();
                activColorIndex = 3;
                tmpLAB = getLABColor();
                        colorVal1_C4 = tmpLAB.getLValue();
                        colorVal2_C4 = tmpLAB.getAValue();
                        colorVal3_C4 = tmpLAB.getBValue();
                activColorIndex = 4;
                tmpLAB = getLABColor();
                        colorVal1_C5 = tmpLAB.getLValue();
                        colorVal2_C5 = tmpLAB.getAValue();
                        colorVal3_C5 = tmpLAB.getBValue();
                activColorIndex=tmpactivColorIndex;
                colorspaceModus="lab";
                document.getElementById("button_LAB").style.border = "2px solid yellow";
                document.getElementById("button_LAB").style.color = "yellow";
                document.getElementById("id_color1_FirstLabel").innerHTML = "L:";
                document.getElementById("id_color1_SecondLabel").innerHTML = "A:";
                document.getElementById("id_color1_ThirdLabel").innerHTML = "B:";
        break;
        case 3:
         var tmpactivColorIndex = activColorIndex;
            
                activColorIndex = 0;
                var tmpDIN99 = getDIN99Color();
                        colorVal1_C1 = tmpDIN99.getL99Value();
                        colorVal2_C1 = tmpDIN99.getA99Value();
                        colorVal3_C1 = tmpDIN99.getB99Value();
                activColorIndex = 1;
                tmpDIN99 = getDIN99Color();
                        colorVal1_C2 = tmpDIN99.getL99Value();
                        colorVal2_C2 = tmpDIN99.getA99Value();
                        colorVal3_C2 = tmpDIN99.getB99Value();
                activColorIndex = 2;
                tmpDIN99 = getDIN99Color();
                        colorVal1_C3 = tmpDIN99.getL99Value();
                        colorVal2_C3 = tmpDIN99.getA99Value();
                        colorVal3_C3 = tmpDIN99.getB99Value();
                activColorIndex = 3;
                tmpDIN99 = getDIN99Color();
                        colorVal1_C4 = tmpDIN99.getL99Value();
                        colorVal2_C4 = tmpDIN99.getA99Value();
                        colorVal3_C4 = tmpDIN99.getB99Value();
                activColorIndex = 4;
                tmpDIN99 = getDIN99Color();
                        colorVal1_C5 = tmpDIN99.getL99Value();
                        colorVal2_C5 = tmpDIN99.getA99Value();
                        colorVal3_C5 = tmpDIN99.getB99Value();

            activColorIndex=tmpactivColorIndex;
            colorspaceModus="din99";
            document.getElementById("button_DIN99").style.border = "2px solid yellow";
            document.getElementById("button_DIN99").style.color = "yellow";
            document.getElementById("id_color1_FirstLabel").innerHTML = "L99:";
            document.getElementById("id_color1_SecondLabel").innerHTML = "A99:";
            document.getElementById("id_color1_ThirdLabel").innerHTML = "B99:";
        break;
        default:
        return;
    }

    switch(activColorIndex){

                    case 0: 
                        document.getElementById("id_color1_First").value = colorVal1_C1;
                        document.getElementById("id_color1_Second").value = colorVal2_C1;
                        document.getElementById("id_color1_Third").value = colorVal3_C1;
                    break;
                    case 1:
                        document.getElementById("id_color1_First").value = colorVal1_C2;
                        document.getElementById("id_color1_Second").value = colorVal2_C2;
                        document.getElementById("id_color1_Third").value = colorVal3_C2;
                    break;
                    case 2:
                        document.getElementById("id_color1_First").value = colorVal1_C3;
                        document.getElementById("id_color1_Second").value = colorVal2_C3;
                        document.getElementById("id_color1_Third").value = colorVal3_C3;
                    break;
                    case 3:
                        document.getElementById("id_color1_First").value = colorVal1_C4;
                        document.getElementById("id_color1_Second").value = colorVal2_C4;
                        document.getElementById("id_color1_Third").value = colorVal3_C4;
                    break;
                    case 4:
                        document.getElementById("id_color1_First").value = colorVal1_C5;
                        document.getElementById("id_color1_Second").value = colorVal2_C5;
                        document.getElementById("id_color1_Third").value = colorVal3_C5;
                    break;
                    default:
                            console.log("Error at the changeColorspace function");

    }


    drawPredefinedBands();
    updateCreatorBand();
    orderColorSketch();
}


//////////////////////////////
///// change color input /////
//////////////////////////////

function insertColor(e){

    switch(colorspaceModus){
                case "rgb":
                    checkInputVal(document.getElementById(e.target.id),true,false);

                    if(parseFloat(document.getElementById(e.target.id).value)>255){
                        document.getElementById(e.target.id).value = 255;
                    }

                    if(parseFloat(document.getElementById(e.target.id).value)<0){
                        document.getElementById(e.target.id).value = 0;
                    }

                break;
                case "hsv": 
                   checkInputVal(document.getElementById(e.target.id),true,false);

                   if(parseFloat(document.getElementById(e.target.id).value)>1){
                        document.getElementById(e.target.id).value = 1;
                   }

                   if(parseFloat(document.getElementById(e.target.id).value)<0){
                        document.getElementById(e.target.id).value = 0;
                   }
                break;
                case "lab":  
                    if(e.target.id==="id_color1_First" || e.target.id==="id_color2_First"){
                        checkInputVal(document.getElementById(e.target.id),true,false);

                        if(parseFloat(document.getElementById(e.target.id).value)>100){
                        document.getElementById(e.target.id).value = 100;
                        }

                        if(parseFloat(document.getElementById(e.target.id).value)<0){
                            document.getElementById(e.target.id).value = 0;
                        }
                    }
                    else{
                        checkInputVal(document.getElementById(e.target.id),true,true);
                    }

                break;
                case "din99": 
                    if(e.target.id==="id_color1_First" || e.target.id==="id_color2_First"){
                        checkInputVal(document.getElementById(e.target.id),true,false);

                        if(parseFloat(document.getElementById(e.target.id).value)>100){
                        document.getElementById(e.target.id).value = 100;
                        }

                        if(parseFloat(document.getElementById(e.target.id).value)<0){
                            document.getElementById(e.target.id).value = 0;
                        }
                    }
                    else{
                        checkInputVal(document.getElementById(e.target.id),true,true);
                    }
                    
                break;
                default:
                console.log("Error at the changeColorspace function");
    }


   if (e.keyCode == 13) {

        switch(activColorIndex){
                    case 0: 
                        colorVal1_C1 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C1 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C1 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 1:
                        colorVal1_C2 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C2 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C2 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 2:
                        colorVal1_C3 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C3 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C3 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 3:
                        colorVal1_C4 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C4 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C4 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 4:
                        colorVal1_C5 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C5 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C5 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    default:
                            console.log("Error at the insertColorChange function");

        }

    
        if(creatorBandIsNew==true){
            saveBandToArray(); 
        }

       drawColorCircles();
       updateCreatorBand();
       
   }
  
}

function insertColorChange(e){

    switch(colorspaceModus){
                case "rgb":
                    checkInputVal(document.getElementById(e.target.id),true,false);

                    if(parseFloat(document.getElementById(e.target.id).value)>255){
                        document.getElementById(e.target.id).value = 255;
                    }

                    if(parseFloat(document.getElementById(e.target.id).value)<0){
                        document.getElementById(e.target.id).value = 0;
                    }

                break;
                case "hsv": 
                   checkInputVal(document.getElementById(e.target.id),true,false);

                   if(parseFloat(document.getElementById(e.target.id).value)>1){
                        document.getElementById(e.target.id).value = 1;
                   }

                   if(parseFloat(document.getElementById(e.target.id).value)<0){
                        document.getElementById(e.target.id).value = 0;
                   }

                    /*var test = new classColor_HSV(colorVal1_C1,colorVal2_C1,colorVal3_C1);
                    var tttt = test.calcRGBColor();
                   
                    test = new classColor_HSV(colorVal1_C2,colorVal2_C2,colorVal3_C2);
                    var tttt2 = test.calcRGBColor();

                    test = new classColor_HSV(colorVal1_C3,colorVal2_C3,colorVal3_C3);
                    var tttt3 = test.calcRGBColor();
                    console.log("[new classColor_RGB("+tttt.getRValue()+","+tttt.getGValue()+","+tttt.getBValue()+"), new classColor_RGB("+tttt2.getRValue()+","+tttt2.getGValue()+","+tttt2.getBValue()+"), new classColor_RGB("+tttt3.getRValue()+","+tttt3.getGValue()+","+tttt3.getBValue()+")], ");
       */
                break;
                case "lab":  
                    if(e.target.id==="id_color1_First" || e.target.id==="id_color2_First"){
                        checkInputVal(document.getElementById(e.target.id),true,false);

                        if(parseFloat(document.getElementById(e.target.id).value)>100){
                        document.getElementById(e.target.id).value = 100;
                        }

                        if(parseFloat(document.getElementById(e.target.id).value)<0){
                            document.getElementById(e.target.id).value = 0;
                        }
                    }
                    else{
                        checkInputVal(document.getElementById(e.target.id),true,true);
                    }

                break;
                case "din99": 
                    if(e.target.id==="id_color1_First" || e.target.id==="id_color2_First"){
                        checkInputVal(document.getElementById(e.target.id),true,false);

                        if(parseFloat(document.getElementById(e.target.id).value)>100){
                        document.getElementById(e.target.id).value = 100;
                        }

                        if(parseFloat(document.getElementById(e.target.id).value)<0){
                            document.getElementById(e.target.id).value = 0;
                        }
                    }
                    else{
                        checkInputVal(document.getElementById(e.target.id),true,true);
                    }
                    
                break;
                default:
                console.log("Error at the changeColorspace function");
    }

    switch(activColorIndex){
                    case 0: 
                        colorVal1_C1 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C1 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C1 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 1:
                        colorVal1_C2 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C2 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C2 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 2:
                        colorVal1_C3 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C3 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C3 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 3:
                        colorVal1_C4 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C4 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C4 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    case 4:
                        colorVal1_C5 = parseFloat(document.getElementById("id_color1_First").value);
                        colorVal2_C5 = parseFloat(document.getElementById("id_color1_Second").value);
                        colorVal3_C5 = parseFloat(document.getElementById("id_color1_Third").value);
                    break;
                    default:
                            console.log("Error at the insertColorChange function");

    }


    if(creatorBandIsNew==true){
        saveBandToArray(); 
    }

    drawColorCircles();
    updateCreatorBand();

  
}

function changeActiveColor(val){

    activColorIndex=val;

     document.getElementById("id_creatorBandC1").style.border = "2px solid black";
     document.getElementById("id_creatorBandC2").style.border = "2px solid black";
     document.getElementById("id_creatorBandC3").style.border = "2px solid black";
     document.getElementById("id_creatorBandC4").style.border = "2px solid black";
     document.getElementById("id_creatorBandC5").style.border = "2px solid black";

     switch(activColorIndex){
                    case 0: 
                        document.getElementById("id_creatorBandC1").style.border = "3px solid yellow";
                    break;
                    case 1:
                        document.getElementById("id_creatorBandC2").style.border = "3px solid yellow";
                    break;
                    case 2:
                        document.getElementById("id_creatorBandC3").style.border = "3px solid yellow";
                    break;
                    case 3:
                       document.getElementById("id_creatorBandC4").style.border = "3px solid yellow";
                    break;
                    case 4:
                        document.getElementById("id_creatorBandC5").style.border = "3px solid yellow";
                    break;
                    default:
                            console.log("Error at the insertColorChange function");

    }

    drawColorCircles();
}


function updateCreatorBand(){
    var canvasObject = document.getElementById("id_creatorBand");
    var resolutionX = 1200;
    var resolutionY = 75;

    $("#id_creatorBand").attr("width", resolutionX+"px");
    $("#id_creatorBand").attr("height", resolutionY+"px"); 

    var canvasContex = canvasObject.getContext("2d");
    //canvasContex.clearRect(0, 0, resolutionX, resolutionY);
    var canvasData = canvasContex.getImageData(0, 0, canvasObject.width, canvasObject.height);


    var tmpActiveColor = activColorIndex;
     
    switch(createBandType) { // 0=constant, 1=scale, 2=double, 3=triple, 4=quadruple)

        case 0:
            activColorIndex=0;
            var tmpC1RGB = getRGBColor();
            switch(colorspaceModus){
                    case "rgb": 
                        canvasData=createConstantBand(canvasData, 0, resolutionX, resolutionY, tmpC1RGB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC1RGB.getRGBString();
                    break;
                    case "hsv": 
                        var tmpC1HSV = getHSVColor();
                        canvasData=createConstantBand(canvasData, 0, resolutionX, resolutionY, tmpC1HSV, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC1RGB.getRGBString();
                    break;
                    case "lab": 
                        var tmpC1LAB = getLABColor();
                        canvasData=createConstantBand(canvasData, 0, resolutionX, resolutionY, tmpC1LAB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC1RGB.getRGBString();                       
                    break;
                    case "din99": 
                        var tmpC1DIN99 = getDIN99Color();
                        canvasData=createConstantBand(canvasData, 0, resolutionX, resolutionY, tmpC1DIN99, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC1RGB.getRGBString();
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");

                }
            
        break;
        case 1:
                activColorIndex=0;
                var tmpC1RGB = getRGBColor();
                activColorIndex=4;
                var tmpC2RGB = getRGBColor();
             
                switch(colorspaceModus){
                    case "rgb": 
                        canvasData=createScaledBand(canvasData, 0, resolutionX, resolutionY, tmpC1RGB, tmpC2RGB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC2RGB.getRGBString();
                    break;
                    case "hsv": 
                        activColorIndex=0;
                        var tmpC1HSV = getHSVColor();
                        activColorIndex=4;
                        var tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, 0, resolutionX, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC2RGB.getRGBString();
                    break;
                    case "lab": 
                        activColorIndex=0;
                        var tmpC1LAB = getLABColor();
                        activColorIndex=4;
                        var tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, 0, resolutionX, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC2RGB.getRGBString();      
                 
                    break;
                    case "din99": 
                        activColorIndex=0;
                        var tmpC1DIN99 = getDIN99Color();
                        activColorIndex=4;
                        var tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, 0, resolutionX, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC2RGB.getRGBString();
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");

                }
             
        break;
        case 2:
                var bandElementWidth = Math.round(resolutionX/2);
                activColorIndex=0;
                var tmpC1RGB = getRGBColor();
                activColorIndex=2;
                var tmpC2RGB = getRGBColor();
                activColorIndex=4;
                var tmpC3RGB = getRGBColor();
                switch(colorspaceModus){
                    case "rgb": 
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1RGB, tmpC2RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2RGB, tmpC3RGB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC3RGB.getRGBString();
                    break;
                    case "hsv": 
                        activColorIndex=0;
                        var tmpC1HSV = getHSVColor();
                        activColorIndex=2;
                        var tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        activColorIndex=4;
                        tmpC1HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2HSV, tmpC1HSV, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC3RGB.getRGBString();
                    break;
                    case "lab": 
                        activColorIndex=0;
                        var tmpC1LAB = getLABColor();
                        activColorIndex=2;
                        var tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        activColorIndex=4;
                        tmpC1LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2LAB, tmpC1LAB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC3RGB.getRGBString();       
                    break;
                    case "din99": 
                        activColorIndex=0;
                        var tmpC1DIN99 = getDIN99Color();
                        activColorIndex=2;
                        var tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        activColorIndex=4;
                        tmpC1DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2DIN99, tmpC1DIN99, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC3RGB.getRGBString();
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");

                }
        break;
        case 3:
                var bandElementWidth = Math.round(resolutionX/3);
                activColorIndex=0;
                var tmpC1RGB = getRGBColor();
                activColorIndex=1;
                var tmpC2RGB = getRGBColor();
                activColorIndex=3;
                var tmpC3RGB = getRGBColor();
                activColorIndex=4;
                var tmpC4RGB = getRGBColor();
                switch(colorspaceModus){
                    case "rgb": 
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1RGB, tmpC2RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2RGB, tmpC3RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC3RGB, tmpC4RGB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC4RGB.getRGBString();
                    break;
                    case "hsv": 
                        activColorIndex=0;
                        var tmpC1HSV = getHSVColor();
                        activColorIndex=1;
                        var tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        activColorIndex=3;
                        tmpC1HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2HSV, tmpC1HSV, resolutionX);
                        activColorIndex=4;
                        tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC4RGB.getRGBString();
                    break;
                    case "lab": 
                        activColorIndex=0;
                        var tmpC1LAB = getLABColor();
                        activColorIndex=1;
                        var tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        activColorIndex=3;
                        tmpC1LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2LAB, tmpC1LAB, resolutionX);
                        activColorIndex=4;
                        tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC4RGB.getRGBString();        
                    break;
                    case "din99": 
                        activColorIndex=0;
                        var tmpC1DIN99 = getDIN99Color();
                        activColorIndex=1;
                        var tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        activColorIndex=3;
                        tmpC1DIN99 = getDIN99Color();bandElementWidth
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2DIN99, tmpC1DIN99, resolutionX);
                        activColorIndex=4;
                        tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC4RGB.getRGBString();
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");

                }
        break;
        case 4:
                var bandElementWidth = Math.round(resolutionX/4);
                activColorIndex=0;
                var tmpC1RGB = getRGBColor();
                activColorIndex=1;
                var tmpC2RGB = getRGBColor();
                activColorIndex=2;
                var tmpC3RGB = getRGBColor();
                activColorIndex=3;
                var tmpC4RGB = getRGBColor();
                activColorIndex=4;
                var tmpC5RGB = getRGBColor();
                switch(colorspaceModus){
                    case "rgb": 
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1RGB, tmpC2RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2RGB, tmpC3RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC3RGB, tmpC4RGB, resolutionX);
                        canvasData=createScaledBand(canvasData, bandElementWidth*3, bandElementWidth, resolutionY, tmpC4RGB, tmpC5RGB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC4RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC5RGB.getRGBString();
                    break;
                    case "hsv": 
                        activColorIndex=0;
                        var tmpC1HSV = getHSVColor();
                        activColorIndex=1;
                        var tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        activColorIndex=2;
                        tmpC1HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2HSV, tmpC1HSV, resolutionX);
                        activColorIndex=3;
                        tmpC2HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1HSV, tmpC2HSV, resolutionX);
                        activColorIndex=4;
                        tmpC1HSV = getHSVColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*3, bandElementWidth, resolutionY, tmpC2HSV, tmpC1HSV, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC4RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC5RGB.getRGBString();
                    break;
                    case "lab": 
                        activColorIndex=0;
                        var tmpC1LAB = getLABColor();
                        activColorIndex=1;
                        var tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        activColorIndex=2;
                        tmpC1LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2LAB, tmpC1LAB, resolutionX);
                        activColorIndex=3;
                        tmpC2LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1LAB, tmpC2LAB, resolutionX);
                        activColorIndex=4;
                        tmpC1LAB = getLABColor();
                        canvasData=createScaledBand(canvasData, bandElementWidth*3, bandElementWidth, resolutionY, tmpC2LAB, tmpC1LAB, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC4RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC5RGB.getRGBString();   
                    break;
                    case "din99": 
                        activColorIndex=0;
                        var tmpC1DIN99 = getDIN99Color();
                        activColorIndex=1;
                        var tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, 0, bandElementWidth, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        activColorIndex=2;
                        tmpC1DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, bandElementWidth, bandElementWidth, resolutionY, tmpC2DIN99, tmpC1DIN99, resolutionX);
                        activColorIndex=3;
                        tmpC2DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, bandElementWidth*2, bandElementWidth, resolutionY, tmpC1DIN99, tmpC2DIN99, resolutionX);
                        activColorIndex=4;
                        tmpC1DIN99 = getDIN99Color();
                        canvasData=createScaledBand(canvasData, bandElementWidth*3, bandElementWidth, resolutionY, tmpC2DIN99, tmpC1DIN99, resolutionX);
                        document.getElementById("id_creatorBandC1").style.background = tmpC1RGB.getRGBString();
                        document.getElementById("id_creatorBandC2").style.background = tmpC2RGB.getRGBString();
                        document.getElementById("id_creatorBandC3").style.background = tmpC3RGB.getRGBString();
                        document.getElementById("id_creatorBandC4").style.background = tmpC4RGB.getRGBString();
                        document.getElementById("id_creatorBandC5").style.background = tmpC5RGB.getRGBString();
                    break;
                    default:
                        console.log("Error at the updateCreatorBand function");

                }               
        break;
        default:
                console.log("Error at the updateCreatorBand function");

    }

    activColorIndex=tmpActiveColor;

    canvasContex.putImageData(canvasData, 0, 0);
}


function openPredefinedBand(event){

    creatorBandIsNew=false;

    var tmpString = event.target.id;

    switch(tmpString[0]){
        case "c": 
            tmpString = tmpString.substr(5);
            bandIndex = parseInt(tmpString);
            createBandType = 0;
            styleBandCreator();

            switch(colorspaceModus){
                case "rgb":
                   
                    colorVal1_C1 = constBands[bandIndex].getRValue()*255;
                    colorVal2_C1 = constBands[bandIndex].getGValue()*255;
                    colorVal3_C1 = constBands[bandIndex].getBValue()*255;
                           
                    colorVal1_C5 = constBands[bandIndex].getRValue()*255;
                    colorVal2_C5 = constBands[bandIndex].getGValue()*255;
                    colorVal3_C5 = constBands[bandIndex].getBValue()*255;
                            
                break;
                case "hsv":
                    var tmpHSVC1 = constBands[bandIndex].calcHSVColor();
                    colorVal1_C1 = tmpHSVC1.getHValue();
                    colorVal2_C1 = tmpHSVC1.getSValue();
                    colorVal3_C1 = tmpHSVC1.getVValue();
                           
                    colorVal1_C5 = tmpHSVC1.getHValue();
                    colorVal2_C5 = tmpHSVC1.getSValue();
                    colorVal3_C5 = tmpHSVC1.getVValue();
                break;
                case "lab":
                    var tmpLABC1 = constBands[bandIndex].calcCIELabColor();
                    colorVal1_C1 = tmpLABC1.getLValue();
                    colorVal2_C1 = tmpLABC1.getAValue();
                    colorVal3_C1 = tmpLABC1.getBValue();
                           
                    colorVal1_C5 = tmpLABC1.getLValue();
                    colorVal2_C5 = tmpLABC1.getAValue();
                    colorVal3_C5 = tmpLABC1.getBValue();
                break;
                case "din99":
                    var tmpDIN99C1 = constBands[bandIndex].calcDIN99Color(kE,kCH);
                    colorVal1_C1 = tmpDIN99C1.getL99Value();
                    colorVal2_C1 = tmpDIN99C1.getA99Value();
                    colorVal3_C1 = tmpDIN99C1.getB99Value();
                           
                    colorVal1_C5 = tmpDIN99C1.getL99Value();
                    colorVal2_C5 = tmpDIN99C1.getA99Value();
                    colorVal3_C5 = tmpDIN99C1.getB99Value();
                break;
                default:
                return;
            }
        break;
        case "s": 
            tmpString = tmpString.substr(5);
            bandIndex = parseInt(tmpString);
            createBandType = 1;
            styleBandCreator();
            

            switch(colorspaceModus){
                case "rgb":
                   
                    colorVal1_C1 = scaleBands[bandIndex][0].getRValue()*255;
                    colorVal2_C1 = scaleBands[bandIndex][0].getGValue()*255;
                    colorVal3_C1 = scaleBands[bandIndex][0].getBValue()*255;

                    colorVal1_C5 = scaleBands[bandIndex][1].getRValue()*255;
                    colorVal2_C5 = scaleBands[bandIndex][1].getGValue()*255;
                    colorVal3_C5 = scaleBands[bandIndex][1].getBValue()*255;
                            
                break;
                case "hsv":
                    var tmpHSVC1 = scaleBands[bandIndex][0].calcHSVColor();
                    var tmpHSVC2 = scaleBands[bandIndex][1].calcHSVColor();
                    colorVal1_C1 = tmpHSVC1.getHValue();
                    colorVal2_C1 = tmpHSVC1.getSValue();
                    colorVal3_C1 = tmpHSVC1.getVValue();
                           
                    colorVal1_C5 = tmpHSVC2.getHValue();
                    colorVal2_C5 = tmpHSVC2.getSValue();
                    colorVal3_C5 = tmpHSVC2.getVValue();
                break;
                case "lab":
                    var tmpLABC1 = scaleBands[bandIndex][0].calcCIELabColor();
                     var tmpLABC2 = scaleBands[bandIndex][1].calcCIELabColor();
                    colorVal1_C1 = tmpLABC1.getLValue();
                    colorVal2_C1 = tmpLABC1.getAValue();
                    colorVal3_C1 = tmpLABC1.getBValue();
                           
                    colorVal1_C5 = tmpLABC2.getLValue();
                    colorVal2_C5 = tmpLABC2.getAValue();
                    colorVal3_C5 = tmpLABC2.getBValue();
                break;
                case "din99":
                    var tmpDIN99C1 = scaleBands[bandIndex][0].calcDIN99Color(kE,kCH);
                    var tmpDIN99C2 = scaleBands[bandIndex][1].calcDIN99Color(kE,kCH);
                    colorVal1_C1 = tmpDIN99C1.getL99Value();
                    colorVal2_C1 = tmpDIN99C1.getA99Value();
                    colorVal3_C1 = tmpDIN99C1.getB99Value();
                           
                    colorVal1_C5 = tmpDIN99C2.getL99Value();
                    colorVal2_C5 = tmpDIN99C2.getA99Value();
                    colorVal3_C5 = tmpDIN99C2.getB99Value();
                break;
                default:
                return;
            }
        break;
        case "d": 
            tmpString = tmpString.substr(6);
            bandIndex = parseInt(tmpString);
            createBandType = 2;
            styleBandCreator();
            

            switch(colorspaceModus){
                case "rgb":
                   
                    colorVal1_C1 = doubleBands[bandIndex][0].getRValue()*255;
                    colorVal2_C1 = doubleBands[bandIndex][0].getGValue()*255;
                    colorVal3_C1 = doubleBands[bandIndex][0].getBValue()*255;

                    colorVal1_C3 = doubleBands[bandIndex][1].getRValue()*255;
                    colorVal2_C3 = doubleBands[bandIndex][1].getGValue()*255;
                    colorVal3_C3 = doubleBands[bandIndex][1].getBValue()*255;

                    colorVal1_C5 = doubleBands[bandIndex][2].getRValue()*255;
                    colorVal2_C5 = doubleBands[bandIndex][2].getGValue()*255;
                    colorVal3_C5 = doubleBands[bandIndex][2].getBValue()*255;
                            
                break;
                case "hsv":
                    var tmpHSVC1 = doubleBands[bandIndex][0].calcHSVColor();
                    var tmpHSVC2 = doubleBands[bandIndex][1].calcHSVColor();
                    var tmpHSVC3 = doubleBands[bandIndex][2].calcHSVColor();
                    colorVal1_C1 = tmpHSVC1.getHValue();
                    colorVal2_C1 = tmpHSVC1.getSValue();
                    colorVal3_C1 = tmpHSVC1.getVValue();

                    colorVal1_C3 = tmpHSVC2.getHValue();
                    colorVal2_C3 = tmpHSVC2.getSValue();
                    colorVal3_C3 = tmpHSVC2.getVValue();
                           
                    colorVal1_C5 = tmpHSVC3.getHValue();
                    colorVal2_C5 = tmpHSVC3.getSValue();
                    colorVal3_C5 = tmpHSVC3.getVValue();
                break;
                case "lab":
                    var tmpLABC1 = doubleBands[bandIndex][0].calcCIELabColor();
                    var tmpLABC2 = doubleBands[bandIndex][1].calcCIELabColor();
                    var tmpLABC3 = doubleBands[bandIndex][2].calcCIELabColor();
                    colorVal1_C1 = tmpLABC1.getLValue();
                    colorVal2_C1 = tmpLABC1.getAValue();
                    colorVal3_C1 = tmpLABC1.getBValue();
                           
                    colorVal1_C2 = tmpLABC2.getLValue();
                    colorVal2_C2 = tmpLABC2.getAValue();
                    colorVal3_C2 = tmpLABC2.getBValue();

                    colorVal1_C5 = tmpLABC3.getLValue();
                    colorVal2_C5 = tmpLABC3.getAValue();
                    colorVal3_C5 = tmpLABC3.getBValue();
                break;
                case "din99":
                    var tmpDIN99C1 = doubleBands[bandIndex][0].calcDIN99Color(kE,kCH);
                    var tmpDIN99C2 = doubleBands[bandIndex][1].calcDIN99Color(kE,kCH);
                    var tmpDIN99C3 = doubleBands[bandIndex][2].calcDIN99Color(kE,kCH);
                    colorVal1_C1 = tmpDIN99C1.getL99Value();
                    colorVal2_C1 = tmpDIN99C1.getA99Value();
                    colorVal3_C1 = tmpDIN99C1.getB99Value();
                           
                    colorVal1_C3 = tmpDIN99C2.getL99Value();
                    colorVal2_C3 = tmpDIN99C2.getA99Value();
                    colorVal3_C3 = tmpDIN99C2.getB99Value();

                    colorVal1_C5 = tmpDIN99C3.getL99Value();
                    colorVal2_C5 = tmpDIN99C3.getA99Value();
                    colorVal3_C5 = tmpDIN99C3.getB99Value();
                break;
                default:
                return;
            }

        break;
        case "t":
            tmpString = tmpString.substr(6);
            bandIndex = parseInt(tmpString);
            createBandType = 3;
            styleBandCreator();

            switch(colorspaceModus){
                case "rgb":
                   
                    colorVal1_C1 = tribleBands[bandIndex][0].getRValue()*255;
                    colorVal2_C1 = tribleBands[bandIndex][0].getGValue()*255;
                    colorVal3_C1 = tribleBands[bandIndex][0].getBValue()*255;

                    colorVal1_C2 = tribleBands[bandIndex][1].getRValue()*255;
                    colorVal2_C2 = tribleBands[bandIndex][1].getGValue()*255;
                    colorVal3_C2 = tribleBands[bandIndex][1].getBValue()*255;

                    colorVal1_C4 = tribleBands[bandIndex][2].getRValue()*255;
                    colorVal2_C4 = tribleBands[bandIndex][2].getGValue()*255;
                    colorVal3_C4 = tribleBands[bandIndex][2].getBValue()*255;

                    colorVal1_C5 = tribleBands[bandIndex][3].getRValue()*255;
                    colorVal2_C5 = tribleBands[bandIndex][3].getGValue()*255;
                    colorVal3_C5 = tribleBands[bandIndex][3].getBValue()*255;
                            
                break;
                case "hsv":
                    var tmpHSVC1 = tribleBands[bandIndex][0].calcHSVColor();
                    var tmpHSVC2 = tribleBands[bandIndex][1].calcHSVColor();
                    var tmpHSVC3 = tribleBands[bandIndex][2].calcHSVColor();
                    var tmpHSVC4 = tribleBands[bandIndex][3].calcHSVColor();
                    colorVal1_C1 = tmpHSVC1.getHValue();
                    colorVal2_C1 = tmpHSVC1.getSValue();
                    colorVal3_C1 = tmpHSVC1.getVValue();

                    colorVal1_C2 = tmpHSVC2.getHValue();
                    colorVal2_C2 = tmpHSVC2.getSValue();
                    colorVal3_C2 = tmpHSVC2.getVValue();
                           
                    colorVal1_C4 = tmpHSVC3.getHValue();
                    colorVal2_C4 = tmpHSVC3.getSValue();
                    colorVal3_C4 = tmpHSVC3.getVValue();

                    colorVal1_C5 = tmpHSVC4.getHValue();
                    colorVal2_C5 = tmpHSVC4.getSValue();
                    colorVal3_C5 = tmpHSVC4.getVValue();
                break;
                case "lab":
                    var tmpLABC1 = tribleBands[bandIndex][0].calcCIELabColor();
                    var tmpLABC2 = tribleBands[bandIndex][1].calcCIELabColor();
                    var tmpLABC3 = tribleBands[bandIndex][2].calcCIELabColor();
                    var tmpLABC4 = tribleBands[bandIndex][3].calcCIELabColor();
                    colorVal1_C1 = tmpLABC1.getLValue();
                    colorVal2_C1 = tmpLABC1.getAValue();
                    colorVal3_C1 = tmpLABC1.getBValue();
                           
                    colorVal1_C2 = tmpLABC2.getLValue();
                    colorVal2_C2 = tmpLABC2.getAValue();
                    colorVal3_C2 = tmpLABC2.getBValue();

                    colorVal1_C4 = tmpLABC3.getLValue();
                    colorVal2_C4 = tmpLABC3.getAValue();
                    colorVal3_C4 = tmpLABC3.getBValue();

                    colorVal1_C5 = tmpLABC4.getLValue();
                    colorVal2_C5 = tmpLABC4.getAValue();
                    colorVal3_C5 = tmpLABC4.getBValue();
                break;
                case "din99":
                    var tmpDIN99C1 = tribleBands[bandIndex][0].calcDIN99Color(kE,kCH);
                    var tmpDIN99C2 = tribleBands[bandIndex][1].calcDIN99Color(kE,kCH);
                    var tmpDIN99C3 = tribleBands[bandIndex][2].calcDIN99Color(kE,kCH);
                    var tmpDIN99C4 = tribleBands[bandIndex][3].calcDIN99Color(kE,kCH);
                    colorVal1_C1 = tmpDIN99C1.getL99Value();
                    colorVal2_C1 = tmpDIN99C1.getA99Value();
                    colorVal3_C1 = tmpDIN99C1.getB99Value();
                           
                    colorVal1_C2 = tmpDIN99C2.getL99Value();
                    colorVal2_C2 = tmpDIN99C2.getA99Value();
                    colorVal3_C2 = tmpDIN99C2.getB99Value();

                    colorVal1_C4 = tmpDIN99C3.getL99Value();
                    colorVal2_C4 = tmpDIN99C3.getA99Value();
                    colorVal3_C4 = tmpDIN99C3.getB99Value();

                    colorVal1_C5 = tmpDIN99C4.getL99Value();
                    colorVal2_C5 = tmpDIN99C4.getA99Value();
                    colorVal3_C5 = tmpDIN99C4.getB99Value();
                break;
                default:
                return;
            }
        break;
        case "q": 
            tmpString = tmpString.substr(5);
            bandIndex = parseInt(tmpString);
            createBandType = 4;
            styleBandCreator();

            switch(colorspaceModus){
                case "rgb":
                   
                    colorVal1_C1 = quadBands[bandIndex][0].getRValue()*255;
                    colorVal2_C1 = quadBands[bandIndex][0].getGValue()*255;
                    colorVal3_C1 = quadBands[bandIndex][0].getBValue()*255;

                    colorVal1_C2 = quadBands[bandIndex][1].getRValue()*255;
                    colorVal2_C2 = quadBands[bandIndex][1].getGValue()*255;
                    colorVal3_C2 = quadBands[bandIndex][1].getBValue()*255;

                    colorVal1_C3 = quadBands[bandIndex][2].getRValue()*255;
                    colorVal2_C3 = quadBands[bandIndex][2].getGValue()*255;
                    colorVal3_C3 = quadBands[bandIndex][2].getBValue()*255;

                    colorVal1_C4 = quadBands[bandIndex][3].getRValue()*255;
                    colorVal2_C4 = quadBands[bandIndex][3].getGValue()*255;
                    colorVal3_C4 = quadBands[bandIndex][3].getBValue()*255;

                    colorVal1_C5 = quadBands[bandIndex][4].getRValue()*255;
                    colorVal2_C5 = quadBands[bandIndex][4].getGValue()*255;
                    colorVal3_C5 = quadBands[bandIndex][4].getBValue()*255;
                            
                break;
                case "hsv":
                    var tmpHSVC1 = quadBands[bandIndex][0].calcHSVColor();
                    var tmpHSVC2 = quadBands[bandIndex][1].calcHSVColor();
                    var tmpHSVC3 = quadBands[bandIndex][2].calcHSVColor();
                    var tmpHSVC4 = quadBands[bandIndex][3].calcHSVColor();
                    var tmpHSVC5 = quadBands[bandIndex][4].calcHSVColor();
                    colorVal1_C1 = tmpHSVC1.getHValue();
                    colorVal2_C1 = tmpHSVC1.getSValue();
                    colorVal3_C1 = tmpHSVC1.getVValue();

                    colorVal1_C2 = tmpHSVC2.getHValue();
                    colorVal2_C2 = tmpHSVC2.getSValue();
                    colorVal3_C2 = tmpHSVC2.getVValue();
                           
                    colorVal1_C3 = tmpHSVC3.getHValue();
                    colorVal2_C3 = tmpHSVC3.getSValue();
                    colorVal3_C3 = tmpHSVC3.getVValue();

                    colorVal1_C4 = tmpHSVC4.getHValue();
                    colorVal2_C4 = tmpHSVC4.getSValue();
                    colorVal3_C4 = tmpHSVC4.getVValue();

                    colorVal1_C5 = tmpHSVC5.getHValue();
                    colorVal2_C5 = tmpHSVC5.getSValue();
                    colorVal3_C5 = tmpHSVC5.getVValue();
                break;
                case "lab":
                    var tmpLABC1 = quadBands[bandIndex][0].calcCIELabColor();
                    var tmpLABC2 = quadBands[bandIndex][1].calcCIELabColor();
                    var tmpLABC3 = quadBands[bandIndex][2].calcCIELabColor();
                    var tmpLABC4 = quadBands[bandIndex][3].calcCIELabColor();
                    var tmpLABC5 = quadBands[bandIndex][4].calcCIELabColor();
                    colorVal1_C1 = tmpLABC1.getLValue();
                    colorVal2_C1 = tmpLABC1.getAValue();
                    colorVal3_C1 = tmpLABC1.getBValue();
                           
                    colorVal1_C2 = tmpLABC2.getLValue();
                    colorVal2_C2 = tmpLABC2.getAValue();
                    colorVal3_C2 = tmpLABC2.getBValue();

                    colorVal1_C3 = tmpLABC3.getLValue();
                    colorVal2_C3 = tmpLABC3.getAValue();
                    colorVal3_C3 = tmpLABC3.getBValue();

                    colorVal1_C4 = tmpLABC4.getLValue();
                    colorVal2_C4 = tmpLABC4.getAValue();
                    colorVal3_C4 = tmpLABC4.getBValue();

                    colorVal1_C5 = tmpLABC5.getLValue();
                    colorVal2_C5 = tmpLABC5.getAValue();
                    colorVal3_C5 = tmpLABC5.getBValue();
                break;
                case "din99":
                    var tmpDIN99C1 = quadBands[bandIndex][0].calcDIN99Color(kE,kCH);
                    var tmpDIN99C2 = quadBands[bandIndex][1].calcDIN99Color(kE,kCH);
                    var tmpDIN99C3 = quadBands[bandIndex][2].calcDIN99Color(kE,kCH);
                    var tmpDIN99C4 = quadBands[bandIndex][3].calcDIN99Color(kE,kCH);
                    var tmpDIN99C5 = quadBands[bandIndex][4].calcDIN99Color(kE,kCH);
                    colorVal1_C1 = tmpDIN99C1.getL99Value();
                    colorVal2_C1 = tmpDIN99C1.getA99Value();
                    colorVal3_C1 = tmpDIN99C1.getB99Value();
                           
                    colorVal1_C2 = tmpDIN99C2.getL99Value();
                    colorVal2_C2 = tmpDIN99C2.getA99Value();
                    colorVal3_C2 = tmpDIN99C2.getB99Value();

                    colorVal1_C3 = tmpDIN99C3.getL99Value();
                    colorVal2_C3 = tmpDIN99C3.getA99Value();
                    colorVal3_C3 = tmpDIN99C3.getB99Value();

                    colorVal1_C4 = tmpDIN99C4.getL99Value();
                    colorVal2_C4 = tmpDIN99C4.getA99Value();
                    colorVal3_C4 = tmpDIN99C4.getB99Value();

                    colorVal1_C5 = tmpDIN99C5.getL99Value();
                    colorVal2_C5 = tmpDIN99C5.getA99Value();
                    colorVal3_C5 = tmpDIN99C5.getB99Value();
                break;
                default:
                return;
            }
        break;
        default:
            console.log("Error at the openpredefinedbands function");
        

    }

    switch(activColorIndex){

                    case 0: 
                        document.getElementById("id_color1_First").value = colorVal1_C1;
                        document.getElementById("id_color1_Second").value = colorVal2_C1;
                        document.getElementById("id_color1_Third").value = colorVal3_C1;
                    break;
                    case 1:
                        document.getElementById("id_color1_First").value = colorVal1_C2;
                        document.getElementById("id_color1_Second").value = colorVal2_C2;
                        document.getElementById("id_color1_Third").value = colorVal3_C2;
                    break;
                    case 2:
                        document.getElementById("id_color1_First").value = colorVal1_C3;
                        document.getElementById("id_color1_Second").value = colorVal2_C3;
                        document.getElementById("id_color1_Third").value = colorVal3_C3;
                    break;
                    case 3:
                        document.getElementById("id_color1_First").value = colorVal1_C4;
                        document.getElementById("id_color1_Second").value = colorVal2_C4;
                        document.getElementById("id_color1_Third").value = colorVal3_C4;
                    break;
                    case 4:
                        document.getElementById("id_color1_First").value = colorVal1_C5;
                        document.getElementById("id_color1_Second").value = colorVal2_C5;
                        document.getElementById("id_color1_Third").value = colorVal3_C5;
                    break;
                    default:
                            console.log("Error at the changeColorspace function");

    }
    changeActiveColor(0);
    drawColorCircles();
    updateCreatorBand();
    

}

function saveBandToArray(){
    var oldIndex = activColorIndex; 
    switch(createBandType){
        case 0:
            if(newBandIsAdded == false){
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                constBands.push(tmpRGB);
                newBandIsAdded=true;
            }
            else{
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                constBands[constBands.length-1] = tmpRGB;
            }
        break;
        case 1:
            if(newBandIsAdded == false){
                var tmpArray = [];
                
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                scaleBands.push(tmpArray);
                newBandIsAdded=true;
            }
            else{
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                scaleBands[scaleBands.length-1][0] = tmpRGB;
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                scaleBands[scaleBands.length-1][1] = tmpRGB;
            }
        break;
        case 2:
            if(newBandIsAdded == false){
                //doubleBands
                var tmpArray = [];
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 2;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                doubleBands.push(tmpArray);
                newBandIsAdded=true;
            }
            else{
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                doubleBands[doubleBands.length-1][0] = tmpRGB;
                activColorIndex = 2;
                tmpRGB = getRGBColor();
                doubleBands[doubleBands.length-1][1] = tmpRGB;
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                doubleBands[doubleBands.length-1][2] = tmpRGB;
            }
        break;
        case 3:
            if(newBandIsAdded == false){
                //tribleBands
                var tmpArray = [];
                 activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 1;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 3;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                tribleBands.push(tmpArray);
                newBandIsAdded=true;
            }
            else{
                 activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tribleBands[tribleBands.length-1][0] = tmpRGB;
                 activColorIndex = 1;
                var tmpRGB = getRGBColor();
                tribleBands[tribleBands.length-1][1] = tmpRGB;
                 activColorIndex = 3;
                var tmpRGB = getRGBColor();
                tribleBands[tribleBands.length-1][2] = tmpRGB;
                 activColorIndex = 4;
                var tmpRGB = getRGBColor();
                tribleBands[tribleBands.length-1][3] = tmpRGB;
            }
        break;
        case 4:
            if(newBandIsAdded == false){
                //quadBands
                var tmpArray = [];
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 1;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 2;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 3;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                quadBands.push(tmpArray);
                newBandIsAdded=true;
            }
            else{
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                quadBands[quadBands.length-1][3] = tmpRGB;
                activColorIndex = 1;
                tmpRGB = getRGBColor();
                quadBands[quadBands.length-1][3] = tmpRGB;
                activColorIndex = 2;
                tmpRGB = getRGBColor();
                quadBands[quadBands.length-1][3] = tmpRGB;
                activColorIndex = 3;
                tmpRGB = getRGBColor();
                quadBands[quadBands.length-1][3] = tmpRGB;
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                quadBands[quadBands.length-1][3] = tmpRGB;
            }
        break;
        default:
            console.log("Error saveBandToArray function");
    }
    activColorIndex = oldIndex; 
    drawPredefinedBands();
}

function styleBandCreator(){

    document.getElementById("id_creatorBandLineC2").style.width = "17.5%";
    document.getElementById("id_creatorBandLineC4").style.width = "17.5%";
    document.getElementById("id_creatorBandLineC5").style.width = "17.5%";
    document.getElementById("id_creatorBandLineC3").style.display = "initial";

    switch(createBandType){
        case 0:
            document.getElementById("id_bandC5Label").innerHTML = "C2";
            document.getElementById("id_bandC2Label").style.display = "none";
            document.getElementById("id_bandC3Label").style.display = "none";
            document.getElementById("id_bandC4Label").style.display = "none";
            document.getElementById("id_creatorBandC2").style.display = "none";
            document.getElementById("id_creatorBandC3").style.display = "none";
            document.getElementById("id_creatorBandC4").style.display = "none";
            document.getElementById("id_creatorBandLineC2").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC3").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC4").style.borderRight = "none";
        break;
        case 1:
            document.getElementById("id_bandC5Label").innerHTML = "C2";
            document.getElementById("id_bandC2Label").style.display = "none";
            document.getElementById("id_bandC3Label").style.display = "none";
            document.getElementById("id_bandC4Label").style.display = "none";
            document.getElementById("id_creatorBandC2").style.display = "none";
            document.getElementById("id_creatorBandC3").style.display = "none";
            document.getElementById("id_creatorBandC4").style.display = "none";
            document.getElementById("id_creatorBandLineC2").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC3").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC4").style.borderRight = "none";
        break;
        case 2:
            document.getElementById("id_bandC3Label").innerHTML = "C2";
            document.getElementById("id_bandC5Label").innerHTML = "C3";
            document.getElementById("id_bandC2Label").style.display = "none";
            document.getElementById("id_bandC3Label").style.display = "initial";
            document.getElementById("id_bandC4Label").style.display = "none";
            document.getElementById("id_creatorBandC2").style.display = "none";
            document.getElementById("id_creatorBandC3").style.display = "initial";
            document.getElementById("id_creatorBandC4").style.display = "none";
            document.getElementById("id_creatorBandLineC2").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC3").style.borderRight = "2px solid black";
            document.getElementById("id_creatorBandLineC4").style.borderRight = "none";
        break;
        case 3:
            document.getElementById("id_bandC2Label").innerHTML = "C2";
            document.getElementById("id_bandC4Label").innerHTML = "C3";
            document.getElementById("id_bandC5Label").innerHTML = "C4";
            document.getElementById("id_bandC2Label").style.display = "initial";
            document.getElementById("id_bandC3Label").style.display = "none";
            document.getElementById("id_bandC4Label").style.display = "initial";
            document.getElementById("id_creatorBandC2").style.display = "initial";
            document.getElementById("id_creatorBandC3").style.display = "none";
            document.getElementById("id_creatorBandC4").style.display = "initial";
            document.getElementById("id_creatorBandLineC2").style.borderRight = "2px solid black";
            document.getElementById("id_creatorBandLineC2").style.width = "23.4%";
            document.getElementById("id_creatorBandLineC4").style.width = "23.4%";
            document.getElementById("id_creatorBandLineC5").style.width = "23.4%";
            document.getElementById("id_creatorBandLineC3").style.borderRight = "none";
            document.getElementById("id_creatorBandLineC3").style.display = "none";
            document.getElementById("id_creatorBandLineC4").style.borderRight = "2px solid black";
        break;
        case 4:
            document.getElementById("id_bandC2Label").innerHTML = "C2";
            document.getElementById("id_bandC3Label").innerHTML = "C3";
            document.getElementById("id_bandC4Label").innerHTML = "C4";
            document.getElementById("id_bandC5Label").innerHTML = "C5";
            document.getElementById("id_bandC2Label").style.display = "initial";
            document.getElementById("id_bandC3Label").style.display = "initial";
            document.getElementById("id_bandC4Label").style.display = "initial";
            document.getElementById("id_creatorBandC2").style.display = "initial";
            document.getElementById("id_creatorBandC3").style.display = "initial";
            document.getElementById("id_creatorBandC4").style.display = "initial";
            document.getElementById("id_creatorBandLineC2").style.borderRight = "2px solid black";
            document.getElementById("id_creatorBandLineC3").style.borderRight = "2px solid black";
            document.getElementById("id_creatorBandLineC4").style.borderRight = "2px solid black";
        break;
        default:
            console.log("Error saveBandToArray function");
    }
}

function addBand(type){
    var oldBandType = createBandType;
    console.log(type);
    createBandType = type;
    changeActiveColor(0);
    creatorBandIsNew=true;
    newBandIsAdded=true;

    var oldIndex = activColorIndex; 
    switch(createBandType){
        case 0:
            if(oldBandType == createBandType){
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                constBands.push(tmpRGB);
            }
            else{
                var r = 220; 
                var g = 180;
                var b = 95;
                var tmpRGB = new classColor_RGB((r/255),(g/255),(b/255));

                switch(colorspaceModus){
                        case "rgb":
                                    colorVal1_C1 = 220;
                                    colorVal2_C1 = 180;
                                    colorVal3_C1 = 95;
                        break;
                        case "hsv":
                                    var tmpHSV = tmpRGB.calcHSVColor();
                                    colorVal1_C1 = tmpHSV.getHValue();
                                    colorVal2_C1 = tmpHSV.getSValue();
                                    colorVal3_C1 = tmpHSV.getVValue();
                        break;
                        case "lab":
                                    var tmpLAB = tmpRGB.calcCIELabColor();
                                    colorVal1_C1 = tmpLAB.getLValue();
                                    colorVal2_C1 = tmpLAB.getAValue();
                                    colorVal3_C1 = tmpLAB.getBValue();      
                        break;
                        case "din99":
                                    var tmpDIN99 = tmpRGB.calcDIN99Color();
                                    colorVal1_C1 = tmpDIN99.getL99Value();
                                    colorVal2_C1 = tmpDIN99.getA99Value();
                                    colorVal3_C1 = tmpDIN99.getB99Value();
                        break;
                        default:
                        return;
                }
 
                constBands.push(tmpRGB);
            }
                
        break;
        case 1:
            if(oldBandType == createBandType){
                var tmpArray = [];
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                scaleBands.push(tmpArray);
               
            }
            else{

                var tmpRGB1 = new classColor_RGB(0,0,0);
                var tmpRGB2 = new classColor_RGB(1,1,1);
                var tmpArray = [];
                tmpArray.push(tmpRGB1);
                tmpArray.push(tmpRGB2);
                scaleBands.push(tmpArray);
                switch(colorspaceModus){
                        case "rgb":
                                    colorVal1_C1 = 0;
                                    colorVal2_C1 = 0;
                                    colorVal3_C1 = 0;

                                    colorVal1_C5 = 255;
                                    colorVal2_C5 = 255;
                                    colorVal3_C5 = 255;
                        break;
                        case "hsv":
                                    var tmpHSV = tmpRGB1.calcHSVColor();
                                    colorVal1_C1 = tmpHSV.getHValue();
                                    colorVal2_C1 = tmpHSV.getSValue();
                                    colorVal3_C1 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB2.calcHSVColor();
                                    colorVal1_C5 = tmpHSV.getHValue();
                                    colorVal2_C5 = tmpHSV.getSValue();
                                    colorVal3_C5 = tmpHSV.getVValue();
                        break;
                        case "lab":
                                    var tmpLAB = tmpRGB1.calcCIELabColor();
                                    colorVal1_C1 = tmpLAB.getLValue();
                                    colorVal2_C1 = tmpLAB.getAValue();
                                    colorVal3_C1 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB2.calcCIELabColor();
                                    colorVal1_C5 = tmpLAB.getLValue();
                                    colorVal2_C5 = tmpLAB.getAValue();
                                    colorVal3_C5 = tmpLAB.getBValue();      
                        break;
                        case "din99":
                                    var tmpDIN99 = tmpRGB1.calcDIN99Color();
                                    colorVal1_C1 = tmpDIN99.getL99Value();
                                    colorVal2_C1 = tmpDIN99.getA99Value();
                                    colorVal3_C1 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB2.calcDIN99Color();
                                    colorVal1_C5 = tmpDIN99.getL99Value();
                                    colorVal2_C5 = tmpDIN99.getA99Value();
                                    colorVal3_C5 = tmpDIN99.getB99Value();
                        break;
                        default:
                        return;
                }
                
            }
        break;
        case 2:
            if(oldBandType == createBandType){
                //doubleBands
                var tmpArray = [];
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 2;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                doubleBands.push(tmpArray);
            }
            else{
                var tmpRGB1 = new classColor_RGB(1,0,0);
                var tmpRGB2 = new classColor_RGB(1,1,1);
                var tmpRGB3 = new classColor_RGB(0,0,1);
                var tmpArray = [];
                tmpArray.push(tmpRGB1);
                tmpArray.push(tmpRGB2);
                tmpArray.push(tmpRGB3);
                doubleBands.push(tmpArray);
                switch(colorspaceModus){
                        case "rgb":
                                    colorVal1_C1 = 255;
                                    colorVal2_C1 = 0;
                                    colorVal3_C1 = 0;

                                    colorVal1_C3 = 255;
                                    colorVal2_C3 = 255;
                                    colorVal3_C3 = 255;

                                    colorVal1_C5 = 0;
                                    colorVal2_C5 = 0;
                                    colorVal3_C5 = 255;
                        break;
                        case "hsv":
                                    var tmpHSV = tmpRGB1.calcHSVColor();
                                    colorVal1_C1 = tmpHSV.getHValue();
                                    colorVal2_C1 = tmpHSV.getSValue();
                                    colorVal3_C1 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB2.calcHSVColor();
                                    colorVal1_C3 = tmpHSV.getHValue();
                                    colorVal2_C3 = tmpHSV.getSValue();
                                    colorVal3_C3 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB3.calcHSVColor();
                                    colorVal1_C5 = tmpHSV.getHValue();
                                    colorVal2_C5 = tmpHSV.getSValue();
                                    colorVal3_C5 = tmpHSV.getVValue();
                        break;
                        case "lab":
                                    var tmpLAB = tmpRGB1.calcCIELabColor();
                                    colorVal1_C1 = tmpLAB.getLValue();
                                    colorVal2_C1 = tmpLAB.getAValue();
                                    colorVal3_C1 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB2.calcCIELabColor();
                                    colorVal1_C3 = tmpLAB.getLValue();
                                    colorVal2_C3 = tmpLAB.getAValue();
                                    colorVal3_C3 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB3.calcCIELabColor();
                                    colorVal1_C5 = tmpLAB.getLValue();
                                    colorVal2_C5 = tmpLAB.getAValue();
                                    colorVal3_C5 = tmpLAB.getBValue();      
                        break;
                        case "din99":
                                    var tmpDIN99 = tmpRGB1.calcDIN99Color();
                                    colorVal1_C1 = tmpDIN99.getL99Value();
                                    colorVal2_C1 = tmpDIN99.getA99Value();
                                    colorVal3_C1 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB2.calcDIN99Color();
                                    colorVal1_C3 = tmpDIN99.getL99Value();
                                    colorVal2_C3 = tmpDIN99.getA99Value();
                                    colorVal3_C3 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB3.calcDIN99Color();
                                    colorVal1_C5 = tmpDIN99.getL99Value();
                                    colorVal2_C5 = tmpDIN99.getA99Value();
                                    colorVal3_C5 = tmpDIN99.getB99Value();
                        break;
                        default:
                        return;
                }
            }
        break;
        case 3:
            if(oldBandType == createBandType){
                //tribleBands
                 var tmpArray = [];
                activColorIndex = 0;
                var tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 1;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 3;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                activColorIndex = 4;
                tmpRGB = getRGBColor();
                tmpArray.push(tmpRGB);
                tribleBands.push(tmpArray);
            }
            else{
                var tmpRGB1 = new classColor_RGB(255/255,145/255,15/255);
                var tmpRGB2 = new classColor_RGB(243/255, 238/255, 27/255);
                var tmpRGB3 = new classColor_RGB(116/255, 194/255, 36/255);
                var tmpRGB4 = new classColor_RGB(24/255, 95/255, 25/255);
                var tmpArray = [];
                tmpArray.push(tmpRGB1);
                tmpArray.push(tmpRGB2);
                tmpArray.push(tmpRGB3);
                tmpArray.push(tmpRGB4);
                tribleBands.push(tmpArray);
                switch(colorspaceModus){
                        case "rgb":
                                    colorVal1_C1 = 255;
                                    colorVal2_C1 = 145;
                                    colorVal3_C1 = 15;

                                    colorVal1_C2 = 243;
                                    colorVal2_C2 = 238;
                                    colorVal3_C2 = 27;

                                    colorVal1_C4 = 116;
                                    colorVal2_C4 = 194;
                                    colorVal3_C4 = 36;

                                    colorVal1_C5 = 24;
                                    colorVal2_C5 = 95;
                                    colorVal3_C5 = 25;
                        break;
                        case "hsv":
                                    var tmpHSV = tmpRGB1.calcHSVColor();
                                    colorVal1_C1 = tmpHSV.getHValue();
                                    colorVal2_C1 = tmpHSV.getSValue();
                                    colorVal3_C1 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB2.calcHSVColor();
                                    colorVal1_C2 = tmpHSV.getHValue();
                                    colorVal2_C2 = tmpHSV.getSValue();
                                    colorVal3_C2 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB3.calcHSVColor();
                                    colorVal1_C5 = tmpHSV.getHValue();
                                    colorVal2_C5 = tmpHSV.getSValue();
                                    colorVal3_C5 = tmpHSV.getVValue();
                                    tmpHSV = tmpRGB4.calcHSVColor();
                                    colorVal1_C5 = tmpHSV.getHValue();
                                    colorVal2_C5 = tmpHSV.getSValue();
                                    colorVal3_C5 = tmpHSV.getVValue();
                        break;
                        case "lab":
                                    var tmpLAB = tmpRGB1.calcCIELabColor();
                                    colorVal1_C1 = tmpLAB.getLValue();
                                    colorVal2_C1 = tmpLAB.getAValue();
                                    colorVal3_C1 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB2.calcCIELabColor();
                                    colorVal1_C2 = tmpLAB.getLValue();
                                    colorVal2_C2 = tmpLAB.getAValue();
                                    colorVal3_C2 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB3.calcCIELabColor();
                                    colorVal1_C4 = tmpLAB.getLValue();
                                    colorVal2_C4 = tmpLAB.getAValue();
                                    colorVal3_C4 = tmpLAB.getBValue();
                                    tmpLAB = tmpRGB4.calcCIELabColor();
                                    colorVal1_C5 = tmpLAB.getLValue();
                                    colorVal2_C5 = tmpLAB.getAValue();
                                    colorVal3_C5 = tmpLAB.getBValue();      
                        break;
                        case "din99":
                                    var tmpDIN99 = tmpRGB1.calcDIN99Color();
                                    colorVal1_C1 = tmpDIN99.getL99Value();
                                    colorVal2_C1 = tmpDIN99.getA99Value();
                                    colorVal3_C1 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB2.calcDIN99Color();
                                    colorVal1_C2 = tmpDIN99.getL99Value();
                                    colorVal2_C2 = tmpDIN99.getA99Value();
                                    colorVal3_C2 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB3.calcDIN99Color();
                                    colorVal1_C4 = tmpDIN99.getL99Value();
                                    colorVal2_C4 = tmpDIN99.getA99Value();
                                    colorVal3_C4 = tmpDIN99.getB99Value();
                                    tmpDIN99 = tmpRGB4.calcDIN99Color();
                                    colorVal1_C5 = tmpDIN99.getL99Value();
                                    colorVal2_C5 = tmpDIN99.getA99Value();
                                    colorVal3_C5 = tmpDIN99.getB99Value();
                        break;
                        default:
                        return;
                }
            }
        break;
        case 4:
            if(newBandIsAdded == false){
                //quadBands
                var tmpArray = [];
                var tmpRGB = new classColor_RGB((colorVal1_C1/255),(colorVal2_C1/255),(colorVal3_C1/255));
                tmpArray.push(tmpRGB);
                tmpRGB = new classColor_RGB((colorVal1_C2/255),(colorVal2_C2/255),(colorVal3_C2/255));
                tmpArray.push(tmpRGB);
                tmpRGB = new classColor_RGB((colorVal1_C3/255),(colorVal2_C3/255),(colorVal3_C3/255));
                tmpArray.push(tmpRGB);
                tmpRGB = new classColor_RGB((colorVal1_C4/255),(colorVal2_C4/255),(colorVal3_C4/255));
                tmpArray.push(tmpRGB);
                tmpRGB = new classColor_RGB((colorVal1_C5/255),(colorVal2_C5/255),(colorVal3_C5/255));
                tmpArray.push(tmpRGB);
                quadBands.push(tmpArray);
            }
            else{
                var tmpRGB = new classColor_RGB((colorVal1_C1/255),(colorVal2_C1/255),(colorVal3_C1/255));
                quadBands[quadBands.length-1][3] = tmpRGB;
                tmpRGB = new classColor_RGB((colorVal1_C2/255),(colorVal2_C2/255),(colorVal3_C2/255));
                quadBands[quadBands.length-1][3] = tmpRGB;
                tmpRGB = new classColor_RGB((colorVal1_C3/255),(colorVal2_C3/255),(colorVal3_C3/255));
                quadBands[quadBands.length-1][3] = tmpRGB;
                tmpRGB = new classColor_RGB((colorVal1_C4/255),(colorVal2_C4/255),(colorVal3_C4/255));
                quadBands[quadBands.length-1][3] = tmpRGB;
                tmpRGB = new classColor_RGB((colorVal1_C5/255),(colorVal2_C5/255),(colorVal3_C5/255));
                quadBands[quadBands.length-1][3] = tmpRGB;
            }
        break;
        default:
            console.log("Error saveBandToArray function");
    }
    activColorIndex = oldIndex; 

    switch(activColorIndex){

                    case 0: 
                        document.getElementById("id_color1_First").value = colorVal1_C1;
                        document.getElementById("id_color1_Second").value = colorVal2_C1;
                        document.getElementById("id_color1_Third").value = colorVal3_C1;
                    break;
                    case 1:
                        document.getElementById("id_color1_First").value = colorVal1_C2;
                        document.getElementById("id_color1_Second").value = colorVal2_C2;
                        document.getElementById("id_color1_Third").value = colorVal3_C2;
                    break;
                    case 2:
                        document.getElementById("id_color1_First").value = colorVal1_C3;
                        document.getElementById("id_color1_Second").value = colorVal2_C3;
                        document.getElementById("id_color1_Third").value = colorVal3_C3;
                    break;
                    case 3:
                        document.getElementById("id_color1_First").value = colorVal1_C4;
                        document.getElementById("id_color1_Second").value = colorVal2_C4;
                        document.getElementById("id_color1_Third").value = colorVal3_C4;
                    break;
                    case 4:
                        document.getElementById("id_color1_First").value = colorVal1_C5;
                        document.getElementById("id_color1_Second").value = colorVal2_C5;
                        document.getElementById("id_color1_Third").value = colorVal3_C5;
                    break;
                    default:
                            console.log("Error at the changeColorspace function");

    }

    styleBandCreator();
    drawColorCircles();
    updateCreatorBand();
    drawPredefinedBands();
}
///////////////////////////
////   Open Band Editor ////
///////////////////////////
    
function bandOnClick(event){


    document.getElementById("bandEditWindow").style.display = "initial";


    /*var box = document.getElementById("bandEditWindow").getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top  = box.top +  scrollTop - clientTop;
    document.getElementById("createSide_AddBandWindow").style.paddingTop = top+"px";*/

        // init band option window
        var tmpString = event.target.id;
        tmpString = tmpString.substr(4);
        var tmpIndex = parseInt(tmpString);
        editBandIndex = tmpIndex;
        if(tmpIndex==0){
            hasLeftNeig = false;
            
            //document.getElementById("createSide_AddBand_InputLeftRef").value = colormapBandSketchR1[bandOptionsIndex];
            //document.getElementById("createSide_AddBand_LeftNeig").style.background = "rgb(120,120,120)";
        }
        else{
            hasLeftNeig = true;
            //document.getElementById("createSide_AddLeftNeiColor").style.background = colormapBandSketchC2[tmpIndex].getRGBString();
            //document.getElementById("createSide_AddBand_LeftNeiLeftRef").innerHTML = colormapBandSketchR1[tmpIndex];
            //document.getElementById("createSide_AddBand_LeftNeiRightRef").innerHTML = colormapBandSketchR2[tmpIndex];
            //colormapBandSketchR1[bandOptionsIndex] = colormapBandSketchR2[tmpIndex]; 
            
            /*if(bandType[colormapBandSketch[tmpIndex]]){

                document.getElementById("createSide_AddBand_LeftNeig").style.background = '-webkit-linear-gradient(left, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_LeftNeig").style.background = '-o-linear-gradient(right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_LeftNeig").style.background = '-moz-linear-gradient(right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_LeftNeig").style.background = 'linear-gradient(to right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
            }   
            else{
                document.getElementById("createSide_AddBand_LeftNeig").style.background = colormapBandSketchC2[tmpIndex].getRGBString();
            }*/ 
        }
        if(tmpIndex==colormapBandSketchC1.length-1){
            hasRightNeig = false;

            /*if(hasLeftNeig && isnew)
            colormapBandSketchR2[bandOptionsIndex] = colormapBandSketchR2[bandOptionsIndex-1]+1; 

            document.getElementById("createSide_AddBand_RightNeig").style.background = "rgb(120,120,120)";*/
        }
        else{
            hasRightNeig = true;
            /*document.getElementById("createSide_AddRightNeiColor").style.background = colormapBandSketchC1[tmpIndex].getRGBString();
            document.getElementById("createSide_AddBand_RightNeiLeftRef").innerHTML = colormapBandSketchR1[tmpIndex];
            document.getElementById("createSide_AddBand_RightNeiRightRef").innerHTML = colormapBandSketchR2[tmpIndex];   
            
            colormapBandSketchR2[bandOptionsIndex] = colormapBandSketchR1[tmpIndex]; 

            if(hasLeftNeig == false && isnew){
                colormapBandSketchR1[bandOptionsIndex] = colormapBandSketchR1[tmpIndex]-1; 
            }

            if(bandType[colormapBandSketch[tmpIndex]]){
                document.getElementById("createSide_AddBand_RightNeig").style.background = '-webkit-linear-gradient(left, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_RightNeig").style.background = '-o-linear-gradient(right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_RightNeig").style.background = '-moz-linear-gradient(right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_RightNeig").style.background = 'linear-gradient(to right, '+colormapBandSketchC1[tmpIndex].getRGBString()+','+colormapBandSketchC2[tmpIndex].getRGBString()+')';
            }   
            else{
                document.getElementById("createSide_AddBand_RightNeig").style.background = colormapBandSketchC1[tmpIndex].getRGBString();
            }*/ 
    

        }


        /*document.getElementById("createSide_AddBand_InputLeftRef").value = colormapBandSketchR1[bandOptionsIndex];
        document.getElementById("createSide_AddBand_InputRightRef").value = colormapBandSketchR2[bandOptionsIndex];
        document.getElementById('createSide_AddLeftColor').value = colormapBandSketchC1[bandOptionsIndex].getHexString();
        document.getElementById('createSide_AddRightColor').value = colormapBandSketchC2[bandOptionsIndex].getHexString();*/

        
        // 
        if(bandType[colormapBandSketch[bandOptionsIndex]]){

                /*document.getElementById("createSide_AddBand_InsertBand").style.background = '-webkit-linear-gradient(left, '+colormapBandSketchC1[bandOptionsIndex].getRGBString()+','+colormapBandSketchC2[bandOptionsIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_InsertBand").style.background = '-o-linear-gradient(right, '+colormapBandSketchC1[bandOptionsIndex].getRGBString()+','+colormapBandSketchC2[bandOptionsIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_InsertBand").style.background = '-moz-linear-gradient(right, '+colormapBandSketchC1[bandOptionsIndex].getRGBString()+','+colormapBandSketchC2[bandOptionsIndex].getRGBString()+')';
                document.getElementById("createSide_AddBand_InsertBand").style.background = 'linear-gradient(to right, '+colormapBandSketchC1[bandOptionsIndex].getRGBString()+','+colormapBandSketchC2[bandOptionsIndex].getRGBString()+')';*/
        }   
        else{
                //document.getElementById("createSide_AddBand_InsertBand").style.background = colormapBandSketchC1[bandOptionsIndex].getRGBString();
        } 
}

