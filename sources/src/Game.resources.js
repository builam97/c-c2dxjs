Game.res = { 
  HelloWorld_png : "image/background.png" 
};

Game.g_resources = []; 

for ( var i in Game.res ) {
  Game.g_resources.push( Game.res[i] ); 
}