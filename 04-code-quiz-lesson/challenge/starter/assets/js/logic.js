//setting variables
let body = document.body
let choices = document.querySelector("#choices");
let highScoresPage = href="highscores.html"
let questions = document.querySelector("#questions")
let scores = document.querySelector(".scores");
let startQuiz = document.getElementById("start");
let timer = document.getElementById("time");
let time = 120
timer.textContent = time + " " + "seconds";

//create an ordered list in choices
let olEl = document.createElement("ol");
//append ordered list to choices
choices.appendChild(olEl)
//append list of answers to ol
let buttonTags = document.createElement("button")
olEl.appendChild(buttonTags)

//change body background colour to light blue

body.setAttribute("style", "background-color: rgb(240, 248, 255)")



//begin quiz by clicking start quiz button

startQuiz.addEventListener("click", function(){
    
    setInterval(function() {
        time --
        timer.textContent = time + " " + "seconds";
        
    }, 1000);
    showQuestions();
    hideStartQuizButton();
})

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

function hideStartQuizButton() {
    startQuiz.setAttribute("class", "hide");
}