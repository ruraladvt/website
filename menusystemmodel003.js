function menusystemmodel003Show(mnuname) {
	x=0;y=0;
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var preventopti;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"home.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem0.png",projectroot+"menusystemmodel003/menusystemitem0_over.png",null, "cursor:inherit;position:absolute;left:43px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:43px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Home");
	preventopti = "./menusystemmodel003/menusystemitem0.png";
	preventopti = "./menusystemmodel003/menusystemitem0_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",120,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"aboutus.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem1.png",projectroot+"menusystemmodel003/menusystemitem1_over.png",null, "cursor:inherit;position:absolute;left:34px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:34px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "About&nbsp;Us");
	preventopti = "./menusystemmodel003/menusystemitem1.png";
	preventopti = "./menusystemmodel003/menusystemitem1_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",240,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"services.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem2.png",projectroot+"menusystemmodel003/menusystemitem2_over.png",null, "cursor:inherit;position:absolute;left:35px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:35px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Services");
	preventopti = "./menusystemmodel003/menusystemitem2.png";
	preventopti = "./menusystemmodel003/menusystemitem2_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",360,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"partners.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem3.png",projectroot+"menusystemmodel003/menusystemitem3_over.png",null, "cursor:inherit;position:absolute;left:40px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:40px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Clients");
	preventopti = "./menusystemmodel003/menusystemitem3.png";
	preventopti = "./menusystemmodel003/menusystemitem3_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem5",480,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"knowledgebase.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem4.png",projectroot+"menusystemmodel003/menusystemitem4_over.png",null, "cursor:inherit;position:absolute;left:14px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:14px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Knowledgebase");
	preventopti = "./menusystemmodel003/menusystemitem4.png";
	preventopti = "./menusystemmodel003/menusystemitem4_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",600,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"gallery.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem5.png",projectroot+"menusystemmodel003/menusystemitem5_over.png",null, "cursor:inherit;position:absolute;left:40px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:40px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Gallery");
	preventopti = "./menusystemmodel003/menusystemitem5.png";
	preventopti = "./menusystemmodel003/menusystemitem5_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem7",720,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"network.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem6.png",projectroot+"menusystemmodel003/menusystemitem6_over.png",null, "cursor:inherit;position:absolute;left:24px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:24px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Our&nbsp;Network");
	preventopti = "./menusystemmodel003/menusystemitem6.png";
	preventopti = "./menusystemmodel003/menusystemitem6_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem8",840,0,120,50,0,0,null,0,null,new LMBranchEx("0",projectroot+"contact.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,projectroot+"menusystemmodel003/menusystemitem7.png",projectroot+"menusystemmodel003/menusystemitem7_over.png",null, "cursor:inherit;position:absolute;left:29px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "cursor:inherit;position:absolute;left:29px;top:17px;font-weight:700;font-family:Arial;font-size:9pt;color:rgb(255,255,255);;margin:0px;padding:0px;line-height:100%;", "Contact&nbsp;Us");
	preventopti = "./menusystemmodel003/menusystemitem7.png";
	preventopti = "./menusystemmodel003/menusystemitem7_over.png";
	var MenuSystemModel003_MNU1 = new LMMenu(mnuname, mnuname,x+0,y+0,960,50,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel003_MNU1;

	AddAnchorTagToObject(mnuname);
	RegisterMainMenu(MenuSystemModel003_MNU1);

	ReIndexMenu(MenuSystemModel003_MNU1, index);

}
