// QUESTION BANK FOR THE CHRISTMAS QUIZ
const questions = [
    {
        question: "What colored clothes does Santa wear?",
        answers: ["Purple", "Red", "Pink", "Brown"],
        correct: 1
    },
    // ques 2 
    {
        question: "What is the mode of transportation used by Santa?",
        answers: ["Rocket", "Aeroplane", "Sleigh", "Jetpack"],
        correct: 2
    },
    // ques 3
    {
        question: "What do you think Steve Jobs would get on Christmas?",
        answers: ["Ferrari", "Windows", "Apples", "Potatoe"],
        correct: 2
    },
    // ques 4
    {
        question: "Santa's snack choice would be...",
        answers: ["Ice", "Spinach", "Cookies", "Olive oil"],
        correct: 2
    },
    // ques 5
    {
        question: "If you know Frosty, what kind of accessory would he wear?",
        answers: ["Boots", "None", "Hat", "Scarf"],
        correct: 2
    }
];

// score index for correct answer
let ques_index = 0;
// index to how score
let score = 0;

function displayQuestion() 
{
    const questionElement = document.getElementById('ques');
    const answerListElement = document.getElementById('answer');

    questionElement.textContent = questions[ques_index].question;

    // Clear previous answers
    answerListElement.innerHTML = '';
    // used chat gpt to fix error I was facing to use the click option
    questions[ques_index].answers.forEach((answer, index) =>
    {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener( 'click', () => selectAnswer(index) );
        answerListElement.appendChild(li);
    }
    );
}

// https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack
// used this youtube tutorial  to get an idea on how to code on a java quiz project

// changes to be made
function selectAnswer(answerIndex) 
{
    const correct = questions[ques_index].correct;
    const selectedAnswerElement = document.querySelectorAll ('#answer li') [answerIndex];

    // Check if the selected answer is correct
    if (answerIndex === correct)
    {
        score++;
        selectedAnswerElement.classList.add('correct'); // color coming green
    } 
    else
    {
        selectedAnswerElement.classList.add('wrong'); // , but not red
    }

    // Provide feedback by highlighting selected and correct answers
    const answerElements = document.querySelectorAll('#answer li');

    answerElements.forEach((element, index) => {
        element.classList.remove('selected', 'correct', 'wrong');
        if (index === answerIndex) 
        {
            element.classList.add('selected');
        }
        if (index === correct) 
        {
            element.classList.add('correct');
        }
    }
    );

    // Enabling the next button after the answer has been selected
    document.getElementById('next-btn').removeAttribute('disabled');
}


function nextQuestion()
 {
    ques_index++;
    // pre 
    if (ques_index === questions.length - 1)
    {
        // Disable next button on the last question
        document.getElementById('next-btn').setAttribute('disabled', 'true');
    }

    // Enable the previous button
    document.getElementById('prev-btn').removeAttribute('disabled');
    // display the next question, by calling th efunciton again
    displayQuestion();
}

function prevQuestion() {
    ques_index--;
    if (ques_index === 0) 
    {
        // Disable previous button on the first question
        document.getElementById('prev-btn').setAttribute('disabled', 'true');
    }

    // Enable the next button
    document.getElementById('next-btn').removeAttribute('disabled');

    displayQuestion();
}

// after the quiz has been submitted, their will be a box which will show the score of the quiz

//chat gpt was used to make this a better function over all
// I asked it to make score option available
function submitQuiz() 
{
    const resultsSection = document.getElementById('correct');
    resultsSection.classList.remove('hidden');

    // this below is AI, not me
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your Score: ${score}/${questions.length}`;

    const correctAnswersElement = document.getElementById('correct-answers');
    correctAnswersElement.innerHTML = '';
    questions.forEach((question, index) => 
    {
        const li = document.createElement('li');
        // show correct option of the questions
        li.textContent = 'The Answers for the Question are:- ';
        li.textContent = `A${index + 1}: ${question.answers[question.correct]}`;
        correctAnswersElement.appendChild(li);
    }
    );
}

// Add event listeners and initialize the quiz
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('submit-btn').addEventListener('click', submitQuiz);

// Start the quiz
displayQuestion();
