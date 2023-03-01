

console.log(questionsArray)//successful reading of questionsArray from questions.js in logic.js file


//setting variables
let body = document.body
let buttonsList = document.querySelector("#buttons");
let choices = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen")
let endScreenScore = document.querySelector("#end-screen > p")
let finalScoreTag = document.querySelector("#final-score");
let highScoresPage = href = "highscores.html"
let ulEl = document.createElement("ul");
let questions = document.querySelector("#questions")
let questionsContainer = document.querySelector("#questions")
let questionTitle = document.querySelector("#question-title") //access question-title id to add title of question
let scores = document.querySelector(".scores");
let startQuiz = document.querySelector(".start");
let wrapper = document.querySelector(".wrapper");

//change background of body to light blue color
body.setAttribute("style", "background-color: rgb(244, 236, 247)")

//add an id to ul of buttons
ulEl.setAttribute("id", "buttons");

//append ul to choices div
choices.appendChild(ulEl);



//create a pTag and append to choices Div so that user knows if wrong or correct answer picked
pTag = document.createElement("p");
choices.appendChild(pTag)
pTag.setAttribute("class", "align")

alignPtag = document.querySelector(".align")
alignPtag.setAttribute("style", "align-text: left")

//variables for timer
let timer = document.querySelector("#time");
let time = 120

// begin quiz by clicking start quiz button which hides start quiz button and shows the first question
timer.textContent = time + " " + "seconds";

localStorage.clear()
startQuiz.addEventListener("click", function () {
    
    let timeInterval = setInterval(timeCountdown, 1000);
    function timeCountdown() {
        time--
        timer.textContent = time + " " + "seconds";
        
        localStorage.setItem("time", time)
        
    };
    
    hideStartQuizButton();
    showQuestions();
    Question(firstQuestion)
    renderButtons(firstQuestion)
    
    // buttonsList.innerHTML = ""
    // Question(secondQuestion)
    // renderButtons(secondQuestion)
    
    
    
    //listen to clicks within the container = choices div    
    choices.addEventListener("click", function (event) {
        console.log(event)
        let element = event.target //ensures action occurs only when button pressed
        if (element.matches("button")) {
            let state = element.getAttribute("data-correctAnswer-Id")
            
            for (let i = 0; i < questionsArray.length; i++) {
                
                if (state === questionsArray[i].correctAnswer) {
                    pTag.textContent = "Correct answer!"
                    clearInterval(timeInterval)
                    
                } else {
                    pTag.textContent = "Wrong answer!"
                    
                    
                    
                    
                    clearInterval(timeInterval);
                    
                    setInterval(penaltyTime, 1000)
                    
                
                    function penaltyTime() {
                        let penaltyIncurred = time - 10;

                        localStorage.setItem("Penalty", penaltyIncurred) //stores the penaltyIncurred for wrong answer into local storage.
                        
                        penaltyIncurred--
                        timer.textContent = penaltyIncurred + " " + " seconds"
                    }
                    
                    
                }
            }
        }
        revealEndScreen();
        renderfinalScore("Penalty")
    })



});

// FUNCTIONS

//Questions
let firstQuestion = questionsArray[0]
let secondQuestion = questionsArray[1]
let thirdQuestion = questionsArray[2]
let fourthQuestion = questionsArray[3]

    function Question(array) {

    for (let i = 0; i < questionsArray.length; i++) {

        //create title for question
        questionTitle.textContent = array.question;

        console.log(questionsArray[i].question)

    }
}
//create answer list for//array of buttons for question answers

// renderButtons()
    function renderButtons(array) {

    for (let i = 0; i < (questionsArray).length; i++) {

        let button = document.createElement("button")

        button.textContent = array.answers[i]

        ulEl.appendChild(button);

        button.setAttribute("data-correctAnswer-Id", i)

    }
}

//Hide startQuiz button
    function hideStartQuizButton() {

    startQuiz.setAttribute("class", "hide");

}

//Show the questions
    function showQuestions() {

    questions.setAttribute("class", "start");

}


//redirects user to high scores page 
    function highScores() {

    scores.addEventListener("click", function () {
        highScoresPage
    })
    //obtains the penalty obtained as number
    // let penaltyIncrred = JSON.parse(localStorage.getItem("Penalty"))
}

//show final score
function renderfinalScore() {
    
    
    let finalScore = JSON.parse(localStorage.getItem("Penalty"))
    finalScoreTag.textContent = finalScore

}
renderfinalScore()

//reveal end screen

function revealEndScreen() {
    endScreen.setAttribute("class", "start");
}