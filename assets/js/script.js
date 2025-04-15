/**
 * Modal of instructions of how to play
 * Code from W3 schools https://www.w3schools.com/howto/howto_css_modals.asp
 */
// Get open, modal and close elements
let openInstruction = document.getElementById("openInstruction");
let instructions = document.getElementById("instructions");
let closeInstructions = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the instructions
openInstruction.addEventListener("click", function () {
    instructions.style.display = "block";
})

// When the user clicks on the close button (x), close the instructions
closeInstructions.addEventListener("click", function() {
    instructions.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close the instructions
window.addEventListener("click", function(e) {
    if (e.target === instructions) {
        instructions.style.display = "none";
    }
})

/**
 * Questions and Answers
 */
/**
 * Year One
 */
const year1Questions = [
    {question: "Who is NOT in Gryffindor?",
        answers: [
            {text: "Marcus Flint", correct: true},
            {text: "Parvati Patil", correct: false},
            {text: "Lavender Brown", correct: false},
            {text: "Dean Thomas", correct: false},
        ]
    },
    {question: "Which Hogwarts house does Luna Lovegood belong to?",
        answers: [
            {text: "Hufflepuff", correct: false},
            {text: "Gryffindor", correct: false},
            {text: "Ravenclaw", correct: true},
            {text: "Slytherin", correct: false},
        ]
    },
    {question: "What position does Harry play in Quidditch?",
        answers: [
            {text: "Keeper", correct: false},
            {text: "Seeker", correct: true},
            {text: "Beater", correct: false},
            {text: "Chaser", correct: false},
        ]
    },
    {question: "Who is the Slytherin ghost?",
        answers: [
            {text: "Cuthbert Binns", correct: false},
            {text: "The Grey Lady", correct: false},
            {text: "The Bloody Baron", correct: true},
            {text: "The Fat Friar", correct: false},
        ]
    },
    {question: "What’s the name of Hagrid’s half-brother?",
        answers: [
            {text: "Griphook", correct: false},
            {text: "Firenze", correct: false},
            {text: "Bogrod", correct: false},
            {text: "Grawp", correct: true},
        ]
    },
    {question: "Who betrays Lily and James Potter?",
        answers: [
            {text: "Padfoot", correct: false},
            {text: "Wormtail", correct: true},
            {text: "Professor Snape", correct: false},
            {text: "Moony", correct: false},
        ]
    },
    {question: "Who wrote 'A History of Magic'?",
        answers: [
            {text: "Charity Burbage", correct: false},
            {text: "Mafalda Hopkirk", correct: false},
            {text: "Mary Cattermole", correct: false},
            {text: "Bathilda Bagshot", correct: true},
        ]
    },
    {question: "What potion gives good luck to those who drink it?",
        answers: [
            {text: "Amortentia", correct: false},
            {text: "Polyjuice Potion", correct: false},
            {text: "Felix Felicis", correct: true},
            {text: "Veritaserum", correct: false},
        ]
    },
    {question: "Who is NOT in Slytherin?",
        answers: [
            {text: "Lavender Brown", correct: true},
            {text: "Pansy Parkinson", correct: false},
            {text: "Blaise Zabini", correct: false},
            {text: "Millicent Bulstrode", correct: false},
        ]
    },
    {question: "What is Ron's favorite Quidditch team?",
        answers: [
            {text: "Holyhead Harpies", correct: false},
            {text: "Chudley Cannons", correct: true},
            {text: "Ballycastle Bats", correct: false},
            {text: "Caerphilly Catapults", correct: false},
        ]
    },
];

/**
 * Year Two
 */
const year2Questions = [
    {question: "Who was Hermione’s date at the Yule Ball?",
        answers: [
            {text: "Ron Weasley", correct: false},
            {text: "Neville Longbottom", correct: false},
            {text: "Viktor Krum", correct: true},
            {text: "Harry Potter ", correct: false},
        ]
    },
    {question: "'Padfoot' is the nickname for which Harry Potter character?",
        answers: [
            {text: "Peter Pettigrew", correct: false},
            {text: "James Potter", correct: false},
            {text: "Remus Lupin", correct: false},
            {text: "Sirius Black", correct: true},
        ]
    },
    {question: "Actress Julie Walters portrays what character in the Harry Potter movies?",
        answers: [
            {text: "Delores Umbridge", correct: false},
            {text: "Petunia Dursley", correct: false},
            {text: "Molly Weasley", correct: true},
            {text: "Rita Skeeter", correct: false},
        ]
    },
    {question: "How many players are there on a Quidditch team?",
        answers: [
            {text: "7", correct: true},
            {text: "9", correct: false},
            {text: "5", correct: false},
            {text: "11", correct: false},
        ]
    },
    {question: "What is Hermione Granger's middle name?",
        answers: [
            {text: "Lily", correct: false},
            {text: "Jean", correct: true},
            {text: "Joan", correct: false},
            {text: "Helen", correct: false},
        ]
    },
    {question: "Who is the Defense Against the Dark Arts professor in 'Harry Potter and the Prisoner of Azkaban'?",
        answers: [
            {text: "Alastor Moody", correct: false},
            {text: "Remus Lupin", correct: true},
            {text: "Gilderoy Lockhart", correct: false},
            {text: "Delores Umbridge", correct: false},
        ]
    },
    {question: "How many presents does Dudley Dursley complain about not receiving on his birthday in 'Harry Potter and the Sorcerer's Stone'?",
        answers: [
            {text: "37", correct: true},
            {text: "36", correct: false},
            {text: "32", correct: false},
            {text: "39", correct: false},
        ]
    },
    {question: "What date is Harry Potter's birthday?",
        answers: [
            {text: "30 June", correct: false},
            {text: "31 October", correct: false},
            {text: "15 May", correct: false},
            {text: "31 July", correct: true},
        ]
    },
    {question: "In 'Harry Potter and the Half-Blood Prince', Ginny Weasley joins the Gryffindor Quidditch team playing what position?",
        answers: [
            {text: "Beater", correct: false},
            {text: "Chaser", correct: true},
            {text: "Seeker", correct: false},
            {text: "Keeper", correct: false},
        ]
    },
    {question: "What year was the final movie, “Harry Potter and the Deathly Hallows – Part 2” released? ",
        answers: [
            {text: "2012", correct: false},
            {text: "2009", correct: false},
            {text: "2011", correct: true},
            {text: "2010", correct: false},
        ]
    },
];

/**
 * Year Three
 */
const year3Questions = [
    {question: "What is James Potter's Marauder nickname?",
        answers: [
            {text: "Padfoot", correct: false},
            {text: "Prongs", correct: true},
            {text: "Wormtail", correct: false},
            {text: "Moony", correct: false},
        ]
    },
    {question: "What is the maiden name of sisters Lily Potter and Petunia Dursley?",
        answers: [
            {text: "Stevens", correct: false},
            {text: "Roberts", correct: false},
            {text: "Evans", correct: true},
            {text: "Morgan", correct: false},
        ]
    },
    {question: "Which Hogwarts house did the Sorting Hat consider putting Hermione in before deciding on Gryffindor?",
        answers: [
            {text: "Slytherin", correct: false},
            {text: "Hufflepuff", correct: false},
            {text: "Ravenclaw", correct: true},
            {text: "Gryffindor", correct: false},
        ]
    },
    {question: "How many staircases does Hogwarts have?",
        answers: [
            {text: "142", correct: true},
            {text: "143", correct: false},
            {text: "163", correct: false},
            {text: "152", correct: false},
        ]
    },
    {question: "What was Moaning Myrtle’s real name?",
        answers: [
            {text: "Myrtle Jenkins", correct: false},
            {text: "Myrtle Warren", correct: true},
            {text: "Myrtle Wilkinson", correct: false},
            {text: "Myrtle Green", correct: false},
        ]
    },
    {question: "Monkshood and wolfsbane are the same plant, also known as what?",
        answers: [
            {text: "Aconite", correct: true},
            {text: "Hemlock", correct: false},
            {text: "Digitalis Purpurea", correct: false},
            {text: "Atropa Belladonna", correct: false},
        ]
    },
    {question: "What is the name of the couple that attends dinner at the Dursley's when Dobby shows up to stop Harry from retuning to Hogwarts?",
        answers: [
            {text: "Mr. and Mrs. Butler", correct: false},
            {text: "Mr. and Mrs. Owen", correct: false},
            {text: "Mr. and Mrs. Jones", correct: false},
            {text: "Mr. and Mrs. Mason", correct: true},
        ]
    },
    {question: "Ginny Weasley bought a pet Pygmy Puff from her older brothers' joke shop. What did she name it?",
        answers: [
            {text: "Arthur", correct: false},
            {text: "Harry", correct: false},
            {text: "Dean", correct: false},
            {text: "Arnold", correct: true},
        ]
    },
    {question: "Who killed the Grey Lady?",
        answers: [
            {text: "Cuthbert Binns", correct: false},
            {text: "The Bloody Baron", correct: true},
            {text: "Sir Patrick Delaney-Podmore", correct: false},
            {text: "Sir Nicholas de Mimsy-Porpington", correct: false},
        ]
    },
    {question: "In the book version of 'Harry Potter and the Half-Blood Prince', who finds Harry on the Hogwarts Express after Malfoy breaks his nose and leaves him under the Invisibility Cloak?",
        answers: [
            {text: "Serius Black", correct: false},
            {text: "Nymphadora Tonks", correct: true},
            {text: "Pomona Sprout", correct: false},
            {text: "Albus Dumbledore", correct: false},
        ]
    },
];

/**
 * Wait for the DOM to finish loading before running the game
 * Inspiration from the Love Maths project and One quiz to rule them all
 * Add event to select year level
 * Listen for click on which year - only go to other years after completing previous year
 */
// Code to interact with the DOM
const levels = document.getElementById("levels");
const years = document.getElementById("years");
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextQuestionBtn = document.getElementById("next-question");
const endGame = document.getElementById("end-game");

let yearQuestions = [];
let currentYear = 1;
const totalYears = 3;
let currentQuestionIndex = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("year-selector-button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            const gameType = this.getAttribute("data-type");

            if (gameType === "yearOne") {
                currentYear = 1;
                yearQuestions = year1Questions;
            } else if (gameType === "yearTwo") {
                currentYear = 2;
                yearQuestions = year2Questions;
            } else if (gameType === "yearThree") {
                currentYear = 3;
                yearQuestions = year3Questions;
            }
            startGame(currentYear);
        });
    }
});

