var canvas = document.getElementById("game");
var gameWorld = boxbox.createWorld(canvas);
var num = 0;

gameWorld.createEntity({
	name: "agent",
	shape: "circle",
	image: "assets/rabbit1.png",
	radius: 2,
	imageStretchToFit: true,
	x: 10,
	density: 4,
	friction: 0,
	onKeyDown: function(e) {
		var kc = e.keyCode;

		if (kc === 39) {
			this.image("assets/rabbit1.png");
			this.applyImpulse(50, 90);
		}
		else if (kc === 37) {
			this.image("assets/rabbit2.png");
			this.applyImpulse(50, -90);
		}
	}
});

gameWorld.createEntity({
	name: "base",
	shape: "square",
	type: "static",
  	color: "#005108",
  	borderColor: "#005108",
	width: 30,
	height: .5,
	y: 12.5,
});

var food = {
	name: "food",
	shape: "circle",
	radius: 1.2,
	image: "assets/carrot3.png",
	imageStretchToFit: true,
	onImpact: function(entity, force) {
		if (entity.name() === "agent") {
			this.destroy();
			num = num + 10;
			document.getElementById("score").innerHTML = num.toString();
		}
	}
};

gameWorld.createEntity(food, {
	x: 2
});

gameWorld.createEntity(food, {
	x: 6
});

gameWorld.createEntity(food, {
	x: 14
});

gameWorld.createEntity(food, {
	x: 18
});