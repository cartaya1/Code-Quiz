var currentQuestionIndex = 0;
var questionsElement = document.querySelector("#questions");

var questionChoices = document.querySelector("#choices");



// all my question
var questions = [
{
    Title: "Which of the following option leads to the portability and security of Java?",
        choice: ["a.) Bytecode is executed by JVM", "b.) The applet makes the Java code secure and portable", "c.) Use of exception handling", "d.) Dynamic binding between objects"],
            answer: "A"
},
{
    Title: "Which of the following is not a Java features?",
        choice: ["a.) Dynamic", "b.) Architecture Neutral", "c.) Use of pointers", "d.) Object-oriente"],
            answer: "C"
},
{
    Title: "What is the return type of the hashCode() method in the Object class?",
        choice: ["a.) Object", "b.)int", "c.) long", "d.) void"],
            answer: "B"
},
{
    Title: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        choice: ["a.)javap tool", "b.)javaw command", "c.)javac tool", "d.)javah command"],
            answer: "C"
},
{
    Title: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        choice: ["a.)getClass()", "b.)intern()", "c.)getName()", "d.)toString()"],
            answer: "C"
},
{
    Title: "In which process, a local variable has the same name as one of the instance variables?",
        choice: ["a.)Serialization", "b.)Variable Shadowing", "c.)Abstraction", "d.)Multi-threading"],
            answer: "B"
},
{
    Title: "Which of the following is true about the anonymous inner class?",
        choice: ["a.)It has only methods", "b.)Objects can't be created", "c.)It has a fixed class name", "d.)It has no class name"],
            answer: "D"
},
{
    Title: "What do you mean by nameless objects?",
        choice: ["a.)An object created by using the new keyword", "b.)An object of a superclass created in the subclass.", "c.)An object without having any name but having a reference.", "d.)An object that has no reference."],
            answer: "D"
},
{
    Title: "Which of the following is an immediate subclass of the Panel class?",
        choice: ["a.)Applet class", "b.)Window class", "c.)Frame class", "d.)Dialog class"],
            answer: "A"
},
{
    Title: "What is the use of the intern() method?",
        choice: ["a.)It returns the existing string from memory", "b.)It creates a new string in the database", "c.)It modifies the existing string in the database", "d.)None of the above"],
            answer: "A"
},
];
console.log(questions[0].choice[0]);
