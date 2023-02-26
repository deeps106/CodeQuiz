let questionTitle = document.querySelector("#question-title")
let buttonEl1 = document.createElement("button")
let buttonEl2 = document.createElement("button")
let buttonEl3 = document.createElement("button")
let buttonEl4 = document.createElement("button")

let buttons = [buttonEl1,buttonEl2, buttonEl3, buttonEl4]

//append answers to ol

//APPENDING OL AND BUTTON ELEMENTS TO HTML
let olEl = document.createElement("ol");
choices.appendChild(olEl)

olEl.appendChild(buttonEl1)
olEl.appendChild(buttonEl2)
olEl.appendChild(buttonEl3)
olEl.appendChild(buttonEl4)

questionsArray = [

    {Question1: "What is the purpose of setAttribute()?", Answers: ["1. set up colours", "2. sets the tone of the website", "3. sets the elements into groups", "4. elements can attributed styles, classes, text"], correctAnswer: 4},
    
    {Question2: "What is the purpose of setAttribute()?", Answers: ["1. set up colours", "2. sets the tone of the website", "3. sets the elements into groups", "4. elements can attributed styles, classes, text"], correctAnswer: 2},
    
    {Question3: "What is the purpose of setAttribute()?", Answers: ["1. set up colours", "2. sets the tone of the website", "3. sets the elements into groups", "4. elements can attributed styles, classes, text"], correctAnswer: 1},
    
    {Question4: "What is the purpose of setAttribute()?", Answers: ["1. set up colours", "2. sets the tone of the website", "3. sets the elements into groups", "4. elements can attributed styles, classes, text"], correctAnswer: 3}
    
]

//first question
let firstQuestionTitle = questionsArray[0].Question1;
// let firstQuestionCorrectAnswer = questionsArray[0].Answer[3]

//add content to questionTitle
questionTitle.textContent = firstQuestionTitle
//add content to answer buttons
// answer1.textContent = questionsArray[0].Answers[0]
// answer2.textContent = questionsArray[0].Answers[1]
// answer3.textContent = questionsArray[0].Answers[2]
// answer4.textContent = questionsArray[0].Answers[3]

console.log(firstQuestionTitle);

function Answers() {
for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = questionsArray[i].Answers[i];
    
}

}
Answers()

for (let i = 0; i < questionsArray.length; i++) {
    answer = questionsArray[i].Answers[i];
console.log(answer)
}