function isElegibleForNextYear() {
    return (correctAnswer >= 8 && currentYear < 3)
};

/**
* Enter level / year two / year three
* Repeat inserting questions and answers
* Repeat if all answers have been answered
 */
function startGame(currentYear) {
    // Reset game parameters to start again.    
    yearQuestions = [];
    correctAnswer = 0;
    incorrectAnswer = 0;
    currentQuestionIndex = 0;
    endGame.style.display = "none";
    resetQuiz();
    
    if (currentYear === 1) {
        yearQuestions = year1Questions;
    } else if (currentYear === 2) {
        yearQuestions = year2Questions;
        document.getElementById("correct-answers").innerText = 0;
        document.getElementById("incorrect-answers").innerText = 0;
    } else if (currentYear === 3) {
        yearQuestions = year3Questions;
        document.getElementById("correct-answers").innerText = 0;
        document.getElementById("incorrect-answers").innerText = 0;
    }
    
    showQuestions();
};    

/**
 * Remove the year levels section
 * Display current question and 4 answers from correct year
 * Listen for click on the answer selected
 *
 */

function showQuestions() {    
    instructions.style.display = "none";
    levels.style.display = "none";       
    quiz.style.display = "flex";
    resetQuiz();

    let currentQuestion = yearQuestions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }            
        button.addEventListener("click", selectAnswer);
    }); 
}

