var questionElement = document.querySelector("#question");
var choices = document.querySelector(".choice-container");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");

// assing Values static for begin

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = {};

// all my question

var questions = [
    {
        questionElement: "Which of the following option leads to the portability and security of Java?",
        choice1: " Bytecode is executed by JVM",
        choice2: " The applet makes the Java code secure and portable",
        choice3: " Use of exception handling",
        choice4: " Dynamic binding between objects",
        answer: 1,
    },
    {
        questionElement: "Which of the following is not a Java features?",
        choice1: " Dynamic",
        choice2: " Architecture Neutral",
        choice3: " Use of pointers",
        choice4: " Object-oriente",
        answer: 3,
    },
    {
        questionElement: "What is the return type of the hashCode() method in the Object class?",
        choice1: " Object",
        choice2: "int",
        choice3: " long",
        choice4: " void",
        answer: 2,
    },
    {
        questionElement: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        choice1: "javap tool",
        choice2: "javaw command",
        choice3: "javac tool",
        choice4: "javah command",
        answer: 3,
    },
    {
        questionElement: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        choice1: "getClass()",
        choice2: "intern()",
        choice3: "getName()",
        choice4: "toString()",
        answer: 3,
    },
    {
        questionElement: "In which process, a local variable has the same name as one of the instance variables?",
        choice1: "Serialization",
        choice2: "Variable Shadowing",
        choice3: "Abstraction",
        choice4: "Multi-threading",
        answer: 2,
    },
    {
        questionElement: "Which of the following is true about the anonymous inner class?",
        choice1: "It has only methods",
        choice2: "Objects can't be created",
        choice3: "It has a fixed class name",
        choice4: "It has no class name",
        answer: 4,
    },
    {
        questionElement: "What do you mean by nameless objects?",
        choice1: "An object created by using the new keyword",
        choice2: "An object of a superclass created in the subclass.",
        choice3: "An object without having any name but having a reference.",
        choice4: "An object that has no reference.",
        answer: 4,
    },
    {
        questionElement: "Which of the following is an immediate subclass of the Panel class?",
        choice1: "Applet class",
        choice2: "Window class",
        choice3: "Frame class",
        choice4: "Dialog class",
        answer: 1,
    },
    {
        questionElement: "What is the use of the intern() method?",
        choice1: "It returns the existing string from memory",
        choice2: "It creates a new string in the database",
        choice3: "It modifies the existing string in the database",
        choice4: "None of the above",
        answer: 1,
        },
];

        console.log(choice1);
        console.log(choice2);
        console.log(choice3);
        console.log(choice4);

// incrementation of score
var SCORE_POINT = 100;
var MAX_QUESTIONS = 5;

//Begiining test
startTest = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [questions];
    getNewQuestion()
}
//aliatory questions
getNewQuestion() = () => {
    if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostResentScore', score);

        return window.location.assign('./end.html');
    }
    //incrementation of Array value
    questionCounter++;
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}';
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTION) * 100}%';

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = avaliableQuestion[questionIndex];
    questions.innerText = currentQuestion.question;

    choice.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;
}
choices.forEach(choice => {
    choice.addEventelistener('click', event => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = (selectedAnswer == currentQuestion) ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINT);
        }
        selectedChoice.parentElement.classlist.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply);
            getNewQuestion();

        }, 1000);
    })
})
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
startTest();