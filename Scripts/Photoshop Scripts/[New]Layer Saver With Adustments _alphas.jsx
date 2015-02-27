#target photoshop
app.bringToFront();

main();
function main(){
if(!documents.length) return;
try{
docPath = activeDocument.path;
}catch(e){
    docPath = Folder.desktop;
    }
uSelectedLayers = getSelectedLayersIdx();
selectAllLayers();
selectedLayers = getSelectedLayersIdx();
var Adjustments = new Array();
var ContentLayers = new Array();
var userSelectedLayers = new Array()
try{ 
activeDocument.backgroundLayer; 
var back = true;
}catch(e){var back =false;}
for(var a in selectedLayers){
    if(isAdjustmentLayer(Number(selectedLayers[a]))){
        if(getLayerVisibilityByIndex(Number(selectedLayers[a]))){
        Adjustments.push(Number(selectedLayers[a]));
        }
        }else{
            if(!isLayerSet(Number(selectedLayers[a]))) {
                ContentLayers.push(Number(selectedLayers[a]));
                }
            }
    }
selectedLayers =[];
for(var z in uSelectedLayers){
     if(isAdjustmentLayer(Number(uSelectedLayers[z]))){
        }else{
            if(!isLayerSet(Number(uSelectedLayers[z]))) {
                if(Number(uSelectedLayers[z]) != 0){
                userSelectedLayers.push(Number(uSelectedLayers[z]));
                    }
                }
            }  
}
uSelectedLayers=[];
deselectLayers();
for(var r in userSelectedLayers){
    selectLayerByIndex(Number(userSelectedLayers[r]),true)
    }
var win = new Window('dialog','Layer Saver II');
win.orientation = "row";
g = win.graphics;
var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [0.99, 0.99, 0.99, 1]);
g.backgroundColor = myBrush;
win.p1= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.g1 = win.p1.add('group');
win.g1.orientation = "row";
win.title = win.g1.add('statictext',undefined,'Layer Saver With Adjustment Layers');
win.title.alignment="fill";
var g = win.title.graphics;
g.font = ScriptUI.newFont("Georgia","BOLDITALIC",22);
win.p2= win.p1.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.p2.info = win.p2.add('statictext',undefined,'Information');
var g2 = win.p2.info.graphics;
g2.font = ScriptUI.newFont("Georgia","BOLDITALIC",14);
win.g5 =win.p2.add('group');
win.g5.orientation = "column";
win.g5.alignChildren='left';
win.g5.st1 = win.g5.add('statictext');
win.g5.st1.text = "Number of adjustments layers that will be used = " + Adjustments.length;
win.g5.st1.helpTip="The adjustment layer must be visible to be used";
win.g5a =win.p2.add('group');
win.g5a.orientation = "column";
win.g5a.alignChildren='left';
win.g5a.st1 = win.g5.add('statictext');
win.g5a.st1.text = "Number of user selected layers = " + userSelectedLayers.length;
win.g5a.st1.helpTip="Layersets are not included";
win.g5b =win.p2.add('group');
win.g5b.orientation = "column";
win.g5b.alignChildren='left';
win.g5b.st1 = win.g5.add('statictext');
win.g5b.st1.text = "Number of actual layers = " + ContentLayers.length;
win.g5b.st1.helpTip="Layersets are not included";
win.g8 =win.p1.add('group');
win.g8.orientation = "row";
win.g8.alignment='left';
win.g8.et1 = win.g8.add('edittext');
win.g8.et1.preferredSize=[350,20];
win.g8.et1.enabled=false;
win.g8.bu1 = win.g8.add('button',undefined,'Select Folder');
win.g8.bu1.helpTip="Select output folder";
win.g8.bu1.onClick=function(){
outputFolder = Folder.selectDialog("Please select the output folder",docPath);	
	if(outputFolder !=null){
		win.g8.et1.text =  decodeURI(outputFolder.fsName); 
		}
}
outputFolder=docPath;
win.g8.et1.text =  decodeURI(outputFolder.fsName);
win.g10 =win.p1.add('group');
win.g10.orientation = "row";
win.g10.alignment='left';
win.g10.rb1 = win.g10.add('radiobutton',undefined,'All Layers');
win.g10.rb2 = win.g10.add('radiobutton',undefined,'User Selected Layers');
win.g10.rb1.value=true;
win.g10.cb1 = win.g10.add('checkbox',undefined,'Use Background Layer');
if(back){
    win.g10.cb1.value=true;
    }else{
      win.g10.cb1.enabled=false;  
}
win.g15 =win.p1.add('group');
win.g15.orientation = "row";
win.g15.alignment='left';
win.g15.cb1 = win.g15.add('checkbox',undefined,'Merge Visible Layers?');
win.g15.cb2 = win.g15.add('checkbox',undefined,'Trim Layer');  
win.g20 =win.p1.add('group');
win.g20.orientation = "row";
win.g20.alignment='left';
var Options= ["Layer Name","FileName + Sequence No.","FileName + Layer Name ","User Defined with Sequence No."];
win.g20.st1 = win.g20.add('statictext',undefined,'Save Options');
win.g20.dd1 = win.g20.add('dropdownlist',undefined,Options);
win.g20.dd1.selection=0;
win.g20.et1 = win.g20.add('edittext');
win.g20.et1.preferredSize=[150,20];
win.g20.et1.hide();
win.g20.dd1.onChange=function(){
  if(this.selection.index==3){
      win.g20.et1.show();
      }else{
          win.g20.et1.hide();
          }
    }
