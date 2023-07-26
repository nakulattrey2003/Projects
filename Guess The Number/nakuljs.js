let random = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#input");
const submit = document.querySelector("#submit");
const prevGuess = document.querySelector("#previous");
const remaining = document.querySelector("#remaining");
const lh = document.querySelector("#lowOrHi");
const startOver = document.querySelector("#start"); // new game start karane ke liye kaam me aega

const para = document.createElement('para');

let prevGuessArray = [];
let numOfGuess = 0;
let canPlay = true;

if(canPlay == true)
{
    submit.addEventListener('click',function(e){
        e.preventDefault(); // input ke saath program automatic kuch bhi kare use rokna hai or jo hum karaenge wohi karna hai
        const input = parseInt(userInput.value); 
        validate(input);
    });
}

function validate(input)
{
    if(isNaN(input)) alert("Please Enter a Valid Number");
    else if(input < 1) alert("Please Enter a Number Greater than 0");
    else if(input > 100) alert("Please Enter a Number Less than 101");
    else
    {
        prevGuessArray.push(input);
        if(numOfGuess > 10) 
        {
            clean(input);
            displayMessage(`😭Game Over. The Random Number was : ${random}, Better Luck Next Time🫂`);
            endGame();
        }
        else
        {
            clean(input);
            check(input);
        }
    }
}

function check(input)
{
    if(input === random)
    {
        displayMessage(`🥳Yayyyy!!! You Guessed It Right🥳`);
        endGame();
    }
    else if(input < random)
    {
        displayMessage(`Input Number is Lower`);
    }
    else if(input > random)
    {
        displayMessage(`Input Number is Higher`);
    }
}

function clean(input)
{
    userInput.value = ''; // user ke input number ko khali karna hai
    prevGuess.innerHTML = prevGuess.innerHTML + `${input}, `; // extra space le liye space chodi hai
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message)
{
    lh.innerHTML = `<h3>${message}</h3>`;
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    para.classList.add('button'); // ab ye paragraph jo umne upar set kia tha(line number 10) wo button ki tarah kaam karne lag jaega
    para.innerHTML = `<h2 id="nayaGame">Start New Game</h2>`; // ye abhi hawa me hai, isko aglw step me append karenge
    startOver.appendChild(para);
    canPlay = false;
    newGame();
}

function newGame()
{
    const nayaGameButton = document.querySelector("#nayaGame");
    nayaGameButton.addEventListener('click',function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuessArray = [];
        numOfGuess = 1;
        prevGuess.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(para);
        canPlay = true;
    });
}