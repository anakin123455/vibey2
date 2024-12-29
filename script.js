const questionButton = document.getElementById('question-button');
const challengeButton = document.getElementById('challenge-button');
const contentContainer = document.querySelector('.content-container');
const quotes = document.querySelectorAll('.quote');
const challenges = document.querySelectorAll('.challenge');

function hideAllContent() {
    quotes.forEach(quote => {
        quote.style.display = 'none';
    });

    challenges.forEach(challenge => {
        challenge.style.display = 'none';
    });
}

function showRandomQuestion() {
    hideAllContent();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quotes[randomIndex].style.display = 'block';
    contentContainer.style.display = 'block';
}

function showRandomChallenge() {
    hideAllContent();
    const randomIndex = Math.floor(Math.random() * challenges.length);
    challenges[randomIndex].style.display = 'block';
    contentContainer.style.display = 'block';
}

questionButton.addEventListener('click', showRandomQuestion);
challengeButton.addEventListener('click', showRandomChallenge);