win.g25 =win.p1.add('group');
win.g25.orientation = "row";
win.g25.st1 = win.g25.add('statictext',undefined,'Save as :');
var Types = ["PNG","PSD","PDF","TIF","JPG","JPG SFW"];
win.g25.dd1 = win.g25.add('dropdownlist',undefined,Types);
win.g25.dd1.selection = 4;
win.g25.alignment='left';

win.g30 =win.g25.add('group');
win.g30.orientation = "stack";

win.g30b =win.g30.add('group');
win.g30b.st1 = win.g30b.add('statictext',undefined,'Quality');
win.g30b.dd1 = win.g30b.add('dropdownlist');
for(var a =1;a<13;a++){
    win.g30b.dd1.add('item',a);
    }
win.g30b.dd1.selection = 7;
win.g30b.visible=false;

win.g30c =win.g30.add('group');
win.g30c.st1 = win.g30c.add('statictext',undefined,'Compression');
var tiffOptions=["LZW","ZIP","JPG","None"];
win.g30c.dd1 = win.g30c.add('dropdownlist',undefined,tiffOptions);
win.g30c.dd1.selection = 0;
win.g30c.visible=false;

win.g30d =win.g30.add('group');
win.g30d.st1 = win.g30d.add('statictext',undefined,'Quality');
win.g30d.dd1 = win.g30d.add('dropdownlist');
for(var a =1;a<101;a++){
    win.g30d.dd1.add('item',a);
    }
