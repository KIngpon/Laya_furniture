var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var mainPageUI=(function(_super){
		function mainPageUI(){
			
		    this.wall=null;
		    this.floor=null;

			mainPageUI.__super.call(this);
		}

		CLASS$(mainPageUI,'ui.mainPageUI',_super);
		var __proto__=mainPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainPageUI.uiView);

		}

		mainPageUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"wall","skin":"home/top/wall_bg.png"}},{"type":"Image","props":{"y":729,"x":0,"width":750,"var":"floor","skin":"home/top/floot_bg.png","height":607}}]};
		return mainPageUI;
	})(View);
var sharePageUI=(function(_super){
		function sharePageUI(){
			

			sharePageUI.__super.call(this);
		}

		CLASS$(sharePageUI,'ui.sharePageUI',_super);
		var __proto__=sharePageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(sharePageUI.uiView);

		}

		sharePageUI.uiView={"type":"View","props":{"width":750,"height":280}};
		return sharePageUI;
	})(View);
var startPageUI=(function(_super){
		function startPageUI(){
			
		    this.start=null;

			startPageUI.__super.call(this);
		}

		CLASS$(startPageUI,'ui.startPageUI',_super);
		var __proto__=startPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(startPageUI.uiView);

		}

		startPageUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/0-home/bg.png"}},{"type":"Image","props":{"y":48,"x":429,"skin":"home/0-home/logo.png"}},{"type":"Image","props":{"y":191,"x":114,"skin":"home/0-home/tle.png"}},{"type":"Image","props":{"y":377,"x":134,"skin":"home/0-home/img.png"}},{"type":"Image","props":{"y":916,"x":-1,"skin":"home/0-home/font.png"}},{"type":"Button","props":{"y":1190,"x":220,"var":"start","stateNum":1,"skin":"home/0-home/btn_but.png"}}]};
		return startPageUI;
	})(View);
