const quizQuestion = [
    {
        question: "What is the capitol of France?",
        answer: {
            a: "Berlin", 
            b: "Paris", 
            c: "Madrid", 
            d: "Rome" 
        },
        correctAnswer: "b"
    },

    {
        question: "What is the capitol of Italy?",
        answer: {
            a: "Berlin", 
            b: "Paris", 
            c: "Madrid", 
            d: "Rome"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capitol of Spain?",
        answer: {
            a: "Berlin", 
            b: "Paris", 
            c: "Madrid", 
            d: "Rome"
        },
        correctAnswer: "c"
    }
];


let currentQuestionIndex = 0;
let time = 60;
let timerInterval;
let score = 0;
let highScore = [];

function startQuiz() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    timerInterval = setInterval(function() {
        time--;

    document.getElementById('time').textContent = time;

        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
    displayQuestion();
} 

function displayQuestion() {
    const currentQuestion = quizQuestion[currentQuestionIndex];
    
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('btn-a').textContent = currentQuestion.answer.a;
    document.getElementById('btn-b').textContent = currentQuestion.answer.b;
    document.getElementById('btn-c').textContent = currentQuestion.answer.c;
    document.getElementById('btn-d').textContent = currentQuestion.answer.d;

}

function checkAnswer(answer) {

    const currentQuestion = quizQuestion[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
        
        document.getElementById('result').textContent = "Correct!";
    } else {
        time -= 10;

        document.getElementById('result').textContent = "Incorrect!";
    }

    if (currentQuestionIndex < quizQuestion.length -1) {
        displayQuestion();

    } else {
        endQuiz();
    }
}
   

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('question-screen').style.display = 'none';

    document.getElementById('timer').style.display = "none";
    document.getElementById('result').textContent = "Final Score: " + score;
    document.getElementById('initials').style.display = "inline";
    document.getElementById('submit').style.display = "inline";
}


function saveScore() {
    const initials = 
    document.getElementById('initials').value;
}
