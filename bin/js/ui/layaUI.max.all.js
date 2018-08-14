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

		startPageUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":-100,"width":950,"skin":"home/0-home/bg.png"}},{"type":"Image","props":{"y":48,"x":75,"skin":"home/0-home/logo.png"}},{"type":"Image","props":{"y":191,"x":125,"skin":"home/0-home/tle.png"}},{"type":"Image","props":{"y":377,"x":134,"skin":"home/0-home/img.png"}},{"type":"Image","props":{"y":916,"x":0,"skin":"home/0-home/font.png"}},{"type":"Label","props":{"y":1209,"x":295,"width":160,"var":"percent","text":"内容加载中","height":25,"fontSize":16,"color":"#848e8e","align":"center"}},{"type":"Button","props":{"y":1190,"x":221,"var":"start","stateNum":1,"skin":"home/0-home/btn_but.png"}}]};
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

		tabSelectUI.uiView={"type":"View","props":{"y":0,"x":0,"width":950,"height":468},"child":[{"type":"Tab","props":{"y":0,"x":0,"width":950,"var":"tab","selectedIndex":0,"height":70},"child":[{"type":"Button","props":{"x":0,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap0.png","name":"item0","height":71}},{"type":"Button","props":{"x":190,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap1.png","name":"item1","height":71}},{"type":"Button","props":{"x":380,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap2.png","name":"item2","height":71}},{"type":"Button","props":{"x":569,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap3.png","name":"item3","height":71}},{"type":"Button","props":{"x":759,"width":191,"stateNum":2,"skin":"home/0-tab/btn_tap4.png","name":"item4","height":71}}]},{"type":"Image","props":{"y":70,"x":0,"width":950,"var":"tabHeader","skin":"home/0-tab/conbg.png","sizeGrid":"100,100,100,100"}},{"type":"ViewStack","props":{"y":70,"x":0,"width":950,"var":"viewStack","height":397},"child":[{"type":"Panel","props":{"width":950,"var":"floor","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item0","height":394},"child":[{"type":"Image","props":{"y":50,"x":150,"skin":"home/1-floor/big_floor_img1.png"}},{"type":"Image","props":{"y":50,"x":408,"skin":"home/1-floor/big_floor_img2.png"}},{"type":"Image","props":{"y":50,"x":665,"skin":"home/1-floor/big_floor_img3.png"}},{"type":"Image","props":{"y":225,"x":150,"skin":"home/1-floor/big_floor_img4.png"}},{"type":"Image","props":{"y":225,"x":408,"skin":"home/1-floor/big_floor_img5.png"}},{"type":"Image","props":{"y":225,"x":665,"skin":"home/1-floor/big_floor_img6.png"}},{"type":"Image","props":{"y":399,"x":150,"skin":"home/1-floor/big_floor_img7.png"}},{"type":"Image","props":{"y":399,"x":408,"skin":"home/1-floor/big_floor_img8.png"}},{"type":"Image","props":{"y":399,"x":665,"skin":"home/1-floor/big_floor_img9.png"}},{"type":"Image","props":{"y":583,"x":148,"skin":"home/1-floor/big_floor_img10.png"}}]},{"type":"Panel","props":{"width":950,"var":"wall","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item1","height":394},"child":[{"type":"Image","props":{"y":51,"x":144,"skin":"home/2-wallpaper/big_wall_img1.png"}},{"type":"Image","props":{"y":51,"x":405,"skin":"home/2-wallpaper/big_wall_img2.png"}},{"type":"Image","props":{"y":51,"x":663,"skin":"home/2-wallpaper/big_wall_img3.png"}},{"type":"Image","props":{"y":230,"x":144,"skin":"home/2-wallpaper/big_wall_img4.png"}},{"type":"Image","props":{"y":230,"x":405,"skin":"home/2-wallpaper/big_wall_img5.png"}},{"type":"Image","props":{"y":230,"x":661,"skin":"home/2-wallpaper/big_wall_img6.png"}},{"type":"Image","props":{"y":391,"x":144,"skin":"home/2-wallpaper/big_wall_img7.png"}},{"type":"Image","props":{"y":391,"x":405,"skin":"home/2-wallpaper/big_wall_img8.png"}}]},{"type":"Panel","props":{"width":950,"var":"sofa","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item2","height":394},"child":[{"type":"Image","props":{"y":56,"x":142,"skin":"home/3-sofa/big_sofa_img1.png"}},{"type":"Image","props":{"y":60,"x":398,"skin":"home/3-sofa/big_sofa_img2.png"}},{"type":"Image","props":{"y":51,"x":659,"skin":"home/3-sofa/big_sofa_img3.png"}},{"type":"Image","props":{"y":239,"x":142,"skin":"home/3-sofa/big_sofa_img4.png"}},{"type":"Image","props":{"y":235,"x":398,"skin":"home/3-sofa/big_sofa_img5.png"}},{"type":"Image","props":{"y":232,"x":659,"skin":"home/3-sofa/big_sofa_img6.png"}},{"type":"Image","props":{"y":404,"x":144,"skin":"home/3-sofa/big_sofa_img7.png"}},{"type":"Image","props":{"y":404,"x":398,"skin":"home/3-sofa/big_sofa_img8.png"}},{"type":"Image","props":{"y":404,"x":659,"skin":"home/3-sofa/big_sofa_img9.png"}}]},{"type":"Panel","props":{"width":950,"var":"cabinet","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item3","height":394},"child":[{"type":"Image","props":{"y":54,"x":145,"skin":"home/4-cabinet/big_sark_img1.png"}},{"type":"Image","props":{"y":51,"x":408,"skin":"home/4-cabinet/big_sark_img2.png"}},{"type":"Image","props":{"y":54,"x":664,"skin":"home/4-cabinet/big_sark_img3.png"}},{"type":"Image","props":{"y":227,"x":145,"skin":"home/4-cabinet/big_sark_img4.png"}},{"type":"Image","props":{"y":227,"x":408,"skin":"home/4-cabinet/big_sark_img5.png"}},{"type":"Image","props":{"y":227,"x":664,"skin":"home/4-cabinet/big_sark_img6.png"}},{"type":"Image","props":{"y":397,"x":145,"skin":"home/4-cabinet/big_sark_img7.png"}},{"type":"Image","props":{"y":397,"x":408,"skin":"home/4-cabinet/big_sark_img8.png"}},{"type":"Image","props":{"y":397,"x":664,"skin":"home/4-cabinet/big_sark_img9.png"}},{"type":"Image","props":{"y":570,"x":145,"skin":"home/4-cabinet/big_sark_img10.png"}},{"type":"Image","props":{"y":570,"x":408,"skin":"home/4-cabinet/big_sark_img11.png"}}]},{"type":"Panel","props":{"width":950,"var":"window","vScrollBarSkin":"home/vscroll/vscroll.png","name":"item4","height":394},"child":[{"type":"Image","props":{"y":51,"x":152,"skin":"home/5-window/big_window_img1.png"}},{"type":"Image","props":{"y":46,"x":413,"skin":"home/5-window/big_window_img2.png"}},{"type":"Image","props":{"y":46,"x":674,"skin":"home/5-window/big_window_img3.png"}},{"type":"Image","props":{"y":220,"x":152,"skin":"home/5-window/big_window_img4.png"}},{"type":"Image","props":{"y":220,"x":413,"skin":"home/5-window/big_window_img5.png"}},{"type":"Image","props":{"y":220,"x":674,"skin":"home/5-window/big_window_img6.png"}},{"type":"Image","props":{"y":386,"x":152,"skin":"home/5-window/big_window_img7.png"}},{"type":"Image","props":{"y":386,"x":413,"skin":"home/5-window/big_window_img8.png"}},{"type":"Image","props":{"y":386,"x":674,"skin":"home/5-window/big_window_img9.png"}},{"type":"Image","props":{"y":536,"x":152,"skin":"home/5-window/big_window_img10.png"}},{"type":"Image","props":{"y":536,"x":413,"skin":"home/5-window/big_window_img11.png"}},{"type":"Image","props":{"y":536,"x":674,"skin":"home/5-window/big_window_img12.png"}}]}]}]};
		return tabSelectUI;
	})(View);