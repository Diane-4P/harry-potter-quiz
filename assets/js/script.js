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
            {text: "Harry Potter, ", correct: false},
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
    {question: "Which Hogwarts' house does Luna Lovegood belong to?",
        answers: [
            {text: "Hufflepuff", correct: false},
            {text: "Slytherin", correct: false},
            {text: "Ravenclaw", correct: true},
            {text: "Gryffindor", correct: false},
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
 * Inspiration from the Love Maths project
 * Add event to select level / Choose year
 * Listen for click on which year
 * Remove year selection level
 * Enter/show that year and show questions
 */


/**
 * Insert question and 4 answers from correct year
 * Listen for click on the answer selected
 * Check if the answer is correct
 * If so increase correct answers score
 * Else if not correct answer
 * Increase the incorrect answers score
 * 
 */

/** else if?
 * Insert next question and 4 answers from the year
 * Repeat above for listening to click on answer
 * If all questions have been asked and answered for the year
 * If correct answers total is greater than or equal to 8
 * Display message congratulations and move on to next level / year
 * Else if less than 8 display message sorry please try again
 * Go to start of level / year one - Do you want to start again
 */

/**
 * Enter level / year two
 * Repeat inserting questions and answers
 * Repeat if all answers have been answered
 * Go to level / year three
 * Else repeat year two if not got enough correct
 */

/**
 * Enter level / year three
 * Repeat inserting questions and answers
 * Repeat if all answers have been answered
 * Else repeat year three if not got enough correct
 * If all levels / years complete
 * Message "Congratulations mischief managed"
 * End game
 */

/**
 * Increase correct score based on answer
 * Go to next question
 */

/**
 * Increasing the incorrect score
 * Go to next question
 */