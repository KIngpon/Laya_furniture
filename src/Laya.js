var WebGL = laya.webgl.WebGL;
Laya.init(750, 1334, WebGL);
Laya.stage.bgColor = "#fff";
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.scaleMode =   Laya.Stage.SCALE_FIXED_HEIGHT;//"exactfit";

Laya.loader.load(["res/atlas/home/0-home.atlas"],Laya.Handler.create(this,onStart));


function onStart(){
    this.start = new ui.startPageUI();
    this.startx = this.start.start.x;
    this.start.start.x = this.start.start.width * -2;
    Laya.loader.load( ["res/atlas/home/0-tab.atlas",
"res/atlas/home/1-floor.atlas",
"res/atlas/home/2-wallpaper.atlas",
"res/atlas/home/3-sofa.atlas",
"res/atlas/home/4-cabinet.atlas",
"res/atlas/home/5-window.atlas",
"res/atlas/home/top.atlas",
"res/atlas/comp.atlas"],null,Laya.Handler.create(this,onProgress,null,false));
    this.start.y = 0;
    this.start.x =(Laya.stage.width - this.start.width) /2;
    Laya.stage.addChild(this.start);
    this.start.start.on(Laya.Event.CLICK,this,onStartClick);
}

function onProgress(d){
    this.start.percent.text = "内容加载中..."+(d * 100).toFixed(2)+"%";
    // console.info(d)
    if(d ==1){
        this.start.percent.visible = false;
        this.start.start.x = this.startx;
        this.start.start.loadImage(this.start.start.skin)
    }
}

function onStartClick(){
    onMain();
    onTab();
    Laya.stage.removeChildAt(0);
    // console.info(Laya.stage);
    showDragRegion();
}

function onMain(){
    this.main = new ui.mainPageUI();
    this.main.y = 0;
    this.start.x = 0;
    console.info(this.main.width , Laya.Browser.width);
    this.main.width = Laya.Browser.width;    
    this.main.wall.loadImage("home/top/wall_bg.png",0,0,this.main.wall.width,this.main.wall.height);
    this.main.floor.loadImage("home/top/floot_bg.png",0,0,this.main.floor.width,this.main.floor.height);
     this.main.home.on(Laya.Event.CLICK,this,onClickMain);
    Laya.stage.addChild(this.main);    
}



function onTab(){
    this.ts = new ui.tabSelectUI();
    //this.ts.width = Laya.Browser.width;
    this.ts.scaleX = Laya.stage.width / 950;
    this.ts.scaleY = this.ts.scaleX;
    this.ts.x =(Laya.stage.width - this.ts.width) /2;
    this.ts_proration = this.ts.width/this.ts.height;
    this.ts.x = 0;
     

     console.info("==",this.ts.width,Laya.Browser.width,this.ts.height);
    this.ts.height = this.ts.width /this.ts_proration;
     this.ts.y = Laya.stage.height - this.ts.height * this.ts.scaleY; //933
     //console.info(Laya.stage.heightLaya.Browser.clientHeight, this.ts.height)
    //this.ts.tabHeader.width =Laya.Browser.clientWidth;
    Laya.stage.addChild(ts);
    // console.info(this.ts.width ,Laya.Browser.width,Laya.Browser.clientWidth,Laya.stage.scaleX)
    
    this.ts.viewStack.on(Laya.Event.CLICK,this,onStackClick);
    this.ts.tab.selectHandler = new Laya.Handler(this,onSelect);        
    //console.info(this.ts.viewStack);
    for(var i in this.ts.viewStack._childs){
        var item = this.ts.viewStack._childs[i];
        for(var k in item._childs[0]._childs){
            var image = item._childs[0]._childs[k]; //this.ts.viewStack._childs[i]._childs[0][k]
            image.on(Laya.Event.CLICK,this,onImageClick);
        }
    }
    onPreview();
}

function onPreview(){
    this.preview = new Laya.Button();
    this.preview.skin = "home/top/photo_icon.png";
    this.preview.x =  Laya.stage.width - 105;
    this.preview.y =933-105;
    this.preview.stateNum = 1;
    this.preview.width = 82;
    this.preview.height = 82 ;
    Laya.stage.addChild(this.preview);
    this.preview.on(Laya.Event.CLICK,this,onPreviewClick);
}

function onPreviewClick(){
    console.info("preview")
     e.stopPropagation();
}

function onStackClick(e){
     e.stopPropagation();
}

