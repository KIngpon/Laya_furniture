var WebGL = laya.webgl.WebGL;
Laya.init(750, 1334, WebGL);
Laya.stage.bgColor = "#fff";
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.scaleMode =   Laya.Stage.SCALE_FIXED_HEIGHT;//"exactfit";

Laya.loader.load(["res/atlas/home/0-home.atlas"],Laya.Handler.create(this,onStart));


function onStart(){
    /**
     * 缩放的对象
     */
    this.scale = null;
    /**
     * 开始点击的点
     */
    this.start_point_info = null;
    this.flipping = false;
    this.start = new ui.startPageUI();
    this.startx = this.start.start.x;
    this.start.start.x = this.start.start.width * -999;
    Laya.loader.load( ["res/atlas/home/0-tab.atlas",
"res/atlas/home/1-floor.atlas",
"res/atlas/home/2-wallpaper.atlas",
"res/atlas/home/3-sofa.atlas",
"res/atlas/home/4-cabinet.atlas",
"res/atlas/home/5-window.atlas",
"res/atlas/home/top.atlas",
"res/atlas/home/vscroll.atlas",
"home/1-floor/750_floor_img10.png",
"home/1-floor/750_floor_img2.png",
"home/1-floor/750_floor_img4.png",
"home/1-floor/750_floor_img6.png",
"home/1-floor/750_floor_img8.png",
"home/1-floor/750_floor_img1.png ",
"home/1-floor/750_floor_img3.png",
"home/1-floor/750_floor_img5.png",
"home/1-floor/750_floor_img7.png",
"home/1-floor/750_floor_img9.png",
"home/2-wallpaper/750_wall_img1.png",
"home/2-wallpaper/750_wall_img3.png",
"home/2-wallpaper/750_wall_img5.png",
"home/2-wallpaper/750_wall_img7.png",
"home/2-wallpaper/750_wall_img2.png",
"home/2-wallpaper/750_wall_img4.png",
"home/2-wallpaper/750_wall_img6.png",
"home/2-wallpaper/750_wall_img8.png",
"home/music/bg.mp3",
"res/atlas/comp.atlas"],null,Laya.Handler.create(this,onProgress,null,false));
    
    Laya.stage.addChild(this.start);
    this.start.y = 0;
    // this.start.x = (Laya.stage.width - this.start.width)/2;
    this.start.x =  (1334*(Laya.Browser.width/Laya.Browser.height) - this.start.width)/2;
    this.start.start.on(Laya.Event.CLICK,this,onStartClick);
     
    Laya.stage.on(Laya.Event.MOUSE_MOVE,this,onScale);
    Laya.stage.on(Laya.Event.MOUSE_UP,this,onStopScale);
    //alert(Laya.stage.width+"/"+Laya.Browser.width+"+"+Laya.Browser.height+"/"+this.start.width+"/"+this.start.x);
}

function onProgress(d){
    this.start.percent.text = "内容加载中..."+(d * 100).toFixed(2)+"%";
    // console.info(d)
    if(d >=1){
        this.start.percent.visible = false;
        this.start.start.x = this.startx;
        this.start.start.loadImage(this.start.start.skin)
        Laya.SoundManager.playMusic("home/music/bg.mp3",-1);
        Laya.SoundManager.setMusicVolume(0.1);  
    }
}

function onStartClick(){
    onMain();
    onTab();
    onLable();
    Laya.stage.removeChildAt(0);
    // console.info(Laya.stage);
    showDragRegion();
}

function onMain(){
    this.main = new ui.mainPageUI();
    this.main.y = 0;
    this.start.x = 0;
   // console.info(this.main.width , Laya.Browser.width);
    this.main.width = Laya.Browser.width;    
    this.main.wall.loadImage("home/top/wall_bg.png",0,0,this.main.wall.width,this.main.wall.height);
    this.main.floor.loadImage("home/top/floot_bg.png",0,0,this.main.floor.width,this.main.floor.height);
    this.main.home.on(Laya.Event.CLICK,this,onClickMain);
    Laya.stage.addChild(this.main);   
     mainhome = this.main.home; 
}



