var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tabSelectUI=(function(_super){
		function tabSelectUI(){
			
		    this.tab_header=null;

			tabSelectUI.__super.call(this);
		}

		CLASS$(tabSelectUI,'ui.tabSelectUI',_super);
		var __proto__=tabSelectUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tabSelectUI.uiView);

		}

		tabSelectUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":450},"child":[{"type":"Image","props":{"y":52,"x":0,"var":"tab_header","skin":"home/0-tab/conbg.png","sizeGrid":"100,100,100,100"}},{"type":"Panel","props":{"y":52,"width":750,"vScrollBarSkin":"comp/vscroll.png","height":397},"child":[{"type":"Image","props":{"y":52,"x":56,"skin":"home/1-floor/big_floor_img1.png"}},{"type":"Image","props":{"y":52,"x":314,"skin":"home/1-floor/big_floor_img2.png"}},{"type":"Image","props":{"y":52,"x":571,"skin":"home/1-floor/big_floor_img3.png"}},{"type":"Image","props":{"y":227,"x":56,"skin":"home/1-floor/big_floor_img4.png"}},{"type":"Image","props":{"y":227,"x":314,"skin":"home/1-floor/big_floor_img5.png"}},{"type":"Image","props":{"y":227,"x":571,"skin":"home/1-floor/big_floor_img6.png"}},{"type":"Image","props":{"y":401,"x":56,"skin":"home/1-floor/big_floor_img7.png"}},{"type":"Image","props":{"y":401,"x":314,"skin":"home/1-floor/big_floor_img8.png"}}]}]};
		return tabSelectUI;
	})(View);