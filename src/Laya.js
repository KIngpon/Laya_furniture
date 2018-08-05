var WebGL = laya.webgl.WebGL;
Laya.init(750, 1334, WebGL);
Laya.stage.scaleMode = "exactfit";

Laya.loader.load( ["res/atlas/home/0-tab.atlas","res/atlas/home/1-floor.atlas","res/atlas/comp.atlas"],Laya.Handler.create(this,onStart));

function onStart(){
    var ts = new ui.tabSelectUI()
    ts.y = 885;
    ts.width = Laya.Browser.width;
    Laya.stage.addChild(ts);
    console.info(ts.width ,Laya.Browser.width,Laya.Browser.clientWidth,Laya.stage.scaleX)
}
// var txt = new Laya.Text()
// txt.text = "good"
// txt.color = "red"
// Laya.stage.addChild(txt);