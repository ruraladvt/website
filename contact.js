//LMSOFT Web Creator Pro, Version:6.0.0.15
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('en');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(7.00,5.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1000;
LMObjects[objindex++] = LMDiv("PanelHeader",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMFlash("Flash1",1,1,0,null,0,null);
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","http://webmail.ruraladvertisingandmarketing.com",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_blank");
LMObjects[objindex++] = LMText("Text10",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu2",1,1,0,null,0,null,null,null,null,0);
menusystemmodel003Show("Menu1");
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("DecoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) DecoEdit=FindTagFromId('DecoEdit');
LMObjects[objindex++] = LMDiv("PanelBlocs",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
branchlist = new Array();
branchlist[0] = new LMBranchEx("2","mailto:jitender@ruraladvertisingandmarketing.com",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[1] = new LMBranchEx("1","mailto:info@ruraladvertisingandmarketing.com",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[2] = new LMBranchEx("3","mailto:indrajeetgupta@ruraladvertisingandmarketing.com",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("IFr1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Label2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text8",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMObjWeb("WebObj1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box5",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","http://www.babsoft.in",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_blank");
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text9",1,1,0,null,0,null,branchlist,null,null);
objlist = new Array();
LMObjects[objindex++] = LMGroup("Group1",1,objlist);
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","http://www.babsoft.in",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,new LMBranchEx("0","https://www.facebook.com/pages/Rural-Advertising-and-Marketing/833465203336784",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,new LMBranchEx("0","https://twitter.com/ruraladvt",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,new LMBranchEx("0","https://www.linkedin.com/profile/view?id=382160967&",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",1,1,0,null,0,null,new LMBranchEx("0","https://plus.google.com/b/118189242987528419934/118189242987528419934",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img12=FindTagFromId('Img12');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f4,0x3f8,0x83);
LMObjectAnimate();

