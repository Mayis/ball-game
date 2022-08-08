let redBoll = document.getElementById("redboll");
let blueBoll = document.getElementById("blueboll");
document.addEventListener("keydown", function (e) {
	redBollSetting(e);
	blueBollSetting(e);
	gameover();
});

function redBollSetting(e) {
	if (e.code === "KeyD") {
		goright(redBoll);
	} else if (e.code === "KeyA") {
		goleft(redBoll);
	} else if (e.code === "KeyS") {
		godown(redBoll);
	} else if (e.code === "KeyW") {
		gotop(redBoll);
	}
}
function blueBollSetting(e) {
	if (e.code === "ArrowRight") {
		goright(blueBoll);
	} else if (e.code === "ArrowLeft") {
		goleft(blueBoll);
	} else if (e.code === "ArrowDown") {
		godown(blueBoll);
	} else if (e.code === "ArrowUp") {
		gotop(blueBoll);
	}
}

// function gameover() {
// 	let compStyles = window.getComputedStyle(redBoll);
// 	let compStylestwo = window.getComputedStyle(blueBoll);
// 	let chaps = parseInt(compStyles.getPropertyValue("left"));
// 	let chaps2 = parseInt(compStyles.getPropertyValue("top"));
// 	let bluechaps = parseInt(compStylestwo.getPropertyValue("right"));
// 	let bluechaps2 = parseInt(compStylestwo.getPropertyValue("bottom"));
// 	if ((chaps + chaps2 + bluechaps + bluechaps2) / 2 === 525) {
// 		alert("gameover");
// 		window.location.reload();
// 	}
// }

let bluespeed = 5;
let blueright = 0;
let bluebottom = 0;
let speed = 5;
let redsright = 0;
let redstop = 0;
function goright(ball) {
	if (ball === redBoll) {
		if (redsright < 650 && redsright >= 0) {
			redsright += speed;
		}
		redBoll.style.left = redsright + "px";
	} else {
		if (blueright <= 650 && blueright > 0) {
			blueright -= bluespeed;
		}
		blueBoll.style.right = blueright + "px";
	}
}

function goleft(ball) {
	if (ball === redBoll) {
		if (redsright > 0 && redsright <= 650) {
			redsright -= speed;
		}
		redBoll.style.left = redsright + "px";
	} else {
		if (blueright >= 0 && blueright < 650) {
			blueright += bluespeed;
		}
		blueBoll.style.right = blueright + "px";
	}
}

function godown(ball) {
	if (ball === redBoll) {
		if (redstop < 450 && redstop >= 0) {
			redstop += speed;
		}
		redBoll.style.top = redstop + "px";
	} else {
		if (bluebottom <= 450 && bluebottom > 0) {
			bluebottom -= bluespeed;
		}
		blueBoll.style.bottom = bluebottom + "px";
	}
}

function gotop(ball) {
	if (ball === redBoll) {
		if (redstop <= 450 && redstop > 0) {
			redstop -= speed;
		}
		redBoll.style.top = redstop + "px";
	} else {
		if (bluebottom < 450 && bluebottom >= 0) {
			bluebottom += bluespeed;
		}
		blueBoll.style.bottom = bluebottom + "px";
	}
}

function distance(p1, p2) {
	let a = p1.x - p2.x;
	let b = p1.y - p2.y;
	let c = Math.sqrt(a * a + b * b);
	return c;
}

function gameover() {
	let x = distance(
		redBoll.getBoundingClientRect(),
		blueBoll.getBoundingClientRect()
	);
	if (x < 50) {
		alert("gameover");
		window.location.reload();
	}
}

//  !!! HIN VERSIAA

// function gameover() {
// 	let compStyles = window.getComputedStyle(redBoll);
// 	let compStylestwo = window.getComputedStyle(blueBoll);
// 	let chaps = parseInt(compStyles.getPropertyValue("left"));
// 	let chaps2 = parseInt(compStyles.getPropertyValue("top"));
// 	let bluechaps = parseInt(compStylestwo.getPropertyValue("right"));
// 	let bluechaps2 = parseInt(compStylestwo.getPropertyValue("bottom"));
// 	if ((chaps + chaps2 + bluechaps + bluechaps2) / 2 === 525) {
// 		alert("gameover");
// 	}
// }