/**
 * When next question button is clicked the quiz buttons are reset
 */
function resetQuiz() {
    nextQuestionBtn.style.visibility = "hidden";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Check if the answer is correct re love maths
 * If so increase correct answers score
 * Else if not correct answer
 * Increase the incorrect answers score
 * Love maths
 */
function selectAnswer(event) {
    const selectedAnswerBtn = event.target;
    const isCorrect = selectedAnswerBtn.dataset.correct === "true";
    const isIncorrect = selectedAnswerBtn.dataset.incorrect === "false";

    if (isCorrect) {
        selectedAnswerBtn.classList.add("correct");
        increaseCorrectAnswer();        
    } else {     
        selectedAnswerBtn.classList.add("incorrect");  
        increaseIncorrectAnswer();
    }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;            
        });             
        nextQuestionBtn.style.visibility = "visible";
}

/**
 * Click next question button
 * if another question then display
 * else restart questions
 * or go to next level
 */
nextQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex < yearQuestions.length) {
        handleNextQuestionBtn();
    } else {
        showQuestions();
    }
});

function handleNextQuestionBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < yearQuestions.length) {
        showQuestions();        
    } else {
        endQuiz();
    }
}

/**
 * Increase correct score based on answer
 * Guidance from Love Maths and mentor
 */
function increaseCorrectAnswer() {
    correctAnswer += 1;
    document.getElementById("correct-answers").innerText = correctAnswer;
}

/**
 * Increasing the incorrect score
 */
function increaseIncorrectAnswer() {
    incorrectAnswer += 1;
    document.getElementById("incorrect-answers").innerText = incorrectAnswer;
}

/**
 * If all questions have been asked and answered for the year
 * If correct answers total is greater than or equal to 8
 * Display message congratulations and move on to next level / year
 * Else if less than 8 display message sorry please try again
 * Go to start of level / year one - Do you want to start again
 * Else repeat year three if not got enough correct
 * If all levels / years complete
 * Message "Congratulations mischief managed"
 * End game
 */
function endQuiz() {
    resetQuiz();
    quiz.style.display = "none";
    endGame.style.display = "block";
    let finalScore = document.getElementById("final-score");            
    let nextBtn = document.getElementById("next"); 

    if (correctAnswer < 8) {
        finalScore.innerHTML = `Sorry. You scored ${correctAnswer} out of 10.
        Please try again`;
        nextBtn.innerHTML = "Try Again";
        nextBtn.addEventListener("click", function() {
            startGame(currentYear);
    }); 
    } else if (correctAnswer >= 8 && currentYear < totalYears) {
        finalScore.innerHTML = `Congratulations! You scored ${correctAnswer} out of 10.`;
        nextBtn.innerHTML = "Next Level";        
        currentYear += 1;     
        nextBtn.addEventListener("click", function() {
            startGame(currentYear);
        }); 
    } else if (currentYear == 3 && correctAnswer >= 8) {
            finalScore.innerHTML = "Congratulations! Mischief Managed!";
            nextBtn.innerHTML = "Replay";
            nextBtn.addEventListener("click", function() {
                levels.style.display = "flex";
                quiz.style.display = "none";
                instructions.style.display = "none";
            }); 
    }
};
