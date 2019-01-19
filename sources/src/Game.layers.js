Game.layers[1].extend = cc.Layer.extend({ 
	init: function () { 
	    this._super(); 
	    var game = this; 
      Game.layers[1].start( game ); 
      Game.layers[2].start(game);
	} 
}); 
Game.layers[1].start = function( game ){ 
	var size = cc.director.getWinSize(); 
	var label = cc.LabelTTF.create("Hello World", "Arial", 40);
	label.setPosition(size.width / 2, size.height / 3);
	game.addChild(label, 1); 
};
Game.layers[2].start = function( game ){

  var size = cc.director.getWinSize();
  var sprite = new cc.Sprite ( "HelloWorld.png" ) ; 

  sprite.attr({  
      x: size.width / 2, 
      y: size.height / 2,
      anchorX: 0.5,
      anchorY: 0.5, 
      time: 2,  //a
      moveX: 100, //b
      moveY: 150 //c
  });

  game.addChild(sprite);

  sprite.runAction( new cc.MoveBy( sprite.time, cc.p( sprite.moveX, sprite.moveY ) ));   //d

}; 