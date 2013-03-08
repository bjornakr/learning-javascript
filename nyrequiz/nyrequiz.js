 var allQuestions = [{
 	question: "Who is not a real person?",
 	answers: ["Doodlestick Jones", "Harry Hole", "Super Ruru"],
 	correctAnswer: "Harry Hole"
 },
 {
 	question: "What does \"Støwer\" really mean?",
 	answers: ["Perpetual policy grinder", "Stoveaway", "Machine Gun Snake Fucker"],
 	correctAnswer: "Machine Gun Snake Fucker"
 },
 {
 	question: "Det er plagsomt i rødkålens...",
 	answers: ["Løk", "Sau", "Hyse", "Talg"],
 	correctAnswer: "Sau"
 },
 {
 	question: "In which of these software companies has the author NOT been employed?",
 	answers: ["Blizzard Entertainment", "Bore Design Software", "Donkeylube Software Studios"],
 	correctAnswer: "Blizzard Entertainment"
 }]



 function displayQuizItem(quizItem) {
	displayQuestion(quizItem.question);
	displayAnswers(quizItem.answers, quizItem.selectedAnswer);
	document.getElementById("previous").disabled = (currentQuestionNo <= 0);
	document.getElementById("next").disabled = (quizItem.selectedAnswer == null);
}

function displayQuestion(text) {
	var questionElem = document.getElementById("question");
	removeChildren(questionElem);
	var textNode = document.createTextNode(text);
 	questionElem.appendChild(textNode);
}

function displayAnswers(answers, selectedAnswer) {
	var	answersElem = document.getElementById("answers");
	removeChildren(answersElem);
 	for (var i = 0; i < answers.length; i++) {
 		var textNode = document.createTextNode(" " + answers[i]);
		var radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name = "answer";
		radioButton.value = answers[i];
		radioButton.onclick = radioButtonClicked;
		if (answers[i] === selectedAnswer) {
			radioButton.checked = true;
		}
		answersElem.appendChild(ulWrapper(radioButton, textNode));		
	}
}

function nextQuestion() {
	currentQuestionNo++;
	if (currentQuestionNo == allQuestions.length) {
		displayResult();
	}
	else {
		displayQuizItem(allQuestions[currentQuestionNo]);
	}
}

function previousQuestion() {
	displayQuizItem(allQuestions[--currentQuestionNo]);
}

function currentAnswer() {
	var radioButtons = document.getElementsByName("answer");
	for (var i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			return radioButtons[i].value;
		}
	}
}

function displayResult() {
	displayQuestion("You're all done!");
	var score = 0;
	for (var i = 0; i < allQuestions.length; i++) {
		if (allQuestions[i].selectedAnswer === allQuestions[i].correctAnswer) {
			score++;
		}
	}
 	var resultText = document.createTextNode("Score: " + score + " out of " + allQuestions.length + " possible.");
 	var	answersElem = document.getElementById("answers");
 	removeChildren(answersElem);
 	answersElem.appendChild(resultText);
 	document.getElementById("next").remove();
 	document.getElementById("previous").remove();
}

function removeChildren(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function radioButtonClicked() {
	allQuestions[currentQuestionNo].selectedAnswer = currentAnswer();
	document.getElementById("next").disabled = false;
}

function ulWrapper(element1, element2) {
	var ulElem = document.createElement("ul");
	ulElem.appendChild(element1);
	ulElem.appendChild(element2);
	return ulElem;
}

document.getElementById("next").addEventListener("click", nextQuestion, false);
document.getElementById("previous").addEventListener("click", previousQuestion, false);

var currentQuestionNo = 0;
displayQuizItem(allQuestions[currentQuestionNo]);
