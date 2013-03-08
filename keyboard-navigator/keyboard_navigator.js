var texts = [
	"This is a very secret area.",
	"Hello. Press left arrow to proceed.",
	"You can press right arrow to go back.",
	"This is the end."
];

var textsPos = 1;

function display(text) {
	var contentElem = document.getElementById("content");
	while (contentElem.childNodes.length > 0) {
			contentElem.removeChild(contentElem.firstChild);
	}
	var textNode = document.createTextNode(text);
	contentElem.appendChild(textNode);
}

function keyPressed(event) {
	if (event.keyCode == 37) { // Left arrow
		display(nextText("back"));
	}
	else if (event.keyCode == 39) { // Right arrow
		display(nextText("forward"));
	}
}

function nextText(direction) {		
	if (direction === "forward") {
		if (textsPos < texts.length-1) {
			textsPos++;
		}
	}
	else if (direction === "back") {
		if (textsPos > 0) {
			textsPos--;
		}
	}
	return texts[textsPos];
	
}

display(texts[textsPos]);
document.onkeydown = keyPressed;

