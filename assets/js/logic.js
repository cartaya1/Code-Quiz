var timeElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var starScreen = document.querySelector("#start-screen");
var titleElement = document.querySelector("#question-title");

function startQuiz () {
    starScreen.setAttribute("class", "hide");
    questionElement.removeAttribute("class");
}
function getcurrenteQuestion(){
    var currentQuestion = question[curentQuestionIndex];
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = ""

        for (var i = 0; i < currentQuestion.questionChoices.length; i++){
            var choiceNode = document.createElement("botton");
            choiceNode.setAttribute("class", "choice");
            choiceNode.setAttribute("value", currentQuestion.choice[i]);

            choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];
        
            questionChoices.appendChild(choiceNode);
        }
}