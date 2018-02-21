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
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMFlash("Flash1",1,1,0,null,0,null);
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","http://webmail.ruraladvertisingandmarketing.com",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_blank");
LMObjects[objindex++] = LMText("Text28",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu2",1,1,0,null,0,null,null,null,null,0);
menusystemmodel003Show("Menu1");
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("DecoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) DecoEdit=FindTagFromId('DecoEdit');
LMObjects[objindex++] = LMDiv("PanelBlocs",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box25",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box24",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box23",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box22",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box21",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box20",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box19",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box18",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box17",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box16",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box15",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box14",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box13",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box12",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box11",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box10",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box9",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box8",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box7",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box6",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box5",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box4",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box2",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
Img1.PopUp=new Function("LMImageOpenPopUp('Img1',800,600);");
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
Img4.PopUp=new Function("LMImageOpenPopUp('Img4',800,600);");
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
Img5.PopUp=new Function("LMImageOpenPopUp('Img5',800,600);");
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
Img8.PopUp=new Function("LMImageOpenPopUp('Img8',800,600);");
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
Img9.PopUp=new Function("LMImageOpenPopUp('Img9',800,600);");
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img10=FindTagFromId('Img10');
Img10.PopUp=new Function("LMImageOpenPopUp('Img10',800,600);");
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
Img11.PopUp=new Function("LMImageOpenPopUp('Img11',800,600);");
LMObjects[objindex++] = LMImage("Img12",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img12=FindTagFromId('Img12');
Img12.PopUp=new Function("LMImageOpenPopUp('Img12',800,600);");
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img13=FindTagFromId('Img13');
Img13.PopUp=new Function("LMImageOpenPopUp('Img13',800,600);");
LMObjects[objindex++] = LMImage("Img14",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img14=FindTagFromId('Img14');
Img14.PopUp=new Function("LMImageOpenPopUp('Img14',800,600);");
LMObjects[objindex++] = LMImage("Img15",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img15=FindTagFromId('Img15');
Img15.PopUp=new Function("LMImageOpenPopUp('Img15',800,600);");
LMObjects[objindex++] = LMImage("Img16",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img16=FindTagFromId('Img16');
Img16.PopUp=new Function("LMImageOpenPopUp('Img16',800,600);");
LMObjects[objindex++] = LMImage("Img17",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img17=FindTagFromId('Img17');
Img17.PopUp=new Function("LMImageOpenPopUp('Img17',800,600);");
LMObjects[objindex++] = LMImage("Img18",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img18=FindTagFromId('Img18');
Img18.PopUp=new Function("LMImageOpenPopUp('Img18',800,600);");
LMObjects[objindex++] = LMImage("Img19",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img19=FindTagFromId('Img19');
Img19.PopUp=new Function("LMImageOpenPopUp('Img19',800,600);");
LMObjects[objindex++] = LMImage("Img20",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img20=FindTagFromId('Img20');
Img20.PopUp=new Function("LMImageOpenPopUp('Img20',800,600);");
LMObjects[objindex++] = LMImage("Img22",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img22=FindTagFromId('Img22');
Img22.PopUp=new Function("LMImageOpenPopUp('Img22',800,600);");
LMObjects[objindex++] = LMImage("Img23",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img23=FindTagFromId('Img23');
Img23.PopUp=new Function("LMImageOpenPopUp('Img23',800,600);");
LMObjects[objindex++] = LMImage("Img24",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img24=FindTagFromId('Img24');
Img24.PopUp=new Function("LMImageOpenPopUp('Img24',800,600);");
LMObjects[objindex++] = LMImage("Img25",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img25=FindTagFromId('Img25');
Img25.PopUp=new Function("LMImageOpenPopUp('Img25',800,600);");
LMObjects[objindex++] = LMImage("Img27",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img27=FindTagFromId('Img27');
Img27.PopUp=new Function("LMImageOpenPopUp('Img27',800,600);");
LMObjects[objindex++] = LMImage("Img28",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img28=FindTagFromId('Img28');
Img28.PopUp=new Function("LMImageOpenPopUp('Img28',800,600);");
LMObjects[objindex++] = LMImage("Img29",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img29=FindTagFromId('Img29');
Img29.PopUp=new Function("LMImageOpenPopUp('Img29',800,600);");
LMObjects[objindex++] = LMImage("Img30",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img30=FindTagFromId('Img30');
Img30.PopUp=new Function("LMImageOpenPopUp('Img30',800,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text8",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text9",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text10",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text11",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text12",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text13",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text14",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text15",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text16",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text17",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text18",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text19",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text20",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text21",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text22",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text23",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text24",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text25",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text26",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box26",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box27",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img31",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img31=FindTagFromId('Img31');
Img31.PopUp=new Function("LMImageOpenPopUp('Img31',800,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text29",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text30",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img32",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img32=FindTagFromId('Img32');
Img32.PopUp=new Function("LMImageOpenPopUp('Img32',800,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text31",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box28",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img33",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img33=FindTagFromId('Img33');
Img33.PopUp=new Function("LMImageOpenPopUp('Img33',800,600);");
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","http://www.babsoft.in",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Text7",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,new LMBranchEx("0","https://www.facebook.com/pages/Rural-Advertising-and-Marketing/833465203336784",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text27",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,new LMBranchEx("0","https://twitter.com/ruraladvt",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img21",1,1,0,null,0,null,new LMBranchEx("0","https://www.linkedin.com/profile/view?id=382160967&",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMImage("Img26",1,1,0,null,0,null,new LMBranchEx("0","https://plus.google.com/b/118189242987528419934/118189242987528419934",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img26=FindTagFromId('Img26');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f5,0x3f8,0x7c);
LMObjectAnimate();

function Img33_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box28=FindTagFromId("Box28");
   if(is.ns) Text31=FindTagFromId("Text31");
   if(is.ns) Text2=FindTagFromId("Text2");
   Box28.Hide();
   Text31.Hide();
   Text2.Show();
   //LMSOFT End Event-Action

}


function Img33_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box28=FindTagFromId("Box28");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text31=FindTagFromId("Text31");
   Box28.Show();
   Text2.Hide();
   Text31.Show();
   //LMSOFT End Event-Action

}


function Img32_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box27=FindTagFromId("Box27");
   if(is.ns) Text30=FindTagFromId("Text30");
   if(is.ns) Text2=FindTagFromId("Text2");
   Box27.Hide();
   Text30.Hide();
   Text2.Show();
   //LMSOFT End Event-Action

}


function Img32_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box27=FindTagFromId("Box27");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text30=FindTagFromId("Text30");
   Box27.Show();
   Text2.Hide();
   Text30.Show();
   //LMSOFT End Event-Action

}


function Img32_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img32=FindTagFromId("Img32");
   Img32.PopUp();
   //LMSOFT End Event-Action

}


function Img31_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box26=FindTagFromId("Box26");
   if(is.ns) Text29=FindTagFromId("Text29");
   if(is.ns) Text2=FindTagFromId("Text2");
   Box26.Hide();
   Text29.Hide();
   Text2.Show();
   //LMSOFT End Event-Action

}


function Img31_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box26=FindTagFromId("Box26");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text29=FindTagFromId("Text29");
   Box26.Show();
   Text2.Hide();
   Text29.Show();
   //LMSOFT End Event-Action

}


function Img31_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img31=FindTagFromId("Img31");
   Img31.PopUp();
   //LMSOFT End Event-Action

}


function Img19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box25=FindTagFromId("Box25");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text26=FindTagFromId("Text26");
   Box25.Hide();
   Text2.Show();
   Text26.Hide();
   //LMSOFT End Event-Action

}


function Img19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box25=FindTagFromId("Box25");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text26=FindTagFromId("Text26");
   Box25.Show();
   Text2.Hide();
   Text26.Show();
   //LMSOFT End Event-Action

}


function Img20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box24=FindTagFromId("Box24");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text25=FindTagFromId("Text25");
   Box24.Hide();
   Text2.Show();
   Text25.Hide();
   //LMSOFT End Event-Action

}


function Img20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box24=FindTagFromId("Box24");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text25=FindTagFromId("Text25");
   Box24.Show();
   Text2.Hide();
   Text25.Show();
   //LMSOFT End Event-Action

}


function Img22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box23=FindTagFromId("Box23");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text24=FindTagFromId("Text24");
   Box23.Hide();
   Text2.Show();
   Text24.Hide();
   //LMSOFT End Event-Action

}


function Img22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box23=FindTagFromId("Box23");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text24=FindTagFromId("Text24");
   Box23.Show();
   Text2.Hide();
   Text24.Show();
   //LMSOFT End Event-Action

}


function Img1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box22=FindTagFromId("Box22");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text23=FindTagFromId("Text23");
   Box22.Hide();
   Text2.Show();
   Text23.Hide();
   //LMSOFT End Event-Action

}


function Img1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box22=FindTagFromId("Box22");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text23=FindTagFromId("Text23");
   Box22.Show();
   Text2.Hide();
   Text23.Show();
   //LMSOFT End Event-Action

}


function Img5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box21=FindTagFromId("Box21");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text22=FindTagFromId("Text22");
   Box21.Hide();
   Text2.Show();
   Text22.Hide();
   //LMSOFT End Event-Action

}


function Img5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box21=FindTagFromId("Box21");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text22=FindTagFromId("Text22");
   Box21.Show();
   Text2.Hide();
   Text22.Show();
   //LMSOFT End Event-Action

}


function Img4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box20=FindTagFromId("Box20");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text21=FindTagFromId("Text21");
   Box20.Hide();
   Text2.Show();
   Text21.Hide();
   //LMSOFT End Event-Action

}


function Img4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box20=FindTagFromId("Box20");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text21=FindTagFromId("Text21");
   Box20.Show();
   Text2.Hide();
   Text21.Show();
   //LMSOFT End Event-Action

}


function Img28_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box19=FindTagFromId("Box19");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text20=FindTagFromId("Text20");
   Box19.Hide();
   Text2.Show();
   Text20.Hide();
   //LMSOFT End Event-Action

}


function Img28_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box19=FindTagFromId("Box19");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text20=FindTagFromId("Text20");
   Box19.Show();
   Text2.Hide();
   Text20.Show();
   //LMSOFT End Event-Action

}


