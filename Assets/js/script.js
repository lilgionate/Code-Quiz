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
        currentQuestionIndex++;
        displayQuestion();

    } else {
        endQuiz();
    }
}
   

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('quiz-finish-screen').style.display = 'block';

    document.getElementById('timer').style.display = "none";
    document.getElementById('final-score').textContent = "Final Score: " + score;
    document.getElementById('initials').style.display = "inline";
    document.getElementById('submit').style.display = "inline";
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const scoreList = document.getElementById('scores-list');
    scoreList.innerHTML = '';
     for (let i = 0; i < Math.min(highScores.length, 5); i++) {
        const li = document.createElement('li');
        li.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        scoreList.appendChild(li);
    };
}


function saveScore() {
    document.getElementById('score-btn').style.display = 'none';
    document.getElementById('quiz-finish-screen').style.display = 'none';
    document.getElementById('highscores-screen').style.display = 'block';
    const initials = 
    document.getElementById('initials').value;
    const highScores = JSON.parse(localStorage.getItem('highScores'))  || [];
    const newScore = {
        initials: initials,
        score: score
    };

  
highScores.push(newScore);
highScores.sort((a , b) => b.score - a.score);
highScores.splice(5);

localStorage.setItem('highScores', JSON.stringify(highScores));
displayHighScores();

}


function clearHighScore() {
    localStorage.removeItem('highScores');
    displayHighScores();
}

function restartGame() {
    currentQuestionIndex = 0;
    time = 60;
    score = 0;
    clearInterval(timerInterval);
    document.getElementById('highscores-screen').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('score-btn').style.display = 'block';

    document.getElementById('timer').style.display = "block";
    document.getElementById('final-score').textContent = "";
    document.getElementById('initials').value = '';
    document.getElementById('initials').style.display = 'none';
    document.getElementById('submit').style.display = "none";
}


function viewHighScores() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('score-btn').style.display = 'none';

    document.getElementById('timer').style.display = "none";
    document.getElementById('highscores-screen').style.display = 'block';

    displayHighScores();

}