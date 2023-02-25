//setting variables

let highScoresPage = href="highscores.html"
let questions = document.querySelector("#questions")
let scores = document.querySelector(".scores");
let startQuiz = document.getElementById("start");
let timer = document.getElementById("time");
let time = 60
timer.textContent = time + " " + "seconds";

//create an ordered list in choices

let choices = document.querySelector("#choices");
let olEl = document.createElement("ol");
//append ordered list to choices
choices.appendChild(olEl)


//begin quiz by clicking start quiz button

startQuiz.addEventListener("click", function(){
    
    setInterval(function() {
        time --
        timer.textContent = time + " " + "seconds";
        
    }, 1000)
    showQuestions()
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