function Img29_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box18=FindTagFromId("Box18");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text20=FindTagFromId("Text20");
   Box18.Hide();
   Text2.Show();
   Text20.Hide();
   //LMSOFT End Event-Action

}


function Img29_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box18=FindTagFromId("Box18");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text20=FindTagFromId("Text20");
   Box18.Show();
   Text2.Hide();
   Text20.Show();
   //LMSOFT End Event-Action

}


function Img15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box17=FindTagFromId("Box17");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text19=FindTagFromId("Text19");
   Box17.Hide();
   Text2.Show();
   Text19.Hide();
   //LMSOFT End Event-Action

}


function Img15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box17=FindTagFromId("Box17");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text19=FindTagFromId("Text19");
   Box17.Show();
   Text2.Hide();
   Text19.Show();
   //LMSOFT End Event-Action

}


function Img16_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box16=FindTagFromId("Box16");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text18=FindTagFromId("Text18");
   Box16.Hide();
   Text2.Show();
   Text18.Hide();
   //LMSOFT End Event-Action

}


function Img16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box16=FindTagFromId("Box16");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text18=FindTagFromId("Text18");
   Box16.Show();
   Text2.Hide();
   Text18.Show();
   //LMSOFT End Event-Action

}


function Img30_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box15=FindTagFromId("Box15");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text17=FindTagFromId("Text17");
   Box15.Hide();
   Text2.Show();
   Text17.Hide();
   //LMSOFT End Event-Action

}