function onTab(){
    this.ts = new ui.tabSelectUI();
    //this.ts.width = Laya.Browser.width;
    this.ts.scaleX = Laya.stage.width / 950;
    this.ts.scaleY = this.ts.scaleX;
    this.ts.x =(Laya.stage.width - this.ts.width) /2;
    this.ts_proration = this.ts.width/this.ts.height;
    this.ts.x = 0;
     

    // console.info("==",this.ts.width,Laya.Browser.width,this.ts.height);
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

function onLable(){
    this.labelFloor = new Laya.Image();
    this.labelFloor.x = Laya.stage.width -105;
     this.labelFloor.y =Laya.stage.height - this.ts.height * this.ts.scaleY -165;
     Laya.stage.addChild(this.labelFloor);
     this.labelFloor.visible = false;
     this.labelWall = new Laya.Image();
    this.labelWall.x = Laya.stage.width -105;
     this.labelWall.y = 45;
     Laya.stage.addChild(this.labelWall);
     this.labelWall.visible = false;
}

function onPreview(){
    this.preview = new Laya.Button();
    this.preview.skin = "home/top/photo_icon.png";
    this.preview.x =  Laya.stage.width - 105;
    this.preview.y =Laya.stage.height - this.ts.height * this.ts.scaleY -105;
    this.preview.stateNum = 1;
    this.preview.width = 82;
    this.preview.height = 82 ;
    Laya.stage.addChild(this.preview);
    this.preview.on(Laya.Event.CLICK,this,onPreviewClick);
}

function onPreviewClick(e){
    console.info("preview")
    clearIco();
    this.ts.visible = false;
    this.preview.visible = false;
    var htmlC =Laya.stage.drawToCanvas(Laya.stage.width, Laya.stage.height - this.ts.height * this.ts.scaleY,0,0);
    var canvas = htmlC.getCanvas();
    // var d = canvas.toDataURL();
    // var hc = self.drawToCanvas(Laya.stage.width,Laya.stage.height,0,0);
    // var canvas = hc.getCanvas();
    var image = new Image();
    image.src = canvas.toDataURL();
    image.width = Laya.Browser.clientWidth;
    //image.height = Laya.Browser.clientHeight;
    image.style.position = "fixed"
    image.style.left = 0;
    image.style.top = 0;
    image.style.zIndex = 18;
    document.getElementsByTagName("body")[0].appendChild(image);
    showFooter();
     e.stopPropagation();
}


function showFooter(){
    
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
                skins[skins.length -1] = "txt.png";
                var text = skins.join("/");
                this.labelFloor.graphics.clear();
                this.labelFloor.loadImage(text,0,0);
                this.labelFloor.visible = true;
                break;
                case "2-wallpaper":
                this.main.wall.graphics.clear();
                this.main.wall.loadImage(newskin,0,0,this.main.wall.width,this.main.wall.height);
                skins[skins.length -1] =  "text_750_"+skins[skins.length - 1].substr(4);
                var text = skins.join("/");
                this.labelWall.graphics.clear();
                this.labelWall.loadImage(text,0,0);
                this.labelWall.visible = true;
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

    var image = new Laya.Image();
    
    image.loadImage(skin,0,0,0,0,Laya.Handler.create(this,function(d){
        //console.info(d)
        image.pivotX = image.width/2;
        image.pivotY = image.height/2;
        s.pos(this.main.wall.width/2 - d.width/2 ,this.main.wall.height/2 - d.height/2);
        image.size(image.width,image.height);
        s.addChildAt(image,0);
        // Laya.stage.addChild(s);  
        
        s.addChildAt(_drawLineBox(image),1);
        var del = new Laya.Image();
        del.loadImage("home/top/delete.png",0,0,40,40);
        del.pos((image.width*Math.abs(image.scaleX))/-2-5,(image.height*Math.abs(image.scaleY))/-2-5);
        del.on(Laya.Event.MOUSE_DOWN,this,onDelete);
        del.pivot(20,20);
        del.alpha = 0.6;
        s.addChildAt(del,2);
        var scale = new Laya.Image();
        scale.loadImage("home/top/scale.png",0,0,40,40);
        scale.pos((image.width*Math.abs(image.scaleX))/2+5,(image.height*Math.abs(image.scaleY))/-2-5);
        scale.on(Laya.Event.MOUSE_MOVE,this,onStartScale);
        scale.on(Laya.Event.MOUSE_UP,this,onStopScale);
        scale.alpha = 0.6;
        scale.pivot(20,20);
        s.addChildAt(scale,3);
        
        if(skin.indexOf("window")!==-1){
        var flipping = new Laya.Image();
        flipping.loadImage("home/top/flipping.png",0,0,40,40);
        flipping.pos((image.width*Math.abs(image.scaleX))/-2-5,(image.height*Math.abs(image.scaleY))/2+5);
        flipping.on(Laya.Event.MOUSE_DOWN,this,onFlipping);
        flipping.alpha = 0.6;
        flipping.pivot(20,20);
        s.addChildAt(flipping,4);
        flipping.visible = true;
        }
        s.zOrder = getMaxOrder();
       
        this.main.home.addChild(s);
        image.on(Laya.Event.MOUSE_DOWN,this,onStartDrag);
        // image.on(Laya.Event.MOUSE_MOVE,this,onScale);
        s.on(Laya.Event.MOUSE_UP,this,onStopDrag);
    }))
    
}

function _drawLineBox(s){
    var line = new Laya.Sprite();             
        line.pos((s.width*Math.abs(s.scaleX))/-2,(s.height*Math.abs(s.scaleY))/-2);
        line.graphics.drawLine(-10,-10,s.width*s.scaleX+10,-10,"#efefef",1);
        line.graphics.drawLine(s.width*s.scaleX+10,-10,s.width*s.scaleX+10,s.height*s.scaleY+10,"#efefef",1);
        line.graphics.drawLine(s.width*s.scaleX+10,s.height*s.scaleY+10,-10,s.height*s.scaleY+10,"#efefef",1);
        line.graphics.drawLine(-10,s.height*s.scaleY+10,-10,-10,"#efefef",1);
        line.alpha = 0.6;
        return line;
}

function clearIco(e){
    for(var i in this.main.home._childs){
        var child = this.main.home._childs[i];
        for(var ii in child._childs){
            if(ii > 0){
            child._childs[ii].visible = false;
            }
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
    e.target.parent._childs[0].scaleX *= -1;
    this.flipping = true;
    e.stopPropagation();
}

function onStopFlipping(e){
this.flipping = false;
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

function onStartScale(e){
    if(this.scale == null){
        console.info(e, e.target.parent.scaleX)
        var percent = 100/(e.target.parent._childs[0].width*e.target.parent.scaleX)
        console.info("====",percent)
        e.target.parent.scaleX  *=(1+percent);
        e.target.parent.scaleY  *=(1+percent);
        this.scale = e.target;
         resetIcoPos(e.target);
    }
    e.stopPropagation();
}

function onStopScale(e){
    console.info(e)
    if(this.scale != null){
        this.scale = null;
         this.start_point_info = null;
    }
    e.stopPropagation();
}

function onScale(e){
    //console.info(e)
    if(this.scale == null ){
        return;
    }
    // console.info(e)
    if(typeof e.nativeEvent.changedTouches != "undefined"){
        var point = e.nativeEvent.changedTouches[0];
    } else {
        var point = e.nativeEvent;
    }
    if(this.start_point_info == null){

        this.start_point_info = point;
    } else {
        var now_info = point;
        var scale = now_info.pageY - this.start_point_info.pageY;
        
        //正小 负大
        if(scale == 0){
            //判断左还右移动
         scale =  this.start_point_info.pageX -now_info.pageX;
           
        }
         if(scale <  0){
            this.scale.parent.scaleX += 0.02;
            this.scale.parent.scaleY += 0.02;
        } 
        else if(scale >  0 ){
            if(this.scale.parent.scaleX > 0.5){
            this.scale.parent.scaleX -= 0.02;
            this.scale.parent.scaleY -= 0.02;
            }
        }
        //console.info(scale,now_info.pageY , this.start_point_info.pageY);
        resetIcoPos(this.scale);
        this.start_point_info = now_info;
    }
}

function resetIcoPos(image){
     var scale = 40/(image.parent._childs[2].width * image.parent.scaleX);
    // image.parent._childs[2].pos((image.width*Math.abs(image.scaleX))/-2-25,(image.height*Math.abs(image.scaleY))/-2-25);
    //     image.parent._childs[3].pos((image.width*Math.abs(image.scaleX))/2-15,(image.height*Math.abs(image.scaleY))/-2-25);       
    //     image.parent._childs[4].pos((image.width*Math.abs(image.scaleX))/-2-25,(image.height*Math.abs(image.scaleY))/2-15);
    image.parent._childs[2].scaleX = scale;
    image.parent._childs[2].scaleY = scale;
    image.parent._childs[3].scaleX = scale;
    image.parent._childs[3].scaleY = scale;
    image.parent._childs[4].scaleX = scale;
    image.parent._childs[4].scaleY = scale;
}

function onClickStop(e){
    this.start_point_info = null;
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
        if(this.scale !=null){
            e.stopPropagation();
            return;
        }
        
		//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
        clearIco();

        for(var i in e.target.parent._childs){
                e.target.parent._childs[i].visible = true;
        }
        e.target.parent.zOrder = getMaxOrder();
        //dd = e.target;
        Laya.Tween.to(e.target.parent,{scaleX:e.target.parent.scaleX*1.05,scaleY:e.target.parent.scaleY*1.05},400,Laya.Ease.elasticInOut,null,0);

		e.target.parent.startDrag(null, true, 100);    
        e.stopPropagation();
	}


    function getMaxOrder(){
        var max_order = 0;
        for(var i in this.main.home._childs){
            if(this.main.home._childs[i].zOrder > max_order){
                max_order = this.main.home._childs[i].zOrder;
            }
        }
        return max_order +1;
    }

    function onStopDrag(e)
	{
        console.info(e)
        if(this.scale != null){
            onStopScale(e);
            return;
        }
        if(this.flipping){
            onStopFlipping(e);
            return ;
        }
		//鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
        Laya.Tween.to(e.target.parent,{scaleX:e.target.parent.scaleX/1.05,scaleY:e.target.parent.scaleY/1.05},400,Laya.Ease.elasticInOut,null,0);
        e.stopPropagation();
	}

    function onMouseOut(e){
         if(this.scale != null){
            onStopScale(e);
            return;
        }
    }


    function showFooter(){
document.getElementById("footer").style.display = 'block';
    }

function hideFooter(){
        document.getElementById("footer").style.display = 'none';
    }

    function showOpen(){
        // document.getElementById("open").style.display = 'block';
        Zepto("#open .main").show();
        Zepto("#open .main-quan").hide();
        Zepto("#open").fadeIn();
        setTimeout(function(){
            Zepto("#open .main-quan").css("display","block");
        },2000);
    }

    function hideOpen(){
        document.getElementById("open").style.display = 'none';
    }


    function showQuan(){
        Zepto("#open .main").hide();
        Zepto("#open .main-quan").css("display","block");
    }

     function hideQuan(){
        Zepto("#open .main-quan").hide();
    }

    Zepto(function($){
        var wwidth = $(window).width();
        var wheight = $(window).height();
        var iwidth = wwidth * 0.85;
        var iheight = iwidth * 1334/750;
        var left = (wwidth - iwidth)/2;
        var top = (wheight - iheight)/2;
        Zepto("#open .main img").css({
            left:left,
            marginTop:top
        });
    });