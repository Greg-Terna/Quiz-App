

const StartButton=document.getElementById('start-btn')
const NextButton=document.getElementById('next-btn')

const questionContainerElement=document.getElmenetsById('question-container')
const questionElement=document.getElementsById('question')
const answerButtonsElement=document.getElemntsById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let quizscore =0;

startButton.addEventListener('click',startGame)

nextButton,addEventListener('click', () =>{
    currentQuestionsIndex++
    setnextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -0.5) 
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizscore=0

    }

function setnextQuestion(){
    resetstate();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach((answer) =>{
    const button=document.createElement('button')
    button.innerText=answer.Text;
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appenChild(button)
    })

    }


function resetState () {
    clearStatusclass(documnent.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElements.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButtons=e.target
    const correct=selectedButton.dataset.correct

    setStatusClass(documnet-body, correct)
    Array.from(answerButtonsElement.children).forEach((button) =>{
        setStatusClass(buton,button.dataset.correct)
})
if(shuufledQuestions.length>CurrentQuestionIndex++)
{nextButton.classList.remove("hide")
 } else {
    startButton.innerText="restart"
    startButton.classList.remove("hide")
 }
 if (selectedButton.dataset=correct) {
    quizscore++
 }
 document.getElementById('right-answers').innerText=quizscore
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(elment) {
    element.classList.remove('corect')
    element.classList.remove('wrong')
}
const questions=[
    {
        question:'Which one of these is a Javascript framework?',
        answer:[
            {text: 'Python' , correct: false},
            {text: 'Django' , correct: false},
            {text: 'React' , correct: true},
            {text: 'Eclipse' , correct: false}

        ],
    },
    {
        question: 'Who is the president of Nigeria?',
        answer:[
            {text: 'Tommy Shelby' , correct: false},
            {text: 'Goodluck' , correct: false},
            {text: 'Buhari' , correct: true},
            {text: 'Corleone' , correct: false}
        ],
    },
    {
        question: 'Who is the owner of Amazon?',
        answer:[
            {text: 'Bezos' , correct: true},
            {text: 'Elon' , correct: false},
            {text: 'Stark' , correct: false},
            {text: 'Dangote' , correct: false}
        ],
    },

    {
        question: 'Who is the fastest footballer alive?',
        answer:[
            {text: 'Mudryk' , correct: true},
            {text: 'Messi' , correct: false},
            {text: 'Ronaldo' , correct: false},
            {text: 'Sancho' , correct: false}
        ],
    },
]




    

    



