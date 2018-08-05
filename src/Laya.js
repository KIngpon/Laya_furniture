var WebGL = laya.webgl.WebGL;
Laya.init(750, 1334, WebGL);
Laya.stage.scaleMode = "exactfit";

Laya.loader.load( ["res/atlas/home/0-tab.atlas",
"res/atlas/home/0-home.atlas",
"res/atlas/home/1-floor.atlas",
"res/atlas/home/2-wallpaper.atlas",
"res/atlas/home/3-sofa.atlas",
"res/atlas/home/4-cabinet.atlas",
"res/atlas/home/5-window.atlas",
"res/atlas/home/top.atlas",
"res/atlas/comp.atlas"],Laya.Handler.create(this,onStart));

function onStart(){
    this.start = new ui.startPageUI();
    this.start.y = 0;
    this.start.width = Laya.Browser.width;
    Laya.stage.addChild(this.start);
    this.start.start.on(Laya.Event.CLICK,this,onStartClick);
}

function onStartClick(){
    console.info(777)
    onMain();
    onTab();
    Laya.stage.removeChildAt(0);
    // console.info(Laya.stage);
}

function onMain(){
    this.main = new ui.mainPageUI();
    this.main.y = 0;
    this.main.width = Laya.Browser.width;
    Laya.stage.addChild(this.main);    
}



function onTab(){
    this.ts = new ui.tabSelectUI();
    this.ts.y = 885-105;
    this.ts.width = Laya.Browser.width;
    Laya.stage.addChild(ts);
    // console.info(this.ts.width ,Laya.Browser.width,Laya.Browser.clientWidth,Laya.stage.scaleX)
    this.ts.preview.on(Laya.Event.CLICK,this,onPreview);
    this.ts.viewStack.on(Laya.Event.CLICK,this,onStackClick);
    this.ts.tab.selectHandler = new Laya.Handler(this,onSelect);        
    console.info(this.ts.viewStack);
    for(var i in this.ts.viewStack._childs){
        var item = this.ts.viewStack._childs[i];
        for(var k in item._childs[0]._childs){
            var image = item._childs[0]._childs[k]; //this.ts.viewStack._childs[i]._childs[0][k]
            image.on(Laya.Event.CLICK,this,onImageClick);
        }
    }
}

function onPreview(){
    console.info("preview")
}

function onStackClick(d){
    console.info(d)
}

function onImageClick(f){
    console.info(f)
}

function onSelect(index){
    this.ts.viewStack.selectedIndex = index;
}