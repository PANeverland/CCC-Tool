//////////////////////////////////////////
// -------------Helpers--------------//
//////////////////////////////////////////

function draw3DLine(xPos,yPos, zPos, xPos2, yPos2, zPos2,dashed, secondStrokeStyle){


    var lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: lineWidth3D } );
    if(dashed)
      lineMaterial = new THREE.LineDashedMaterial( { color: 0x000000, dashSize: 10, gapSize: 10, linewidth: lineWidth3D } );

    if(secondStrokeStyle){
      lineMaterial = new THREE.LineBasicMaterial( { color: 0x907D27, linewidth: lineWidth3D } );
      if(dashed)
        lineMaterial = new THREE.LineDashedMaterial( { color: 0x907D27, dashSize: 10, gapSize: 10, linewidth: lineWidth3D } );
    }

    var geometry = new THREE.Geometry();

    geometry.vertices.push(
      new THREE.Vector3(xPos,yPos, zPos),
      new THREE.Vector3(xPos2, yPos2, zPos2)
    );
    geometry.computeLineDistances();

    var line = new THREE.Line( geometry, lineMaterial );
    colormapRGB3D.add( line );
}

function draw3DElement(colorHexStr,xPos,yPos,zPos, index, circle){
  // draw circle

  var colorHex = parseInt(colorHexStr.replace(/^#/, ''), 16);

  if(circle){

    var geometry;

    if(index==mouseAboveSpaceObjectID)
      geometry = new THREE.SphereGeometry(bigcircleRad3D, 20, 20);
    else
      geometry = new THREE.SphereGeometry(circleRad3D, 20, 20);

    var material = new THREE.MeshBasicMaterial( {color: colorHex} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.x = xPos;
    sphere.position.y = yPos;
    sphere.position.z = zPos;
    colormapRGB3D.add( sphere );
  }
  else{

    var geometry;

    if(index==mouseAboveSpaceObjectID)
      geometry = new THREE.BoxGeometry(bigcircleRad3D*2,bigcircleRad3D*2,bigcircleRad3D*2);
    else
      geometry = new THREE.BoxGeometry(circleRad3D*2,circleRad3D*2,circleRad3D*2);

    var material = new THREE.MeshBasicMaterial( {color: colorHex} );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x = xPos;
    cube.position.y = yPos;
    cube.position.z = zPos;
    colormapRGB3D.add( cube );
        /*  var tmpRecSize = circleRad*2;
          colorspaceContex.fillStyle = colorString;
          var x1 = xPos-circleRad;
          var y1 = yPos-circleRad;

          if(i==mouseAboveSpaceObjectID){
              tmpRecSize = bigcircleRad*2;
              x1 = xPos-bigcircleRad;
              y1 = yPos-bigcircleRad;
           }

          colorspaceContex.fillRect(x1, y1, tmpRecSize, tmpRecSize);
          colorspaceContex.lineWidth = smallLineWidth;
          if(i==mouseGrappedSpaceObjectID)
              colorspaceContex.strokeStyle =  mouseGrappedColor;
          else
              colorspaceContex.strokeStyle = 'rgb(0,0,0)';
          colorspaceContex.strokeRect(x1, y1, tmpRecSize, tmpRecSize);*/
  }
}

function drawElement(colorString,colorspaceContex,xPos,yPos, index, circle){
  // draw circle

  colorspaceContex.setLineDash([]);

  if(circle){
    colorspaceContex.beginPath();
    if(index==mouseAboveSpaceObjectID)
      colorspaceContex.arc(xPos, yPos, bigcircleRad, 0, 2 * Math.PI, false);
    else
      colorspaceContex.arc(xPos, yPos, circleRad, 0, 2 * Math.PI, false);
    colorspaceContex.fillStyle = colorString;
    colorspaceContex.fill();
    colorspaceContex.lineWidth = smallLineWidth;
    if(index==mouseGrappedSpaceObjectID)
      colorspaceContex.strokeStyle =  mouseGrappedColor;
    else
      colorspaceContex.strokeStyle = 'rgb(0,0,0)';
    colorspaceContex.stroke();
  }
  else{
          var tmpRecSize = circleRad*2;
          colorspaceContex.fillStyle = colorString;
          var x1 = xPos-circleRad;
          var y1 = yPos-circleRad;

          if(index==mouseAboveSpaceObjectID){
              tmpRecSize = bigcircleRad*2;
              x1 = xPos-bigcircleRad;
              y1 = yPos-bigcircleRad;
           }

          colorspaceContex.fillRect(x1, y1, tmpRecSize, tmpRecSize);
          colorspaceContex.lineWidth = smallLineWidth;
          if(i==mouseGrappedSpaceObjectID)
              colorspaceContex.strokeStyle =  mouseGrappedColor;
          else
              colorspaceContex.strokeStyle = 'rgb(0,0,0)';
          colorspaceContex.strokeRect(x1, y1, tmpRecSize, tmpRecSize);
  }
}

function drawLine(colorspaceContex,xPos,yPos,xPos2,yPos2, dashed, secondStrokeStyle){

  if(dashed)
  colorspaceContex.setLineDash([15,10]);
  else
  colorspaceContex.setLineDash([]);
  colorspaceContex.beginPath();
  colorspaceContex.lineWidth=bigLineWidth;
  colorspaceContex.moveTo(xPos, yPos);
  colorspaceContex.lineTo(xPos2, yPos2);
  colorspaceContex.strokeStyle = 'rgb(0,0,0)';
  if(secondStrokeStyle)
  colorspaceContex.strokeStyle = 'rgb(0,0,0)';
  colorspaceContex.stroke();
  colorspaceContex.beginPath();
  colorspaceContex.lineWidth=smallLineWidth;
  colorspaceContex.moveTo(xPos, yPos);
  colorspaceContex.lineTo(xPos2, yPos2);
  colorspaceContex.strokeStyle = 'rgb(255,255,255)';
  if(secondStrokeStyle)
  colorspaceContex.strokeStyle = 'rgb(255,255,0)';
  colorspaceContex.stroke();
}