function onImageClick(f){
 console.info(f,f.target instanceof Laya.Image)    
    if(f.target instanceof Laya.Image){
        var skin = f.target._skin;
        // this.main.floor.skin = f.target._skin;
         console.info(skin);
        //  Laya.stage.addChild(this.main); 
        var skins = skin.split("/");
        var filename = skins[skins.length - 1];
        skins[skins.length - 1] = "750_"+skins[skins.length - 1].substr(4);
        var newskin = skins.join("/");
        switch(skins[skins.length -2]){
                case "1-floor":
                this.main.floor.graphics.clear();
                this.main.floor.loadImage(newskin,0,0,this.main.floor.width,this.main.floor.height);
                break;
                case "2-wallpaper":
                this.main.wall.graphics.clear();
                this.main.wall.loadImage(newskin,0,0,this.main.wall.width,this.main.wall.height);
                break;
                default:
                    insertSprite(newskin);
                break;
        }
        
    }
}

function onSelect(index){
    this.ts.viewStack.selectedIndex = index;
}

function insertSprite(skin){
    clearIco(null);
    var s = new Laya.Sprite();
    
    s.loadImage(skin,0,0,0,0,Laya.Handler.create(this,function(d){
        //console.info(d)
        s.pivotX = s.width/2;
        s.pivotY = s.height/2;
        s.pos(this.main.wall.width/2 - d.width/2 ,this.main.wall.height/2 - d.height/2);
        // Laya.stage.addChild(s);  
        var line = new Laya.Sprite();             
        line.graphics.drawLine(-10,-10,s.width+10,-10,"#c0c0c0",1);
        line.graphics.drawLine(s.width+10,-10,s.width+10,s.height+10,"#c0c0c0",1);
        line.graphics.drawLine(s.width+10,s.height+10,-10,s.height+10,"#c0c0c0",1);
        line.graphics.drawLine(-10,s.height+10,-10,-10,"#c0c0c0",1);
        s.addChild(line);
        var del = new Laya.Image();
        del.loadImage("home/top/delete.png",0,0,40,40);
        del.pos(-30,-30);
        del.on(Laya.Event.MOUSE_DOWN,this,onDelete);
        s.addChild(del);
        var scale = new Laya.Image();
        scale.loadImage("home/top/scale.png",0,0,40,40);
        scale.pos(s.width-10,-30);
        scale.on(Laya.Event.MOUSE_MOVE,this,onScale);
        scale.on(Laya.Event.MOUSE_DOWN,this,onClickStop);
        s.addChild(scale);
        var flipping = new Laya.Image();
        flipping.loadImage("home/top/flipping.png",0,0,40,40);
        flipping.pos(-30,s.height-10);
        flipping.on(Laya.Event.MOUSE_DOWN,this,onFlipping);
        s.addChild(flipping);
        this.main.home.addChild(s);
        s.size(s.width,s.height);
        s.on(Laya.Event.MOUSE_DOWN,this,onStartDrag);
    }))
    
}

function clearIco(e){
    for(var i in this.main.home._childs){
        var child = this.main.home._childs[i];
        for(var ii in child._childs){
            child._childs[ii].visible = false;
        }
    }
    if(e != null){
     e.stopPropagation();
    }
}


function onDelete(e){
    console.info(e)
    e.target.parent.destroy();
    e.stopPropagation();
}

function onFlipping(e){
    e.target.parent.scaleX *= -1;
    e.stopPropagation();
}


function onClickMain(e){
    console.info(e)
    ocm = e;
    if(e.target && e.target.parent && e.target.parent instanceof mainPageUI){
        clearIco();
    }
    e.stopPropagation();
}

function onScale(e){
    console.info(e)
    if(this.scale_info == null){
        this.scale_info = e.nativeEvent.changedTouches[0];
    } else {
        var now_info = e.nativeEvent.changedTouches[0];
        var scale = now_info.clientY - this.scale_info.clientY;
        var limit = 0.02;
        //正小 负大
        if(scale == 0){
            //判断左还右移动
            var scale =  this.scale_info.clientX -now_info.clientX;
           
        }
         if( e.target.parent.scaleX < 0){
                 scale *= -1;
                //  limit = -0.02;

                if(scale > 0){
                            e.target.parent.scaleX -= limit;
                            e.target.parent.scaleY += 0.02;
                        } 
                        else if(scale <0 ){
                            e.target.parent.scaleX += limit;
                            e.target.parent.scaleY -= 0.02;
                        }

            }
            else if(e.target.parent.scaleX > 0){
         if(scale < 0){
            e.target.parent.scaleX += limit;
            e.target.parent.scaleY += 0.02;
        } 
        else if(scale >0 ){
            e.target.parent.scaleX -= limit;
            e.target.parent.scaleY -= 0.02;
        }
            }
        console.info(scale)
       
    }
    e.stopPropagation();
}

function onClickStop(e){
    this.scale_info = null;
    e.stopPropagation();
}

/**
 * 拖动区域
 */
var dragRegion;

function showDragRegion()
	{
		//拖动限制区域
		var dragWidthLimit = this.main.home.width;
		var dragHeightLimit = this.main.home.height;
		//dragRegion = new Laya.Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);
	}

	function onStartDrag(e)
	{
        console.info(e)
		//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
		e.target.startDrag(null, true, 100);
        e.stopPropagation();
	}