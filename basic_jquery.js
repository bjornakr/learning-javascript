var clickCount = 0;
var mouseDistance = 0;
var prevMousePos = [];
var mouseProgress = 0;
var timeSpent = 0;
var backgrounds = ["url('background.png')",
	"url('background2.png')", "url('background3.png')",
	"url('background4.png')", "url('background5.png')"];

$("body").css("background-image", nextBackground());
$(document).ready(initialize);

function initialize() {
	$(".mainbody").jrumble({
		x: 2,
		y: 2,
		rotation: 4
	});
	$("#content").append("Hello! This is jQuery speaking. ");
	$(document).mousemove(updateMouseDistance);
	$(document).click(mouseClicked);
	$("h1").click(changeBackground);
	setInterval(updateTimeCount, 100);
	$("#click_count").text(0);
	$("#mouse_distance").text(0);
}

function addRumbleEffectOnHover(element) {
	element.jrumble({
		x: 2,
		y: 2,
		rotation: 4
	});
	element.hover(
		function () {
			$(this).trigger("startRumble");
		},
		function () {
			$(this).trigger("stopRumble");
		}
	);
}


function updateMouseDistance(event) {
	var x = "X";
	var y = "Y";
	if (prevMousePos[x] && prevMousePos[y]) {
		var newMouseMovement = Math.abs(prevMousePos[x] - event.pageX) +
		Math.abs(prevMousePos[y] - event.pageY);
		mouseDistance += newMouseMovement;
		mouseProgress += newMouseMovement;
	}
	prevMousePos[x] = event.pageX;
	prevMousePos[y] = event.pageY;
	$("#mouse_distance").text(mouseDistance);
	if (mouseProgress > 300) {
		appendToProgress($("<img></img>").addClass("move"));
		mouseProgress = 0;
	}
}

function updateTimeCount() {
	$("#time_spent").text(++timeSpent);
	if (timeSpent % 20 == 0) {
		appendToProgress($("<img></img>").addClass("time"));
	}
}

function changeBackground() {
	$("body").css("background-image", nextBackground());
	//var randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)]
}

function nextBackground() {
	var nextBackground = backgrounds.shift();
	backgrounds.push(nextBackground);
	return nextBackground;
}

function mouseClicked() {
	$("#click_count").text(++clickCount);
	if (clickCount % 3 == 0) {
		appendToProgress($("<img></img>").addClass("click"));
	}
/*	$("span").animate(
		{"opacity": Math.random()},
		"slow");
	$(".move").animate(
		{"width": "+=10px"},
		"slow");*/
}

function appendToProgress(element) {
	$("#progress").append(element);
	$(element).click(doFunny);
	if ($("#progress").hasOverflow()) {
		console.log("Overflow!!!");
		$(".mainbody").trigger("startRumble");
		clearProgress();
	}
	//addRumbleEffectOnHover(element);
}

function doFunny() {
	$(this).animate(
		{"width": "+=10px"},
		"fast");
}

function clearProgress() {
	console.log($("#progress").children().length);
	if ($("#progress").children().length > 0) {
		$(":last-child", $("#progress")).remove();
		setTimeout(clearProgress, 25);
	}
	else {
		$(".mainbody").trigger("stopRumble");
	}
}

// Ripped from Praveen Prasad@Stackoverflow
$.fn.hasOverflow = function() {
	var _elm = $(this)[0];
	var _hasScrollBar = false; 
	if ((_elm.clientHeight < _elm.scrollHeight) || (_elm.clientWidth < _elm.scrollWidth)) {
		_hasScrollBar = true;
	}
	return _hasScrollBar;
}
