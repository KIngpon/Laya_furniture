var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var mainPageUI=(function(_super){
		function mainPageUI(){
			
		    this.wall=null;
		    this.floor=null;
		    this.home=null;

			mainPageUI.__super.call(this);
		}

		CLASS$(mainPageUI,'ui.mainPageUI',_super);
		var __proto__=mainPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainPageUI.uiView);

		}

		mainPageUI.uiView={"type":"View","props":{"width":950,"height":1305},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":950,"var":"wall","renderType":"render","height":922}},{"type":"Sprite","props":{"y":728,"x":0,"width":950,"var":"floor","renderType":"render","height":383}},{"type":"Box","props":{"width":950,"var":"home","height":1305}}]};
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
			
		    this.percent=null;
		    this.start=null;

			startPageUI.__super.call(this);
		}

		CLASS$(startPageUI,'ui.startPageUI',_super);
		var __proto__=startPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(startPageUI.uiView);

		}

		startPageUI.uiView={"type":"View","props":{"width":950,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":950,"skin":"home/0-home/bg.png"}},{"type":"Image","props":{"y":43,"x":529,"skin":"home/0-home/logo.png"}},{"type":"Image","props":{"y":191,"x":100,"skin":"home/0-home/tle.png"}},{"type":"Label","props":{"y":1209,"x":395,"width":160,"var":"percent","text":"内容加载中","height":25,"fontSize":16,"color":"#f6f8f8","align":"center"}},{"type":"Button","props":{"y":1190,"x":334,"var":"start","stateNum":1,"skin":"home/0-home/btn_but.png"}}]};
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

			tabSelectUI.__super.call(this);
		}

		CLASS$(tabSelectUI,'ui.tabSelectUI',_super);
		var __proto__=tabSelectUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tabSelectUI.uiView);

		}

		tabSelectUI.uiView={"type":"View","props":{"y":0,"x":0,"width":950,"height":468},"child":[{"type":"Tab","props":{"y":0,"x":0,"width":950,"var":"tab","selectedIndex":0,"height":70},"child":[{"type":"Button","props":{"x":0,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap0.png","name":"item0","height":71}},{"type":"Button","props":{"x":190,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap1.png","name":"item1","height":71}},{"type":"Button","props":{"x":380,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap2.png","name":"item2","height":71}},{"type":"Button","props":{"x":569,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap3.png","name":"item3","height":71}},{"type":"Button","props":{"x":759,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap4.png","name":"item4","height":71}}]},{"type":"Image","props":{"y":70,"x":0,"width":950,"var":"tabHeader","skin":"home/0-tab/conbg.png","sizeGrid":"100,100,100,100"}},{"type":"ViewStack","props":{"y":70,"x":0,"width":950,"var":"viewStack","height":397},"child":[{"type":"Panel","props":{"width":950,"var":"floor","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item0","height":394},"child":[{"type":"Image","props":{"y":50,"x":61,"skin":"home/1-floor/big_floor_img1.png"}},{"type":"Image","props":{"y":50,"x":276,"skin":"home/1-floor/big_floor_img2.png"}},{"type":"Image","props":{"y":50,"x":502,"skin":"home/1-floor/big_floor_img3.png"}},{"type":"Image","props":{"y":50,"x":723,"skin":"home/1-floor/big_floor_img4.png"}}]},{"type":"Panel","props":{"width":950,"var":"wall","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item1","height":394},"child":[{"type":"Image","props":{"y":50,"x":61,"skin":"home/2-wallpaper/big_wall_img1.png"}},{"type":"Image","props":{"y":50,"x":276,"skin":"home/2-wallpaper/big_wall_img2.png"}},{"type":"Image","props":{"y":50,"x":502,"skin":"home/2-wallpaper/big_wall_img3.png"}},{"type":"Image","props":{"y":50,"x":723,"skin":"home/2-wallpaper/big_wall_img4.png"}},{"type":"Image","props":{"y":220,"x":61,"skin":"home/2-wallpaper/big_wall_img5.png"}},{"type":"Image","props":{"y":220,"x":276,"skin":"home/2-wallpaper/big_wall_img6.png"}}]},{"type":"Panel","props":{"width":950,"var":"sofa","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item2","height":394},"child":[{"type":"Image","props":{"y":50,"x":61,"skin":"home/3-sofa/big_sofa_img1.png"}},{"type":"Image","props":{"y":50,"x":276,"skin":"home/3-sofa/big_sofa_img2.png"}},{"type":"Image","props":{"y":50,"x":502,"skin":"home/3-sofa/big_sofa_img3.png"}},{"type":"Image","props":{"y":50,"x":723,"skin":"home/3-sofa/big_sofa_img4.png"}},{"type":"Image","props":{"y":220,"x":61,"skin":"home/3-sofa/big_sofa_img5.png"}},{"type":"Image","props":{"y":220,"x":276,"skin":"home/3-sofa/big_sofa_img6.png"}},{"type":"Image","props":{"y":220,"x":502,"skin":"home/3-sofa/big_sofa_img7.png"}},{"type":"Image","props":{"y":220,"x":723,"skin":"home/3-sofa/big_sofa_img8.png"}}]},{"type":"Panel","props":{"width":950,"var":"cabinet","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item3","height":394},"child":[{"type":"Image","props":{"y":50,"x":61,"skin":"home/4-cabinet/big_sark_img1.png"}},{"type":"Image","props":{"y":50,"x":276,"skin":"home/4-cabinet/big_sark_img2.png"}},{"type":"Image","props":{"y":50,"x":502,"skin":"home/4-cabinet/big_sark_img3.png"}},{"type":"Image","props":{"y":50,"x":723,"skin":"home/4-cabinet/big_sark_img4.png"}},{"type":"Image","props":{"y":220,"x":61,"skin":"home/4-cabinet/big_sark_img5.png"}},{"type":"Image","props":{"y":220,"x":276,"skin":"home/4-cabinet/big_sark_img6.png"}},{"type":"Image","props":{"y":220,"x":502,"skin":"home/4-cabinet/big_sark_img7.png"}},{"type":"Image","props":{"y":220,"x":723,"skin":"home/4-cabinet/big_sark_img8.png"}},{"type":"Image","props":{"y":390,"x":61,"skin":"home/4-cabinet/big_sark_img9.png"}},{"type":"Image","props":{"y":390,"x":276,"skin":"home/4-cabinet/big_sark_img10.png"}},{"type":"Image","props":{"y":390,"x":502,"skin":"home/4-cabinet/big_sark_img11.png"}},{"type":"Image","props":{"y":390,"x":723,"skin":"home/4-cabinet/big_sark_img12.png"}},{"type":"Image","props":{"y":560,"x":61,"skin":"home/4-cabinet/big_sark_img13.png"}},{"type":"Image","props":{"y":560,"x":276,"skin":"home/4-cabinet/big_sark_img14.png"}},{"type":"Image","props":{"y":560,"x":502,"skin":"home/4-cabinet/big_sark_img15.png"}}]},{"type":"Panel","props":{"width":950,"var":"window","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item4","height":394},"child":[{"type":"Image","props":{"y":50,"x":61,"skin":"home/5-window/big_window_img1.png"}},{"type":"Image","props":{"y":50,"x":276,"skin":"home/5-window/big_window_img2.png"}},{"type":"Image","props":{"y":50,"x":502,"skin":"home/5-window/big_window_img3.png"}},{"type":"Image","props":{"y":50,"x":723,"skin":"home/5-window/big_window_img4.png"}},{"type":"Image","props":{"y":220,"x":61,"skin":"home/5-window/big_window_img5.png"}},{"type":"Image","props":{"y":220,"x":276,"skin":"home/5-window/big_window_img6.png"}},{"type":"Image","props":{"y":220,"x":502,"skin":"home/5-window/big_window_img7.png"}},{"type":"Image","props":{"y":220,"x":723,"skin":"home/5-window/big_window_img8.png"}},{"type":"Image","props":{"y":390,"x":61,"skin":"home/5-window/big_window_img9.png"}},{"type":"Image","props":{"y":390,"x":276,"skin":"home/5-window/big_window_img10.png"}},{"type":"Image","props":{"y":390,"x":502,"skin":"home/5-window/big_window_img11.png"}},{"type":"Image","props":{"y":390,"x":723,"skin":"home/5-window/big_window_img12.png"}},{"type":"Image","props":{"y":560,"x":61,"skin":"home/5-window/big_window_img13.png"}},{"type":"Image","props":{"y":560,"x":276,"skin":"home/5-window/big_window_img14.png"}},{"type":"Image","props":{"y":560,"x":502,"skin":"home/5-window/big_window_img15.png"}},{"type":"Image","props":{"y":560,"x":723,"skin":"home/5-window/big_window_img16.png"}},{"type":"Image","props":{"y":730,"x":61,"skin":"home/5-window/big_window_img17.png"}},{"type":"Image","props":{"y":730,"x":276,"skin":"home/5-window/big_window_img18.png"}},{"type":"Image","props":{"y":730,"x":502,"skin":"home/5-window/big_window_img19.png"}}]}]}]};
		return tabSelectUI;
	})(View);