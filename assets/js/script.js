var questions = [
  {
    questionElement: "Which of the following option leads to the portability and security of Java?",
    choice1: "Bytecode is executed by JVM",
    choice2: "The applet makes the Java code secure and portable",
    choice3: "Use of exception handling",
    choice4: "Dynamic binding between objects",
    answer: "Bytecode is executed by JVM",
  },
  {
    questionElement: "Which of the following is not a Java features?",
    choice1: "Dynamic",
    choice2: "Architecture Neutral",
    choice3: "Use of pointers",
    choice4: "Object-oriente",
    answer: "Use of pointers",
  },
  {
    questionElement: "What is the return type of the hashCode() method in the Object class?",
    choice1: "Object",
    choice2: "int",
    choice3: "long",
    choice4: "void",
    answer: "int",
  },
  {
    questionElement: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
    choice1: "javap tool",
    choice2: "javaw command",
    choice3: "javac tool",
    choice4: "javah command",
    answer: "javac tool",
  },
  {
    questionElement: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
    choice1: "getClass()",
    choice2: "intern()",
    choice3: "getName()",
    choice4: "toString()",
    answer: "getName()",
  },
  {
    questionElement: "In which process, a local variable has the same name as one of the instance variables?",
    choice1: "Serialization",
    choice2: "Variable Shadowing",
    choice3: "Abstraction",
    choice4: "Multi-threading",
    answer: "Variable Shadowing",
  },
  {
    questionElement: "Which of the following is true about the anonymous inner class?",
    choice1: "It has only methods",
    choice2: "Objects can't be created",
    choice3: "It has a fixed class name",
    choice4: "It has no class name",
    answer: "It has no class name",
  },
  {
    questionElement: "What do you mean by nameless objects?",
    choice1: "An object created by using the new keyword",
    choice2: "An object of a superclass created in the subclass.",
    choice3: "An object without having any name but having a reference.",
    choice4: "An object that has no reference.",
    answer: "An object that has no reference.",
  },
  {
    questionElement: "Which of the following is an immediate subclass of the Panel class?",
    choice1: "Applet class",
    choice2: "Window class",
    choice3: "Frame class",
    choice4: "Dialog class",
    answer: "Applet class",
  },
  {
    questionElement: "What is the use of the intern() method?",
    choice1: "It returns the existing string from memory",
    choice2: "It creates a new string in the database",
    choice3: "It modifies the existing string in the database",
    choice4: "None of the above",
    answer: "It returns the existing string from memory",
  }
];

// Timer
var time = document.getElementById("timer");
var yourScore = document.querySelector(".display-3");
var submitButton = document.getElementById("buttonInitials");
var inputLine = document.getElementById("inlineFormInput");

var secondsLeft = 50;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft);
    time.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      cardQuestions.setAttribute("style", "display: none");
      displayJumbo.setAttribute("style", "display: block");
      yourScore.textContent = "Your score is: " + secondsLeft;
      startButton.setAttribute("style", "display: none");
      submitButton.setAttribute("style", "display: inline");
      inputLine.setAttribute("style", "display: inline-block");

    } else if (runningQuestion === 5) {
      clearInterval(timerInterval);
      console.log(secondsLeft);
      cardQuestions.setAttribute("style", "display: none");
      displayJumbo.setAttribute("style", "display: block");
      yourScore.textContent = "Your score is: " + secondsLeft;
      startButton.setAttribute("style", "display: none");
      submitButton.setAttribute("style", "display: inline");
      inputLine.setAttribute("style", "display: inline-block");

    }
  }, 3000);
}
// Start Button
var startButton = document.getElementById("startQuiz");
var cardQuestions = document.getElementById("questionsCard");
var displayJumbo = document.querySelector(".jumbotron");

startButton.addEventListener("click", startGame);

function startGame() {
  setTime();
  firstQuestion();
  console.log("game on");
  cardQuestions.setAttribute("style", "display: block");
  displayJumbo.setAttribute("style", "display: none");

}
//Questions
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var questionElement = document.getElementById("questions");
var answerchoice = document.getElementById("answerIncorrect");
var incorrectchoice = document.getElementById("answerIncorrect");

var runningQuestion = 0;

// First Question Send questions to card
function firstQuestion() {
  var quest = questions[runningQuestion];
  questionElement.textContent = quest.questionElement;
  choice1.textContent = quest.choice1;
  choice2.textContent = quest.choice2;
  choice3.textContent = quest.choice3;
  choice4.textContent = quest.choice4;
}
var quizBtn = document.querySelectorAll(".quizBtn");

// Event listener for buttons and q/a
for (var i = 0; i < quizBtn.length; i++) {
  quizBtn[i].addEventListener("click", function userchoice(event) {
    event.stopPropagation();
    if (event.currentTarget.innerText === questions[runningQuestion].answer) {
      answerchoice.textContent = "answer + 5 sec";
      answerchoice.setAttribute("style", "color: yellow");
      secondsLeft = secondsLeft + 5;
      console.log("answer");
    } else {
      incorrectchoice.textContent = "Incorrect - 5 sec";
      incorrectchoice.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;


    if (runningQuestion < 6) {
      firstQuestion();
    }
  });
}

// High Scores 

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

submitButton.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("click");

  var initials = inputLine.value;
  var finalScore = { initials, secondsLeft };
  console.log("Final Score: " + finalScore);
  console.log(initials + " your score is: " + secondsLeft);




  // Send to localStorage

  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));

});

