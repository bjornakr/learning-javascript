var clickCount = 0;
var mouseDistance = 0;
var prevMousePos = [];
var mouseProgress = 0;
var timeSpent = 0;

$(document).ready(f);
$(document).mousemove(updateMouseDistance);

function f() {
	console.log("Document ready.");
	$("#content").append("Hello! I am editing this through jQuery. ");
	$("#click_count").text(clickCount);

	$("#button").click(function () {
		$("#click_count").text(++clickCount);
		if (clickCount % 5 == 0) {
			$("#progress").append($("<img></img>").addClass("zaf"));
		}
	});

	setInterval(a, 100);

}

function updateMouseDistance(event) {
	if (prevMousePos["X"] && prevMousePos["Y"]) {
		var newMouseMovement = Math.abs(prevMousePos["X"] - event.pageX) +
		Math.abs(prevMousePos["Y"] - event.pageY);
		mouseDistance += newMouseMovement;
		mouseProgress += newMouseMovement;
	}
	prevMousePos["X"] = event.pageX;
	prevMousePos["Y"] = event.pageY;
	$("#mouse_distance").text(mouseDistance);
	if (mouseProgress > 5000) {
		$("#progress").append($("<img></img>").addClass("zif"));
		mouseProgress = 0;
	}
}

function a() {
	$("#time_spent").text(++timeSpent);
	if (timeSpent % 30 == 0) {
		$("#progress").append($("<img></img>").addClass("zof"));
	}
}