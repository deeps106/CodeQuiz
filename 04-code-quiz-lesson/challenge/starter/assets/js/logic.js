

console.log(questionsArray)//successful reading of questionsArray from questions.js in logic.js file


//setting variables
let body = document.body
let buttonsList = document.querySelector("#buttons");
let choices = document.querySelector("#choices");
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

//append ol to choices div
choices.appendChild(ulEl);

//create content for questionTitle
// questionTitle.textContent = questionsArray[0].question;

//create and append buttons to HTML at choices div

//array of buttons for question answers



function renderButtons(array) {
  
    for (let i = 0; i < questionsArray.length; i++) {
        
        let button = document.createElement("button")
        
        button.textContent = array.answers[i]
        
        ulEl.appendChild(button);
        
        button.setAttribute("data-correctAnswer-Id", i)
}
};
// renderButtons(questionsArray[0]);

// //buttons:
// buttonEl1 = document.createElement("button");
// buttonEl2 = document.createElement("button");
// buttonEl3 = document.createElement("button");
// buttonEl4 = document.createElement("button");

// //append buttons to choices div
// choices.appendChild(buttonEl1);
// choices.appendChild(buttonEl2);
// choices.appendChild(buttonEl3);
// choices.appendChild(buttonEl4);

// //create content for each button = question answers
// buttonEl1.textContent = questionsArray[0].answers[0]
// buttonEl2.textContent = questionsArray[0].answers[1]
// buttonEl3.textContent = questionsArray[0].answers[2]
// buttonEl4.textContent = questionsArray[0].answers[3]

// set a data-state for answers to buttons using data-answer = wrong or correct
// buttonEl1.setAttribute("data-answer", "wrong")
// buttonEl2.setAttribute("data-answer", "wrong")
// buttonEl3.setAttribute("data-answer", "correct")
// buttonEl4.setAttribute("data-answer", "wrong")

//set styles for buttons


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

startQuiz.addEventListener("click", function () {

    let timeInterval = setInterval(timeCountdown, 1000);
    function timeCountdown() {
        time--
        timer.textContent = time + " " + "seconds";

    };

    hideStartQuizButton();
    showQuestions();
    Question1()
    
 
    
    //listen to clicks within the container = choices div    

    choices.addEventListener("click", function (event) {
        console.log(event)
        let element = event.target //ensures action occurs only when button pressed
        if (element.matches("button")) {
            let state = element.getAttribute("data-correctAnswer-Id")

            for (let i = 0; i < questionsArray.length; i++) {
                
                if (state === questionsArray[i].correctAnswer) {
                    pTag.textContent = "Correct answer!"
    
                } else {
                    pTag.textContent = "Wrong answer!"
    
    
                    let penaltyIncurred = time - 10;
    
                    localStorage.setItem("Penalty", penaltyIncurred) //stores the penaltyIncurred for wrong answer into local storage.
    
                    clearInterval(timeInterval);
    
                    setInterval(penaltyTime, 1000)
    
                    function penaltyTime() {
                        penaltyIncurred--
                        timer.textContent = penaltyIncurred + " " + " seconds"
                    }
                }
                clearInterval(penaltyTime())
            }
        }
    })
    
    
    // Question3();
    // Question4()
    
});




// //listen to clicks within the container = questions id
// let questionsContainer = document.querySelector("#questions")

// questionsContainer.addEventListener("click", function (event) {
//     console.log(event)
//     let element = event.target //ensures action occurs only when button pressed
//     if (element.matches("button")) {
//         let state = element.getAttribute("data-answer")

//         if (state === "correct") {
//             pTag.textContent = "Correct answer!"

//         } else {
//             pTag.textContent = "Wrong answer!"

//             // timer.textContent = (time - 10) + " " + "seconds";

//             clearInterval(timeInterval);

//             //stores the penalty for wrong answer in local storage.
//             localStorage.setItem("Penalty", (time - 10))


//             //obtains the penalty obtained as number
//             const penalty = JSON.parse(localStorage.getItem("Penalty"))

//             timer.textContent = penalty + " " + "seconds"

//             console.log(penalty + " " + "seconds")
//         }
//     }

//     Question2();
//     // Question3();
//     // Question4()

// })

function Question1() {

    //create title for question
    questionTitle.textContent = questionsArray[0].question;

    //create answer list for buttons
    renderButtons(questionsArray[0])
}


function Question2() {

    //clear the buttons content
    buttonsList.innerHTML = "";
    //question2 title
    questionTitle.textContent = questionsArray[1].question;

    renderButtons(questionsArray[1])

    // //answers to buttons for question 2
    // answerButton1 = questionsArray[1].answers[0]
    // answerButton2 = questionsArray[1].answers[1]
    // answerButton3 = questionsArray[1].answers[2]
    // answerButton4 = questionsArray[1].answers[3]

    // //set data-answer to correct for correct answer = 2
    // buttonEl1.setAttribute("data-answer", "wrong")
    // buttonEl2.setAttribute("data-answer", "correct")
    // buttonEl3.setAttribute("data-answer", "wrong")
    // buttonEl4.setAttribute("data-answer", "wrong")

}

// function Question3() {
//     //question2 title
//     questionTitle.textContent = questionsArray[2].question3;

//     //answers to buttons for question 2
//     answerButton1 = questionsArray[2].answers[0]
//     answerButton2 = questionsArray[2].answers[1]
//     answerButton3 = questionsArray[2].answers[2]
//     answerButton4 = questionsArray[2].answers[3]

//     //set data-answer to correct for correct answer = 1
//     buttonEl1.setAttribute("data-answer", "correct")
//     buttonEl2.setAttribute("data-answer", "wrong")
//     buttonEl3.setAttribute("data-answer", "wrong")
//     buttonEl4.setAttribute("data-answer", "wrong")

// }

// function Question4() {
//     //question2 title
//     questionTitle.textContent = questionsArray[3].question4;

//     //answers to buttons for question 2
//     answerButton1 = questionsArray[3].answers[0]
//     answerButton2 = questionsArray[3].answers[1]
//     answerButton3 = questionsArray[3].answers[2]
//     answerButton4 = questionsArray[3].answers[3]

//     //set data-answer to correct for correct answer = 3
//     buttonEl1.setAttribute("data-answer", "wrong")
//     buttonEl2.setAttribute("data-answer", "wrong")
//     buttonEl3.setAttribute("data-answer", "correct")
//     buttonEl4.setAttribute("data-answer", "wrong")

// }}

//FUNCTIONS

//create a function to hide the Start Quiz button
function hideStartQuizButton() {

    startQuiz.setAttribute("class", "hide");

}

//this function exposes the questions
function showQuestions() {

    questions.setAttribute("class", "start");
        
    }


//this function redirects user to high scores page 
function highScores() {

    scores.addEventListener("click", function () {
        highScoresPage
    })
    //obtains the penalty obtained as number
    // let penaltyIncrred = JSON.parse(localStorage.getItem("Penalty"))
}

function renderfinalScore(){

let finalScore = JSON.parse(localStorage.getItem("Penalty"))
finalScoreTag.textContent = finalScore


}
renderfinalScore()