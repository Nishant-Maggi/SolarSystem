var Sun,Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune;

function setup() {

  createCanvas(1100,400);

  Sun = createSprite(400, 200, 100, 100);
  Sun.shapeColor = "yellow";
  Sun.setCollider("circle",0,0,Sun.width/2);

  Mercury = createSprite(255,200,5,5);
  Mercury.setCollider("circle",0,0,Mercury.width/2);

  Venus = createSprite(180,200,7,7);
  Venus.shapeColor = "brown";
  Venus.setCollider("circle",0,0,Venus.width/2);

  Earth = createSprite(100,200,11,11);
  Earth.shapeColor = "darkBlue";
  Earth.setCollider("circle",0,0,Earth.width/2);

  Mars = createSprite(20,200,9,9);
  Mars.shapeColor = "red";
  Mars.setCollider("circle",0,0,Mars.width/2);

  Jupiter = createSprite(780,200,35,35);
  Jupiter.shapeColor = "orange";
  Jupiter.setCollider("circle",0,0,Jupiter.width/2);

  Saturn = createSprite(870,200,30,30);
  Saturn.shapeColor = "brown";
  Saturn.setCollider("circle",0,0,Saturn.width/2);

  Uranus = createSprite(960,200,25,25);
  Uranus.shapeColor = "lightBlue";
  Uranus.setCollider("circle",0,0,Uranus.width/2);

  Neptune = createSprite(1050,200,20,20);
  Neptune.shapeColor = "blue";
  Neptune.setCollider("circle",0,0,Neptune.width/2);

}

function draw() {

  background(0,0,0);

  drawSprites();

  Sun.width = Sun.width + 1;
  Sun.height = Sun.height +1;

  destroyPlanet(Sun,Mercury);
  destroyPlanet(Sun,Venus);
  destroyPlanet(Sun,Earth);
  destroyPlanet(Sun,Mars);

  destroyPlanet(Sun,Jupiter);
  destroyPlanet(Sun,Saturn);
  destroyPlanet(Sun,Uranus);
  destroyPlanet(Sun,Neptune);

}