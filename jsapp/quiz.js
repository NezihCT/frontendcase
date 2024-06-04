document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = document.getElementById('question');
    const choices = Array.from(document.querySelectorAll('.choice'));
    const resultsElement = document.getElementById('results');
    const resultsTable = document.getElementById('resultsTable').querySelector('tbody');

    let questions = [];
    let currentQuestionIndex = 0;
    let timer;
    let userAnswers = [];

    // Fetch questions
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            questions = data.slice(0, 10).map((item, index) => ({
                question: `Question ${index + 1}: ${item.title}`,
                choices: generateChoices(item.body),
                correctAnswer: 'A'
            }));
            startQuiz();
        });

    function generateChoices(text) {
        const words = text.split(' ');
        return {
            A: `A. ${words[0] || 'Option A'}`,
            B: `B. ${words[1] || 'Option B'}`,
            C: `C. ${words[2] || 'Option C'}`,
            D: `D. ${words[3] || 'Option D'}`
        };
    }

    function startQuiz() {
        showQuestion();
        choices.forEach(choice => {
            choice.addEventListener('click', handleChoiceClick);
        });
    }

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        choices.forEach((choice, index) => {
            const key = ['A', 'B', 'C', 'D'][index];
            choice.textContent = currentQuestion.choices[key];
            choice.dataset.answer = key;
            choice.disabled = true;
        });

        let timeLeft = 30;
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeft === 20) {
                choices.forEach(choice => choice.disabled = false);
            }
            if (timeLeft === 0) {
                clearInterval(timer);
                userAnswers.push({ question: currentQuestion.question, answer: 'No Answer' });
                currentQuestionIndex++;
                showQuestion();
            }
        }, 1000);
    }

    function handleChoiceClick(event) {
        clearInterval(timer);
        const selectedAnswer = event.target.dataset.answer;
        userAnswers.push({ question: questions[currentQuestionIndex].question, answer: selectedAnswer });
        currentQuestionIndex++;
        showQuestion();
    }

    function showResults() {
        quizContainer.classList.add('hidden');
        resultsElement.classList.remove('hidden');
    
        userAnswers.forEach(answer => {
            const row = document.createElement('tr');
            const questionCell = document.createElement('td');
            const answerCell = document.createElement('td');
    
            questionCell.textContent = answer.question;
            answerCell.textContent = answer.answer;
    
            row.appendChild(questionCell);
            row.appendChild(answerCell);
            resultsTable.appendChild(row);
        });
    
        // After creation table, reset result
        userAnswers = [];
        currentQuestionIndex = 0;
    }
    
});
