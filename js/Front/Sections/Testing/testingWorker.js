
self.addEventListener('message', function(e) {

  var data = e.data;
  var error = 100; // 0.01
  var errorMath = 1e12;
  var jsonObj = {};

  var jsonUpdateObj = {};
  jsonUpdateObj['isUpdate'] = true;
  jsonUpdateObj['status'] = 0;
  jsonUpdateObj['index'] = data.testFieldIndex;


  jsonObj['testFieldVal'] = [];
  jsonObj['isUpdate'] = false;
  jsonObj['cVal1'] = [];
  jsonObj['cVal2'] = [];
  jsonObj['cVal3'] = [];
  jsonObj['positions'] = [];
  jsonObj['includeCellValues'] = false;
  jsonObj['status'] = 100;
  jsonObj['index'] = data.testFieldIndex;

  var min = Infinity;
  var max = -Infinity;
  var doScale = false;
  self.postMessage(jsonUpdateObj);



  //////// If origin is relevant -> determine origin

  var originStartX = data.originPosX;
  var originStartY = data.originPosY;

  if(data.originIsCenter){

    originStartX= originStartX-((data.testFieldDimX/2)*data.stepXDirection);
    originStartY= originStartY-((data.testFieldDimY/2)*data.stepYDirection);

  }

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  /// Generate Test Field
  switch (data.testFieldType) {

    ///////////////////////////
    //// JUMP
    case "JUMP":

        jsonObj.includeCellValues = true;

        var dis = Math.round((data.testFieldRangeEnd-data.testFieldRangeStart) * errorMath) / errorMath;
        for (var y = 0; y < data.testFieldDimY; y++) {
          for (var x = 0; x < data.testFieldDimX; x++) {
            jsonObj.testFieldVal.push(undefined);
            jsonObj.positions.push([x,y]);
          }
        }

        var currentValIndex = 0;
        for (var i = 0; i < data.testFieldVar_a.length; i++){

          var value = Math.round((data.testFieldRangeStart + (data.testFieldVar_a[i]*dis))* errorMath) / errorMath;
          var currentXPos = 1;
          for (var y = 0; y < (data.testFieldDimY-1); y++) {
            var tmpIndex =  (y*data.testFieldDimX)+currentValIndex;

            //jsonObj.positions[tmpIndex]=[currentValIndex,y];
            jsonObj.testFieldVal[tmpIndex] = value;
            tmpIndex =  (i*data.testFieldDimX)+currentXPos;

            //jsonObj.positions[tmpIndex]=[currentXPos,y];
            jsonObj.testFieldVal[tmpIndex] = value;
            currentXPos+=2;
          }
          currentValIndex+=2;
        }

        /*var dis = Math.round((data.testFieldRangeEnd-data.testFieldRangeStart) * errorMath) / errorMath;
        var compareValues=[];
        for (var i = 0; i < data.testFieldVar_a.length; i++) {
          compareValues.push(Math.round((data.testFieldRangeStart + (data.testFieldVar_a[i]*dis))* errorMath) / errorMath);
        }

        var valueArray = [];
        var valueEndIndexY =data.testFieldDimY-2;
        var valueEndIndexX =data.testFieldDimX-2;

        for (var y = 0; y < data.testFieldDimY; y++) {
          var tmpArray = new Array(data.testFieldDimX).fill(undefined);
          valueArray.push(tmpArray);
        }


        var limitedTo = valueEndIndexY;
        for (var x = 0; x < data.testFieldDimX-1; x++) {
          var startIndex = x/2+1;
          var researchIndex = x/2;
          for (var y = 0; y < limitedTo; y++) {
            valueArray[y][x]=compareValues[researchIndex];
            valueArray[y][x+1]=compareValues[startIndex];
            startIndex++;
          }
          x++;
          limitedTo--;
        }

        ////// now we have to mirror the results
        var tillXElement = 0;
        for (var y = valueEndIndexY; y >0; y--) {   // last line is full of undefined because we save point value array, but we habe cell values, first line is already full of values
          for (var x = valueEndIndexX; x >= tillXElement; x--) {
            valueArray[y][x] = valueArray[valueEndIndexY-y][valueEndIndexX-x];
          }
          tillXElement += 2;
        }

        ///// save values
        for (var y = 0; y < valueArray.length; y++) {
          for (var x = 0; x < valueArray[y].length; x++) {
            jsonObj.positions.push([x,y]);
            jsonObj.testFieldVal.push(valueArray[y][x]);
          }
        }*/


      break;

      ///////////////////////////
      //// Valley
      case "Valley":




          var dis = Math.round((data.testFieldRangeEnd-data.testFieldRangeStart) * errorMath) / errorMath;
          //  f : x=[-1,1] x y=[0,1]

          var minValue = Math.round((data.testFieldRangeStart+(dis*data.testFieldVar_a)) * errorMath) / errorMath;
          var maxValue = Math.round((data.testFieldRangeStart+(dis*data.testFieldVar_b)) * errorMath) / errorMath;

          var currentMax = undefined;
          var amountOfGradient = undefined;
          var currentY = undefined;
          var currentX =undefined;

          var isValley = true; // valley
          if(data.testFieldVar_b<data.testFieldVar_a)
            isValley = false; // ridge*/


          for (var y = 0; y < data.testFieldDimY; y++) {

            currentY = Math.round((y/(data.testFieldDimY-1)) * errorMath) / errorMath;

            if(!isValley)
            currentY = 1-currentY;



            switch (data.testFieldVar_d) {
              case 0: // M-Type = linear
                  //  gradient depends on y => g=M*(1-y); and on x <=0 positive x>0 negative
                    currentMax = Math.round((minValue+(maxValue-minValue)*(currentY)) * errorMath) / errorMath;
                break;
                case 1: // M-Type = quad (hunch)
                      if(data.testFieldVar_f%2==0)
                        currentMax =  minValue+(maxValue-minValue)*(1-Math.pow(currentY-1,data.testFieldVar_f));
                      else
                        currentMax =  minValue+(maxValue-minValue)*(1+Math.pow(currentY-1,data.testFieldVar_f));
                  break;

                  case 2: // M-Type = quad (crumb)
                      // here we don't need to check if the exponend is 0 for modulo 2, because we only check values between 0 and 1
                      currentMax =  minValue+(maxValue-minValue)*(Math.pow(currentY,data.testFieldVar_f));
                  break;

            }



            amountOfGradient = Math.round((currentMax-minValue) * errorMath) / errorMath;// Math.round(((maxValue-minValue)*(currentY)) * errorMath) / errorMath;


            for (var x = 0; x < data.testFieldDimX; x++) {

              var currentX = Math.round((-1+(x/(data.testFieldDimX-1))*2) * errorMath) / errorMath;

              var value = undefined;

              switch (data.testFieldVar_c) {
                case 0: // m-Type = linear
                    if(currentX<=0){
                      value = Math.round((  currentMax+currentX*amountOfGradient) * errorMath) / errorMath;
                    }
                    else {
                      value = Math.round((  currentMax+currentX*-1*amountOfGradient) * errorMath) / errorMath;
                    }
                  break;
                  case 1: // m-Type = quad
                    if(data.testFieldVar_e%2==0 || currentX>0)
                      value = Math.round(((minValue-currentMax)*Math.pow(currentX,data.testFieldVar_e)+currentMax ) * errorMath) / errorMath;
                    else
                      value = Math.round(((minValue-currentMax)*(Math.pow(currentX,data.testFieldVar_e)*-1)+currentMax) * errorMath) / errorMath;
                  break;
                  case 2: // m-Type = quad

                    if(currentX<=0){
                      //if(data.testFieldVar_e%2==0)
                        value = Math.round(((minValue-currentMax)*(1-Math.pow(currentX+1,data.testFieldVar_e))+currentMax) * errorMath) / errorMath;
                      /*else
                        value = Math.round(((minValue-currentMax)*(1-Math.pow(currentX+1,data.testFieldVar_e))+currentMax) * errorMath) / errorMath;*/
                    }
                    else{
                      if(data.testFieldVar_e%2==0)
                        value = Math.round(((minValue-currentMax)*(1-Math.pow(currentX-1,data.testFieldVar_e))+currentMax ) * errorMath) / errorMath;
                      else
                        value = Math.round(((minValue-currentMax)*(1-(Math.pow(currentX-1,data.testFieldVar_e)*-1))+currentMax ) * errorMath) / errorMath;
                    }


                  break;

              }

              //console.log(value);
              jsonObj.positions.push([x,y]);
              jsonObj.testFieldVal.push(value);
            }

          }





      break;

      ///////////////////////////
      //// Gradient
      case "GRADIENT":


      var dis = Math.round((data.testFieldRangeEnd-data.testFieldRangeStart) * errorMath) / errorMath;
      var startValue = Math.round((data.testFieldRangeStart+dis*data.testFieldVar_a) * errorMath) / errorMath;


      switch (data.testFieldGenerationType) {
        case 0: // Rising Gradient


              var endStep = (data.testFieldRangeEnd-startValue)/data.testFieldDimY; // y step define the end value for the current y

              for (var y = 0; y < data.testFieldDimY; y++) {

                var endValue = startValue + ((y+1)*endStep);
                var step= (endValue-startValue)/(data.testFieldDimX-1); // x step to reach the end value (current y)


                for (var x = 0; x < data.testFieldDimX; x++) {

                  var value = Math.round((startValue+x*step) * errorMath) / errorMath; // x-1 because we dont
                  jsonObj.positions.push([y,x]);
                  jsonObj.testFieldVal.push(value);
                }

              }
          break;
          case 1: // Falling Gradient
          var endStep = (startValue-data.testFieldRangeStart)/data.testFieldDimY; // y step define the end value for the current y

          for (var y = 0; y < data.testFieldDimY; y++) {

            var endValue = startValue - ((y+1)*endStep);
            var step= (startValue-endValue)/(data.testFieldDimX-1); // x step to reach the end value (current y)


            for (var x = 0; x < data.testFieldDimX; x++) {

              var value = Math.round((startValue-x*step) * errorMath) / errorMath; // x-1 because we dont
              jsonObj.positions.push([y,x]);
              jsonObj.testFieldVal.push(value);
            }

          }
            break;
      }




      break;


      ///////////////////////////
      //// Local Extrema
      case "Extrema":

      var xStart = undefined;
      var yStart = undefined;

      if(data.testFieldDimX%2==0){
        xStart = 0-(data.testFieldVar_d*(data.testFieldDimX/2-1)+data.testFieldVar_d/2);
      }
      else{
        xStart = 0-(data.testFieldVar_d*((data.testFieldDimX-1)/2));
      }


      if(data.testFieldDimY%2==0){
        yStart = 0-(data.testFieldVar_e*(data.testFieldDimY/2-1)+data.testFieldVar_e/2);
      }
      else{
        yStart = 0-(data.testFieldVar_e*((data.testFieldDimY-1)/2));
      }

      var currentX = undefined;
      var currentY = undefined;
      for (var y = 0; y < data.testFieldDimY; y++) {

        currentY = yStart+y*data.testFieldVar_e;

        for (var x = 0; x < data.testFieldDimX; x++) {

          currentX = xStart+x*data.testFieldVar_d;

          var value = Math.round(( data.testFieldVar_a*Math.pow(currentX,2) +  data.testFieldVar_b*Math.pow(currentY,2) +  data.testFieldVar_c ) * errorMath) / errorMath; // x-1 because we dont

          min = Math.min(min,value);
          max = Math.max(max,value);

          jsonObj.positions.push([currentY,currentX]);
          jsonObj.testFieldVal.push(value);
        }

      }
       doScale = data.testFieldVar_f;
      break;

      ///////////////////////////
      //// Frequency
      case "Frequency":


      var startVal = Math.round((data.testFieldRangeStart+data.testFieldVar_d*(data.testFieldRangeEnd-data.testFieldRangeStart)) * errorMath) / errorMath;
      var endVal = Math.round((data.testFieldRangeStart+data.testFieldVar_e*(data.testFieldRangeEnd-data.testFieldRangeStart)) * errorMath) / errorMath;

      var amplitude = Math.round(((startVal-endVal)/2.0) * errorMath) / errorMath;
      var m = Math.round((startVal-amplitude) * errorMath) / errorMath;

      var numberDoublings = data.testFieldVar_c;

      var xStep = Math.round(( (numberDoublings+1.0)/(data.testFieldDimX-1) ) * errorMath) / errorMath;
      var yStep = Math.round(( (1.0)/(data.testFieldDimY-1) ) * errorMath) / errorMath;

      var basisFrequence = data.testFieldVar_b*2;

      var currentX = undefined;
      var currentY = undefined;
      var value = undefined;

      for (var y = 0; y < data.testFieldDimY; y++) {

        currentY = Math.round(( y*yStep ) * errorMath) / errorMath;

        var currentAmplitude = ((data.testFieldDimY-y)/data.testFieldDimY)*amplitude;

        for (var x = 0; x < data.testFieldDimX; x++) {

          var frequencyDeterminer = basisFrequence*(1+Math.floor(currentX))*currentX;

          if(data.testFieldVar_a)
            value = currentAmplitude*Math.sin(Math.PI*frequencyDeterminer)+m;
          else
            value = currentAmplitude*Math.cos(Math.PI*frequencyDeterminer)+m;

          currentX = Math.round(( x*xStep ) * errorMath) / errorMath;

          jsonObj.positions.push([currentX,currentY]);
          jsonObj.testFieldVal.push(value);
        }

      }

      /*if(currentY!=1){

        var searchFrequence = true;
        var counter =1;
        var basisFirstEnd = 1/basisFrequence;
        var checkPosition = 0;

        /*while(searchFrequence){

          var newCheckPosition = checkPosition+Math.pow(basisFirstEnd,counter);


          console.log(y,currentY,newCheckPosition);

          if(currentY<=newCheckPosition){
            frequencyDeterminer = basisFrequence*(currentY-checkPosition)/Math.pow(basisFirstEnd,counter);
            searchFrequence=false;
          }
          else {
            counter++;
          }

          checkPosition = newCheckPosition;
        }*

      }*/

      break;
      ///////////////////////////
      //// USER TEST
      case "USER":
      switch (data.testFieldGenerationType) {
        /*case "Marschner-Lobb":
        / **
        * @brief Computes Marschner-Lobb field used to test volumetric reconstructions
        *
        * Stephen R. Marschner and Richard J. Lobb,
        * "An Evaluation of Reconstruction Filters for Volume Rendering"
        * Proceedings of IEEE Visualization '94 Conference
        *
        * http://www.cs.cornell.edu/~srm/publications/Vis94-filters.pdf
        * /

        var zPos = 0;

        for (var y = 0; y < data.testFieldDimY; y++) {

          var yPos= originStartY+y*data.stepYDirection;
          for (var x = 0; x < data.testFieldDimX; x++) {

            var xPos= originStartX+x*data.stepXDirection;
            /**
             * Marchner-Lobb function
             * \[ ( 1.0 - \sin( \pi * z * 0.5 ) + alpha * ( 1.0 + \rho_r( \sqrt( x * x + y * y ), f_M ) ) ) / ( 2.0 * ( 1.0 + \alpha ) ) )
               \]
               with
               \[rho_r = \cos( 2\pi f_M cos( \frac{\pi r}{2} ) \]
             * /
             var r = Math.sqrt( xPos * xPos + yPos * yPos );

            var value =  1.0 - Math.sin( Math.PI * zPos * 0.5 ) +
             data.marschnerLopp_Alpha * ( 1.0 + Math.cos( 2.0 * Math.PI * data.marschnerLopp_f_M * Math.cos( Math.PI * r * 0.5 ) ) ) / ( 2.0 * ( 1.0 + data.marschnerLopp_Alpha ) );
            min = Math.min(min,value);
            max = Math.max(max,value);
            jsonObj.testFieldVal.push(value);
          }

        }
          break;*/
          case "Ackley":

          var d = 2; // dimension
          var a = data.testFieldVar_a;
          var b = data.testFieldVar_b;
          var c = data.testFieldVar_c;

          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              var term1 = -a * Math.exp(-b*Math.sqrt((xPos*xPos + yPos*yPos)/d));
              var term2 = - Math.exp((Math.cos(c*xPos) + Math.cos(c*yPos))/d);
              var value = term1 + term2 + a + Math.exp(1);

              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }

          break;
          case "Bukin_N6":

          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              term1 = 100 * Math.sqrt(Math.abs(yPos - 0.01* Math.pow(xPos,2)));
              term2 = 0.01 * Math.abs(xPos+10);
              var value = term1 + term2;

              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }

          break;
          case "Cross-in-Tray":

          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              var value =  -0.00001* Math.pow((Math.abs( Math.sin(xPos)*Math.sin(yPos)*Math.exp(  Math.abs(100-(Math.sqrt( Math.pow(xPos,2)+Math.pow(yPos,2))/Math.PI))))+1),0.1);
              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }

          break;
          case "Drop-Wave":
            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var frac1 = 1 + Math.cos(12*Math.sqrt(Math.pow(xPos,2)+Math.pow(yPos,2)));
                var frac2 = 0.5*(Math.pow(xPos,2)+Math.pow(yPos,2)) + 2;
                var value = -frac1/frac2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Eggholder":
            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = -(yPos+47) * Math.sin(Math.sqrt(Math.abs(yPos+xPos/2+47)));
                var term2 = -xPos * Math.sin(Math.sqrt(Math.abs(xPos-(yPos+47))));

                var value = term1 + term2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Griewank":
            // 2D version
            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var sum = Math.pow(xPos,2)/4000 + Math.pow(yPos,2)/4000;
	              var prod = Math.cos(xPos/Math.sqrt(1)) * Math.cos(yPos/Math.sqrt(2));

                var value = sum - prod + 1;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "HolderTable":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var fact1 = Math.sin(xPos)*Math.cos(yPos);
                var fact2 = Math.exp(Math.abs(1 - Math.sqrt(Math.pow(xPos,2)+Math.pow(yPos,2))/Math.PI));
                var value = -Math.abs(fact1*fact2);
                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Langermann":

            var vec_c = data.testFieldVar_a;
            var mat_A = data.testFieldVar_b;

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var value = 0;
                for (var i = 0; i < vec_c.length; i++) {
                  var innerVal  =  Math.pow((xPos-mat_A[0][i]),2) + Math.pow((yPos-mat_A[1][i]),2);
                  value += vec_c[i] * Math.exp(-innerVal/Math.PI) * Math.cos(Math.PI*innerVal);
                }

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Levy":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;
                var weightX = 1+(xPos-1)/4;
                var weightY = 1+(yPos-1)/4;

                var term1 = Math.pow(Math.sin(Math.PI*weightX),2);
                var term3 = Math.pow((weightY-1),2) * (1+Math.pow(Math.sin(2*Math.PI*weightY),2));

                var term2 = Math.pow((weightX-1),2) * Math.pow(1+10*(Math.sin(Math.PI*weightX+1)),2) + Math.pow((weightY-1),2) * Math.pow(1+10*(Math.sin(Math.PI*weightY+1)),2);

                var value = term1 + term2 + term3;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Levy_N13":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = Math.pow(Math.sin(3*Math.PI*xPos),2);
                var term2 = Math.pow((xPos-1),2) * Math.pow(1+(Math.sin(3*Math.PI*yPos)),2);
                var term3 = Math.pow((yPos-1),2) * Math.pow(1+(Math.sin(2*Math.PI*yPos)),2);

                var value = term1 + term2 + term3;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;
          case "Rastrigin":

            var d=2;
            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = Math.pow(xPos,2) - 10*Math.cos(2*Math.PI*xPos);
                var term2 = Math.pow(yPos,2) - 10*Math.cos(2*Math.PI*yPos);

                var value = 10*d + term1 + term2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;

          case "Schaffer_N2":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = Math.pow(Math.sin(Math.pow(xPos,2)-Math.pow(yPos,2)),2) - 0.5;
                var term2 = Math.pow(1 + 0.001*(Math.pow(xPos,2)+Math.pow(yPos,2)),2);

                var value = 0.5 + term1/term2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;

          case "Schaffer_N4":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = Math.cos(Math.sin(Math.abs(Math.pow(xPos,2)-Math.pow(yPos,2)))) - 0.5;
                var term2 = Math.pow(1 + 0.001*(Math.pow(xPos,2)+Math.pow(yPos,2)),2);

                var value = 0.5 + term1/term2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;

          case "Schwefel":

            var d=2;
            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = xPos*Math.sin(Math.sqrt(Math.abs(xPos)));
                var term2 = yPos*Math.sin(Math.sqrt(Math.abs(yPos)));

                var value = 418.9829*d - (term1+term2);

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;


          case "Shubert":

            for (var y = 0; y < data.testFieldDimY; y++) {

              var yPos= originStartY+y*data.stepYDirection;
              for (var x = 0; x < data.testFieldDimX; x++) {

                var xPos= originStartX+x*data.stepXDirection;

                var term1 = 0;
                var term2 = 0;

                for (var i = 1; i <= 5; i++) {
                	term1 += i * Math.cos((i+1)*xPos+i);
                	term2 += i * Math.cos((i+1)*yPos+i);
                }

                var value = term1 * term2;

                min = Math.min(min,value);
                max = Math.max(max,value);
                jsonObj.positions.push([xPos,yPos]);
                jsonObj.testFieldVal.push(value);

              }

            }
          break;

          ////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /// Functions: Bowl-Shaped
          ///


          case "Bohachevsky_F1":
          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              var term1 = Math.pow(xPos,2);
              var term2 = Math.pow(2*yPos,2);
              var term3 = -0.3 * Math.cos(3*Math.PI*xPos);
              var term4 = -0.4 * Math.cos(4*Math.PI*yPos);

              var value = term1 + term2 + term3 + term4 + 0.7;

              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }
        break;
          case "Bohachevsky_F2":
          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              var term1 = Math.pow(xPos,2);
              var term2 = Math.pow(2*yPos,2);
              var term3 = -0.3 * Math.cos(3*Math.PI*xPos) * Math.cos(4*Math.PI*yPos);

              var value = term1 + term2 + term3 + 0.3;

              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }
        break;
          case "Bohachevsky_F3":
          for (var y = 0; y < data.testFieldDimY; y++) {

            var yPos= originStartY+y*data.stepYDirection;
            for (var x = 0; x < data.testFieldDimX; x++) {

              var xPos= originStartX+x*data.stepXDirection;

              var term1 = Math.pow(xPos,2);
              var term2 = Math.pow(2*yPos,2);
              var term3 = -0.3 * Math.cos(3*Math.PI*xPos + 4*Math.PI*yPos);

              var value = term1 + term2 + term3 + 0.3;

              min = Math.min(min,value);
              max = Math.max(max,value);
              jsonObj.positions.push([xPos,yPos]);
              jsonObj.testFieldVal.push(value);

            }

          }
        break;

        case "Perm_V1":

        var b = data.testFieldVar_a;
        for (var y = 0; y < data.testFieldDimY; y++) {

          var yPos= originStartY+y*data.stepYDirection;
          for (var x = 0; x < data.testFieldDimX; x++) {

            var xPos= originStartX+x*data.stepXDirection;

            var value = 0;


            value+= Math.pow((1+b)*(xPos-(1))+(2+b)*(yPos-(1/2)),2)
            value+= Math.pow((1+b)*(Math.pow(xPos,2)-1)+(2+b)*(Math.pow(yPos,2)-Math.pow((1/2),2)),2);

            min = Math.min(min,value);
            max = Math.max(max,value);
            jsonObj.positions.push([xPos,yPos]);
            jsonObj.testFieldVal.push(value);

          }

        }
      break;

      case "Rot_Hyper_Ellipsoid":

      for (var y = 0; y < data.testFieldDimY; y++) {

        var yPos= originStartY+y*data.stepYDirection;
        for (var x = 0; x < data.testFieldDimX; x++) {

          var xPos= originStartX+x*data.stepXDirection;

          var term1 = Math.pow(xPos,2);// i=1, j=1
          var term2 = Math.pow(xPos,2);// i=2, j=1
          var term3 = Math.pow(yPos,2);// i=2, j=2
          var value = term1+term2+term3;

          min = Math.min(min,value);
          max = Math.max(max,value);
          jsonObj.positions.push([xPos,yPos]);
          jsonObj.testFieldVal.push(value);

        }

      }
    break;

    case "Sphere":

    for (var y = 0; y < data.testFieldDimY; y++) {

      var yPos= originStartY+y*data.stepYDirection;
      for (var x = 0; x < data.testFieldDimX; x++) {

        var xPos= originStartX+x*data.stepXDirection;

        var term1 = Math.pow(xPos,2);
        var term2 = Math.pow(yPos,2);
        var value = term1+term2;

        min = Math.min(min,value);
        max = Math.max(max,value);
        jsonObj.positions.push([xPos,yPos]);
        jsonObj.testFieldVal.push(value);

      }

    }
  break;

  case "SumDifPowers":

  for (var y = 0; y < data.testFieldDimY; y++) {

    var yPos= originStartY+y*data.stepYDirection;
    for (var x = 0; x < data.testFieldDimX; x++) {

      var xPos= originStartX+x*data.stepXDirection;

      var term1 = Math.pow((Math.abs(xPos)),(2));
      var term2 = Math.pow((Math.abs(yPos)),(3));
      var value = term1+term2;

      min = Math.min(min,value);
      max = Math.max(max,value);
      jsonObj.positions.push([xPos,yPos]);
      jsonObj.testFieldVal.push(value);

    }

  }