var tabSelectUI=(function(_super){
		function tabSelectUI(){
			
		    this.tab=null;
		    this.tabHeader=null;
		    this.viewStack=null;
		    this.floor=null;
		    this.wall=null;
		    this.sofa=null;
		    this.cabinet=null;
		    this.window=null;
		    this.preview=null;

			tabSelectUI.__super.call(this);
		}

		CLASS$(tabSelectUI,'ui.tabSelectUI',_super);
		var __proto__=tabSelectUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tabSelectUI.uiView);

		}

		tabSelectUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":555},"child":[{"type":"Tab","props":{"y":103,"x":0,"width":750,"var":"tab","selectedIndex":0,"height":56},"child":[{"type":"Button","props":{"stateNum":2,"skin":"home/0-tab/btn_tap0.png","name":"item0"}},{"type":"Button","props":{"x":150,"stateNum":2,"skin":"home/0-tab/btn_tap1.png","name":"item1"}},{"type":"Button","props":{"x":300,"stateNum":2,"skin":"home/0-tab/btn_tap2.png","name":"item2"}},{"type":"Button","props":{"x":450,"stateNum":2,"skin":"home/0-tab/btn_tap3.png","name":"item3"}},{"type":"Button","props":{"x":600,"stateNum":2,"skin":"home/0-tab/btn_tap4.png","name":"item4"}}]},{"type":"Image","props":{"y":159,"x":0,"var":"tabHeader","skin":"home/0-tab/conbg.png","sizeGrid":"100,100,100,100"}},{"type":"ViewStack","props":{"y":159,"x":0,"var":"viewStack"},"child":[{"type":"Panel","props":{"width":750,"var":"floor","vScrollBarSkin":"comp/vscroll.png","name":"item0","height":394},"child":[{"type":"Image","props":{"y":52,"x":56,"skin":"home/1-floor/big_floor_img1.png"}},{"type":"Image","props":{"y":52,"x":314,"skin":"home/1-floor/big_floor_img2.png"}},{"type":"Image","props":{"y":52,"x":571,"skin":"home/1-floor/big_floor_img3.png"}},{"type":"Image","props":{"y":227,"x":56,"skin":"home/1-floor/big_floor_img4.png"}},{"type":"Image","props":{"y":227,"x":314,"skin":"home/1-floor/big_floor_img5.png"}},{"type":"Image","props":{"y":227,"x":571,"skin":"home/1-floor/big_floor_img6.png"}},{"type":"Image","props":{"y":401,"x":56,"skin":"home/1-floor/big_floor_img7.png"}},{"type":"Image","props":{"y":401,"x":314,"skin":"home/1-floor/big_floor_img8.png"}}]},{"type":"Panel","props":{"width":750,"var":"wall","vScrollBarSkin":"comp/vscroll.png","name":"item1","height":394},"child":[{"type":"Image","props":{"y":47,"x":53,"skin":"home/2-wallpaper/big_wall_img1.png"}},{"type":"Image","props":{"y":47,"x":314,"skin":"home/2-wallpaper/big_wall_img2.png"}},{"type":"Image","props":{"y":47,"x":572,"skin":"home/2-wallpaper/big_wall_img3.png"}},{"type":"Image","props":{"y":226,"x":53,"skin":"home/2-wallpaper/big_wall_img4.png"}},{"type":"Image","props":{"y":226,"x":312,"skin":"home/2-wallpaper/big_wall_img5.png"}},{"type":"Image","props":{"y":226,"x":570,"skin":"home/2-wallpaper/big_wall_img6.png"}},{"type":"Image","props":{"y":387,"x":53,"skin":"home/2-wallpaper/big_wall_img7.png"}}]},{"type":"Panel","props":{"width":750,"var":"sofa","vScrollBarSkin":"comp/vscroll.png","name":"item2","height":394},"child":[{"type":"Image","props":{"y":52,"x":56,"skin":"home/3-sofa/big_sofa_img1.png"}},{"type":"Image","props":{"y":56,"x":312,"skin":"home/3-sofa/big_sofa_img2.png"}},{"type":"Image","props":{"y":47,"x":573,"skin":"home/3-sofa/big_sofa_img3.png"}},{"type":"Image","props":{"y":235,"x":56,"skin":"home/3-sofa/big_sofa_img4.png"}},{"type":"Image","props":{"y":231,"x":312,"skin":"home/3-sofa/big_sofa_img5.png"}},{"type":"Image","props":{"y":228,"x":573,"skin":"home/3-sofa/big_sofa_img6.png"}},{"type":"Image","props":{"y":400,"x":58,"skin":"home/3-sofa/big_sofa_img7.png"}},{"type":"Image","props":{"y":400,"x":312,"skin":"home/3-sofa/big_sofa_img8.png"}},{"type":"Image","props":{"y":400,"x":573,"skin":"home/3-sofa/big_sofa_img9.png"}}]},{"type":"Panel","props":{"width":750,"var":"cabinet","vScrollBarSkin":"comp/vscroll.png","name":"item3","height":394},"child":[{"type":"Image","props":{"y":54,"x":55,"skin":"home/4-cabinet/big_sark_img1.png"}},{"type":"Image","props":{"y":51,"x":318,"skin":"home/4-cabinet/big_sark_img2.png"}},{"type":"Image","props":{"y":54,"x":574,"skin":"home/4-cabinet/big_sark_img3.png"}},{"type":"Image","props":{"y":227,"x":55,"skin":"home/4-cabinet/big_sark_img4.png"}},{"type":"Image","props":{"y":227,"x":318,"skin":"home/4-cabinet/big_sark_img5.png"}},{"type":"Image","props":{"y":227,"x":574,"skin":"home/4-cabinet/big_sark_img6.png"}},{"type":"Image","props":{"y":397,"x":55,"skin":"home/4-cabinet/big_sark_img7.png"}},{"type":"Image","props":{"y":397,"x":318,"skin":"home/4-cabinet/big_sark_img8.png"}},{"type":"Image","props":{"y":397,"x":574,"skin":"home/4-cabinet/big_sark_img9.png"}},{"type":"Image","props":{"y":570,"x":55,"skin":"home/4-cabinet/big_sark_img10.png"}},{"type":"Image","props":{"y":570,"x":318,"skin":"home/4-cabinet/big_sark_img11.png"}}]},{"type":"Panel","props":{"width":750,"var":"window","vScrollBarSkin":"comp/vscroll.png","name":"item4","height":394},"child":[{"type":"Image","props":{"y":57,"x":53,"skin":"home/5-window/big_window_img1.png"}},{"type":"Image","props":{"y":52,"x":314,"skin":"home/5-window/big_window_img2.png"}},{"type":"Image","props":{"y":52,"x":575,"skin":"home/5-window/big_window_img3.png"}},{"type":"Image","props":{"y":226,"x":53,"skin":"home/5-window/big_window_img4.png"}},{"type":"Image","props":{"y":226,"x":314,"skin":"home/5-window/big_window_img5.png"}},{"type":"Image","props":{"y":226,"x":575,"skin":"home/5-window/big_window_img6.png"}},{"type":"Image","props":{"y":392,"x":53,"skin":"home/5-window/big_window_img7.png"}},{"type":"Image","props":{"y":392,"x":314,"skin":"home/5-window/big_window_img8.png"}},{"type":"Image","props":{"y":392,"x":575,"skin":"home/5-window/big_window_img9.png"}},{"type":"Image","props":{"y":542,"x":53,"skin":"home/5-window/big_window_img10.png"}},{"type":"Image","props":{"y":542,"x":314,"skin":"home/5-window/big_window_img11.png"}},{"type":"Image","props":{"y":542,"x":575,"skin":"home/5-window/big_window_img12.png"}}]}]},{"type":"Button","props":{"y":-2,"x":632,"var":"preview","stateNum":1,"skin":"home/top/photo_icon.png"}}]};
		return tabSelectUI;
	})(View);