win.g30d.dd1.selection=79;
win.g30d.visible=false;
win.g25.dd1.onChange=function(){
    switch(Number(this.selection.index)){
        case 0 : win.g30b.visible=false; win.g30c.visible=false; win.g30d.visible=false; break;
        case 1 : win.g30b.visible=false; win.g30c.visible=false; win.g30d.visible=false; break;
        case 2 : win.g30b.visible=false; win.g30c.visible=false; win.g30d.visible=false; break;
        case 3 : win.g30b.visible=false; win.g30c.visible=true; win.g30d.visible=false; break;
        case 4 : win.g30b.visible=true; win.g30c.visible=false; win.g30d.visible=false; break;
        case 5 : win.g30b.visible=false; win.g30c.visible=false; win.g30d.visible=true; break;
        default :break;
        }
}
win.g25.dd1.onChange();
win.g200 =win.p1.add('group');
win.g200.orientation = "row";
win.g200.bu1 = win.g200.add('button',undefined,'Process');
win.g200.bu1.preferredSize=[200,35];
win.g200.bu2 = win.g200.add('button',undefined,'Cancel');
win.g200.bu2.preferredSize=[200,35];
win.g200.bu1.onClick=function(){
if(win.g20.dd1.selection.index==3 && win.g20.et1.text == ''){
    alert("You have not entered a name!");
    return;
    }
win.close(0);
if(win.g10.rb1.value){
    layersToDo = ContentLayers;
    }else{
        layersToDo = userSelectedLayers; 
        }
snapShot();
for(var t in layersToDo ){
var lName = getLayerNameByIndex( Number(layersToDo[t])).toString().replace(/[:\/\\*\?\"\<\>\|]/g, "_");
var saveFile= File(outputFolder+ "/" + getName(t,lName));
deselectLayers();
for(var k in Adjustments){
    selectLayerByIndex(Number(Adjustments[k]),true);
    }
selectLayerByIndex(Number(layersToDo[t]),true,true);
if(win.g10.cb1.value) selectLayerByIndex(0,true,true);
dupLayers();
if(win.g15.cb1.value)  try{activeDocument.mergeVisibleLayers();}catch(e){}
if(win.g15.cb2.value){
    if(!back){
        try{activeDocument.trim(TrimType.TRANSPARENT,true,true,true,true);}catch(e){}
        }else{
            try{activeDocument.trim(TrimType.TOPLEFT,true,true,true,true);}catch(e){}
            }
    }
SaveDOC(saveFile);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
revertToLastSnapshot();

}
win.center();
win.show();

function SaveDOC(saveFile){
    switch(Number(win.g25.dd1.selection.index)){
        case 0 : SavePNG(File(saveFile+".png")); break;
        case 1:  SavePSD(File(saveFile+".psd")); break;
        case 2:  SavePDF(File(saveFile+".pdf")); break;
        case 3:  SaveTIFF(File(saveFile+".tif"),Number(win.g30c.dd1.selection.index)); break;
        case 4:  SaveJPG(File(saveFile+".jpg"),Number(win.g30b.dd1.selection.index)+1); break;
        case 5:  SaveForWeb(File(saveFile+".jpg"),Number(win.g30d.dd1.selection.index)+1)  break;
        default : break;
        }
};
function getName(seq,lName){
lName = lName.replace(/\....$/,'');
seq = zeroPad((Number(seq)+1), 3);
 var dName = decodeURI(activeDocument.name).replace(/\.[^\.]+$/, '');
var Name ='';
switch (Number(win.g20.dd1.selection.index)){
    case 0: Name += lName; break;
    case 1: Name += dName +"-"+seq; break;
    case 2: Name += dName +"-"+ lName; break;
    case 3: Name += win.g20.et1.text + "-"+seq; break;
    default :break;
    }
return Name;
    }
function snapShot() {
    var desc9 = new ActionDescriptor();
        var ref5 = new ActionReference();
        ref5.putClass( charIDToTypeID('SnpS') );
    desc9.putReference( charIDToTypeID('null'), ref5 );
        var ref6 = new ActionReference();
        ref6.putProperty( charIDToTypeID('HstS'), charIDToTypeID('CrnH') );
    desc9.putReference( charIDToTypeID('From'), ref6 );
    desc9.putEnumerated( charIDToTypeID('Usng'), charIDToTypeID('HstS'), charIDToTypeID('FllD') );
    executeAction( charIDToTypeID('Mk  '), desc9, DialogModes.NO );
};
function revertToLastSnapshot() { 
   var doc = app.activeDocument; 
   var hsObj = doc.historyStates; 
   var hsLength = hsObj.length; 
   for (var i=hsLength - 1;i>-1;i--) { 
     if (hsObj[i].snapshot) { 
       doc.activeHistoryState = doc.historyStates.getByName('Snapshot ' + i); 
       break; 
     } 
   } 
};
function deselectLayers() { 
    var desc01 = new ActionDescriptor(); 
        var ref01 = new ActionReference(); 
        ref01.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') ); 
    desc01.putReference( charIDToTypeID('null'), ref01 ); 
    executeAction( stringIDToTypeID('selectNoLayers'), desc01, DialogModes.NO ); 
};
function getLayerVisibilityByIndex( idx ) {
var ref = new ActionReference();
ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "Vsbl" ));
ref.putIndex( charIDToTypeID( "Lyr " ), idx );
return executeActionGet(ref).getBoolean(charIDToTypeID( "Vsbl" ));;
};
function getLayerNameByIndex( idx ) { 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "Nm  " )); 
    ref.putIndex( charIDToTypeID( "Lyr " ), idx );
    return executeActionGet(ref).getString(charIDToTypeID( "Nm  " )); 
};
function selectAllLayers() {
    var desc29 = new ActionDescriptor();
        var ref23 = new ActionReference();
        ref23.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    desc29.putReference( charIDToTypeID('null'), ref23 );
    executeAction( stringIDToTypeID('selectAllLayers'), desc29, DialogModes.NO );
};
function isAdjustmentLayer(idx){
var ref = new ActionReference(); 
ref.putProperty( charIDToTypeID("Prpr") , stringIDToTypeID( 'adjustment' )); 
ref.putIndex( charIDToTypeID( "Lyr " ), idx);
var desc = executeActionGet(ref);
if(desc.hasKey(stringIDToTypeID('adjustment'))){
    return true;}else{ return false;}
};
function selectLayerByIndex(index,add,vis){ 
	add = (add == undefined)  ? add = false : add;
    if (vis == undefined) vis = false;
 var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), index);
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref );
	      if(add) desc.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "addToSelection" ) ); 
      desc.putBoolean( charIDToTypeID( "MkVs" ), vis ); 
	  try{
    executeAction(charIDToTypeID("slct"), desc, DialogModes.NO );
}catch(e){}
};
function isLayerSet(idx){
var ref = new ActionReference(); 
ref.putProperty( charIDToTypeID("Prpr") , stringIDToTypeID( 'layerSection' )); 
ref.putIndex( charIDToTypeID( "Lyr " ), idx);
var desc = executeActionGet(ref);
var isSet = typeIDToStringID(desc.getEnumerationValue(stringIDToTypeID('layerSection')));
var LayerSet=false;
switch (isSet.toString()){
    case 'layerSectionStart' : LayerSet=true; break;
    case 'layerSectionEnd' : LayerSet=true; break;
    case 'layerSectionConent' : LayerSet=false; break;
    }
return LayerSet;
};
function getSelectedLayersIdx(){ 
      var selectedLayers = new Array; 
      var ref = new ActionReference(); 
      ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
      var desc = executeActionGet(ref); 
      if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){ 
         desc = desc.getList( stringIDToTypeID( 'targetLayers' )); 
          var c = desc.count 
          var selectedLayers = new Array(); 
          for(var i=0;i<c;i++){ 
            try{ 
               activeDocument.backgroundLayer; 
               selectedLayers.push(  desc.getReference( i ).getIndex() ); 
            }catch(e){ 
               selectedLayers.push(  desc.getReference( i ).getIndex()+1 ); 
            } 
          } 
       }else{ 
         var ref = new ActionReference(); 
         ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" )); 
         ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
         try{ 
            activeDocument.backgroundLayer; 
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1); 
         }catch(e){ 
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))); 
         } 
     var vis = app.activeDocument.activeLayer.visible;
        if(vis == true) app.activeDocument.activeLayer.visible = false;
        var desc9 = new ActionDescriptor();
    var list9 = new ActionList();
    var ref9 = new ActionReference();
    ref9.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    list9.putReference( ref9 );
    desc9.putList( charIDToTypeID('null'), list9 );
    executeAction( charIDToTypeID('Shw '), desc9, DialogModes.NO );
    if(app.activeDocument.activeLayer.visible == false) selectedLayers.shift();
        app.activeDocument.activeLayer.visible = vis;
      } 
      return selectedLayers; 
};
function dupLayers() { 
    var desc143 = new ActionDescriptor();
        var ref73 = new ActionReference();
        ref73.putClass( charIDToTypeID('Dcmn') );
    desc143.putReference( charIDToTypeID('null'), ref73 );
    desc143.putString( charIDToTypeID('Nm  '), activeDocument.activeLayer.name );
        var ref74 = new ActionReference();
        ref74.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    desc143.putReference( charIDToTypeID('Usng'), ref74 );
    executeAction( charIDToTypeID('Mk  '), desc143, DialogModes.NO );
};
function zeroPad(n, s) { 
   n = n.toString(); 
   while (n.length < s)  n = '0' + n; 
   return n; 
};
function SavePNG(saveFile){
    /*
    pngSaveOptions = new PNGSaveOptions(); 
    pngSaveOptions.transparency = true;
    //pngSaveOptions.interlaced = true; 
    //pngSaveOptions.PNG24 = true; 
    //pngSaveOptions.PNG8 = true; 
    //pngSaveOptions.quality = 100;
    activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE); 
    */
    var pngOpts = new ExportOptionsSaveForWeb; 
    pngOpts.format = SaveDocumentType.PNG
    pngOpts.PNG8 = false; 
    pngOpts.transparency = true; 
    pngOpts.interlaced = false; 
    pngOpts.quality = 100;
    activeDocument.exportDocument(saveFile,ExportType.SAVEFORWEB,pngOpts);
};
function SaveTIFF(saveFile,Comp){
tiffSaveOptions = new TiffSaveOptions(); 
tiffSaveOptions.embedColorProfile = true; 
tiffSaveOptions.transparency = true; 
tiffSaveOptions.alphaChannels = true; 
tiffSaveOptions.layers = true;
switch (Number(Comp)){
    case 0 : tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW; break;
    case 1 : tiffSaveOptions.imageCompression = TIFFEncoding.TIFFZIP; break;
    case 2 : tiffSaveOptions.imageCompression = TIFFEncoding.JPEG; break;
    case 3 : tiffSaveOptions.imageCompression = TIFFEncoding.NONE; break;
    default : break;
}
activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE); 
};
function SavePSD(saveFile){ 
psdSaveOptions = new PhotoshopSaveOptions(); 
psdSaveOptions.embedColorProfile = true; 
psdSaveOptions.alphaChannels = true;  
psdSaveOptions.layers = true;  
activeDocument.saveAs(saveFile, psdSaveOptions, true, Extension.LOWERCASE); 
};
function SavePDF(saveFile){ 
pdfSaveOptions = new PDFSaveOptions(); 
activeDocument.saveAs(saveFile, pdfSaveOptions, true, Extension.LOWERCASE); 
};
function SaveJPG(saveFile, jpegQuality){
    try{
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = jpegQuality;
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);
}catch(e){$.writeln(e+" - "+e.line);}
};
function SaveForWeb(saveFile,jpegQuality) {
var tmpFile=File(saveFile.path +"/tmpName.jpg");
var sfwOptions = new ExportOptionsSaveForWeb(); 
   sfwOptions.format = SaveDocumentType.JPEG; 
   sfwOptions.includeProfile = false; 
   sfwOptions.interlaced = 0; 
   sfwOptions.optimized = true; 
   sfwOptions.quality = Number(jpegQuality); 
activeDocument.exportDocument(tmpFile, ExportType.SAVEFORWEB, sfwOptions);
tmpFile.rename(decodeURI(saveFile.name));
};
};