break;

case "Sum_Squares":

for (var y = 0; y < data.testFieldDimY; y++) {

  var yPos= originStartY+y*data.stepYDirection;
  for (var x = 0; x < data.testFieldDimX; x++) {

    var xPos= originStartX+x*data.stepXDirection;

    var term1 = Math.pow(xPos,2);
    var term2 = Math.pow(2*yPos,2);
    var value = term1+term2;

    min = Math.min(min,value);
    max = Math.max(max,value);
    jsonObj.positions.push([xPos,yPos]);
    jsonObj.testFieldVal.push(value);

  }

}
break;

case "Trid":

for (var y = 0; y < data.testFieldDimY; y++) {

  var yPos= originStartY+y*data.stepYDirection;
  for (var x = 0; x < data.testFieldDimX; x++) {

    var xPos= originStartX+x*data.stepXDirection;

    var term1 = Math.pow(xPos-1,2);
    var term2 = Math.pow(yPos-1,2);
    var term3 = xPos*yPos;
    var value = term1+term2-term3;

    min = Math.min(min,value);
    max = Math.max(max,value);
    jsonObj.positions.push([xPos,yPos]);
    jsonObj.testFieldVal.push(value);

  }

}
break;


//////////////////////////////////
/// Functions: Valley-Shaped
///

