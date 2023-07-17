let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById('guess')
    if(guess === secretNumber) {
        document.getElementById('result').textContent = 'Вы угадали!';
    } else {
        document.getElementById('result').textContent = 'Вы не угадали! Попробуйте еще'
    }
}