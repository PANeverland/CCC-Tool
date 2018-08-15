function checkInputVal(obj, allowFloat, allowNegative){

    var checkstring = obj.value;
    var pointIsSet = false;
    var pointIndex = 0;
    var foundCharE = false;

    for(var i=checkstring.length-1; i>=0; i--){

        switch(checkstring[i]) {
            case "0":
            break;
            case "1":
            break;
            case "2":
            break;
            case "3":
            break;
            case "4":
            break;
            case "5":
            break;
            case "6":
            break;
            case "7":
            break;
            case "8":
            break;
            case "9":
            break;
            case ".":
                if(allowFloat==true){
                    if(pointIsSet==true){
                        if(i==0){
                            checkstring = checkstring.slice(i+1);
                        }
                        else{
                            if(i==checkstring.length-1){
                                checkstring = checkstring.slice(0, pointIndex);
                            }
                            else{
                                checkstring = checkstring.slice(0, pointIndex) + checkstring.slice(pointIndex+1);
                            }
                            pointIndex=i;
                        }

                    }
                    else{
                        pointIsSet=true;
                        pointIndex=i;
                    }
                    break;
                }

            case ",":
                if(allowFloat==true){
                    if(pointIsSet==true){
                        if(i==0){
                            checkstring = checkstring.slice(i+1);
                        }
                        else{
                            if(i==checkstring.length-1){
                                checkstring = checkstring.substr(0, i) + ".";
                                checkstring = checkstring.slice(0, pointIndex);
                            }
                            else{
                                checkstring = checkstring.substr(0, i) + "."+ checkstring.substr(i + 1);
                                checkstring = checkstring.slice(0, pointIndex) + checkstring.slice(pointIndex+1);
                            }
                            pointIndex=i;
                        }

                    }
                    else{
                        pointIsSet=true;
                        pointIndex=i;
                        if(i==checkstring.length-1)
                            checkstring = checkstring.substr(0, i) + ".";
                        else
                            checkstring = checkstring.substr(0, i) + "."+ checkstring.substr(i + 1);
                    }
                    break;
                }
            case "-":
            if(allowNegative==true){
                if(i!=0){
                    if(i==checkstring.length-1){
                        checkstring = checkstring.slice(0, i);
                    }
                    else{
                        checkstring = checkstring.slice(0, i) + checkstring.slice(i+1);
                    }
                }
                break;
            }


            default:

            if(i==0){
                checkstring = checkstring.slice(i+1);
            }
            else{
                if(i==checkstring.length-1){
                    checkstring = checkstring.slice(0, i);
                }
                else{
                    checkstring = checkstring.slice(0, i) + checkstring.slice(i+1);
                }
            }


        }
    }
    obj.value = checkstring;

}



