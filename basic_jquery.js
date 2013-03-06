var clickCount = 0;
var mouseDistance = 0;
var prevMousePos = [];

$(document).ready(f);
$(document).mousemove(updateMouseDistance);

function f() {
	console.log("Document ready.");
	$("#content").append("Hello! I am editing this through jQuery. ");
	$("#click_count").text(clickCount);

	$("#button").click(function () {
		$("#content").append("POW! ");
		$("#click_count").text(++clickCount);
		console.log("(" + prevMousePos["X"] + ", " + prevMousePos["Y"] + ")");
		console.log(mouseDistance);
	});
}

function updateMouseDistance(event) {
	if (!prevMousePos["X"]) {
		prevMousePos["X"] = event.pageX;
	}
	if (!prevMousePos["Y"]) {
		prevMousePos["Y"] = event.pageY;
	}
	mouseDistance += Math.abs(prevMousePos["X"] - event.pageX) +
	 Math.abs(prevMousePos["Y"] - event.pageY);
	prevMousePos["X"] = event.pageX;
	prevMousePos["Y"] = event.pageY;
	$("#mouse_distance").text(mouseDistance);
}
