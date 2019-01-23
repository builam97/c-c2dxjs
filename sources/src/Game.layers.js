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
    layer = cc.LayerColor.create(new cc.Color(242,242,242,250), 960, 640); // R+G+B+Opacity+X+Y
    game.addChild(layer); // add layer to game
    
    sprite = new sprite_cactus();     
    sprite.setPosition(250,100);
    layer.addChild(sprite,0);  
    spritethorn = new spriteThorn();
    spritethorn.setPosition(250,130);
    layer.addChild(spritethorn,0);
    var x_position_line_start= 200;
    var drawNode = new cc.DrawNode.create();
    drawNode.drawSegment(cc.p(x_position_line_start,0), cc.p(x_position_line_start, size.height),2,cc.Color(0,0,0,10));
    layer.addChild(drawNode,0);
    var x_rand_evil = Math.floor(Math.random()* x_position_line_start + 10);
    var y_rand_evil = Math.floor(Math.random()* size.height + 10);
    sprite_evil = new spriteEvil();
    sprite_evil.setPosition(x_rand_evil, y_rand_evil);
    layer.addChild(sprite_evil);
};
var sprite_cactus = cc.Sprite.extend({
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
        this.setScale(0.6);
        cc.eventManager.addListener(listener.clone(), this);
}
});

var spriteEvil = cc.Sprite.extend({
ctor: function() {
    this._super();
    this.initWithFile("image/evil.png");
    this.setScale(0.3);
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