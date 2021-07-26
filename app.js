const quizData = [
    {
        question: '1. How old is earth?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        e: 'Json Object Notation',
        correct: 'b',
    }, {
        question: '2. What is the best programming language?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C++',
        d: 'Java',
        e: 'Json Object Notation',
        correct: 'a',
    }, {
        question: '3. Who is the President of Ghana?',
        a: 'Akuffo Addo',
        b: 'Bawumia',
        c: 'Mahama',
        d: 'Shatta Wale',
        e: 'Json Object Notation',
        correct: 'a',
    }, {
        question: '4. What does Html Stand for?',
        a: 'Hypr Make up Language',
        b: 'Hypertext Markup Language',
        c: 'Cascading Style Sheet',
        d: 'Json Object Notation',
        e: 'Json Object Notation',
        correct: 'b',
    },
]

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const e_text = document.querySelector('#e_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
    correctAnswer = quizData[currentQuiz].correct;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}    

function deselectAnswers () {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === correctAnswer) {
            score++;
        }

        currentQuiz++;

            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2> <p>${correctAnswer}</p> <button class="btn res-btn btn-warning" onclick="location.reload()">Restart</button>`;
                quiz.className = 'card mt-5 pb-3 pt-3 row col-md-6 mx-auto text-center';
                wrongAnswer();
            }
        }
    });





