case "Three_Hump_Camel":

for (var y = 0; y < data.testFieldDimY; y++) {

  var yPos= originStartY+y*data.stepYDirection;
  for (var x = 0; x < data.testFieldDimX; x++) {

    var xPos= originStartX+x*data.stepXDirection;

    var term1 = 2*Math.pow(xPos,2);
    var term2 = -1.05*Math.pow(xPos,4);
    var term3 = Math.pow(xPos,6) / 6;
    var term4 = xPos*yPos;
    var term5 = Math.pow(yPos,2);
    var value = term1 + term2 + term3 + term4 + term5;

    min = Math.min(min,value);
    max = Math.max(max,value);
    jsonObj.positions.push([xPos,yPos]);
    jsonObj.testFieldVal.push(value);

  }

}
break;






          default:

        }


      doScale = true;
      break;



  }


  /////////////////// Scale

  if(doScale){
    var tmpDis = min-max;
    var scaledDis = data.testFieldRangeEnd-data.testFieldRangeStart;
    if(tmpDis!=0){
      for (var i = 0; i < jsonObj.testFieldVal.length; i++) {
        jsonObj.testFieldVal[i]= data.testFieldRangeStart + scaledDis*( (min-jsonObj.testFieldVal[i])/tmpDis);
      }
    }
    else{
      for (var i = 0; i < jsonObj.testFieldVal.length; i++) {
        jsonObj.testFieldVal[i]= data.testFieldRangeStart;
      }
    }
  }



  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  /// Calculate Color
  jsonUpdateObj.status = 50;
  self.postMessage(jsonUpdateObj);


  switch (data.colorspace) {
    case "rgb":

      for (var valIndex = 0; valIndex < jsonObj.testFieldVal.length; valIndex++) {

        if (isNaN(jsonObj.testFieldVal[valIndex])) {
          jsonObj.cVal1.push(data.nanC1);
          jsonObj.cVal2.push(data.nanC2);
          jsonObj.cVal3.push(data.nanC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] < data.refVal[0] ) {
          jsonObj.cVal1.push(data.belowC1);
          jsonObj.cVal2.push(data.belowC2);
          jsonObj.cVal3.push(data.belowC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] > data.refVal[data.refVal.length - 1]) {
          jsonObj.cVal1.push(data.aboveC1);
          jsonObj.cVal2.push(data.aboveC2);
          jsonObj.cVal3.push(data.aboveC3);
          continue;
        }

        var foundeSomething=false;

        for (var i = 0; i < data.refVal.length - 1; i++) {

          var tmpRatio = (jsonObj.testFieldVal[valIndex] - data.refVal[i]) / (data.refVal[i + 1] - data.refVal[i]);



          if (jsonObj.testFieldVal[valIndex] > data.refVal[i] && jsonObj.testFieldVal[valIndex] < data.refVal[i + 1]) {

            if (data.key1cVal1[i] == undefined) { // cVal2 and cVal3 should also be undefined -> constant band
              jsonObj.cVal1.push(data.key2cVal1[i]);
              jsonObj.cVal2.push(data.key2cVal2[i]);
              jsonObj.cVal3.push(data.key2cVal3[i]);
              foundeSomething=true;
              break;
            }

            jsonObj.cVal1.push(data.key1cVal1[i] + (data.key2cVal1[i] - data.key1cVal1[i]) * tmpRatio);
            jsonObj.cVal2.push(data.key1cVal2[i] + (data.key2cVal2[i] - data.key1cVal2[i]) * tmpRatio);
            jsonObj.cVal3.push(data.key1cVal3[i] + (data.key2cVal3[i] - data.key1cVal3[i]) * tmpRatio);
            foundeSomething=true;
            break;
          }




          if(jsonObj.testFieldVal[valIndex]==data.refVal[i]){

            if(i==0){
              jsonObj.cVal1.push(data.key1cVal1[i]);
              jsonObj.cVal2.push(data.key1cVal2[i]);
              jsonObj.cVal3.push(data.key1cVal3[i]);
            }
            else{
              if(data.MoT[i]){
                //
                jsonObj.cVal1.push(data.key1cVal1[i]);
                jsonObj.cVal2.push(data.key1cVal2[i]);
                jsonObj.cVal3.push(data.key1cVal3[i]);
              }
              else{
                jsonObj.cVal1.push(data.key2cVal1[i-1]);
                jsonObj.cVal2.push(data.key2cVal2[i-1]);
                jsonObj.cVal3.push(data.key2cVal3[i-1]);
              }
            }
            foundSomething=true;
            break;
          }


        }


        if(jsonObj.testFieldVal[valIndex]==data.refVal[data.refVal.length-1]){
            jsonObj.cVal1.push(data.key2cVal1[data.key2cVal1.length-1]);
            jsonObj.cVal2.push(data.key2cVal2[data.key2cVal2.length-1]);
            jsonObj.cVal3.push(data.key2cVal3[data.key2cVal3.length-1]);
            foundSomething=true;
        }

        if(foundSomething==false){
          jsonObj.cVal1.push(data.nanC1);
          jsonObj.cVal2.push(data.nanC2);
          jsonObj.cVal3.push(data.nanC3);
          continue;
        }

      }

      break;


    case "lab":
    case "din99":


      for (var valIndex = 0; valIndex < jsonObj.testFieldVal.length; valIndex++) {

        if (isNaN(jsonObj.testFieldVal[valIndex])) {
          jsonObj.cVal1.push(data.nanC1);
          jsonObj.cVal2.push(data.nanC2);
          jsonObj.cVal3.push(data.nanC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] < data.refVal[0] ) {
          jsonObj.cVal1.push(data.belowC1);
          jsonObj.cVal2.push(data.belowC2);
          jsonObj.cVal3.push(data.belowC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] > data.refVal[data.refVal.length - 1]) {
          jsonObj.cVal1.push(data.aboveC1);
          jsonObj.cVal2.push(data.aboveC2);
          jsonObj.cVal3.push(data.aboveC3);
          continue;
        }

        var foundSomething = false;
        var var_R, var_G, var_B;
        var val1, val2, val3;

        for (var i = 0; i < data.refVal.length - 1; i++) {

          var tmpRatio = (jsonObj.testFieldVal[valIndex] - data.refVal[i]) / (data.refVal[i + 1] - data.refVal[i]);

          if (jsonObj.testFieldVal[valIndex] > data.refVal[i] && jsonObj.testFieldVal[valIndex] < data.refVal[i + 1]) {

            if (data.key1cVal1[i] == undefined) { // cVal2 and cVal3 should also be undefined -> constant band
              val1 = data.key2cVal1[i];
              val2 = data.key2cVal2[i];
              val3 = data.key2cVal3[i];
            } else {
              val1 = data.key1cVal1[i] + (data.key2cVal1[i] - data.key1cVal1[i]) * tmpRatio;
              val2 = data.key1cVal2[i] + (data.key2cVal2[i] - data.key1cVal2[i]) * tmpRatio;
              val3 = data.key1cVal3[i] + (data.key2cVal3[i] - data.key1cVal3[i]) * tmpRatio;
            }

            foundSomething=true;
            break;
          }


          if(jsonObj.testFieldVal[valIndex]==data.refVal[i]){

            if(i==0){
              val1 = data.key1cVal1[i];
              val2 = data.key1cVal2[i];
              val3 = data.key1cVal3[i];
            }
            else{

              if(data.MoT[i]){
                //
                val1 = data.key1cVal1[i];
                val2 = data.key1cVal2[i];
                val3 = data.key1cVal3[i];
              }
              else{
                  val1 = data.key2cVal1[i-1];
                  val2 = data.key2cVal2[i-1];
                  val3 = data.key2cVal3[i-1];
              }
            }
            foundSomething=true;
            break;
          }
        }


        if(jsonObj.testFieldVal[valIndex]==data.refVal[data.refVal.length-1]){
          val1 = data.key2cVal1[data.key2cVal1.length-1];
          val2 = data.key2cVal2[data.key2cVal2.length-1];
          val3 = data.key2cVal3[data.key2cVal3.length-1];
          foundSomething=true;
        }

        if(foundSomething==false){
          jsonObj.cVal1.push(data.nanC1);
          jsonObj.cVal2.push(data.nanC2);
          jsonObj.cVal3.push(data.nanC3);
        }
        else {
          var value_L, value_A, value_B;

          if (data.colorspace === "din99") {
            var angle = 2 * Math.PI / 360 * 26;
            var lScale = 100 / Math.log(139 / 100.0); // = 303.67
            value_L = (Math.exp(val1 * data.din99_kE / lScale) - 1.0) / 0.0039;
            var hef = Math.atan2(val3, val2);
            var h99 = hef - angle;
            var C99 = Math.sqrt(Math.pow(val2, 2) + Math.pow(val3, 2));
            var G = (Math.exp(0.0435 * C99 * data.din99_kCH * data.din99_kE) - 1) / 0.075;
            var e = G * Math.cos(h99);
            var f = G * Math.sin(h99);

            value_A = e * Math.cos(angle) - (f / 0.83) * Math.sin(angle);
            value_B = e * Math.sin(angle) + (f / 0.83) * Math.cos(angle);
          } else {
            value_L = val1;
            value_A = val2;
            value_B = val3;
          }

          /// LAB -> RGB

          //  Calc XYZ
          var var_Y = (value_L + 16.0) / 116.0;
          var var_X = value_A / 500.0 + var_Y;
          var var_Z = var_Y - value_B / 200.0;

          if (Math.pow(var_Y, 3.0) > 0.008856) {
            var_Y = Math.pow(var_Y, 3.0);
          } else {
            var_Y = (var_Y - 16.0 / 116.0) / 7.787;
          }

          if (Math.pow(var_X, 3.0) > 0.008856) {
            var_X = Math.pow(var_X, 3.0);
          } else {
            var_X = (var_X - 16.0 / 116.0) / 7.787;
          }

          if (Math.pow(var_Z, 3.0) > 0.008856) {
            var_Z = Math.pow(var_Z, 3.0);
          } else {
            var_Z = (var_Z - 16.0 / 116.0) / 7.787;
          }

          var_X = (var_X * data.cielab_ref_X);
          var_Y = (var_Y * data.cielab_ref_Y);
          var_Z = (var_Z * data.cielab_ref_Z);

          //    Calc RGB
          var var_X = var_X / 100.0;
          var var_Y = var_Y / 100.0;
          var var_Z = var_Z / 100.0;

          /*var_R = var_X * 3.2406 + var_Y * -1.5372 + var_Z * -0.4986;
          var_G = var_X * -0.9689 + var_Y * 1.8758 + var_Z * 0.0415;
          var_B = var_X * 0.0557 + var_Y * -0.2040 + var_Z * 1.0570;*/

          var_R = var_X * data.transferMatrixColorXYZ_Inv[0][0] + var_Y * data.transferMatrixColorXYZ_Inv[0][1] + var_Z * data.transferMatrixColorXYZ_Inv[0][2];
          var_G = var_X * data.transferMatrixColorXYZ_Inv[1][0] + var_Y * data.transferMatrixColorXYZ_Inv[1][1] + var_Z * data.transferMatrixColorXYZ_Inv[1][2];
          var_B = var_X * data.transferMatrixColorXYZ_Inv[2][0] + var_Y * data.transferMatrixColorXYZ_Inv[2][1] + var_Z * data.transferMatrixColorXYZ_Inv[2][2];

          if (var_R > 0.0031308) var_R = 1.055 * Math.pow(var_R, (1.0 / 2.4)) - 0.055;
          else var_R = 12.92 * var_R;
          if (var_G > 0.0031308) var_G = 1.055 * Math.pow(var_G, (1.0 / 2.4)) - 0.055;
          else var_G = 12.92 * var_G;
          if (var_B > 0.0031308) var_B = 1.055 * Math.pow(var_B, (1.0 / 2.4)) - 0.055;
          else var_B = 12.92 * var_B;


          if (var_R>1.0 || var_G>1.0 || var_B>1.0 || var_R<0.0 || var_G<0.0 || var_B<0.0){
              // Wrong RGB -Values

              if(var_R>1.0 && var_R-1.0<error){
                  var_R=1.0;

              }
              if(var_G>1.0 && var_G-1.0<error){
                  var_G=1.0;
              }
              if(var_B>1.0 && var_B-1.0<error){
                  var_B=1.0;
              }
              if(var_R<0.0 && 1.0-var_R<error){
                  var_R=0.0;
              }
              if(var_G<0.0 && 1.0-var_G<error){
                  var_G=0.0;
              }
              if(var_B<0.0 && 1.0-var_B<error){
                  var_B=0.0;
              }
              if (var_R>1.0 || var_G>1.0 || var_B>1.0 || var_R<0.0 || var_G<0.0 || var_B<0.0){
                  //var rgbString = "rgb(0,0,0)";
                  //return rgbString;
                  jsonObj.cVal1.push(data.nanC1);
                  jsonObj.cVal2.push(data.nanC2);
                  jsonObj.cVal3.push(data.nanC3);
              }
              else{
                  jsonObj.cVal1.push(var_R);
                  jsonObj.cVal2.push(var_G);
                  jsonObj.cVal3.push(var_B);
              }
          }
          else{
              jsonObj.cVal1.push(var_R);
              jsonObj.cVal2.push(var_G);
              jsonObj.cVal3.push(var_B);
          }


        }


        }
      break;

    case "hsv":

      for (var valIndex = 0; valIndex < jsonObj.testFieldVal.length; valIndex++) {

        if (isNaN(jsonObj.testFieldVal[valIndex])) {
          jsonObj.cVal1.push(data.nanC1);
          jsonObj.cVal2.push(data.nanC2);
          jsonObj.cVal3.push(data.nanC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] < data.refVal[0] ) {
          jsonObj.cVal1.push(data.belowC1);
          jsonObj.cVal2.push(data.belowC2);
          jsonObj.cVal3.push(data.belowC3);
          continue;
        }

        if (jsonObj.testFieldVal[valIndex] > data.refVal[data.refVal.length - 1]) {
          jsonObj.cVal1.push(data.aboveC1);
          jsonObj.cVal2.push(data.aboveC2);
          jsonObj.cVal3.push(data.aboveC3);
          continue;
        }



          var foundSomething = false;
          var tmpH, tmpS, tmpV;

        for (var i = 0; i < data.refVal.length - 1; i++) {

          var tmpRatio = (jsonObj.testFieldVal[valIndex] - data.refVal[i]) / (data.refVal[i + 1] - data.refVal[i]);

          if (jsonObj.testFieldVal[valIndex] > data.refVal[i] && jsonObj.testFieldVal[valIndex] < data.refVal[i + 1]) {

            if (data.key1cVal1[i] == undefined) { // cVal2 and cVal3 should also be undefined -> constant band
              tmpH = data.key2cVal1[i];
              tmpS = data.key2cVal2[i];
              tmpV = data.key2cVal3[i];
            } else {
              var tmpDis = data.key1cVal2[i] * 50; // radius 50; center(0,0,0);
              var tmpRad = (data.key1cVal1[i] * Math.PI * 2) - Math.PI;
              var xPos = tmpDis * Math.cos(tmpRad);
              var yPos = tmpDis * Math.sin(tmpRad);
              var zPos = data.key1cVal3[i] - 50;

              var tmpDis2 = data.key2cVal2[i] * 50;
              var tmpRad2 = (data.key2cVal1[i] * Math.PI * 2) - Math.PI;
              var xPos2 = tmpDis2 * Math.cos(tmpRad2);
              var yPos2 = tmpDis2 * Math.sin(tmpRad2);
              var zPos2 = data.key2cVal3[i] - 50;

              var tmpX = xPos + (xPos2 - xPos) * tmpRatio;
              var tmpY = yPos + (yPos2 - yPos) * tmpRatio;
              var tmpZ = zPos + (zPos2 - zPos) * tmpRatio;

              tmpH = (Math.atan2(tmpY, tmpX) + Math.PI) / (Math.PI * 2);
              tmpS = Math.sqrt(Math.pow(tmpX, 2) + Math.pow(tmpY, 2)) / 50;
              tmpV = tmpZ + 50;
            }
            foundSomething=true;
          }

            if(jsonObj.testFieldVal[valIndex]==data.refVal[i]){

              if(i==0){
                tmpH = data.key1cVal1[i];
                tmpS = data.key1cVal2[i];
                tmpV = data.key1cVal3[i];
              }
              else{
                if(data.MoT[i]){
                  //
                  tmpH = data.key1cVal1[i];
                  tmpS = data.key1cVal2[i];
                  tmpV = data.key1cVal3[i];
                }
                else{
                    tmpH = data.key2cVal1[i-1];
                    tmpS = data.key2cVal2[i-1];
                    tmpV = data.key2cVal3[i-1];
                }
              }
              foundSomething=true;

            }
          }

          if(jsonObj.testFieldVal[valIndex]==data.refVal[data.refVal.length-1]){
            tmpH = data.key2cVal1[data.key2cVal1.length-1];
            tmpS = data.key2cVal2[data.key2cVal2.length-1];
            tmpV = data.key2cVal3[data.key2cVal3.length-1];
            foundSomething=true;
          }

          if(foundSomething==false){
            jsonObj.cVal1.push(data.nanC1);
            jsonObj.cVal2.push(data.nanC2);
            jsonObj.cVal3.push(data.nanC3);
          }
          else {

            var j = Math.floor(tmpH * 6);
            var f = tmpH * 6 - j;
            var p = tmpV * (1 - tmpS);
            var q = tmpV * (1 - f * tmpS);
            var t = tmpV * (1 - (1 - f) * tmpS);

            var r, g, b;

            switch (j % 6) {
              case 0:
                r = tmpV, g = t, b = p;
                break;
              case 1:
                r = q, g = tmpV, b = p;
                break;
              case 2:
                r = p, g = tmpV, b = t;
                break;
              case 3:
                r = p, g = q, b = tmpV;
                break;
              case 4:
                r = t, g = p, b = tmpV;
                break;
              case 5:
                r = tmpV, g = p, b = q;
                break;
            }

            jsonObj.cVal1.push(r);
            jsonObj.cVal2.push(g);
            jsonObj.cVal3.push(b);

          }

        }

      break;

      //default:

  }


  jsonUpdateObj.status = 80;
  self.postMessage(jsonUpdateObj);
  self.postMessage(jsonObj);


}, false);