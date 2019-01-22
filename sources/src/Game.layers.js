Game.layers[1].extend = cc.Layer.extend({ 
	init: function () { 
	    this._super(); 
	    var game = this; 
      Game.layers[1].start( game ); 
	} 
});
// Game.layers[2].extend = cc.Layer.extend({ 
// 	init: function () { 
// 	    this._super(); 
// 	    var game = this; 
//       Game.layers[2].start( game ); 
// 	} 
// }); 
Game.layers[1].start = function( game ){ 
	var size = cc.director.getWinSize(); 
    layer = cc.LayerColor.create(new cc.Color(0,0,0,250), 960, 640); // R+G+B+Opacity+X+Y
    game.addChild(layer); // add layer to game
    
    sprite = new sprite2();     
    sprite.setPosition(150,150);
    layer.addChild(sprite,0);  
    
};
// Game.layers[2].start = function( game ){ 
//     var size = cc.director.getWinSize(); 
// 	var label = cc.LabelTTF.create("Hello World", "Arial", 40);
// 	label.setPosition(size.width / 2, size.height / 2);
// 	game.addChild(label, 1);
    
// };
var sprite2 = cc.Sprite.extend({
    ctor:function() {
        this._super();
        this.initWithFile("1.png");
        this.setScale(0.5);
        this.setTag("2");
        cc.eventManager.addListener(listener.clone(), this);
        cc.eventManager.addListener(listener2.clone(), this);
    }
});

var listener2 = cc.EventListener.create({
     event: cc.EventListener.TOUCH_ONE_BY_ONE, swallowTouches: true,
     onTouchBegan: function (touch, event) {
         sprite2 = event.getCurrentTarget();
         var location = sprite2.convertToNodeSpace(touch.getLocation());
         var targetSize = sprite2.getContentSize();
         var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
         if (cc.rectContainsPoint(targetRectangle, location)) {
            var tag = sprite2.getTag(); 
            sprite2.initWithFile(tag + ".png");
            if(tag === '2') {
                sprite2.setTag("1");
            } else {
                sprite2.setTag("2");
            }
        }
     }
});