Game.layers[1].extend = cc.Layer.extend({ 
	init: function () { 
	    this._super(); 
	    var game = this; 
      Game.layers[1].start( game ); 
	} 
});
Game.layers[2].extend = cc.Layer.extend({ 
	init: function () { 
	    this._super(); 
	    var game = this; 
      Game.layers[2].start( game ); 
	} 
}); 
Game.layers[1].start = function( game ){ 
	var size = cc.director.getWinSize(); 
    layer = cc.LayerColor.create(new cc.Color(242,242,242,250), 960, 640); // R+G+B+Opacity+X+Y
    game.addChild(layer); // add layer to game
    
    sprite = new sprite2();     
    sprite.setPosition(150,150);
    layer.addChild(sprite,0);  
    spritethorn = new spriteThorn();
    spritethorn.setPosition(150,180);
    layer.addChild(spritethorn,0);
    
};
var sprite2 = cc.Sprite.extend({
    ctor:function() {
        this._super();
        this.initWithFile("image/1.png");
        this.setScale(0.5);
        this.setTag("2");
        cc.eventManager.addListener(listener2.clone(), this);
    }
});
var spriteThorn = cc.Sprite.extend({
ctor:function() {
  this._super();
        this.initWithFile("image/gai1.png");
        this.setScale(0.5);
        cc.eventManager.addListener(listener.clone(), this);
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
            sprite2.initWithFile("image/"+tag + ".png");
            if(tag === '2') {
                sprite2.setTag("1");
            } else {
                sprite2.setTag("2");
            }
        }
     }
});