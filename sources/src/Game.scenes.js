Game.scenes[1].extend = cc.Scene.extend({
	onEnter: function () {
		this._super();
    var layer = new Game.layers[1].extend();
		layer.init();
    this.addChild(layer);
		this.scheduleUpdate();
	},
	update:function(dt){
	   Game.move();         
	} 
});
// Game.scenes[2].extend = cc.Scene.extend({
// 	onEnter: function () {
// 		this._super();
// 		var layer = new Game.layers[2].extend();
// 		layer.init();
// 		this.addChild(layer);
// 	}
// });
var x_sprite;
var y_sprite;
var weight = 0;
var speed = 2;
var speedX;
var speedY;

var keyLeft;
var keyRight;
var keyUp;
var keyDown;
var keyEsc;
var keySpace;
var keyEnter;
var keyX;
var keyZ;
Game.keyX = function () {
	console.log("press keyX")
}

Game.keyZ = function () {
	console.log("press keyZ")
}

Game.keySpace = function () {
	console.log("press keySpace");
	Game.rotateSprite();
}

Game.keyEnter = function () {
	console.log("press keyEnter")
}

Game.keyEsc = function () {
	console.log("press keyEsc")
}
Game.move = function () {
	if (keyRight) speedX = 1;
	else if (keyLeft) speedX = -1;
	else speedX = 0;

	if (keyUp) speedY = 1;
	else if (keyDown) speedY = -1;
	else speedY = 0;

	if (keyLeft || keyRight || keyDown || keyUp){
		Game.moveSprite();
	}
}

Game.moveSprite = function () {
	x_sprite = sprite.getPosition().x;
	y_sprite = sprite.getPosition().y;
	sprite_action = cc.MoveTo.create( weight, cc.p( x_sprite + speedX * speed, y_sprite + speedY * speed ));
	sprite.runAction( sprite_action );
}
Game.rotateSprite = function () {
	var action = cc.RotateBy.create(2, 130);
	var repeate_action = cc.Repeat.create(action, 3);
	spritethorn.runAction( repeate_action );
}
if ('keyboard' in cc.sys.capabilities) {

	var listener = cc.EventListener.create({

		event: cc.EventListener.KEYBOARD,

		onKeyPressed: function (key, event) {
			switch (key) {
				case 37:
					keyLeft = true;
					break;
				case 39:
					keyRight = true;
					break;
				case 38:
					keyUp = true;
					break;
				case 40:
					keyDown = true;
					break;

				case 65:
					keyLeft = true;
					break;
				case 68:
					keyRight = true;
					break;
				case 87:
					keyUp = true;
					break;
				case 83:
					keyDown = true;
					break;
				case 32:
					keySpace = true;
					Game.keySpace();
					break;
				case 13:
					keyEnter = true;
					Game.keyEnter();
					break;
				case 27:
					keyEsc = true;
					Game.keyEsc();
					break;
				case 90:
					keyZ = true;
					Game.keyZ();
					break;
				case 88:
					keyX = true;
					Game.keyX();
					break;
			}
		},

		onKeyReleased: function (key, event) {
			switch (key) {
				case 37:
					keyLeft = false;
					break;
				case 39:
					keyRight = false;
					break;
				case 38:
					keyUp = false;
					break;
				case 40:
					keyDown = false;
					break;

				case 65:
					keyLeft = false;
					break;
				case 68:
					keyRight = false;
					break;
				case 87:
					keyUp = false;
					break;
				case 83:
					keyDown = false;
					break;

				case 32:
					keySpace = true;
					break;
				case 13:
					keyEnter = true;
					break;
				case 27:
					keyEsc = true;
					break;
				case 90:
					keyZ = true;
					break;
				case 88:
					keyX = true;
					break;
			}
		},
	}, this);
}