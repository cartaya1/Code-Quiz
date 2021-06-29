# Code-Quiz


These paragraphs below i found when google search and help me a lot with this. 

How to Create a Quiz with Random Questions Using Java.
By Micah McDunnigan

One of the benefits of learning to program in a cross-platform language, such as Java, is that if you need a specialized tool, such as a quiz program that will randomly select its items from a bank of questions, you can make it yourself. It is also a useful project if you are a beginner with Java, because it introduces you to the language's random utility and gives you practice with control structures such as loops.

Step 1
Import the necessary libraries with the syntax at the very top of your source code: import java.util.random; import java.io.*;

Step 2
Declare a new random number generator in your "public static void main" class with the syntax "Random randomizer = new Random();" where "randomizer" is the name you choose to give to your randomizing object and then declare a console object with the syntax "Console input = new Console();" where "input" is the name you give the console object.

Step 3
Declare the following variables:
int choice; String selection;
where "choice" is the name you will give the variable that will hold the random question selection, and "selection" is the name you will give the variable that will hold the user's answer selection.

Step 4
Declare a string array with the syntax "QuestionList = new String[n][2];" where n is the number of questions your quiz will include and "QuestionList is the name you will use for your array.

Step 5
Use the following syntax for each question from which you want your program to draw:
QuestionList[n][0] = "My Question \nA: Answer One\nB: Answer Two\nC: Answer Three"; QuestionList[n][1] = "Correct Answer"; where "n" is the number of your question (starting at zero), "My Question" is the question, A - C are the possible answer choices, and "Correct Answer is the letter corresponding to the correct answer. The "\n" will make the console start displaying text on a new line, so the above sytntax will display as:
My Question A: Answer One B: Answer Two C: Answer Three

Step 6
Create a loop with the syntax:
int round = 0; while (round < questions){
(rest of program here)
round = round + 1; }
where "round" is the name you will give to a variable that will track the number of questions the program has displayed, and "questions" is the number of questions you want your quiz program to ask before quitting. The remainder of the code will go between "while (round < questions)(" and "round = round + 1;

Step 7
Generate a random question with the syntax "choice = randomizer.nextInt(n);" where "n" is the total number of questions you added to your pool (starting at one, not zero).

Step 8
Display your choice with the syntax "System.out.println(QuestionList[choice][0];" then type "selection = input.readLine();" on the next line. This will display the question and let the user type in an answer.

Step 9
Use the following syntax to check the answer:
if (selection.equals(QuestionList[choice][1]){ System.out.println("Correct!"); }
else{ System.out.println("Incorrect, the answer was " + QuestionList[choice][1]); }