function Img30_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box15=FindTagFromId("Box15");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text17=FindTagFromId("Text17");
   Box15.Show();
   Text2.Hide();
   Text17.Show();
   //LMSOFT End Event-Action

}


function Img24_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box14=FindTagFromId("Box14");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text16=FindTagFromId("Text16");
   Box14.Hide();
   Text2.Show();
   Text16.Hide();
   //LMSOFT End Event-Action

}


function Img24_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box14=FindTagFromId("Box14");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text16=FindTagFromId("Text16");
   Box14.Show();
   Text2.Hide();
   Text16.Show();
   //LMSOFT End Event-Action

}


function Img13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box12=FindTagFromId("Box12");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text14=FindTagFromId("Text14");
   Box12.Hide();
   Text2.Show();
   Text14.Hide();
   //LMSOFT End Event-Action

}


function Img13_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box12=FindTagFromId("Box12");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text14=FindTagFromId("Text14");
   Box12.Show();
   Text2.Hide();
   Text14.Show();
   //LMSOFT End Event-Action

}


function Img23_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box13=FindTagFromId("Box13");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text15=FindTagFromId("Text15");
   Box13.Hide();
   Text2.Show();
   Text15.Hide();
   //LMSOFT End Event-Action

}


function Img23_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box13=FindTagFromId("Box13");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text15=FindTagFromId("Text15");
   Box13.Show();
   Text2.Hide();
   Text15.Show();
   //LMSOFT End Event-Action

}


