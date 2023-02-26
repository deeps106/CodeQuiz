
//SETTING VARIABLES
let body = document.body
let choices = document.querySelector("#choices");
let highScoresPage = href="highscores.html"
let questions = document.querySelector("#questions")
let scores = document.querySelector(".scores");
let startQuiz = document.getElementById("start");
let timer = document.getElementById("time");
let time = 120
timer.textContent = time + " " + "seconds";

//change background colour OF BODY to light blue
body.setAttribute("style", "background-color: rgb(240, 248, 255)")

//APPENDING OL AND BUTTON ELEMENTS TO HTML
// let olEl = document.createElement("ol");
// choices.appendChild(olEl)





//CODE:

//begin quiz by clicking start quiz button

startQuiz.addEventListener("click", function(){
    
    setInterval(function() {
        time --
        timer.textContent = time + " " + "seconds";
        
    }, 1000);
    showQuestions();
    hideStartQuizButton();
})


//FUNCTIONS:

//this function exposes the questions
function showQuestions() {
    
        questions.setAttribute("class", "start");

    }

//this function redirects user to high scores page 
function highScores() {
    
    scores.addEventListener("click", function(){
        highScoresPage
    })
}
//this function hides the start quiz button when clicked
function hideStartQuizButton() {
    startQuiz.setAttribute("class", "hide");
}