function checkProbeInputVal(objID, isReady){

    var obj = document.getElementById(objID);
    var checkstring = obj.value;
    var pointIsSet = false;
    var pointIndex = 0;
    var newNumberStarted = true;
    var newRangeStarted = true;
    var lastBorderIsSemi = true;

    var indexArray=[];

    var firstE = true;

    var commaCounter = 0;
    var semiCounter = 0;

    for(var i=0; i<checkstring.length; i++){
        switch(checkstring[i]) {
            case "0":
            break;
            case "1":
            break;
            case "2":
            break;
            case "3":
            break;
            case "4":
            break;
            case "5":
            break;
            case "6":
            break;
            case "7":
            break;
            case "8":
            break;
            case "9":
            break;
            case "e":

              if(i==0)
                indexArray.push(i);
              else{
                if(firstE && checkstring[i-1]!=";" && checkstring[i-1]!=","){

                  if(i!=checkstring.length-1){
                      if(firstE && checkstring[i+1]==="+" || checkstring[i+1]==="-"){
                        firstE=false;
                      }
                      else{
                        indexArray.push(i);
                      }
                  }
                  else{
                    firstE=false;
                  }

                }
                else{
                  if(i==checkstring.length-1){
                    indexArray.push(i);
                  }
                }
              }


            break;
            case ".":

                    if(pointIsSet==true){
                            indexArray.push(i);
                    }
                    else{

                        if(checkstring[i-1]==="e" || checkstring[i-1]===";" || checkstring[i-1]==="," || checkstring[i-1]==="." || checkstring[i-1]==="-"|| checkstring[i-1]==="+"){
                          indexArray.push(i);
                        }
                        else{
                          pointIsSet=true;
                        }
                    }
                    break;


            case ",":


              if(lastBorderIsSemi){

                if(checkstring[i-1]==="e" || checkstring[i-1]===";" || checkstring[i-1]==="," || checkstring[i-1]==="." || checkstring[i-1]==="-"|| checkstring[i-1]==="+"){
                  indexArray.push(i);
                }
                else {
                  // new number
                  firstE=true;
                  pointIsSet=false;
                  lastBorderIsSemi=false;
                  commaCounter++;
                }

              }
              else{
                indexArray.push(i);
              }



            break;
            case ";":


                if(lastBorderIsSemi==false){

                  if(checkstring[i-1]==="e" || checkstring[i-1]===";" || checkstring[i-1]==="," || checkstring[i-1]==="." || checkstring[i-1]==="-"|| checkstring[i-1]==="+"){
                    indexArray.push(i);
                  }
                  else {
                    // new number
                    firstE=true;
                    pointIsSet=false;
                    lastBorderIsSemi=true;
                    semiCounter++;
                  }

                }
                else{
                  indexArray.push(i);
                }

                break;
            case "-": case "+":

                if(i!=0){
                  if(checkstring[i-1]!="e" && checkstring[i-1]!=";" && checkstring[i-1]!=","){
                    indexArray.push(i);
                  }
                }


                break;

            default:

            indexArray.push(i);


        }
    }



    for(var i=indexArray.length-1; i>=0; i--){
      if(indexArray[i]==0){
          checkstring = checkstring.slice(indexArray[i]+1);
      }
      else{
        if(indexArray[i]==checkstring.length-1){
            checkstring = checkstring.slice(0, indexArray[i]);
        }
        else{
            checkstring = checkstring.slice(0, indexArray[i]) + checkstring.slice(indexArray[i]+1);
        }
      }


    }

    obj.value = checkstring;


    if(isReady){

      document.getElementById("CustomProbeInfoText").innerHTML = "";
      document.getElementById("CustomProbeInfoText").style.color="red";

      if(document.getElementById("id_inputCustomProbeRanges").value===""){
        document.getElementById("CustomProbeInfoText").innerHTML = "Error: The input is emtpy.";
        return false;
      }
      else{
        if(commaCounter!=semiCounter){
          document.getElementById("CustomProbeInfoText").innerHTML = "Error: The number of commas is not equal to the number of semicolons.";
          return false;
        }

        var falseArrayElements = [];
        var startValue=[];
        var endValue=[];

        var ranges = document.getElementById("id_inputCustomProbeRanges").value.split(";");

        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i].split(",");
          if(range.length==2){

            var val1 = parseFloat(range[0]);
            var val2 = parseFloat(range[1]);
            startValue.push(val1);
            endValue.push(val2);

            if(val2<val1){
              falseArrayElements.push(i);
            }

          }
          else{
            if(range!=""){
              document.getElementById("CustomProbeInfoText").innerHTML = "Error: A false number of values has been detected. Please check the input part \""+ranges[i]+"\".";
              return false;
            }
          }
        }


        if(falseArrayElements.length>0){
          var errorMess = "Error: The algorithm found ranges with a bigger first value. Please check the following ranges:";

          for (var i = 0; i < falseArrayElements.length; i++) {
            errorMess = errorMess+ startValue[falseArrayElements[i]]+","+endValue[falseArrayElements[i]]+";";
          }

          document.getElementById("CustomProbeInfoText").innerHTML = errorMess;
          return false;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// check Overlapping

        var errorMess = "Error: The algorithm found overlapping ranges. Please check the following ranges: ";
        var setError =false;

        for (var i = 0; i < startValue.length-1; i++) {

            var currentStart = startValue[i];
            var currentEnd = endValue[i];
            var isOverlapping = false;

            var errorMess2 = "\tThe range \""+currentStart+","+currentEnd+"; is overlapping with  ";

            for (var j = i+1; j < startValue.length; j++) {

                var checkStart = startValue[j];
                var checkEnd = endValue[j];


                if(checkEnd<=currentStart)
                  continue;

                if(checkStart>=currentEnd)
                  continue;


                isOverlapping=true;
                errorMess2=errorMess2+checkStart+","+checkEnd+";";

            }

            errorMess2=errorMess2+". \n"

            if(isOverlapping){
              setError=true;
              errorMess = errorMess + errorMess2;
            }
        }

        if(setError){
          document.getElementById("CustomProbeInfoText").innerHTML = errorMess;
          return false;
        }
        ///////////////////////////////////////////////////////////////////////////////////
        /// check order


        var changedOrder = false;
        var swapped = false;

        var n = startValue.length;

        do {
          swapped = false
          for (i=0; i<n-1; ++i){
            if (endValue[i] > startValue[i+1]){

              // swap
              var tmpVal = startValue[i];
              startValue[i]=startValue[i+1];
              startValue[i+1]=tmpVal;

              tmpVal = endValue[i];
              endValue[i]=endValue[i+1];
              endValue[i+1]=tmpVal;

              changedOrder=true;
              swapped = true
            } // Ende if
          } // Ende for
          n = n-1
        } while (swapped);

        if(changedOrder){

          var inputString = "";

          for (var i = 0; i < startValue.length; i++) {
            inputString=inputString+startValue[i]+","+endValue[i]+";";
          }

          document.getElementById("id_inputCustomProbeRanges").value=inputString;

          document.getElementById("CustomProbeInfoText").style.color="orange";
          document.getElementById("CustomProbeInfoText").innerHTML = "Info: The order of the probe ranges was not correct. The input has been adjusted automatically.";
        }
        else{
          document.getElementById("CustomProbeInfoText").style.color="green";
          document.getElementById("CustomProbeInfoText").innerHTML = "The input is correct.";
        }


      }





    }
    else {
      return false;
    }



}
