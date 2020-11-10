const startBtn = document.getElementById('startBtn')
const nextBn = document.getElementById("nextBtn")
startBtn.addEventListener('click', startQuiz)
nextBn.addEventListener('click', ()=>{
    currentQuizIndex++
    setNextQuestion()
})
const questions= document.getElementById('question-container')
const theQuestion= document.getElementById('question')
const theAnswers= document.getElementById('answerBtn')

let shuffleQuiz, currentQuizIndex;

function startQuiz(){
     startBtn.classList.add('hide')
     questions.classList.remove('hide')
     shuffleQuiz=questionsList.sort(()=>Math.random()-0.5) 
     currentQuizIndex=0
     setNextQuestion()

}
function displayQuestion(question){
    theQuestion.innerText= question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        theAnswers.appendChild(button)
        
    });
}
function setNextQuestion(){
    resetState()
    displayQuestion(shuffleQuiz[currentQuizIndex])

}
function resetState(){
    nextBtn.classList.add("hide")
    while(theAnswers.firstChild){
        theAnswers.removeChild(theAnswers.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(theAnswers.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuiz.length>currentQuizIndex +1){
        nextBtn.classList.remove('hide')

    } else{
        startBtn.innerText= 'Restart'
        startBtn.classList.remove('hide')
    }

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
        
    }else{
        element.classList.add('wrong')
    }
    function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')

    }
} 
    
    

const questionsList= [
    {
        question: "Which of the following is not a JavaScript framework",
        answers:[
            {
                text:'Vue',
                wrong:""
            },
            {
                text:"React",
                wrong:""
            },
            {
                text: "Angular",
                wrong:""
            },
            {
                text: "Saas",
                correct: "true"
            }

        ]
    },

    {
        question:"what is javascript?",
        answers:[
            {
                text:"programing Language",
                correct: "true"
            },
            {
                text:"method",
                wrong:""
             }

        ]
    },
    {
        question:"which is not an operator in javascript?",
        answers:[
            {
                text:"logical operator",
                wrong:""
            },
            {
                text: "Arithmetic operators",
                wrong: ""
            },
            {
                text: "boolean operators",
                wrong: ""
            },
            {
                text: "true operators",
                correct: "true" 
            }
        ]
    },
    {
        question:"which is not a characteristic of javascript?",
        answers:[
            {
                text:"loosely typed",
                wrong:""
            },
            {
                text: "dynamic",
                wrong: ""
            },
            {
                text: "interprented",
                wrong: ""
            },
            {
                text: "compiled",
                correct: "true" 
            }
        ]
    },
    {
        question:"which of the following is a javascript framework?",
        answers:[
            {
                text:"Saas",
                wrong:""
            },
            {
                text: "Less",
                wrong: ""
            },
            {
                text: "Angular",
                correct: "true"
            },
            {
                text: "Vuel",
                wrong: "" 
            }
        ]
    }
]