function Img25_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box11=FindTagFromId("Box11");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text13=FindTagFromId("Text13");
   Box11.Hide();
   Text2.Show();
   Text13.Hide();
   //LMSOFT End Event-Action

}


function Img25_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box11=FindTagFromId("Box11");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text13=FindTagFromId("Text13");
   Box11.Show();
   Text2.Hide();
   Text13.Show();
   //LMSOFT End Event-Action

}


function Img18_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box10=FindTagFromId("Box10");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text12=FindTagFromId("Text12");
   Box10.Hide();
   Text2.Show();
   Text12.Hide();
   //LMSOFT End Event-Action

}


function Img18_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box10=FindTagFromId("Box10");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text12=FindTagFromId("Text12");
   Box10.Show();
   Text2.Hide();
   Text12.Show();
   //LMSOFT End Event-Action

}


function Img14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box9=FindTagFromId("Box9");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text11=FindTagFromId("Text11");
   Box9.Hide();
   Text2.Show();
   Text11.Hide();
   //LMSOFT End Event-Action

}


function Img14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box9=FindTagFromId("Box9");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text11=FindTagFromId("Text11");
   Box9.Show();
   Text2.Hide();
   Text11.Show();
   //LMSOFT End Event-Action

}


function Img17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box8=FindTagFromId("Box8");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text10=FindTagFromId("Text10");
   Box8.Hide();
   Text2.Show();
   Text10.Hide();
   //LMSOFT End Event-Action

}


function Img17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box8=FindTagFromId("Box8");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text10=FindTagFromId("Text10");
   Box8.Show();
   Text2.Hide();
   Text10.Show();
   //LMSOFT End Event-Action

}


function Img27_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box7=FindTagFromId("Box7");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text9=FindTagFromId("Text9");
   Box7.Hide();
   Text2.Show();
   Text9.Hide();
   //LMSOFT End Event-Action

}


function Img27_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box7=FindTagFromId("Box7");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text9=FindTagFromId("Text9");
   Box7.Show();
   Text2.Hide();
   Text9.Show();
   //LMSOFT End Event-Action

}


function Img8_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box6=FindTagFromId("Box6");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text8=FindTagFromId("Text8");
   Box6.Hide();
   Text2.Show();
   Text8.Hide();
   //LMSOFT End Event-Action

}


function Img8_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box6=FindTagFromId("Box6");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text8=FindTagFromId("Text8");
   Box6.Show();
   Text2.Hide();
   Text8.Show();
   //LMSOFT End Event-Action

}


function Img9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box5=FindTagFromId("Box5");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text6=FindTagFromId("Text6");
   Box5.Hide();
   Text2.Show();
   Text6.Hide();
   //LMSOFT End Event-Action

}


function Img9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box5=FindTagFromId("Box5");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text6=FindTagFromId("Text6");
   Box5.Show();
   Text2.Hide();
   Text6.Show();
   //LMSOFT End Event-Action

}


function Img11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box4=FindTagFromId("Box4");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text5=FindTagFromId("Text5");
   Box4.Hide();
   Text2.Show();
   Text5.Hide();
   //LMSOFT End Event-Action

}


