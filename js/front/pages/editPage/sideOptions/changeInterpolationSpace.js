
function changeColorspace(){

  document.getElementById("id_header_interpolationSpaceWarning").innerHTML = "&#9785;";

  switch (document.getElementById("id_editPage_InterpolationSelect").selectedIndex) {
    case 4:
        globalCMS1.setInterpolationSpace("rgb");
        document.getElementById("id_header_interpolationSpaceWarning").innerHTML = "&#9785;";
      break;
      case 5:
          globalCMS1.setInterpolationSpace("hsv");
          document.getElementById("id_header_interpolationSpaceWarning").innerHTML = "&#9785;";
        break;
        case 0:
            globalCMS1.setInterpolationSpace("lab");
          break;
          case 1:
              globalCMS1.setInterpolationSpace("din99");
            break;
            case 2:
                globalCMS1.setInterpolationSpace("de94");
              break;
              case 3:
                  globalCMS1.setInterpolationSpace("de2000");
                break;
    default:

  }

  if(document.getElementById("id_EditPage_Add_Structures").style.display!="none"){
    updatePredefined();
  }

  // UPDATE Path Plot
  if(document.getElementById("id_EditPage_Edit_Path").style.display!="none"){
    if(pathColorspace==="rgb"){
      drawcolormap_RGBSpace(true,true);
    }
    else{
      drawcolormap_hueSpace(true, true, true);
    }
  }


  updateEditPage(); // = update CMS, Mapping and Analyze Plots


}


function updateInterpolationSpaceEditPage(){

  switch (globalCMS1.getInterpolationSpace()) {
    case "rgb":
    document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 4;

      break;
      case "hsv":
      document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 5;

        break;
        case "lab":
        document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 0;
          break;
          case "din99":
          document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 1;
            break;
            case "de94":
            document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 2;
              break;
              case "de2000":
              document.getElementById("id_editPage_InterpolationSelect").selectedIndex = 3;
                break;
    default:

  }

  changeColorspace();

}
