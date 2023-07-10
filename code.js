var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f3bdf17-b914-4ca3-9a3d-7a2ce86865e9","ed255be6-95ed-47fd-8a3c-f7c51f772d88","5c2c1fcb-3c69-495e-ba47-90011a2c3057","df437f36-91e0-4cb3-83d2-ae9536508d0e","ce0b3f97-6f38-45a2-9af5-29de3d813f76","bc12b80f-3425-4199-b007-642755abc810","5794c0db-992a-41b9-8372-a3313e276e8c","2b9af885-22d5-490d-a7cc-c01b961add25"],"propsByKey":{"2f3bdf17-b914-4ca3-9a3d-7a2ce86865e9":{"name":"fence_stone_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":2,"looping":true,"frameDelay":12,"version":"ujNbe_HFm64EySqOCD22kCiYyNiArXnk","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":256},"rootRelativePath":"assets/2f3bdf17-b914-4ca3-9a3d-7a2ce86865e9.png"},"ed255be6-95ed-47fd-8a3c-f7c51f772d88":{"name":"glass_frame_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JAI5_GUA34tzveQMOvFVx0XZYlxoYHxj/category_obstacles/glass_frame.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"JAI5_GUA34tzveQMOvFVx0XZYlxoYHxj","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JAI5_GUA34tzveQMOvFVx0XZYlxoYHxj/category_obstacles/glass_frame.png"},"5c2c1fcb-3c69-495e-ba47-90011a2c3057":{"name":"key","sourceUrl":null,"frameSize":{"x":45,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"vJQYsMVtosYX3DmkzboucZ4hi1wOIQae","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":45},"rootRelativePath":"assets/5c2c1fcb-3c69-495e-ba47-90011a2c3057.png"},"df437f36-91e0-4cb3-83d2-ae9536508d0e":{"name":"stone","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"GDfUsIkj_Pn1IMmlWn0.7V.6HHxnv2_A","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/df437f36-91e0-4cb3-83d2-ae9536508d0e.png"},"ce0b3f97-6f38-45a2-9af5-29de3d813f76":{"name":"player","sourceUrl":null,"frameSize":{"x":20,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z3yeh8M9W4nJwLSTaMtEnVjY22rjFa0r","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":31},"rootRelativePath":"assets/ce0b3f97-6f38-45a2-9af5-29de3d813f76.png"},"bc12b80f-3425-4199-b007-642755abc810":{"name":"silver coin","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"zOQBqJoaYCzMNwM94qu396.Ms6kRTkHJ","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/bc12b80f-3425-4199-b007-642755abc810.png"},"5794c0db-992a-41b9-8372-a3313e276e8c":{"name":"gold coin","sourceUrl":null,"frameSize":{"x":40,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"mSFqO2UXedKgPg1G1Udj_QZmNdYwEacA","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":41},"rootRelativePath":"assets/5794c0db-992a-41b9-8372-a3313e276e8c.png"},"2b9af885-22d5-490d-a7cc-c01b961add25":{"name":"COIN","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"t80m4MVzbIF1N4ykivVgxY28txY9lqu2","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/2b9af885-22d5-490d-a7cc-c01b961add25.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var gameState = "beginning";

var player = createSprite(375, 370, 20, 20);
player.setAnimation("player");
var boundary1 = createSprite(200, 0, 400, 10);
boundary1.shapeColor = "red";
var boundary2 = createSprite(200, 400, 400, 10);
boundary2.shapeColor = "red";
var boundary3 = createSprite(0, 200, 10, 400);
boundary3.shapeColor = "red";
var boundary4 = createSprite(400, 200, 10, 400);
boundary4.shapeColor = "red";
var boundary5 = createSprite(150, 130, 400, 5);
boundary5.shapeColor = "red";
var boundary6 = createSprite(250, 270, 400, 5);
boundary6.shapeColor = "red";
var maze1 = createSprite(300, 380, 10, 60);
maze1.shapeColor = "green";
var maze2 = createSprite(375, 300, 60, 10);
maze2.shapeColor = "green";
var maze3 = createSprite(250, 300, 10, 60);
maze3.shapeColor = "green";
var maze4 = createSprite(193, 370, 10, 60);
maze4.shapeColor = "green";
var maze5 = createSprite(164, 350, 60, 10);
maze5.shapeColor = "green";
var maze6 = createSprite(30, 330, 60, 10);
maze6.shapeColor = "green";
var maze7 = createSprite(100, 390, 10, 60);
maze7.shapeColor = "green";
var maze8 = createSprite(100, 284, 10, 30);
maze8.shapeColor = "green";
var maze9 = createSprite(370, 325, 10, 45);
maze9.shapeColor = "green";
var maze10 = createSprite(315, 375, 30, 10);
maze10.shapeColor = "green";
var maze11 = createSprite(250, 380, 50, 10);
maze11.shapeColor = "green";
var maze12 = createSprite(275, 300, 50, 10);
maze12.shapeColor = "green";
var maze13 = createSprite(225, 300, 50, 10);
maze13.shapeColor = "green";
var maze14 = createSprite(150, 335, 10, 30);
maze14.shapeColor = "green";
var key1 = createSprite(25, 375, 20, 20);
key1.setAnimation("key");
var gate1 = createSprite(30, 265, 48, 10);
gate1.shapeColor = "red";
var gate2 = createSprite(370, 123, 45, 10);
gate2.shapeColor = "red";
var key2 = createSprite(375, 250, 20, 20);
var laser1 = createSprite(100, 150, 20, 20);
laser1.shapeColor = "red";
laser1.velocityX = 0;
laser1.velocityY = 2;
var laser2 = createSprite(175, 250, 20, 20);
laser2.shapeColor = "red";
laser2.velocityX = 0;
laser2.velocityY = 2;
var laser3 = createSprite(250, 150, 20, 20);
laser3.shapeColor = "red";
laser3.velocityX = 0;
laser3.velocityY = 2;
var laser4 = createSprite(325, 250, 20, 20);
laser4.shapeColor = "red";
laser4.velocityX = 0;
laser4.velocityY = 2;

key2.setAnimation("key");
var laser5 = createSprite(275, 25, 150, 5);
laser5.shapeColor = "red";
laser5.velocityX = 0;
laser5.velocityY = -1;
var laser6 = createSprite(125, 100, 150, 5);
laser6.shapeColor = "red";
laser6.velocityX = 0;
laser6.velocityY = 1;
var key3 = createSprite(25, 25, 20, 20);
key3.setAnimation("key");
var laser7 = createSprite(100, 335, 10, 10);
laser7.velocityX = -1;
laser7.velocityY = 1;

var gcoin = createSprite(350, 350);
gcoin.setAnimation("gold coin");
gcoin.scale = 0.5;

var gcoin2 = createSprite(250, 350);
gcoin2.setAnimation("gold coin");
gcoin2.scale = 0.5;

var gcoin3 = createSprite(150, 290);
gcoin3.setAnimation("gold coin");
gcoin3.scale = 0.5;

var gcoin4 = createSprite(67, 370);
gcoin4.setAnimation("gold coin");
gcoin4.scale = 0.5;

var scoin = createSprite(20, 283);
scoin.setAnimation("silver coin");
scoin.scale = 0.5;

var scoin3 = createSprite(70, 200);
scoin3.setAnimation("silver coin");
scoin3.scale = 0.5;

var scoin2 = createSprite(150, 200);
scoin2.setAnimation("silver coin");
scoin2.scale = 0.5;

var coin = createSprite(225, 200);
coin.setAnimation("COIN");
coin.scale = 0.5;
var coin2 = createSprite(370, 150);
coin2.setAnimation("COIN");
coin2.scale = 0.5;
var coin3 = createSprite(250, 100);
coin3.setAnimation("COIN");
coin3.scale = 0.5;
var coin4 = createSprite(100, 50);
coin4.setAnimation("COIN");
coin4.scale = 0.5;

function draw() {

  background("lightgreen");

  textSize(20);
  text(score, 300, 20);
  text("SCORE = ", 200, 20);
  createEdgeSprites();

  player.velocityY = 0;
  player.velocityX = 0;
  player.bounceOff(edges);
  laser7.bounceOff(edges);

  player.bounce(boundary1);
  player.bounce(boundary2);
  player.bounce(boundary3);
  player.bounce(boundary4);
  player.bounce(boundary5);
  player.bounce(boundary6);
  player.bounce(maze1);
  player.bounce(maze2);
  player.bounce(maze3);
  player.bounce(maze4);
  player.bounce(maze5);
  player.bounce(maze6);
  player.bounce(maze7);
  player.bounce(maze8);
  player.bounce(maze9);
  player.bounce(maze10);
  player.bounce(maze11);
  player.bounce(maze12);
  player.bounce(maze13);
  player.bounce(maze14);

  player.bounce(gate1);
  laser7.bounceOff(boundary1);
  laser7.bounceOff(boundary2);
  laser7.bounceOff(boundary3);
  laser7.bounceOff(boundary4);
  laser7.bounceOff(boundary5);
  laser7.bounceOff(boundary6);

  laser7.bounceOff(maze1);
  laser7.bounceOff(maze2);
  laser7.bounceOff(maze3);
  laser7.bounceOff(maze4);
  laser7.bounceOff(maze5);
  laser7.bounceOff(maze6);
  laser7.bounceOff(maze7);
  laser7.bounceOff(maze8);
  laser7.bounceOff(maze9);
  laser7.bounceOff(maze10);
  laser7.bounceOff(maze11);
  laser7.bounceOff(maze12);
  laser7.bounceOff(maze13);
  laser7.bounceOff(maze14);

  laser5.bounceOff(boundary1);
  laser5.bounceOff(boundary4);
  laser6.bounceOff(boundary1);
  laser6.bounceOff(boundary4);
  laser1.bounceOff(boundary5);
  laser1.bounceOff(boundary6);
  laser2.bounceOff(boundary5);
  laser2.bounceOff(boundary6);
  laser3.bounceOff(boundary5);
  laser3.bounceOff(boundary6);
  laser4.bounceOff(boundary5);
  laser4.bounceOff(boundary6);
  laser5.bounceOff(boundary5);
  laser5.bounceOff(boundary6);
  laser6.bounceOff(boundary5);
  laser6.bounceOff(boundary6);

  if (gameState === "beginning") {
    beginning();

    fill("red");
    textSize(16);
    text("level 1 reach the flag 1 to open the gate to level 2", 12, 30);
    text("level 2 reach the flag 2 to open the gate to level 3", 12, 80);
    text("level 3 reach the flag 3 to win the game ", 12, 130);
    text("collect maximum coin to earn more score", 3, 180);
    text("use arrow keys to move the player", 30, 230);
    text("If YES press S key to start the game", 20, 280);

    boundary1.visible = false;
    boundary2.visible = false;
    boundary3.visible = false;
    boundary4.visible = false;
    boundary5.visible = false;
    boundary6.visible = false;
    maze1.visible = false;
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    coin.visible = false;
    coin2.visible = false;
    coin3.visible = false;
    coin4.visible = false;
    gcoin.visible = false;
    gcoin2.visible = false;
    gcoin3.visible = false;
    gcoin4.visible = false;
    scoin.visible = false;
    scoin2.visible = false;
    scoin3.visible = false;
    laser1.visible = false;
    laser2.visible = false;
    laser3.visible = false;
    laser4.visible = false;
    laser5.visible = false;
    laser6.visible = false;
    laser7.visible = false;
    key1.visible = false;
    key2.visible = false;
    key3.visible = false;
    key1.visible = false;
    player.visible = false;
    gate1.visible = false;
    gate2.visible = false;
  }
  if (gameState === "beginning" && keyDown("s")) {
    gameState = "play";
    playSound("ss.mp3");

    boundary1.visible = true;
    boundary2.visible = true;
    boundary3.visible = true;
    boundary4.visible = true;
    boundary5.visible = true;
    boundary6.visible = true;
    maze1.visible = true;
    maze2.visible = true;
    maze3.visible = true;
    maze4.visible = true;
    maze5.visible = true;
    maze6.visible = true;
    maze7.visible = true;
    maze8.visible = true;
    maze9.visible = true;
    maze10.visible = true;
    maze11.visible = true;
    maze12.visible = true;
    maze13.visible = true;
    maze14.visible = true;
    coin.visible = true;
    coin2.visible = true;
    coin3.visible = true;
    coin4.visible = true;
    gcoin.visible = true;
    gcoin2.visible = true;
    gcoin3.visible = true;
    gcoin4.visible = true;
    scoin.visible = true;
    scoin2.visible = true;
    scoin3.visible = true;
    laser1.visible = true;
    laser2.visible = true;
    laser3.visible = true;
    laser4.visible = true;
    laser5.visible = true;
    laser6.visible = true;
    laser7.visible = true;
    key1.visible = true;
    key2.visible = true;
    key3.visible = true;
    key1.visible = true;
    //score.visible=true;
    player.visible = true;
    gate1.visible = true;
    gate2.visible = true;
  }
  if (player.isTouching(coin)) {
    score = score + 3;
    coin.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(coin2)) {
    score = score + 3;
    coin2.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(coin3)) {
    score = score + 3;
    coin3.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(coin4)) {
    score = score + 3;
    coin4.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }

  if (player.isTouching(gcoin)) {
    score = score + 1;
    gcoin.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(gcoin2)) {
    score = score + 1;
    gcoin2.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(gcoin3)) {
    score = score + 1;
    gcoin3.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(gcoin4)) {
    score = score + 1;
    gcoin4.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }

  if (player.isTouching(scoin)) {
    score = score + 4;
    scoin.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(scoin2)) {
    score = score + 4;
    scoin2.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  if (player.isTouching(scoin3)) {
    score = score + 4;
    scoin3.destroy(player);
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }

  if (keyDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -2;
  }
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 2;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 2;
    player.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -2;
    player.velocityY = 0;
  }
  if (player.isTouching(key1)) {
    gate1.x = 500;
    key1.x = 500;
  }
  if (player.isTouching(laser1) || player.isTouching(laser2) || player.isTouching(laser3) || player.isTouching(laser4) || player.isTouching(laser5) || player.isTouching(laser6)) {
    player.x = 375;
    player.y = 370;
  }
  if (player.isTouching(key2)) {
    gate2.x = 500;
    key2.x = 500;
  }
  if (player.isTouching(laser7)) {
    player.x = 375;
    player.y = 370;

  }
  if (player.isTouching(key3)) {
    end();
    gameState = "end";
    textSize(30);
    text(score, 174, 81);
    text("YOUR SCORE", 60, 160);
    text("YOU WIN", 100, 200);
    text("press K key to play again", 20, 300);
    boundary1.visible = false;
    boundary2.visible = false;
    boundary3.visible = false;
    boundary4.visible = false;
    boundary5.visible = false;
    boundary6.visible = false;
    maze1.visible = false;
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze11.visible = false;
    maze10.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    coin.visible = false;
    coin2.visible = false;
    coin3.visible = false;
    coin4.visible = false;
    gcoin.visible = false;
    gcoin2.visible = false;
    gcoin3.visible = false;
    gcoin4.visible = false;
    scoin.visible = false;
    scoin2.visible = false;
    scoin3.visible = false;
    laser1.visible = false;
    laser2.visible = false;
    laser3.visible = false;
    laser4.visible = false;
    laser5.visible = false;
    laser6.visible = false;
    laser7.visible = false;
    key1.visible = false;
    key2.visible = false;
    key3.visible = false;
    key1.visible = false;
    player.visible = false;
    gate1.visible = false;
    gate2.visible = false;
  }
  if (gameState === "end" && keyDown("k")) {
    gameState = "beginning";
  }

  drawSprites();
}

function beginning() {
  //gameState = "beginning";
  
}

function end() {}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