function Img11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box4=FindTagFromId("Box4");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text5=FindTagFromId("Text5");
   Box4.Show();
   Text2.Hide();
   Text5.Show();
   //LMSOFT End Event-Action

}


function Img12_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=FindTagFromId("Box3");
   if(is.ns) Text4=FindTagFromId("Text4");
   if(is.ns) Text2=FindTagFromId("Text2");
   Box3.Hide();
   Text4.Hide();
   Text2.Show();
   //LMSOFT End Event-Action

}


function Img12_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=FindTagFromId("Box3");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text4=FindTagFromId("Text4");
   Box3.Show();
   Text2.Hide();
   Text4.Show();
   //LMSOFT End Event-Action

}


function Img10_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=FindTagFromId("Box2");
   if(is.ns) Text1=FindTagFromId("Text1");
   if(is.ns) Text2=FindTagFromId("Text2");
   Box2.Hide();
   Text1.Hide();
   Text2.Show();
   //LMSOFT End Event-Action

}


function Img10_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=FindTagFromId("Box2");
   if(is.ns) Text2=FindTagFromId("Text2");
   if(is.ns) Text1=FindTagFromId("Text1");
   Box2.Show();
   Text2.Hide();
   Text1.Show();
   //LMSOFT End Event-Action

}


function Img10_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=FindTagFromId("Img10");
   Img10.PopUp();
   //LMSOFT End Event-Action

}


function Img19_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img19=FindTagFromId("Img19");
   Img19.PopUp();
   //LMSOFT End Event-Action

}


function Img20_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=FindTagFromId("Img20");
   Img20.PopUp();
   //LMSOFT End Event-Action

}


function Img22_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img22=FindTagFromId("Img22");
   Img22.PopUp();
   //LMSOFT End Event-Action

}


function Img1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=FindTagFromId("Img1");
   Img1.PopUp();
   //LMSOFT End Event-Action

}


function Img5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=FindTagFromId("Img5");
   Img5.PopUp();
   //LMSOFT End Event-Action

}


function Img4_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=FindTagFromId("Img4");
   Img4.PopUp();
   //LMSOFT End Event-Action

}


function Img28_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=FindTagFromId("Img28");
   Img28.PopUp();
   //LMSOFT End Event-Action

}


function Img29_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=FindTagFromId("Img29");
   Img29.PopUp();
   //LMSOFT End Event-Action

}


function Img15_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=FindTagFromId("Img15");
   Img15.PopUp();
   //LMSOFT End Event-Action

}


function Img16_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=FindTagFromId("Img16");
   Img16.PopUp();
   //LMSOFT End Event-Action

}


function Img30_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img30=FindTagFromId("Img30");
   Img30.PopUp();
   //LMSOFT End Event-Action

}


function Img24_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=FindTagFromId("Img24");
   Img24.PopUp();
   //LMSOFT End Event-Action

}


function Img23_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img23=FindTagFromId("Img23");
   Img23.PopUp();
   //LMSOFT End Event-Action

}


function Img13_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=FindTagFromId("Img13");
   Img13.PopUp();
   //LMSOFT End Event-Action

}


function Img25_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=FindTagFromId("Img25");
   Img25.PopUp();
   //LMSOFT End Event-Action

}


function Img18_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=FindTagFromId("Img18");
   Img18.PopUp();
   //LMSOFT End Event-Action

}


function Img14_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=FindTagFromId("Img14");
   Img14.PopUp();
   //LMSOFT End Event-Action

}


function Img17_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=FindTagFromId("Img17");
   Img17.PopUp();
   //LMSOFT End Event-Action

}


function Img27_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=FindTagFromId("Img27");
   Img27.PopUp();
   //LMSOFT End Event-Action

}


function Img8_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.PopUp();
   //LMSOFT End Event-Action

}


function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.PopUp();
   //LMSOFT End Event-Action

}


function Img11_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=FindTagFromId("Img11");
   Img11.PopUp();
   //LMSOFT End Event-Action

}


function Img12_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=FindTagFromId("Img12");
   Img12.PopUp();
   //LMSOFT End Event-Action

}
function Img33_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=FindTagFromId("Img33");
   Img33.PopUp();
   //LMSOFT End Event-Action

}