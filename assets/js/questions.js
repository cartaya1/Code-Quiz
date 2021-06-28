var time = question.length *15;
var currentQuestionIndex = 0;

var starBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timeElement =  document.querySelector("#time");
var questionChoice = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");

// all my question
var questions = [
{
    Title: "Question1",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question2",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question3",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question4",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question5",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question6",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question7",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question8",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question9",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
{
    Title: "Question10",
        choice: ["Answer-1", "Answer-2", "Answer-3", "Answer-4"],
            answer: "RightAnwers"
},
];
console.log(questions[0].choice[0]);
starBtn.addEventListener("Click", startQuiz);